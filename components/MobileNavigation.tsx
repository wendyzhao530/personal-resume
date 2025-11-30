

import React from 'react';
import { User, FileText, Briefcase, Award, Layout } from 'lucide-react';
import { UIConfig } from '../types';

interface MobileNavigationProps {
  ui: UIConfig;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ ui }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if needed, though scroll-mt handles it usually
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
    <div className="md:hidden mb-12 animate-fade-in-up delay-100">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-2 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-white mx-2">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center justify-center gap-1.5 flex-1 py-2 rounded-xl text-nude-600 hover:text-nude-900 hover:bg-nude-50 transition-all active:scale-95"
            >
              <div className="p-1.5 bg-white rounded-full shadow-sm text-nude-500">
                {item.icon}
              </div>
              <span className="text-xs font-medium scale-90">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;