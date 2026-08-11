export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  education: EducationProps[];
  experience: ExperienceProps[];
  opeds: OpedProps[];
  research: ResearchProps[];
  awards: AwardProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  details: string[];
  logo?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface OpedProps {
  title: string;
  publication: string;
  date: string;
  logo?: string;
}

export interface ResearchProps {
  title: string;
  publication: string;
  date: string;
}

export interface AwardProps {
  title: string;
  organization: string;
  date: string;
  flag?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
