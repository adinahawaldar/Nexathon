import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Timer, Sparkles, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';

const RubiksCountdownSection = ({ onRegisterClick }) => {
  const mountRef = useRef(null);

  // Target: October 7, 2026 23:59:59
  const targetDate = new Date('2026-10-07T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isSolved, setIsSolved] = useState(false);

  // Countdown timer calculation
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Three.js Interactive 3D Rubik's Cube
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(4.5, 3.8, 5.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff7700, 2.5, 20);
    pointLight2.position.set(-5, -3, -5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xf472b6, 2, 20);
    pointLight3.position.set(0, 6, -3);
    scene.add(pointLight3);

    // Main rotating group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Cube dimensions
    const CUBE_SIZE = 0.95;
    const SPACING = 1.02;
    const cubies = [];

    // Face colors: Right(Cyan), Left(Pink), Top(Amber), Bottom(Blue), Front(Orange), Back(White)
    const faceColors = [
      0x00f0ff, // Right (+X)
      0xf472b6, // Left (-X)
      0xfbbf24, // Top (+Y)
      0x3b82f6, // Bottom (-Y)
      0xff6b00, // Front (+Z)
      0xffffff  // Back (-Z)
    ];

    const innerCoreColor = 0x050814;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const materials = [
            new THREE.MeshStandardMaterial({
              color: x === 1 ? faceColors[0] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: x === 1 ? 0x003344 : 0x000000
            }),
            new THREE.MeshStandardMaterial({
              color: x === -1 ? faceColors[1] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: x === -1 ? 0x330022 : 0x000000
            }),
            new THREE.MeshStandardMaterial({
              color: y === 1 ? faceColors[2] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: y === 1 ? 0x332200 : 0x000000
            }),
            new THREE.MeshStandardMaterial({
              color: y === -1 ? faceColors[3] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: y === -1 ? 0x001144 : 0x000000
            }),
            new THREE.MeshStandardMaterial({
              color: z === 1 ? faceColors[4] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: z === 1 ? 0x441500 : 0x000000
            }),
            new THREE.MeshStandardMaterial({
              color: z === -1 ? faceColors[5] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.85,
              emissive: z === -1 ? 0x222222 : 0x000000
            })
          ];

          const geom = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
          const cubie = new THREE.Mesh(geom, materials);
          cubie.position.set(x * SPACING, y * SPACING, z * SPACING);
          cubie.userData = {
            initialPos: new THREE.Vector3(x * SPACING, y * SPACING, z * SPACING),
            grid: { x, y, z }
          };

          mainGroup.add(cubie);
          cubies.push(cubie);
        }
      }
    }

    // Interactive mouse drag
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      mainGroup.rotation.y += deltaX * 0.008;
      mainGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation: Scrambling & Solving Cycle
    let animClock = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      animClock += 0.016;

      // Gentle global rotation
      if (!isDragging) {
        mainGroup.rotation.y += 0.008;
        mainGroup.rotation.x = Math.sin(animClock * 0.5) * 0.2 + 0.2;
      }

      // Cycle: 0 to 6s = twist/scramble phase, 6s to 12s = solve sequence, 12s to 16s = locked solved celebration
      const cycleTime = animClock % 16;

      if (cycleTime < 6) {
        // Scrambling / unmade twisting phase
        const layerIdx = Math.floor((animClock * 1.5) % 3) - 1;
        cubies.forEach(cubie => {
          if (cubie.userData.grid.y === layerIdx) {
            cubie.rotation.y += 0.04;
          }
        });
        setIsSolved(false);
      } else if (cycleTime < 11) {
        // Solving phase: smoothly lerp back to aligned identity rotations
        cubies.forEach(cubie => {
          cubie.rotation.y = THREE.MathUtils.lerp(cubie.rotation.y, 0, 0.08);
          cubie.rotation.x = THREE.MathUtils.lerp(cubie.rotation.x, 0, 0.08);
          cubie.rotation.z = THREE.MathUtils.lerp(cubie.rotation.z, 0, 0.08);
        });
        setIsSolved(false);
      } else {
        // Fully Solved State!
        cubies.forEach(cubie => {
          cubie.rotation.set(0, 0, 0);
        });
        setIsSolved(true);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <section id="countdown" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center scroll-mt-20">
      {/* Station Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4 backdrop-blur-md">
        <Timer className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="tracking-wider uppercase">REGISTRATION COUNTDOWN • CLOSING OCTOBER 7TH</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-center tracking-tight mb-4">
        solve the challenge. <br />
        <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
          registrations end on 7th october
        </span>
      </h2>

      <p className="text-zinc-300 text-sm sm:text-base max-w-2xl text-center leading-relaxed mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Every great algorithm starts with unstructured chaos before finding optimal resolution. 
        Watch the cube solve in real-time as the clock counts down to the national submission deadline.
      </p>

      {/* Main Grid: 3D Rubik's Cube on Left, Live Countdown on Right */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/45 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        {/* Left Column: Interactive 3D Rubik's Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
          {/* Status Chip */}
          <div className="absolute top-2 left-2 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full ${isSolved ? 'bg-emerald-400 animate-ping' : 'bg-orange-400 animate-pulse'}`} />
            <span className={isSolved ? 'text-emerald-300 font-bold' : 'text-orange-300'}>
              {isSolved ? 'STATUS: SOLVED & ALIGNED' : 'STATUS: ALGORITHM OPTIMIZING...'}
            </span>
          </div>

          <div className="absolute bottom-2 text-zinc-500 text-[11px] font-mono tracking-wider pointer-events-none">
            DRAG TO ROTATE 3D CUBE IN REALTIME
          </div>

          {/* Canvas Mount */}
          <div ref={mountRef} className="w-full h-[380px] sm:h-[440px] cursor-grab active:cursor-grabbing" />
        </div>

        {/* Right Column: Live Countdown Digits & Call to Action */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8">
          
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              OFFICIAL SUBMISSION COUNTDOWN
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              October 7, 2026 • 23:59 IST
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              All abstract submissions, team confirmations, and track selections must be finalized prior to lock date.
            </p>
          </div>

          {/* 4 Glowing Digital Counters */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
            {/* Days */}
            <div className="flex flex-col items-center p-3.5 sm:p-5 rounded-2xl bg-black/60 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <span className="text-2xl sm:text-4xl font-extrabold font-mono text-cyan-400">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center p-3.5 sm:p-5 rounded-2xl bg-black/60 border border-orange-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(255,119,0,0.15)]">
              <span className="text-2xl sm:text-4xl font-extrabold font-mono text-orange-400">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">
                HOURS
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center p-3.5 sm:p-5 rounded-2xl bg-black/60 border border-pink-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(244,114,182,0.15)]">
              <span className="text-2xl sm:text-4xl font-extrabold font-mono text-pink-400">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">
                MINUTES
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center p-3.5 sm:p-5 rounded-2xl bg-black/60 border border-amber-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <span className="text-2xl sm:text-4xl font-extrabold font-mono text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">
                SECONDS
              </span>
            </div>
          </div>

          {/* Quick Perks Checklist */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Direct entry to both Project and Paper presentation tracks</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>Full eligibility for the ₹20,000+ national prize pool</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
              <span>Certificate of national participation for all team members</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto self-start py-3.5 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center gap-3 text-sm font-bold shadow-[0_0_30px_rgba(255,119,0,0.55),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <span>CONFIRM YOUR REGISTRATION BEFORE OCT 7TH</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default RubiksCountdownSection;
