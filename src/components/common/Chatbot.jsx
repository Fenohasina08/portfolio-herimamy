import React, { useState, useEffect, useRef } from 'react';
import usePortfolioData from '../../hooks/usePortfolioData';
import {
  X, MessageCircle, ChevronRight, ExternalLink,
  Mail, Phone, MapPin, Briefcase, GraduationCap,
  Github, Linkedin, Facebook, Terminal,
} from 'lucide-react';

const iconComponents = { Mail, Phone, MapPin, Briefcase, GraduationCap, Github, Linkedin, Facebook };

const Chatbot = () => {
  const data = usePortfolioData();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedProject, setSelectedProject] = useState(null);
  const messagesEndRef = useRef(null);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Dev_Fullstak_RAFANOMEZANA.pdf';
    link.download = `CV_Herimamy_Fenohasina_${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
        addBotMessage(data.chatbot.greeting);
        setCurrentView('welcome');
      }
    }, data.chatbot.openingDelay);
    return () => clearTimeout(timer);
  }, [data.chatbot.greeting, data.chatbot.openingDelay, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text) => setMessages((prev) => [...prev, { text, isUser: false, timestamp: new Date() }]);
  const addUserMessage = (text) => setMessages((prev) => [...prev, { text, isUser: true, timestamp: new Date() }]);
  const showWelcomeButtons = () => setCurrentView('welcome');

  const handleWelcomeButton = (btn, idx) => {
    addUserMessage(btn);
    switch (idx) {
      case 0: // projects
        setCurrentView('projects');
        addBotMessage(`${data.projects.length} ${btn.toLowerCase()} :`);
        break;
      case 1: // skills
        setCurrentView('skills');
        addBotMessage(`${btn} :`);
        break;
      case 2: // experience
        setCurrentView('experiences');
        addBotMessage(`${btn} :`);
        break;
      case 3: // about
        setCurrentView('about');
        addBotMessage(data.about.description);
        break;
      case 4: // contact
        setCurrentView('contact');
        addBotMessage(data.personal.email);
        break;
      case 5: // download CV
        handleDownloadCV();
        addBotMessage('⬇ CV download started.');
        break;
      default:
        addBotMessage('...');
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
    addUserMessage(project.title);
    addBotMessage(`${project.title} — ${project.description}`);
  };

  const btn = (label, onClick, accent = false) => (
    <button
      key={label}
      onClick={onClick}
      className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-left"
      style={{
        background: accent ? 'var(--accent-dim)' : 'var(--bg-3)',
        color: accent ? 'var(--accent)' : 'var(--body)',
        border: `0.5px solid ${accent ? 'rgba(56,189,248,0.3)' : 'var(--border)'}`,
        fontFamily: 'var(--font-mono)',
      }}
    >
      {label}
    </button>
  );

  const deployedLabel = data.projects_ui?.badgeDeployed || 'Deployed';
  const inprogressLabel = data.projects_ui?.badgeInprogress || 'In progress';
  const backLabel = data.chatbot.welcomeButtons[2] === 'Mon parcours' ? '← Retour' : '← Back';
  const menuLabel = data.chatbot.welcomeButtons[3] === 'À propos' ? '🏠 Menu' : '🏠 Menu';
  const resetLabel = '🔄 Reset';
  const closeLabel = data.chatbot.welcomeButtons[3] === 'À propos' ? '✕ Fermer' : '✕ Close';
  const sendEmailLabel = data.chatbot.welcomeButtons[4] === 'Contact' ? '✉ Envoyer un email' : '✉ Send email';
  const visitLabel = data.chatbot.welcomeButtons[0] === 'Mes projets' ? 'Visiter le site' : 'Visit site';

  const renderWelcomeButtons = () => (
    <div className="flex flex-wrap gap-2 mt-3">
      {data.chatbot.welcomeButtons.map((b, i) => btn(b, () => handleWelcomeButton(b, i), false))}
    </div>
  );

  const renderProjectsList = () => (
    <div className="mt-3 space-y-2">
      {data.projects.map((p) => (
        <button key={p.id} onClick={() => handleProjectSelect(p)} className="flex items-center justify-between w-full p-3 text-left transition-all rounded-lg" style={{ background: 'var(--bg-3)', border: '0.5px solid var(--border)', color: 'var(--body)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-hover)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
          <span className="text-xs font-medium" style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}>{p.title}</span>
          <span className="flex items-center gap-1 text-xs" style={{ color: p.deployed ? 'var(--green)' : 'var(--amber)', fontFamily: 'var(--font-mono)' }}>{p.deployed ? `● ${deployedLabel}` : `○ ${inprogressLabel}`}<ChevronRight className="w-3 h-3" /></span>
        </button>
      ))}
      {btn(backLabel, showWelcomeButtons)}
    </div>
  );

  const renderProjectDetail = () => selectedProject && (
    <div className="mt-3 space-y-3">
      <div className="p-3 rounded-lg" style={{ background: 'var(--bg-3)', border: '0.5px solid var(--border)' }}>
        <div className="flex items-start justify-between mb-2"><h4 className="text-sm font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}>{selectedProject.title}</h4><span className="text-xs px-2 py-0.5 rounded" style={{ background: selectedProject.deployed ? 'var(--green-dim)' : 'var(--amber-dim)', color: selectedProject.deployed ? 'var(--green)' : 'var(--amber)', fontFamily: 'var(--font-mono)' }}>{selectedProject.deployed ? deployedLabel : inprogressLabel}</span></div>
        <p className="mb-3 text-xs" style={{ color: 'var(--body)' }}>{selectedProject.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">{selectedProject.stack.map((t) => (<span key={t} className="text-xs skill-tag">{t}</span>))}</div>
        {selectedProject.deployed && selectedProject.demoLink !== '#' && (<a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}><ExternalLink className="w-3 h-3" /> {visitLabel}</a>)}
      </div>
      <div className="flex gap-2">{btn(backLabel, () => setCurrentView('projects'))}{btn(menuLabel, showWelcomeButtons)}</div>
    </div>
  );

  const renderSkills = () => (
    <div className="mt-3 space-y-3">
      {data.skills.categories.map((cat) => (<div key={cat.title} className="p-3 rounded-lg" style={{ background: 'var(--bg-3)', border: '0.5px solid var(--border)' }}><h4 className="mb-2 text-xs font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}>{cat.title}</h4><div className="flex flex-wrap gap-1">{cat.skills.map((s) => (<span key={s.name} className="text-xs skill-tag">{s.name}</span>))}</div></div>))}
      {btn(backLabel, showWelcomeButtons)}
    </div>
  );

  const renderExperiences = () => (
    <div className="mt-3 space-y-2">
      {data.experiences.map((exp) => { const Icon = exp.type === 'stage' ? Briefcase : GraduationCap; return (<div key={exp.id} className="p-3 rounded-lg" style={{ background: 'var(--bg-3)', border: '0.5px solid var(--border)' }}><div className="flex items-center gap-2 mb-1"><Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} /><span className="text-xs font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}>{exp.title}</span></div><div className="mb-1 text-xs" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{exp.period}</div><p className="text-xs" style={{ color: 'var(--body)' }}>{exp.description}</p></div>); })}
      {btn(backLabel, showWelcomeButtons)}
    </div>
  );

  const renderContact = () => (
    <div className="mt-3 space-y-3">
      <div className="p-3 rounded-lg" style={{ background: 'var(--bg-3)', border: '0.5px solid var(--border)' }}>
        {[{ Icon: Mail, value: data.personal.email }, { Icon: Phone, value: data.personal.phone }, { Icon: MapPin, value: data.personal.location }].map(({ Icon, value }) => (<div key={value} className="flex items-center gap-2 mb-2"><Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} /><span className="text-xs" style={{ color: 'var(--body)', fontFamily: 'var(--font-mono)' }}>{value}</span></div>))}
      </div>
      <button onClick={() => { window.location.href = `mailto:${data.personal.email}`; }} className="w-full py-2 text-xs font-medium transition-all rounded-lg" style={{ background: 'var(--accent)', color: 'var(--bg)', fontFamily: 'var(--font-mono)' }}>{sendEmailLabel}</button>
      {btn(backLabel, showWelcomeButtons)}
    </div>
  );

  if (!isOpen) {
    return (<button onClick={() => setIsOpen(true)} className="fixed z-50 flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 hover:scale-110" style={{ background: 'var(--accent)', color: 'var(--bg)' }} aria-label="Open chatbot"><Terminal className="w-5 h-5" /></button>);
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 max-w-[calc(100vw-2rem)] rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden" style={{ background: 'var(--bg-2)', border: '0.5px solid var(--border)', maxHeight: '75vh' }}>
      <div className="flex items-center justify-between p-3" style={{ background: 'var(--bg)', borderBottom: '0.5px solid var(--border)' }}>
        <div className="flex items-center gap-2"><Terminal className="w-4 h-4" style={{ color: 'var(--accent)' }} /><div><div className="text-xs font-bold" style={{ color: 'var(--title)', fontFamily: 'var(--font-mono)' }}>assistant<span style={{ color: 'var(--accent)' }}>.sh</span></div><div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} /><span className="text-xs" style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>online</span></div></div></div>
        <button onClick={() => setIsOpen(false)} className="p-1 transition-colors rounded" style={{ color: 'var(--muted)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--title)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }} aria-label="Close"><X className="w-4 h-4" /></button>
      </div>
      <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: '380px' }}>
        {messages.map((msg, idx) => (<div key={idx} className={`mb-3 ${msg.isUser ? 'text-right' : ''}`}><div className="inline-block max-w-[85%] px-3 py-2 rounded-lg text-xs leading-relaxed" style={msg.isUser ? { background: 'var(--accent)', color: 'var(--bg)', borderRadius: '12px 12px 2px 12px', fontFamily: 'var(--font-mono)' } : { background: 'var(--bg-3)', color: 'var(--body)', borderRadius: '12px 12px 12px 2px', border: '0.5px solid var(--border)' }}>{msg.text}</div><div className="mt-1 text-xs opacity-40" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div></div>))}
        {currentView === 'welcome' && renderWelcomeButtons()}
        {currentView === 'projects' && renderProjectsList()}
        {currentView === 'project-detail' && renderProjectDetail()}
        {currentView === 'skills' && renderSkills()}
        {currentView === 'experiences' && renderExperiences()}
        {currentView === 'about' && <div className="mt-3">{btn(backLabel, showWelcomeButtons)}</div>}
        {currentView === 'contact' && renderContact()}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex justify-between p-2" style={{ background: 'var(--bg)', borderTop: '0.5px solid var(--border)' }}>
        {btn(menuLabel, showWelcomeButtons)}
        {btn(resetLabel, () => { setMessages([]); setCurrentView('welcome'); addBotMessage(data.chatbot.greeting); })}
        {btn(closeLabel, () => setIsOpen(false))}
      </div>
    </div>
  );
};

export default Chatbot;