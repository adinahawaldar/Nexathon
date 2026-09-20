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
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.3, 7.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Clean, even studio lighting with ZERO harsh glare or blown-out point light hotspots
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, -3, 5);
    scene.add(fillLight);

    const backRim = new THREE.DirectionalLight(0xffffff, 0.6);
    backRim.position.set(0, 6, -6);
    scene.add(backRim);

    // Master rotating group
    const mainGroup = new THREE.Group();
    mainGroup.rotation.x = 0.08;
    mainGroup.rotation.y = 0;
    scene.add(mainGroup);

    // -------------------------------------------------------------
    // CREATE FRONT FACE TEXTURE TILES ("REGISTRATION CLOSING ON 3RD OCTOBER")
    // -------------------------------------------------------------
    const masterCanvas = document.createElement('canvas');
    masterCanvas.width = 1024;
    masterCanvas.height = 1024;
    const mCtx = masterCanvas.getContext('2d');

    // Clean dark matte background
    mCtx.fillStyle = '#081022';
    mCtx.fillRect(0, 0, 1024, 1024);

    // Subtle dark grid
    mCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    mCtx.lineWidth = 2;
    for (let i = 0; i <= 1024; i += 64) {
      mCtx.beginPath();
      mCtx.moveTo(i, 0); mCtx.lineTo(i, 1024);
      mCtx.stroke();
      mCtx.beginPath();
      mCtx.moveTo(0, i); mCtx.lineTo(1024, i);
      mCtx.stroke();
    }

    // Individual tile sticker insets
    const tileSize = 1024 / 3;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        // Tile sticker background
        mCtx.fillStyle = '#0f1f3d';
        mCtx.fillRect(c * tileSize + 14, r * tileSize + 14, tileSize - 28, tileSize - 28);

        // Crisp border
        mCtx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        mCtx.lineWidth = 4;
        mCtx.strokeRect(c * tileSize + 14, r * tileSize + 14, tileSize - 28, tileSize - 28);
      }
    }

    mCtx.textAlign = 'center';
    mCtx.textBaseline = 'middle';

    // ROW 1 (Top): "REGISTRATION" - Sharp white font
    mCtx.font = '900 74px "Oxanium", "Orbitron", sans-serif';
    mCtx.fillStyle = '#ffffff';
    mCtx.fillText('REGISTRATION', 512, tileSize * 0.5);

    // ROW 2 (Middle): "CLOSING ON" - Warm amber font
    mCtx.font = '900 70px "Oxanium", "Orbitron", sans-serif';
    mCtx.fillStyle = '#f59e0b';
    mCtx.fillText('CLOSING ON', 512, tileSize * 1.5);

    // ROW 3 (Bottom): "3RD OCTOBER" - Crisp cyan font
    mCtx.font = '900 80px "Oxanium", "Orbitron", sans-serif';
    mCtx.fillStyle = '#38bdf8';
    mCtx.fillText('3RD OCTOBER', 512, tileSize * 2.5);

    // Sliced textures map
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
    // BUILD 3X3 CUBIES WITH MATTE MATERIALS (NO HOTSPOTS)
    // -------------------------------------------------------------
    const CUBE_SIZE = 0.94;
    const SPACING = 1.04;
    const cubies = [];

    // Clean matte Rubik's face colors
    const faceColors = [
      0x0284c7, // Right (+X) Cyan Blue
      0xe11d48, // Left (-X) Rose
      0xd97706, // Top (+Y) Amber
      0x2563eb, // Bottom (-Y) Royal Blue
      0xe2e8f0, // Front (+Z fallback)
      0xf1f5f9  // Back (-Z) White
    ];

    // Dark slate body for cubie inner frame
    const innerCoreColor = 0x0f172a;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          let frontMaterial;
          if (z === 1) {
            const col = x + 1;
            const row = 1 - y;
            const tex = frontTextures[`${col}_${row}`];
            frontMaterial = new THREE.MeshBasicMaterial({
              map: tex
            });
          } else {
            frontMaterial = new THREE.MeshStandardMaterial({
              color: innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            });
          }

          const materials = [
            // Right (+X)
            new THREE.MeshStandardMaterial({
              color: x === 1 ? faceColors[0] : innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            }),
            // Left (-X)
            new THREE.MeshStandardMaterial({
              color: x === -1 ? faceColors[1] : innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            }),
            // Top (+Y)
            new THREE.MeshStandardMaterial({
              color: y === 1 ? faceColors[2] : innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            }),
            // Bottom (-Y)
            new THREE.MeshStandardMaterial({
              color: y === -1 ? faceColors[3] : innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            }),
            // Front (+Z)
            frontMaterial,
            // Back (-Z)
            new THREE.MeshStandardMaterial({
              color: z === -1 ? faceColors[5] : innerCoreColor,
              roughness: 0.8,
              metalness: 0.0
            })
          ];

          const geom = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
          const mesh = new THREE.Mesh(geom, materials);
          mesh.position.set(x * SPACING, y * SPACING, z * SPACING);
          mainGroup.add(mesh);
          cubies.push(mesh);
        }
      }
    }

    // -------------------------------------------------------------
    // INTERACTION: MOUSE DRAG & TOUCH
    // -------------------------------------------------------------
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velX = 0;
    let velY = 0;

    const domElement = renderer.domElement;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      velX = deltaX * 0.005;
      velY = deltaY * 0.005;

      mainGroup.rotation.y += velX;
      mainGroup.rotation.x += velY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      mainGroup.rotation.y += deltaX * 0.005;
      mainGroup.rotation.x += deltaY * 0.005;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // -------------------------------------------------------------
    // SCROLL-DRIVEN ROTATION & AUTO-SOLVING ON SCROLL UP/DOWN
    // -------------------------------------------------------------
    let lastScrollY = window.scrollY;
    let scrollVelocityY = 0;
    let scrollVelocityX = 0;
    let isActivelyScrolling = false;
    let scrollTimer = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Each scroll movement imparts rotational impulse (both Y rotation and dynamic 3D tumble)
      scrollVelocityY += deltaY * 0.006;
      scrollVelocityX += Math.abs(deltaY) * 0.0015;

      isActivelyScrolling = true;
      setIsSolved(false);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isActivelyScrolling = false;
      }, 160);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // -------------------------------------------------------------
    // RENDER LOOP
    // -------------------------------------------------------------
    let animationFrameId;
    let clock = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      if (!isDragging) {
        if (isActivelyScrolling || Math.abs(scrollVelocityY) > 0.001) {
          // Apply scroll-driven rotation momentum
          mainGroup.rotation.y += scrollVelocityY;
          mainGroup.rotation.x += scrollVelocityX;

          // Smooth friction damping
          scrollVelocityY *= 0.88;
          scrollVelocityX *= 0.88;
        } else {
          // AUTO-SOLVE: When scrolling stops, smoothly lerp to nearest front-facing solved angle!
          const targetY = Math.round(mainGroup.rotation.y / (Math.PI * 2)) * (Math.PI * 2);
          mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, targetY, 0.08);
          mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, 0.08, 0.08);
          mainGroup.rotation.z = THREE.MathUtils.lerp(mainGroup.rotation.z, 0, 0.08);

          // Mouse drag inertia damping if applied
          velX *= 0.92;
          velY *= 0.92;
          mainGroup.rotation.y += velX;
          mainGroup.rotation.x += velY;

          // Gentle floating breathing while settled
          mainGroup.position.y = Math.sin(clock * 1.5) * 0.06;

          if (Math.abs(mainGroup.rotation.y - targetY) < 0.01) {
            setIsSolved(true);
          }
        }
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
      clearTimeout(scrollTimer);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
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
      {/* 3D Rubik's Cube with scroll-rotation and auto-solving */}
      <div 
        ref={mountRef} 
        className="w-full h-[500px] sm:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      />
    </section>
  );
};

export default RubiksCountdownSection;
