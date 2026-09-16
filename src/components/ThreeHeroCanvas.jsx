import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroCanvas = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x02040a);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Main Group for floating objects
    const blobGroup = new THREE.Group();
    scene.add(blobGroup);

    // =========================================================
    // HOLLOW RIM-GLOW FRESNEL SHADER (NO FILL INSIDE + BLENDED RIM BORDER)
    // =========================================================
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      uniform float uTime;
      uniform float uSpeed;
      uniform float uNoiseFreq;
      uniform float uNoiseAmp;

      void main() {
        // Normal in View Space
        vNormal = normalize(normalMatrix * normal);
        
        vec3 pos = position;
        
        // Organic fluid wave noise morphing
        float wave = sin(pos.x * uNoiseFreq + uTime * uSpeed) * 
                     cos(pos.y * uNoiseFreq + uTime * uSpeed * 1.3) * 
                     sin(pos.z * uNoiseFreq + uTime * uSpeed * 0.9);
        
        pos += normal * wave * uNoiseAmp;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;

        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      uniform vec3 uColorTop;
      uniform vec3 uColorBottom;
      uniform float uFresnelPower;
      uniform float uOpacity;

      void main() {
        vec3 normal = normalize(vNormal);

        // View space camera alignment: center is 1.0, edge border is 0.0
        float NdotV = abs(normal.z);
        
        // Rim calculation: 0.0 at center (HOLLOW), 1.0 at outer rim border
        float rim = 1.0 - NdotV;
        rim = pow(rim, uFresnelPower);

        // Gradient blend between Top color (Fiery Orange) and Bottom color (Deep Blue/Cyan)
        float mixFactor = smoothstep(-0.8, 0.8, normal.y);
        vec3 rimColor = mix(uColorBottom, uColorTop, mixFactor);

        // Edge glow intensity
        vec3 finalColor = rimColor * (rim * 3.5);
        float alpha = smoothstep(0.02, 0.35, rim) * uOpacity;

        // Strict cutoff so interior is 100% hollow transparent black
        if (rim < 0.03) {
          discard;
        }

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const createHollowRimMaterial = (colorTopHex, colorBottomHex, power = 2.2, opacity = 0.95) => {
      return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: 0.8 },
          uNoiseFreq: { value: 1.2 },
          uNoiseAmp: { value: 0.28 },
          uColorTop: { value: new THREE.Color(colorTopHex) },
          uColorBottom: { value: new THREE.Color(colorBottomHex) },
          uFresnelPower: { value: power },
          uOpacity: { value: opacity }
        },
        transparent: true,
        side: THREE.FrontSide, // FrontSide ensures interior is completely empty/hollow
        blending: THREE.AdditiveBlending
      });
    };

    // =========================================================
    // 1. LARGE BOTTOM MAIN HOLLOW BLOB (Fiery Orange Top Rim + Deep Blue Bottom Rim)
    // =========================================================
    const blob1Geom = new THREE.IcosahedronGeometry(2.8, 5);
    const blob1Mat = createHollowRimMaterial(0xff5500, 0x1d4ed8, 2.0, 0.95);
    const blob1 = new THREE.Mesh(blob1Geom, blob1Mat);
    blob1.position.set(0.1, -1.6, 0);
    blobGroup.add(blob1);

    // =========================================================
    // 2. TOP LEFT HOLLOW BLOB (Fiery Red/Orange Outer Rim Glow)
    // =========================================================
    const blob2Geom = new THREE.IcosahedronGeometry(2.1, 5);
    const blob2Mat = createHollowRimMaterial(0xff3300, 0x3b82f6, 2.2, 0.9);
    const blob2 = new THREE.Mesh(blob2Geom, blob2Mat);
    blob2.position.set(-2.8, 2.5, -1.2);
    blobGroup.add(blob2);

    // =========================================================
    // 3. TOP RIGHT HOLLOW BLOB (Cyan/Cobalt Blue Outer Rim Glow)
    // =========================================================
    const blob3Geom = new THREE.IcosahedronGeometry(1.9, 5);
    const blob3Mat = createHollowRimMaterial(0x00f0ff, 0x1e3a8a, 2.3, 0.85);
    const blob3 = new THREE.Mesh(blob3Geom, blob3Mat);
    blob3.position.set(2.9, 2.3, -1.5);
    blobGroup.add(blob3);

    // =========================================================
    // 4. MID RIGHT SMALL ACCENT BLOB (Deep Cyan Outer Rim)
    // =========================================================
    const blob4Geom = new THREE.IcosahedronGeometry(1.3, 4);
    const blob4Mat = createHollowRimMaterial(0x38bdf8, 0x1e1b4b, 2.4, 0.8);
    const blob4 = new THREE.Mesh(blob4Geom, blob4Mat);
    blob4.position.set(4.3, 0.2, -2.5);
    blobGroup.add(blob4);

    const blobList = [
      { mesh: blob1, speed: 0.7, freq: 1.1, amp: 0.32 },
      { mesh: blob2, speed: 0.9, freq: 1.3, amp: 0.26 },
      { mesh: blob3, speed: 0.85, freq: 1.4, amp: 0.24 },
      { mesh: blob4, speed: 0.65, freq: 1.2, amp: 0.20 }
    ];

    // =========================================================
    // MOUSE MOVEMENT & RESIZE LISTENERS
    // =========================================================
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      mouseRef.current.targetX = (e.clientX / windowWidth - 0.5) * 1.5;
      mouseRef.current.targetY = (e.clientY / windowHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // =========================================================
    // ANIMATION LOOP
    // =========================================================
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.03;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.03;

      // Group rotation
      blobGroup.rotation.y = mouseRef.current.x * 0.35;
      blobGroup.rotation.x = -mouseRef.current.y * 0.35;

      // Update shader uniforms & slow rotation
      blobList.forEach(({ mesh, speed, freq, amp }) => {
        mesh.rotation.y = time * 0.12 * speed;
        mesh.rotation.z = time * 0.08 * speed;

        mesh.position.y += Math.sin(time * speed * 0.8 + mesh.position.x) * 0.002;

        if (mesh.material.uniforms) {
          mesh.material.uniforms.uTime.value = time;
          mesh.material.uniforms.uSpeed.value = speed;
          mesh.material.uniforms.uNoiseFreq.value = freq;
          mesh.material.uniforms.uNoiseAmp.value = amp;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};

export default ThreeHeroCanvas;
