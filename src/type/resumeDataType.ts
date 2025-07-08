export interface ResumeDataType {
  name: string;
  summary: string;
  contact: {
    email: string;
    github: string;
    blog: string;
    youtube: string;
  };
  projects: Project[];
  experiences: {
    awards: string[];
    education: string[];
  };
}

export interface Project  {
    name: string;
    date: string;
    role: string;
    techStack: string[];
    description: string;
    learned: ProjectLearning[];
  };

export interface ProjectLearning  {
      title: string;
      details: DetailItem[];
      result: string;
    };

export interface DetailItem  {
    title: string;
    contents: string[];
}