

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import Typewriter from './components/Typewriter';
import Section from './components/Section';
import { RESUME_DATA } from './constants';
import { GraduationCap, Briefcase, Award, Mail, Phone, MapPin, Download, Layout, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const data = RESUME_DATA[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen font-sans text-stone-700 pb-20 selection:bg-nude-200 selection:text-nude-900 leading-loose md:leading-relaxed">
      <Navigation ui={data.ui} lang={lang} onToggleLang={toggleLang} />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 pt-24 md:pt-32" id="resume-content">
        
        {/* Header / Intro */}
        <header id="header" className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8 md:mb-16 animate-fade-in-up">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="h-12">
               <Typewriter texts={data.ui.typewriterTexts} speed={150} pause={3000} />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-nude-700 mt-4 text-sm md:text-base">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-nude-100">
                <MapPin size={16} className="text-nude-500" />
                <span>{data.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-nude-100">
                <Phone size={16} className="text-nude-500" />
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-nude-100">
                <Mail size={16} className="text-nude-500" />
                <span>{data.personalInfo.email}</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-nude-300 to-rose-200 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src={data.personalInfo.avatar} 
              alt={data.personalInfo.name} 
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </header>

        {/* Mobile Navigation Widget - displayed below header on mobile */}
        <MobileNavigation ui={data.ui} />

        {/* Education Section */}
        <Section id="education" title={data.ui.sections.education} icon={<GraduationCap size={28} />}>
          <div className="space-y-8">
            {data.education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0 border-l-2 border-nude-200 md:border-l-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-nude-900">{edu.school}</h3>
                    <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {edu.degreeType}
                    </span>
                  </div>
                  <span className="text-nude-600 font-medium font-serif bg-nude-50 px-3 py-1 rounded-md text-sm mt-1 md:mt-0">{edu.period}</span>
                </div>
                <div className="text-stone-600 font-medium mb-2">{edu.major}</div>
                <div className="text-nude-700 font-semibold mb-3">{data.ui.labels.gpa}: {edu.gpa}</div>
                <div className="space-y-2 text-sm text-stone-600">
                  <p><span className="font-semibold text-nude-800">{data.ui.labels.courses}：</span>{edu.courses}</p>
                  <p><span className="font-semibold text-nude-800">{data.ui.labels.awards}：</span>{edu.awards}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title={data.ui.sections.experience} icon={<Briefcase size={28} />}>
          <div className="space-y-12">
            {data.internship.map((job, idx) => (
              <div key={idx} className="group">
                {/* Job Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 pb-2 border-b border-nude-100">
                  <div>
                     <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-nude-900">{job.company}</h3>
                        {/* Assuming internship for now as per data, but could make dynamic if needed */}
                        <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">
                          {lang === 'zh' ? '实习' : 'Intern'}
                        </span>
                     </div>
                     <p className="text-stone-500 text-sm mt-1">{job.department} | {job.role}</p>
                  </div>
                  <span className="text-nude-600 font-medium font-serif text-sm mt-2 md:mt-0">{job.period}</span>
                </div>

                {/* Projects */}
                <div className="space-y-8">
                  {job.projects.map((project, pIdx) => (
                    <div key={pIdx} className="bg-white/50 p-5 rounded-xl hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-nude-100">
                      <h4 className="font-bold text-nude-800 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-nude-400"></span>
                        {project.name}
                      </h4>
                      <div className="space-y-3 text-sm text-stone-600">
                        <p><span className="font-semibold text-nude-700">{data.ui.labels.background}</span>{project.background}</p>
                        <div>
                          <span className="font-semibold text-nude-700 block mb-1">{data.ui.labels.responsibilities}</span>
                          <ul className="space-y-2">
                            {project.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex gap-2">
                                <span className="text-nude-400 font-serif italic">{rIdx + 1}.</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="bg-nude-50 p-3 rounded-lg border border-nude-100">
                          <span className="font-semibold text-nude-700">{data.ui.labels.growth}</span>
                          {project.growth}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section id="portfolio" title={data.ui.sections.portfolio} icon={<Layout size={28} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.portfolio.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group h-full"
              >
                 <div className="bg-white/50 p-6 rounded-xl h-full hover:shadow-md transition-all duration-300 border border-nude-100 hover:border-nude-300 hover:bg-white/80 relative overflow-hidden">
                   {/* Decorative background circle */}
                   <div className="absolute -right-6 -top-6 w-24 h-24 bg-nude-100/50 rounded-full blur-xl group-hover:bg-rose-100/50 transition-colors"></div>
                   
                   <div className="flex justify-between items-start mb-3 relative z-10">
                      <h3 className="text-lg font-bold text-nude-900 group-hover:text-rose-500 transition-colors">{item.name}</h3>
                      <ExternalLink size={18} className="text-nude-400 group-hover:text-rose-500 transition-colors" />
                   </div>
                   <p className="text-stone-600 font-medium mb-4 relative z-10">{item.description}</p>
                   <p className="text-xs text-stone-400 italic border-t border-nude-100 pt-3 relative z-10">
                     {item.note}
                   </p>
                 </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title={data.ui.sections.skills} icon={<Award size={28} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Skills */}
            <div className="bg-gradient-to-br from-white to-nude-50 p-6 rounded-xl shadow-sm border border-nude-100">
              <h3 className="font-bold text-nude-900 mb-4 border-b border-nude-200 pb-2">{data.ui.sections.skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white text-nude-700 rounded-lg shadow-sm border border-nude-100 text-sm font-medium hover:text-nude-500 hover:border-nude-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Competitions */}
            <div className="bg-gradient-to-br from-white to-nude-50 p-6 rounded-xl shadow-sm border border-nude-100">
              <h3 className="font-bold text-nude-900 mb-4 border-b border-nude-200 pb-2">{data.ui.sections.competitionsTitle}</h3>
              <ul className="space-y-3">
                {data.competitions.map((comp, idx) => (
                  <li key={idx} className="flex justify-between items-start text-sm">
                    <span className="text-stone-600 flex-1">{comp.name}</span>
                    <div className="flex flex-col items-end">
                       <span className="text-nude-700 font-semibold text-right">{comp.award}</span>
                       <span className="text-nude-400 text-xs">{comp.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Floating Download Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <a
          href="https://ncstatic-file.clewm.net/rsrc/2025/1130/14/c9cd624ebd0a91923c67131c2d473b3d.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-nude-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-nude-700 hover:scale-105 transition-all duration-300 font-medium"
        >
          <Download size={20} />
          {data.ui.download}
        </a>
      </div>
    </div>
  );
};

export default App;