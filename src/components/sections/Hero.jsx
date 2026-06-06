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

  // ============================
  // STATS DYNAMIQUES
  // ============================
  const projectsCount = portfolioData.projects?.length || 0;

  const technologiesCount = new Set(
    (portfolioData.skills?.categories || []).flatMap(category =>
      (category.skills || []).map(skill => skill.name)
    )
  ).size;

  const experiencesCount = portfolioData.experiences?.length || 0;

  const certificationsCount =
    (portfolioData.certifications || []).filter(
      cert => cert.status === "obtained"
    ).length;

  const stats = [
    {
      label: "Projets",
      value: projectsCount,
      icon: "Rocket",
    },
    {
      label: "Technos",
      value: technologiesCount,
      icon: "Code",
    },
    {
      label: "Expériences",
      value: experiencesCount,
      icon: "GraduationCap",
    },
    {
      label: "Certifs",
      value: certificationsCount,
      icon: "GitBranch",
    },
  ];

  return (
    <section
      id="accueil"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -translate-x-1/2 rounded-full pointer-events-none top-1/4 left-1/2 w-96 h-96"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute w-64 h-64 rounded-full pointer-events-none bottom-1/4 right-1/4"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-5">

          {/* LEFT */}
          <div className="lg:col-span-3">

            <div className={`mb-6 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-2'}`}>
              <span className="badge-running" style={{ fontFamily: 'var(--font-mono)' }}>
                Disponible — Alternance 2025
              </span>
            </div>

            <h1 className="mb-2 font-bold leading-tight"
              style={{ color: 'var(--title)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              RA-FANOMEZANA
              <br />
              <span style={{ color: 'var(--accent)' }}>Herimamy</span>
            </h1>

            <p className="mb-6 text-lg font-medium">
              {portfolioData.personal.role}
            </p>

            <p className="max-w-lg mb-8 text-sm">
              {portfolioData.personal.tagline}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ label, value, icon }) => {
                const Icon = iconMap[icon];

                return (
                  <div key={label} className="flex flex-col gap-1 p-3 card-terminal">

                    <div className="flex items-center gap-1.5">
                      {Icon && <Icon className="w-3 h-3" />}
                      <span className="text-xs">{label}</span>
                    </div>

                    <span className="text-xl font-bold">
                      {value}
                    </span>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT (inchangé sauf simplification) */}
          <div className="lg:col-span-2">
            <div className="p-5 card-terminal">

              <img
                src={portfolioData.about.image}
                alt={portfolioData.personal.name}
                className="w-12 h-12 rounded-full"
              />

              <div className="space-y-3">
                {portfolioData.xpBars.map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between">
                      <span>{label}</span>
                      <span>{xpVisible ? value : 0}/100</span>
                    </div>

                    <div className="xp-bar">
                      <div style={{ width: xpVisible ? `${value}%` : '0%' }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <a href="#propos" className="absolute bottom-8 left-1/2">
        <ChevronDown />
      </a>
    </section>
  );
};

export default Hero;