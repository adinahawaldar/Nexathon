import React, { useEffect, useRef } from 'react';
import heroMixBg from '../assets/hero-datasci-mix.jpg';

const HeroBackground = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Diagonal shooting star & prismatic light streaks matching the sky angle (~68 degrees)
    const STREAK_COUNT = 36;
    const streakColors = [
      'rgba(0, 240, 255,',     // Cyan
      'rgba(255, 180, 200,',   // Coral Pink
      'rgba(255, 220, 160,',   // Amber Gold
      'rgba(215, 235, 255,',   // Ice Blue
      'rgba(240, 210, 255,'    // Soft Lilac
    ];

    const streaks = Array.from({ length: STREAK_COUNT }, () => ({
      x: Math.random() * (canvas.width + 300),
      y: Math.random() * canvas.height * 0.65,
      length: 16 + Math.random() * 32,
      speed: 1.2 + Math.random() * 2.5,
      width: 0.8 + Math.random() * 1.3,
      opacity: 0.2 + Math.random() * 0.5,
      color: streakColors[Math.floor(Math.random() * streakColors.length)]
    }));

    // Twinkling stars and multi-hue sparkles
    const STAR_COUNT = 50;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.55,
      radius: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: 0.015 + Math.random() * 0.025,
      pulseDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.6 ? '#ffffff' : (Math.random() > 0.5 ? '#a5f3fc' : '#fed7aa')
    }));

    const angle = 68 * (Math.PI / 180);
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle stars
      stars.forEach(star => {
        star.alpha += star.pulseSpeed * star.pulseDir;
        if (star.alpha > 0.9) star.pulseDir = -1;
        if (star.alpha < 0.2) star.pulseDir = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha * 0.8;
        ctx.shadowBlur = 6;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Draw light streaks matching sky angle
      streaks.forEach(s => {
        s.y += s.speed * sinAngle * 2.0;
        s.x -= s.speed * cosAngle * 2.0;

        if (s.y > canvas.height * 0.72 || s.x < -50) {
          s.y = -20 - Math.random() * 40;
          s.x = Math.random() * (canvas.width + 250);
          s.speed = 1.2 + Math.random() * 2.5;
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

  // Smooth mouse and scroll parallax
  useEffect(() => {
    let ticking = false;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const updateTransform = () => {
      if (!imageRef.current) return;
      const scrollOffset = scrollY * 0.05;
      imageRef.current.style.transform = `scale(1.08) translate3d(${mouseX}px, ${mouseY - scrollOffset}px, 0)`;
      ticking = false;
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX = (clientX / innerWidth - 0.5) * -16;
      mouseY = (clientY / innerHeight - 0.5) * -12;
      if (!ticking) {
        requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#040816]"
      aria-hidden="true"
    >
      {/* 1. Main 3D Surreal Tech Landscape Background with Mixed Shades (No Trees, Data Sci & Research Paper Elements) */}
      <img
        ref={imageRef}
        src={heroMixBg}
        alt="Surreal 3D Tech Landscape in Mixed Shades with Data Science Visualizations & Paper Presentations"
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out will-change-transform scale-105"
        style={{
          filter: 'brightness(0.93) contrast(1.05)'
        }}
      />

      {/* 2. Interactive Falling Star Trails & Light Streaks Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 3. Balanced Vignettes for Crisp Headline & Content Legibility */}
      {/* Top navbar dark gradient */}
      <div 
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(3, 7, 22, 0.8) 0%, rgba(3, 7, 22, 0.3) 65%, transparent 100%)'
        }}
      />

      {/* Center atmospheric vignette so title and stats pop with clarity */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(4, 9, 26, 0.45) 0%, rgba(2, 6, 18, 0.15) 55%, rgba(2, 5, 18, 0.6) 100%)'
        }}
      />

      {/* Bottom seamless blend */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #040816 0%, rgba(3, 8, 24, 0.6) 50%, transparent 100%)'
        }}
      />

      {/* Ambient glowing highlights matching the coral pink, cyan and amber crystals */}
      <div 
        className="absolute bottom-10 left-12 w-64 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none animate-pulse" 
        style={{ animationDuration: '6s' }}
      />
      <div 
        className="absolute bottom-12 right-16 w-72 h-52 rounded-full bg-pink-500/12 blur-3xl pointer-events-none animate-pulse" 
        style={{ animationDuration: '7s', animationDelay: '1.5s' }}
      />
      <div 
        className="absolute bottom-14 left-1/3 w-60 h-44 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" 
      />
      <div 
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" 
      />
    </div>
  );
};

export default HeroBackground;
