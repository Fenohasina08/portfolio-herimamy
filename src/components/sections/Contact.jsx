import React from "react";
import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import usePortfolioData from "../../hooks/usePortfolioData";
import AnimateOnScroll from "../common/AnimateOnScroll";

const iconComponents = { Github, Linkedin, Facebook, Mail, Phone, MapPin };

const Contact = () => {
  const data = usePortfolioData();
  const { socialLinks, sectionLabel, title, emailCardLabel, emailCardTitle,
          emailText, emailButtonLabel, emailAutoOpen,
          coordLabel, coordTitle, socialTitle } = data.contact;
  const { email, phone, location } = data.personal;

  const handleEmailClick = () => { window.location.href = `mailto:${email}`; };

  return (
    <>
      <section id="contact" className="py-24" style={{ background: "var(--contact-bg)" }}>
        <div className="max-w-5xl px-6 mx-auto">
          <AnimateOnScroll direction="up">
            <div className="mb-16">
              <div className="section-label">{sectionLabel}</div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--title)", fontFamily: "var(--font-sans)" }}>{title}</h2>
              <div className="section-divider" />
            </div>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-2">
            <AnimateOnScroll direction="left" delay={200}>
              <div className="flex flex-col justify-between h-full p-6 card-terminal">
                <div><div className="mb-3 text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{emailCardLabel}</div><h3 className="mb-3 text-lg font-semibold" style={{ color: "var(--title)" }}>{emailCardTitle}</h3><p className="mb-8 text-sm leading-relaxed" style={{ color: "var(--body)" }}>{emailText}</p></div>
                <div><button onClick={handleEmailClick} className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]" style={{ background: "var(--accent)", color: "var(--bg)", fontFamily: "var(--font-mono)" }}><Mail className="w-4 h-4" /> {emailButtonLabel}</button><div className="mt-4 text-center"><p className="text-xs" style={{ color: "var(--body)", fontFamily: "var(--font-mono)" }}>{email}</p><p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{emailAutoOpen}</p></div></div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={300}>
              <div className="flex flex-col h-full p-6 card-terminal">
                <div className="mb-3 text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{coordLabel}</div>
                <h3 className="mb-5 text-lg font-semibold" style={{ color: "var(--title)" }}>{coordTitle}</h3>
                <div className="mb-6 space-y-3">{[
                  { Icon: Mail, value: email },
                  { Icon: Phone, value: phone },
                  { Icon: MapPin, value: location },
                ].map(({ Icon, value }) => (<div key={value} className="flex items-center gap-3"><div className="p-1.5 rounded-md flex-shrink-0" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}><Icon className="w-3.5 h-3.5" /></div><span className="text-sm" style={{ color: "var(--body)" }}>{value}</span></div>))}</div>
                <div className="pt-5 mt-auto" style={{ borderTop: "0.5px solid var(--border)" }}><h4 className="mb-3 text-sm font-medium" style={{ color: "var(--title)" }}>{socialTitle}</h4><div className="flex gap-2">{socialLinks.map(({ platform, url, icon }) => { const IconComponent = iconComponents[icon]; return (<a key={platform} href={url} target="_blank" rel="noopener noreferrer" title={platform} className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110" style={{ background: "var(--bg-3)", color: "var(--body)", border: "0.5px solid var(--border)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-dim)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--body)"; e.currentTarget.style.background = "var(--bg-3)"; }}><IconComponent className="w-4 h-4" /></a>); })}</div></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <button onClick={handleEmailClick} className="fixed z-50 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 bottom-6 left-6 hover:scale-105 active:scale-95" style={{ background: "var(--accent)", color: "var(--bg)", fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 500 }} title={emailButtonLabel} aria-label={emailButtonLabel}><Mail className="w-4 h-4" /><span className="hidden sm:inline">Email</span></button>
    </>
  );
};

export default Contact;