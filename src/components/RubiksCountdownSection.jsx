import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const RubiksCountdownSection = () => {
  const mountRef = useRef(null);
  const [isSolved, setIsSolved] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 7.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Studio Lighting for sleek cyber reflections
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 8);
    scene.add(keyLight);

    const cyanGlow = new THREE.PointLight(0x00f0ff, 3.5, 25);
    cyanGlow.position.set(-6, 3, 5);
    scene.add(cyanGlow);

    const orangeGlow = new THREE.PointLight(0xff7700, 3, 25);
    orangeGlow.position.set(6, -3, 5);
    scene.add(orangeGlow);

    const backRim = new THREE.PointLight(0x38bdf8, 2.5, 20);
    backRim.position.set(0, 5, -6);
    scene.add(backRim);

    // Master rotating group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // -------------------------------------------------------------
    // CREATE FRONT FACE TEXTURE TILES ("REGISTRATION CLOSING ON 2ND OCTOBER")
    // -------------------------------------------------------------
    // Master 1024x1024 canvas that renders the message with neon cyber styling
    const masterCanvas = document.createElement('canvas');
    masterCanvas.width = 1024;
    masterCanvas.height = 1024;
    const mCtx = masterCanvas.getContext('2d');

    // Gradient cyber background
    const bgGrad = mCtx.createLinearGradient(0, 0, 1024, 1024);
    bgGrad.addColorStop(0, '#04091a');
    bgGrad.addColorStop(0.5, '#07132e');
    bgGrad.addColorStop(1, '#020512');
    mCtx.fillStyle = bgGrad;
    mCtx.fillRect(0, 0, 1024, 1024);

    // Micro grid lines
    mCtx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
    mCtx.lineWidth = 2;
    for (let i = 0; i <= 1024; i += 64) {
      mCtx.beginPath();
      mCtx.moveTo(i, 0); mCtx.lineTo(i, 1024);
      mCtx.stroke();
      mCtx.beginPath();
      mCtx.moveTo(0, i); mCtx.lineTo(1024, i);
      mCtx.stroke();
    }

    // Individual tile border insets to simulate physical Rubik's stickers
    const tileSize = 1024 / 3;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        mCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        mCtx.fillRect(c * tileSize + 10, r * tileSize + 10, tileSize - 20, tileSize - 20);

        mCtx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
        mCtx.lineWidth = 4;
        mCtx.strokeRect(c * tileSize + 10, r * tileSize + 10, tileSize - 20, tileSize - 20);

        // Corner accents on each tile
        mCtx.fillStyle = '#00f0ff';
        mCtx.fillRect(c * tileSize + 10, r * tileSize + 10, 12, 4);
        mCtx.fillRect(c * tileSize + 10, r * tileSize + 10, 4, 12);
      }
    }

    mCtx.textAlign = 'center';
    mCtx.textBaseline = 'middle';

    // ROW 1 (Top): "REGISTRATION"
    mCtx.save();
    mCtx.font = '900 78px "Oxanium", "Orbitron", "Space Grotesk", sans-serif';
    mCtx.shadowColor = 'rgba(0, 240, 255, 0.9)';
    mCtx.shadowBlur = 30;
    mCtx.fillStyle = '#ffffff';
    mCtx.fillText('REGISTRATION', 512, tileSize * 0.5);
    mCtx.restore();

    // ROW 2 (Middle): "CLOSING ON"
    mCtx.save();
    mCtx.font = '900 74px "Oxanium", "Orbitron", "Space Grotesk", sans-serif';
    mCtx.shadowColor = 'rgba(255, 136, 0, 0.95)';
    mCtx.shadowBlur = 30;
    mCtx.fillStyle = '#ffaa33';
    mCtx.fillText('CLOSING ON', 512, tileSize * 1.5);
    mCtx.restore();

    // ROW 3 (Bottom): "2ND OCTOBER"
    mCtx.save();
    mCtx.font = '900 86px "Oxanium", "Orbitron", "Space Grotesk", sans-serif';
    mCtx.shadowColor = 'rgba(0, 240, 255, 1)';
    mCtx.shadowBlur = 35;
    mCtx.fillStyle = '#00f0ff';
    mCtx.fillText('2ND OCTOBER', 512, tileSize * 2.5);
    mCtx.restore();

    // Sliced textures map: key `${col}_${row}`
    const frontTextures = {};
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const tileCanvas = document.createElement('canvas');
        tileCanvas.width = 512;
        tileCanvas.height = 512;
        const tCtx = tileCanvas.getContext('2d');
        tCtx.drawImage(
          masterCanvas,
          c * tileSize,
          r * tileSize,
          tileSize,
          tileSize,
          0,
          0,
          512,
          512
        );
        const tex = new THREE.CanvasTexture(tileCanvas);
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        frontTextures[`${c}_${r}`] = tex;
      }
    }

    // -------------------------------------------------------------
    // BUILD 3X3 CUBIES
    // -------------------------------------------------------------
    const CUBE_SIZE = 0.96;
    const SPACING = 1.04;
    const cubies = [];

    // Face standard colors: Right(Cyan), Left(Pink), Top(Amber), Bottom(Blue), Front(Textured), Back(White)
    const faceColors = [
      0x00f0ff, // Right (+X)
      0xf472b6, // Left (-X)
      0xfbbf24, // Top (+Y)
      0x3b82f6, // Bottom (-Y)
      0xff7700, // Front (+Z fallback)
      0xe2e8f0  // Back (-Z)
    ];

    const innerCoreColor = 0x070c1a;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Determine front tile texture if z === 1
          let frontMaterial;
          if (z === 1) {
            const col = x + 1; // 0, 1, 2
            const row = 1 - y; // y=1 -> row 0, y=0 -> row 1, y=-1 -> row 2
            const tex = frontTextures[`${col}_${row}`];
            frontMaterial = new THREE.MeshStandardMaterial({
              map: tex,
              roughness: 0.15,
              metalness: 0.6,
              emissive: 0x002233,
              emissiveMap: tex
            });
          } else {
            frontMaterial = new THREE.MeshStandardMaterial({
              color: innerCoreColor,
              roughness: 0.2,
              metalness: 0.8
            });
          }

          const materials = [
            // Right (+X)
            new THREE.MeshStandardMaterial({
              color: x === 1 ? faceColors[0] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.7,
              emissive: x === 1 ? 0x003344 : 0x000000
            }),
            // Left (-X)
            new THREE.MeshStandardMaterial({
              color: x === -1 ? faceColors[1] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.7,
              emissive: x === -1 ? 0x330022 : 0x000000
            }),
            // Top (+Y)
            new THREE.MeshStandardMaterial({
              color: y === 1 ? faceColors[2] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.7,
              emissive: y === 1 ? 0x332200 : 0x000000
            }),
            // Bottom (-Y)
            new THREE.MeshStandardMaterial({
              color: y === -1 ? faceColors[3] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.7,
              emissive: y === -1 ? 0x001144 : 0x000000
            }),
            // Front (+Z)
            frontMaterial,
            // Back (-Z)
            new THREE.MeshStandardMaterial({
              color: z === -1 ? faceColors[5] : innerCoreColor,
              roughness: 0.15,
              metalness: 0.7,
              emissive: z === -1 ? 0x111111 : 0x000000
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

    // Set initial viewing angle so the front face with text is facing the user with slight 3D perspective
    mainGroup.rotation.set(0.08, 0, 0);

    // -------------------------------------------------------------
    // CLEAN 2-3 ROTATION SOLVE ON SCROLL (NO MESSY SLICES)
    // -------------------------------------------------------------
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

    // Smooth Spin State
    let isSpinning = false;
    let spinStartTime = 0;
    let spinStartAngle = 0;
    let spinTargetAngle = 0;
    const SPIN_DURATION = 2300; // ~2.3 seconds

    const triggerSpin = (direction = 1) => {
      if (isDragging) return;
      spinStartTime = performance.now();
      spinStartAngle = mainGroup.rotation.y;
      // Rotate 2 full rotations (4 * PI) in the direction of the scroll
      const rotations = 2;
      const targetDelta = direction * rotations * Math.PI * 2;
      spinTargetAngle = Math.round((spinStartAngle + targetDelta) / (Math.PI * 2)) * (Math.PI * 2);
      isSpinning = true;
      setIsSolved(false);
    };

    // Trigger on scroll up or down
    let lastScrollY = window.scrollY;
    let scrollThrottleTimeout = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (Math.abs(delta) < 5) return;

      if (!isSpinning) {
        const dir = delta >= 0 ? 1 : -1;
        triggerSpin(dir);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial demonstration spin on page load
    setTimeout(() => {
      triggerSpin(1);
    }, 500);

    // Animation Loop
    let clock = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      if (isSpinning && !isDragging) {
        const elapsed = performance.now() - spinStartTime;
        const progress = Math.min(elapsed / SPIN_DURATION, 1);

        // Smooth cubic ease-out deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        mainGroup.rotation.y = spinStartAngle + (spinTargetAngle - spinStartAngle) * easeOut;

        // Subtle dynamic 3D tilt during spin that settles to 0.08 at the finish
        const tiltWobble = Math.sin(progress * Math.PI) * 0.22;
        mainGroup.rotation.x = 0.08 + tiltWobble;
        mainGroup.rotation.z = Math.sin(progress * Math.PI * 2) * 0.05 * (1 - progress);

        if (progress >= 1) {
          mainGroup.rotation.y = spinTargetAngle;
          mainGroup.rotation.x = 0.08;
          mainGroup.rotation.z = 0;
          isSpinning = false;
          setIsSolved(true);
        }
      } else if (!isDragging) {
        // Gentle ambient floating breathing while solved
        mainGroup.position.y = Math.sin(clock * 1.5) * 0.08;
        // Keep front face squarely locked
        const snappedY = Math.round(mainGroup.rotation.y / (Math.PI * 2)) * (Math.PI * 2);
        mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, snappedY, 0.08);
        mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, 0.08, 0.08);
        mainGroup.rotation.z = THREE.MathUtils.lerp(mainGroup.rotation.z, 0, 0.08);
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
      window.removeEventListener('scroll', handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <section 
      id="countdown" 
      className="relative z-10 w-full max-w-5xl mx-auto min-h-[540px] sm:min-h-[620px] flex flex-col items-center justify-center py-8 px-4 scroll-mt-10 overflow-visible"
    >
      {/* 3D Rubik's Cube floating seamlessly in 3D space */}

      {/* 3D Rubik's Cube floating in the middle - NO boxes, NO extra cards */}
      <div 
        ref={mountRef} 
        className="w-full h-[500px] sm:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      />
    </section>
  );
};

export default RubiksCountdownSection;
