import React, { useState } from "react";
import { ExternalLink, Clock, CheckCircle } from "lucide-react";
import usePortfolioData from "../../hooks/usePortfolioData";
import AnimateOnScroll from "../common/AnimateOnScroll";

const Projects = () => {
  const data = usePortfolioData();
  const ui = data.projects_ui;
  const projects = data.projects;
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = projects.filter((p) => {
    const matchStatus = filter === "all" || p.status === filter;
    const q = search.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(q) || p.stack.some((t) => t.toLowerCase().includes(q));
    return matchStatus && matchSearch;
  });

  return (
    <section id="projets" className="py-24" style={{ background: "var(--projects-bg)" }}>
      <div className="max-w-5xl px-6 mx-auto">
        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <div className="section-label">{ui.sectionLabel}</div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--title)", fontFamily: "var(--font-sans)" }}>{ui.title}</h2>
            <div className="section-divider" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={100}>
          <div className="flex flex-col items-start justify-between gap-4 mb-10 sm:flex-row sm:items-center">
            <div className="flex gap-2">{ui.filters.map(({ key, label }) => (<button key={key} onClick={() => setFilter(key)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${filter === key ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[rgba(56,189,248,0.3)]" : "text-[var(--body)] border border-[var(--border)] hover:border-[var(--border-hover)]"}`} style={{ fontFamily: "var(--font-mono)" }}>{label}</button>))}</div>
            <input type="text" placeholder={ui.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="w-44 px-3 py-1.5 text-xs rounded-lg outline-none" style={{ background: "var(--bg-3)", color: "var(--title)", border: "0.5px solid var(--border)", fontFamily: "var(--font-mono)" }} />
          </div>
        </AnimateOnScroll>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <AnimateOnScroll key={project.id} direction="up" delay={150 + index * 80}>
              <div className="flex flex-col overflow-hidden card-terminal group">
                <div className="relative h-40 overflow-hidden">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[var(--bg)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.deployed ? (<a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full transition-colors" style={{ background: "var(--accent)", color: "var(--bg)" }} title={ui.seesite}><ExternalLink className="w-4 h-4" /></a>) : (<div className="p-2.5 rounded-full cursor-not-allowed" style={{ background: "var(--bg-4)", color: "var(--muted)" }}><Clock className="w-4 h-4" /></div>)}
                  </div>
                  <div className="absolute top-3 right-3">{project.deployed ? (<span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium" style={{ background: "var(--green-dim)", color: "var(--green)", border: "0.5px solid rgba(74,222,128,0.3)", fontFamily: "var(--font-mono)" }}><CheckCircle className="w-3 h-3" /> {ui.badgeDeployed}</span>) : (<span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium" style={{ background: "var(--amber-dim)", color: "var(--amber)", border: "0.5px solid rgba(251,191,36,0.3)", fontFamily: "var(--font-mono)" }}><Clock className="w-3 h-3" /> {ui.badgeInprogress}</span>)}</div>
                  <div className="absolute bottom-2 left-3"><span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{project.version}</span></div>
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="mb-2 text-sm font-semibold" style={{ color: "var(--title)" }}>{project.title}</h3>
                  <p className="flex-1 mb-4 text-xs leading-relaxed" style={{ color: "var(--body)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">{project.stack.map((tech) => (<span key={tech} className="skill-tag">{tech}</span>))}</div>
                  {project.deployed ? (<a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-xs font-medium transition-all rounded-lg" style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "0.5px solid rgba(56,189,248,0.2)", fontFamily: "var(--font-mono)" }}><ExternalLink className="w-3 h-3" /> {ui.seesite}</a>) : (<div className="flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg cursor-not-allowed" style={{ background: "var(--bg-3)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}><Clock className="w-3 h-3" /> {ui.deploying}</div>)}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;