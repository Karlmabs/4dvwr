export type Skill = {
  id: number;
  profileId: number;
  skillId: number;
};

export type Education = {
  id: number;
  profileId: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: number;
  endDate: number;
};

export type Experience = {
  id: number;
  profileId: number;
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: number;
  endDate: number;
};

export type Profile = {
  id: number;
  username: string;
  email: string;
  currentJobTitle: string;
  industry: string;
  summary: string;
  headline: string;
  website: string;
  openForWork: boolean;
  education: Education[];
  experiences: Experience[];
  skills: Skill[];
  connections: number[];
};
