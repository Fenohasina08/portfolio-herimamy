import React, { useState, useEffect } from 'react';
import { ChevronDown, Rocket, Code, GraduationCap, GitBranch } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = { Rocket, Code, GraduationCap, GitBranch };

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [xpVisible, setXpVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 100);
    const t2 = setTimeout(() => setXpVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute -translate-x-1/2 rounded-full pointer-events-none top-1/4 left-1/2 w-96 h-96"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none bottom-1/4 right-1/4"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-5">

          {/* Left — main content */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <div
              className={`mb-6 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-2'}`}
            >
              <span className="badge-running" style={{ fontFamily: 'var(--font-mono)' }}>
                Disponible — Alternance 2025
              </span>
            </div>

            {/* Name */}
            <div
              className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div
                className="mb-1 text-xs tracking-widest uppercase"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
              >
                // player_profile
              </div>
              <h1
                className="mb-2 font-bold leading-tight"
                style={{ color: 'var(--title)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-sans)' }}
              >
                RA-FANOMEZANA
                <br />
                <span style={{ color: 'var(--accent)' }}>Herimamy</span>
              </h1>
              <p
                className="mb-6 text-lg font-medium"
                style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}
              >
                {portfolioData.personal.role}
              </p>
              <p className="max-w-lg mb-8 text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                {portfolioData.personal.tagline}
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a
                href="#projets"
                className="px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                  border border-[var(--accent)] text-[var(--bg)] bg-[var(--accent)]
                  hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Voir mes projets →
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                  border border-[var(--border-hover)] text-[var(--body)]
                  hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Me contacter
              </a>
            </div>

            {/* Stat row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {portfolioData.stats.map(({ label, value, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <div
                    key={label}
                    className="flex flex-col gap-1 p-3 card-terminal"
                  >
                    <div className="flex items-center gap-1.5" style={{ color: 'var(--accent)', opacity: 0.7 }}>
                      {Icon && <Icon className="w-3 h-3" />}
                      <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--body)' }}>{label}</span>
                    </div>
                    <span
                      className="text-xl font-bold"
                      style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — player card */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="p-5 card-terminal">
              {/* Card header */}
              <div
                className="flex items-center justify-between pb-3 mb-4"
                style={{ borderBottom: '0.5px solid var(--border)' }}
              >
                <span className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                  player_card.json
                </span>
                <span className="text-xs badge-running">Online</span>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full"
                  style={{ border: '2px solid var(--accent)', background: 'var(--accent-dim)' }}
                >
                  <img
                    src={portfolioData.about.image}
                    alt={portfolioData.personal.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="font-family:var(--font-mono);font-size:18px;font-weight:700;color:var(--accent)">H</span>';
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--title)' }}>
                    Herimamy F.
                  </div>
                  <div className="text-xs" style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}>
                    Web Developer
                  </div>
                </div>
              </div>

              {/* XP Bars */}
              <div className="space-y-3">
                {portfolioData.xpBars.map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}>
                        {label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                        {xpVisible ? value : 0}/{100} XP
                      </span>
                    </div>
                    <div className="xp-bar">
                      <div
                        className="xp-bar-fill"
                        style={{ width: xpVisible ? `${value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div
                className="flex items-center gap-2 pt-3 mt-4"
                style={{ borderTop: '0.5px solid var(--border)' }}
              >
                <span className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                  region:
                </span>
                <span className="text-xs" style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}>
                  Antananarivo, MG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#propos"
        className="absolute flex flex-col items-center gap-1 -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
        style={{ color: 'var(--muted)' }}
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
