import React from 'react';
import { Search, Terminal, Users } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';

const iconMap = { Search, Terminal, Users };

const About = () => {
  return (
    <section id="propos" className="py-24" style={{ background: 'var(--about-bg)' }}>
      <div className="max-w-5xl px-6 mx-auto">

        {/* Section header */}
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">// À propos</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-sans)' }}>
              {portfolioData.about.title}
            </h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Avatar */}
          <AnimateOnScroll direction="left" delay={200}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative border */}
                <div
                  className="absolute -inset-2 rounded-2xl opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    filter: 'blur(8px)',
                  }}
                />
                <div
                  className="relative w-64 h-64 rounded-2xl overflow-hidden"
                  style={{ border: '1px solid var(--border-hover)' }}
                >
                  <img
                    src={portfolioData.about.image}
                    alt={portfolioData.personal.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const el = e.target.parentElement;
                      el.style.display = 'flex';
                      el.style.alignItems = 'center';
                      el.style.justifyContent = 'center';
                      el.style.background = 'var(--bg-3)';
                      el.innerHTML = '<span style="font-family:var(--font-mono);font-size:4rem;font-weight:700;color:var(--accent)">H</span>';
                    }}
                  />
                </div>
                {/* Status dot */}
                <div className="absolute bottom-3 right-3">
                  <span className="badge-running">Online</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right" delay={350}>
            <div>
              {/* Terminal label */}
              <div
                className="mb-4 text-xs"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
              >
                &gt; cat about.txt
              </div>

              <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                {portfolioData.about.description}
              </p>

              <div
                className="mb-4 text-xs"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
              >
                &gt; ./qualities.sh
              </div>

              <div className="grid grid-cols-1 gap-3">
                {portfolioData.about.qualities.map(({ label, icon, desc }, i) => {
                  const Icon = iconMap[icon];
                  return (
                    <div
                      key={label}
                      className="card-terminal p-3 flex items-start gap-3 group cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {Icon && (
                        <div
                          className="mt-0.5 p-1.5 rounded-md flex-shrink-0"
                          style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium" style={{ color: 'var(--title)' }}>
                          {label}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--body)' }}>
                          {desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
