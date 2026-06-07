import React, { useState } from "react";
import { CheckCircle, Clock, ExternalLink, Award } from "lucide-react";
import usePortfolioData from "../../hooks/usePortfolioData";
import AnimateOnScroll from "../common/AnimateOnScroll";

const Certifications = () => {
  const data = usePortfolioData();
  const certs = data.certifications;
  const ui = data.certifications_ui;
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? certs : certs.filter((c) => c.status === filter);
  const obtained = certs.filter((c) => c.status === "obtained").length;
  const inprogress = certs.filter((c) => c.status === "inprogress").length;

  return (
    <section id="certifications" className="py-24" style={{ background: "var(--about-bg)" }}>
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
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "var(--green-dim)", border: "0.5px solid rgba(74,222,128,0.25)" }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--green)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--green)", fontFamily: "var(--font-mono)" }}>{obtained} {ui.obtained}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "var(--amber-dim)", border: "0.5px solid rgba(251,191,36,0.25)" }}>
                <Clock className="w-3.5 h-3.5" style={{ color: "var(--amber)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)" }}>{inprogress} {ui.inprogress}</span>
              </div>
            </div>
            <div className="flex gap-2">{ui.filters.map(({ key, label }) => (<button key={key} onClick={() => setFilter(key)} className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all" style={{ background: filter === key ? "var(--accent-dim)" : "transparent", color: filter === key ? "var(--accent)" : "var(--body)", border: `0.5px solid ${filter === key ? "rgba(56,189,248,0.3)" : "var(--border)"}`, fontFamily: "var(--font-mono)" }}>{label}</button>))}</div>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, index) => {
            const isObtained = cert.status === "obtained";
            return (
              <AnimateOnScroll key={cert.id} direction="up" delay={120 + index * 70}>
                <div className="flex flex-col h-full gap-3 p-4 card-terminal group">
                  <div className="flex items-start justify-between">
                    <div className="flex-shrink-0 p-2 rounded-lg" style={{ background: isObtained ? "var(--green-dim)" : "var(--amber-dim)", color: isObtained ? "var(--green)" : "var(--amber)" }}><Award className="w-4 h-4" /></div>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs" style={{ background: isObtained ? "var(--green-dim)" : "var(--amber-dim)", color: isObtained ? "var(--green)" : "var(--amber)", border: `0.5px solid ${isObtained ? "rgba(74,222,128,0.3)" : "rgba(251,191,36,0.3)"}`, fontFamily: "var(--font-mono)" }}>{isObtained ? (<><CheckCircle className="w-3 h-3" /> {ui.badgeObtained}</>) : (<><Clock className="w-3 h-3" /> {ui.badgeInprogress}</>)}</span>
                  </div>
                  <div className="flex-1"><h3 className="mb-1 text-sm font-semibold leading-snug" style={{ color: "var(--title)" }}>{cert.title}</h3><p className="text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{cert.issuer}</p></div>
                  <div className="flex flex-wrap gap-1.5">{cert.tags.map((tag) => (<span key={tag} className="skill-tag">{tag}</span>))}</div>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "0.5px solid var(--border)" }}>
                    <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{cert.date}</span>
                    {isObtained && cert.url && cert.url !== "#" ? (<a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs transition-colors" style={{ color: "var(--body)", fontFamily: "var(--font-mono)" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--body)"; }}>{ui.see} <ExternalLink className="w-3 h-3" /></a>) : isObtained ? (<span className="text-xs" style={{ color: "var(--green)", fontFamily: "var(--font-mono)" }}>{ui.verified}</span>) : (<span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{ui.eta}</span>)}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;