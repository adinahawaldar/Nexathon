import React, { useEffect, useRef, useState } from 'react';
import scene1 from '../assets/scene1-hero.jpg';
import scene2 from '../assets/scene2-canyon.jpg';
import scene3 from '../assets/scene3-arena.jpg';
import scene4 from '../assets/scene4-portal.jpg';

const ScrollyLakeBackground = () => {
  const canvasRef = useRef(null);
  const [scrollFraction, setScrollFraction] = useState(0);

  // Monitor scroll progress across the page (0.0 to 1.0)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;
          setScrollFraction(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute opacities for the 4 progressive scenes along the lake voyage
  // Scene 1: 0.0 - 0.25
  // Scene 2: 0.20 - 0.52
  // Scene 3: 0.48 - 0.78
  // Scene 4: 0.74 - 1.0
  const getOpacities = (p) => {
    let o1 = 0, o2 = 0, o3 = 0, o4 = 0;

    if (p <= 0.22) {
      o1 = 1;
      o2 = 0;
      o3 = 0;
      o4 = 0;
    } else if (p <= 0.45) {
      const blend = (p - 0.22) / (0.45 - 0.22);
      o1 = 1 - blend;
      o2 = blend;
      o3 = 0;
      o4 = 0;
    } else if (p <= 0.72) {
      const blend = (p - 0.45) / (0.72 - 0.45);
      o1 = 0;
      o2 = 1 - blend;
      o3 = blend;
      o4 = 0;
    } else {
      const blend = Math.min((p - 0.72) / (0.95 - 0.72), 1);
      o1 = 0;
      o2 = 0;
      o3 = 1 - blend;
      o4 = blend;
    }

    return { o1, o2, o3, o4 };
  };

  const { o1, o2, o3, o4 } = getOpacities(scrollFraction);

  // Persistent shooting star trails & light streaks canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const STREAK_COUNT = 40;
    const streakColors = [
      'rgba(0, 240, 255,',
      'rgba(244, 114, 182,',
      'rgba(251, 191, 36,',
      'rgba(224, 231, 255,'
    ];

    const streaks = Array.from({ length: STREAK_COUNT }, () => ({
      x: Math.random() * (canvas.width + 300),
      y: Math.random() * canvas.height * 0.7,
      length: 16 + Math.random() * 34,
      speed: 1.2 + Math.random() * 2.8,
      width: 0.8 + Math.random() * 1.2,
      opacity: 0.2 + Math.random() * 0.5,
      color: streakColors[Math.floor(Math.random() * streakColors.length)]
    }));

    const angle = 68 * (Math.PI / 180);
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streaks.forEach(s => {
        s.y += s.speed * sinAngle * 2.2;
        s.x -= s.speed * cosAngle * 2.2;

        if (s.y > canvas.height * 0.8 || s.x < -50) {
          s.y = -20 - Math.random() * 40;
          s.x = Math.random() * (canvas.width + 250);
          s.speed = 1.2 + Math.random() * 2.8;
        }

        const headX = s.x;
        const headY = s.y;
        const tailX = s.x + s.length * cosAngle;
        const tailY = s.y - s.length * sinAngle;

        const grad = ctx.createLinearGradient(headX, headY, tailX, tailY);
        grad.addColorStop(0, `${s.color} ${s.opacity})`);
        grad.addColorStop(0.3, `${s.color} ${s.opacity * 0.5})`);
        grad.addColorStop(1, `${s.color} 0)`);

        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#040816]"
      aria-hidden="true"
    >
      {/* Scene 1: Hero Stage Entrance */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out will-change-transform"
        style={{
          opacity: o1,
          transform: `scale(${1.04 + scrollFraction * 0.04}) translate3d(0, ${scrollFraction * -20}px, 0)`
        }}
      >
        <img 
          src={scene1} 
          alt="Scene 1 - Hero Lake Entrance" 
          className="w-full h-full object-cover object-center" 
          style={{ filter: 'brightness(0.92) contrast(1.06)' }}
        />
      </div>

      {/* Scene 2: Crystal Canyon (Rubik's Cube & About Nexathon) */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out will-change-transform"
        style={{
          opacity: o2,
          transform: `scale(${1.04 + (scrollFraction - 0.25) * 0.04}) translate3d(0, ${(scrollFraction - 0.25) * -20}px, 0)`
        }}
      >
        <img 
          src={scene2} 
          alt="Scene 2 - Crystal Canyon" 
          className="w-full h-full object-cover object-center" 
          style={{ filter: 'brightness(0.92) contrast(1.06)' }}
        />
      </div>

      {/* Scene 3: Lake Arena (Project & Paper presentation pods, Crystal Trophies) */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out will-change-transform"
        style={{
          opacity: o3,
          transform: `scale(${1.04 + (scrollFraction - 0.5) * 0.04}) translate3d(0, ${(scrollFraction - 0.5) * -20}px, 0)`
        }}
      >
        <img 
          src={scene3} 
          alt="Scene 3 - Presentation Arena & Trophies" 
          className="w-full h-full object-cover object-center" 
          style={{ filter: 'brightness(0.92) contrast(1.06)' }}
        />
      </div>

      {/* Scene 4: Grand Portal Gateway (Timeline & Grand Finale) */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-out will-change-transform"
        style={{
          opacity: o4,
          transform: `scale(${1.04 + (scrollFraction - 0.75) * 0.04}) translate3d(0, ${(scrollFraction - 0.75) * -20}px, 0)`
        }}
      >
        <img 
          src={scene4} 
          alt="Scene 4 - Portal Gateway Horizon" 
          className="w-full h-full object-cover object-center" 
          style={{ filter: 'brightness(0.92) contrast(1.06)' }}
        />
      </div>

      {/* Persistent light streaks and meteor trails */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Darkening vignettes to ensure high text contrast and visual sharpness */}
      <div 
        className="absolute inset-x-0 top-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(3, 7, 22, 0.85) 0%, rgba(3, 7, 22, 0.4) 65%, transparent 100%)' }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(4, 9, 26, 0.42) 0%, rgba(2, 6, 18, 0.2) 60%, rgba(2, 5, 18, 0.65) 100%)' }}
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #040816 0%, rgba(3, 8, 24, 0.6) 50%, transparent 100%)' }}
      />
    </div>
  );
};

export default ScrollyLakeBackground;
