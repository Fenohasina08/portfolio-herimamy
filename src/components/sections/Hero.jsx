import React, { useState, useEffect } from "react";
import { ChevronDown, Rocket, Code, GraduationCap, GitBranch } from "lucide-react";
import usePortfolioData from "../../hooks/usePortfolioData";

const iconMap = { Rocket, Code, GraduationCap, GitBranch };
const STAT_ICONS = ["Rocket", "Code", "GraduationCap", "GitBranch"];

const Hero = () => {
  const data = usePortfolioData();
  const [mounted, setMounted] = useState(false);
  const [xpVisible, setXpVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 100);
    const t2 = setTimeout(() => setXpVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const projectsCount = data.projects?.length || 0;
  const technologiesCount = new Set(
    (data.skills?.categories || []).flatMap((c) => (c.skills || []).map((s) => s.name))
  ).size;
  const experiencesCount = data.experiences?.length || 0;
  const certificationsCount = (data.certifications || []).filter((c) => c.status === "obtained").length;
  const statValues = [projectsCount, technologiesCount, experiencesCount, certificationsCount];

  return (
    <section id="accueil" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
      <div className="absolute -translate-x-1/2 rounded-full pointer-events-none top-1/4 left-1/2 w-96 h-96" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)" }} />
      <div className="absolute w-64 h-64 rounded-full pointer-events-none bottom-1/4 right-1/4" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className={`mb-6 transition-all duration-500 ${mounted ? "opacity-100" : "opacity-0 -translate-y-2"}`}>
              <span className="badge-running" style={{ fontFamily: "var(--font-mono)" }}>
                {data.hero_ui.available}
              </span>
            </div>
            <h1 className="mb-2 font-bold leading-tight" style={{ color: "var(--title)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              RA-FANOMEZANA<br />
              <span style={{ color: "var(--accent)" }}>Herimamy</span>
            </h1>
            <p className="mb-6 text-lg font-medium" style={{ color: "var(--body)" }}>{data.personal.role}</p>
            <p className="max-w-lg mb-8 text-sm" style={{ color: "var(--body)" }}>{data.personal.tagline}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {data.hero_ui.stats.map(({ key, label }, i) => {
                const Icon = iconMap[STAT_ICONS[i]];
                return (
                  <div key={key} className="flex flex-col gap-1 p-3 card-terminal">
                    <div className="flex items-center gap-1.5">
                      {Icon && <Icon className="w-3 h-3" style={{ color: "var(--accent)" }} />}
                      <span className="text-xs" style={{ color: "var(--body)" }}>{label}</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: "var(--title)" }}>{statValues[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="p-5 card-terminal">
              {/* <img src={data.about.image} alt={data.personal.name} className="w-12 h-12 mb-4 rounded-full" /> */}
              <div className="space-y-3">
                {data.xpBars.map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: "var(--body)", fontFamily: "var(--font-mono)" }}>{label}</span>
                      <span className="text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{xpVisible ? value : 0}/100</span>
                    </div>
                    <div className="xp-bar"><div className="xp-bar-fill" style={{ width: xpVisible ? `${value}%` : "0%" }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#propos" className="absolute -translate-x-1/2 bottom-8 left-1/2" style={{ color: "var(--body)" }}><ChevronDown /></a>
    </section>
  );
};

export default Hero;