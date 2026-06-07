import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import usePortfolioData from "../../hooks/usePortfolioData";
import AnimateOnScroll from "../common/AnimateOnScroll";

const Experience = () => {
  const data = usePortfolioData();

  return (
    <section id="experience" className="py-24" style={{ background: "var(--about-bg)" }}>
      <div className="max-w-5xl px-6 mx-auto">
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">{data.experience_ui.sectionLabel}</div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--title)", fontFamily: "var(--font-sans)" }}>{data.experience_ui.title}</h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>
        <div className="relative">
          <div className="absolute top-0 bottom-0 w-px left-5" style={{ background: "var(--border)" }} />
          <div className="space-y-8">
            {data.experiences.map((exp, index) => {
              const Icon = exp.type === "stage" ? Briefcase : GraduationCap;
              return (
                <AnimateOnScroll key={exp.id} direction="right" delay={index * 150}>
                  <div className="relative flex gap-6 pl-14">
                    <div className="absolute left-0 flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full" style={{ background: exp.type === "stage" ? "var(--accent-dim)" : "var(--accent2-dim)", border: `1px solid ${exp.type === "stage" ? "rgba(56,189,248,0.3)" : "rgba(167,139,250,0.3)"}`, color: exp.type === "stage" ? "var(--accent)" : "var(--accent2)" }}><Icon className="w-4 h-4" /></div>
                    <div className="flex-1 p-5 card-terminal">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div><h3 className="text-base font-semibold" style={{ color: "var(--title)" }}>{exp.title}</h3><span className="text-xs" style={{ color: "var(--body)", fontFamily: "var(--font-mono)" }}>{exp.company}</span></div>
                        <span className="px-2 py-0.5 rounded text-xs flex-shrink-0" style={{ background: "var(--bg-3)", color: "var(--accent)", fontFamily: "var(--font-mono)", border: "0.5px solid var(--border)" }}>{exp.period}</span>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--body)" }}>{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">{exp.tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}</div>
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