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

type Project = {
    name: string;
    date: string;
    role: string;
    techStack: string[];
    description: string;
    learned: ProjectLearning[];
  };

type ProjectLearning = {
      title: string;
      details: DetailItem[];
      result: string;
    };

type DetailItem = {
    title: string;
    contents: string[];
}