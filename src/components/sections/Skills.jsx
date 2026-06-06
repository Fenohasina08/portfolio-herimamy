import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';
import useInView from '../../hooks/useInView';

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <AnimateOnScroll direction="up" delay={100 + index * 60}>
      <div ref={ref} className="card-terminal p-4 group">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--bg-3)' }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 h-5 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--title)' }}>
            {skill.name}
          </span>
          <span
            className="ml-auto text-xs"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="xp-bar">
          <div
            className="xp-bar-fill"
            style={{
              width: inView ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 60}ms`,
            }}
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = portfolioData.skills.categories;

  return (
    <section id="compétences" className="py-24" style={{ background: 'var(--skills-bg)' }}>
      <div className="max-w-5xl px-6 mx-auto">

        {/* Header */}
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">// Compétences</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-sans)' }}>
              Mes Compétences
            </h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>

        {/* Tabs */}
        <AnimateOnScroll direction="up" delay={100}>
          <div className="flex gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200
                  ${activeCategory === i
                    ? 'bg-[var(--accent-dim)] text-[var(--accent)] border border-[rgba(56,189,248,0.3)]'
                    : 'text-[var(--body)] border border-[var(--border)] hover:border-[var(--border-hover)]'
                  }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories[activeCategory].skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Stack tags */}
        <AnimateOnScroll direction="up" delay={200}>
          <div className="mt-12 pt-8" style={{ borderTop: '0.5px solid var(--border)' }}>
            <div
              className="mb-3 text-xs"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
            >
              &gt; stack --all
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.flatMap(c => c.skills).map(s => (
                <span key={s.name} className="skill-tag">{s.name}</span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Skills;
