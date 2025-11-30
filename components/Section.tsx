import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="py-12 md:py-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        {icon && <div className="text-nude-500">{icon}</div>}
        <h2 className="text-3xl font-bold text-nude-800 font-serif border-b-4 border-nude-200 pb-2 inline-block">
          {title}
        </h2>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
        {children}
      </div>
    </section>
  );
};

export default Section;
