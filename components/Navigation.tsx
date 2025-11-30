

import React, { useState, useEffect } from 'react';
import { FileText, User, Briefcase, Award, Languages, Layout } from 'lucide-react';
import { UIConfig } from '../types';

interface NavigationProps {
  ui: UIConfig;
  lang: 'zh' | 'en';
  onToggleLang: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ ui, lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'header', label: ui.nav.home, icon: <User size={18} /> },
    { id: 'education', label: ui.nav.education, icon: <FileText size={18} /> },
    { id: 'experience', label: ui.nav.experience, icon: <Briefcase size={18} /> },
    { id: 'portfolio', label: ui.nav.portfolio, icon: <Layout size={18} /> },
    { id: 'skills', label: ui.nav.skills, icon: <Award size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div 
          className="text-nude-800 font-bold font-serif text-xl cursor-pointer"
          onClick={() => scrollTo('header')}
        >
          {ui.name}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-2 text-nude-700 hover:text-nude-500 font-medium transition-colors"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-nude-200 text-nude-700 hover:bg-nude-50 hover:text-nude-900 transition-all"
            aria-label="Toggle Language"
          >
            <Languages size={16} />
            <span className="text-sm font-semibold">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
        </div>

        {/* Mobile Lang Toggle Only (Menu removed) */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-nude-200 text-nude-700"
          >
             <span className="text-xs font-bold">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;