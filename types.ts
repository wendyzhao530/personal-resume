

export interface Education {
  school: string;
  degreeType: string;
  major: string;
  period: string;
  gpa: string;
  rank?: string;
  courses: string;
  awards: string;
}

export interface Job {
  company: string;
  role: string;
  department: string;
  period: string;
  projects: Project[];
}

export interface Project {
  name: string;
  roleType?: string;
  background: string;
  responsibilities: string[];
  growth: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  link: string;
  note: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Competition {
  year: string;
  name: string;
  award: string;
}

export interface UIConfig {
  name: string;
  jobTitle: string;
  typewriterTexts: string[];
  download: string;
  nav: {
    home: string;
    education: string;
    experience: string;
    portfolio: string;
    skills: string;
  };
  sections: {
    education: string;
    experience: string;
    portfolio: string;
    skills: string;
    skillsTitle: string;
    competitionsTitle: string;
  };
  labels: {
    courses: string;
    awards: string;
    gpa: string;
    background: string;
    responsibilities: string;
    growth: string;
  };
}

export interface ResumeData {
  personalInfo: {
    name: string;
    location: string;
    phone: string;
    email: string;
    avatar: string;
  };
  education: Education[];
  internship: Job[];
  portfolio: PortfolioItem[];
  skills: string[];
  competitions: Competition[];
  ui: UIConfig;
}

export interface BilingualData {
  zh: ResumeData;
  en: ResumeData;
}