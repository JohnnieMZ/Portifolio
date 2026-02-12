
export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  stack: string[];
  links: {
    github: string;
    demo: string;
  };
}

export interface Skill {
  name: string;
  level: 'Proficiente' | 'Avançado' | 'Intermediário';
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
