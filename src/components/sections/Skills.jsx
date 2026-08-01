import React, { useState } from "react";
import usePortfolioData from "../../hooks/usePortfolioData";
import AnimateOnScroll from "../common/AnimateOnScroll";
import useInView from "../../hooks/useInView";

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <AnimateOnScroll direction="up" delay={100 + index * 60}>
      <div ref={ref} className="p-4 card-terminal group">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden rounded-md" style={{ background: "var(--bg-3)" }}>
<img
  src={skill.icon}
  alt={`Icône ${skill.name}`}
  width="20"
  height="20"
  loading="lazy"
  decoding="async"
  className="object-contain w-5 h-5"
  onError={(e) => { e.target.style.display = "none"; }}
/>          </div>
          <span className="text-sm font-medium" style={{ color: "var(--title)" }}>{skill.name}</span>
          <span className="ml-auto text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{skill.level}%</span>
        </div>
        <div className="xp-bar"><div className="xp-bar-fill" style={{ width: inView ? `${skill.level}%` : "0%", transitionDelay: `${index * 60}ms` }} /></div>
      </div>
    </AnimateOnScroll>
  );
};

const Skills = () => {
  const data = usePortfolioData();
  const categories = data.skills.categories;
  const ui = data.skills_ui;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="compétences" className="py-24" style={{ background: "var(--skills-bg)" }}>
      <div className="max-w-5xl px-6 mx-auto">
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">{ui.sectionLabel}</div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--title)", fontFamily: "var(--font-sans)" }}>{ui.title}</h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={100}>
          <div className="flex gap-2 mb-10">{categories.map((cat, i) => (<button key={cat.title} onClick={() => setActiveCategory(i)} className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${activeCategory === i ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[rgba(56,189,248,0.3)]" : "text-[var(--body)] border border-[var(--border)] hover:border-[var(--border-hover)]"}`} style={{ fontFamily: "var(--font-mono)" }}>{cat.title}</button>))}</div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{categories[activeCategory].skills.map((skill, i) => (<SkillCard key={skill.name} skill={skill} index={i} />))}</div>
        <AnimateOnScroll direction="up" delay={200}>
          <div className="pt-8 mt-12" style={{ borderTop: "0.5px solid var(--border)" }}>
            <div className="mb-3 text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&gt; stack --all</div>
            <div className="flex flex-wrap gap-2">{categories.flatMap((c) => c.skills).map((s) => (<span key={s.name} className="skill-tag">{s.name}</span>))}</div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Skills;