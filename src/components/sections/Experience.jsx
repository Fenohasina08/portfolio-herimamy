import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';

const Experience = () => {
  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="py-24" style={{ background: 'var(--about-bg)' }}>
      <div className="max-w-5xl px-6 mx-auto">

        {/* Header */}
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">// Parcours</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-sans)' }}>
              Mon Parcours
            </h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.type === 'stage' ? Briefcase : GraduationCap;
              return (
                <AnimateOnScroll key={exp.id} direction="right" delay={index * 150}>
                  <div className="flex gap-6 pl-14 relative">
                    {/* Icon node */}
                    <div
                      className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: exp.type === 'stage' ? 'var(--accent-dim)' : 'var(--accent2-dim)',
                        border: `1px solid ${exp.type === 'stage' ? 'rgba(56,189,248,0.3)' : 'rgba(167,139,250,0.3)'}`,
                        color: exp.type === 'stage' ? 'var(--accent)' : 'var(--accent2)',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Card */}
                    <div className="card-terminal p-5 flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-base font-semibold" style={{ color: 'var(--title)' }}>
                            {exp.title}
                          </h3>
                          <span
                            className="text-xs"
                            style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}
                          >
                            {exp.company}
                          </span>
                        </div>
                        <span
                          className="px-2 py-0.5 rounded text-xs flex-shrink-0"
                          style={{
                            background: 'var(--bg-3)',
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-mono)',
                            border: '0.5px solid var(--border)',
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
