export type ProjectStatus = "Idea" | "Prototype" | "Building" | "Completed" | "Research";

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  detailedDescription?: string;
  features: string[];
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  disclaimer?: string;
  notes?: string;
}

export interface SkillItem {
  name: string;
  levelLabel: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  type: string;
  description: string;
  highlightBadge: string;
}

export interface RoadmapStep {
  step: number;
  title: string;
  statusLabel: string;
  description: string;
  topics: string[];
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface StatusLegendItem {
  status: ProjectStatus;
  label: string;
  description: string;
  colorClass: string;
}

export interface SiteDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    achievements: string;
    journey: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    displayName: string;
    headline: string;
    subtitle: string;
    bio: string;
    terminalWhoami: string;
    terminalFocus: string;
    terminalStatus: string;
    buttons: {
      viewProjects: string;
      exploreJourney: string;
      github: string;
      contact: string;
    };
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    story1: string;
    story2: string;
    stats: {
      collegeLabel: string;
      collegeValue: string;
      degreeLabel: string;
      degreeValue: string;
      gradLabel: string;
      gradValue: string;
      locationLabel: string;
      locationValue: string;
    };
    values: {
      title: string;
      desc: string;
    }[];
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    categories: SkillCategory[];
    note: string;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    legendTitle: string;
    legend: StatusLegendItem[];
    viewDetails: string;
    closeDetails: string;
    viewCode: string;
    liveDemo: string;
    comingSoonTooltip: string;
    featuresExploredLabel: string;
    items: Project[];
  };
  achievements: {
    sectionTitle: string;
    sectionSubtitle: string;
    noDateNotice: string;
    items: AchievementItem[];
  };
  exploring: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: RoadmapStep[];
  };
  contact: {
    sectionTitle: string;
    headline: string;
    subtext: string;
    emailButton: string;
    copyEmail: string;
    copied: string;
    channels: {
      name: string;
      type: "email" | "github" | "linkedin" | "portfolio";
      label: string;
      description: string;
    }[];
    honestDisclaimer: string;
  };
  footer: {
    tagline: string;
    designedBy: string;
    rights: string;
    backToTop: string;
  };
  common: {
    comingSoon: string;
    statusBadge: Record<ProjectStatus, string>;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
}

export interface SiteData {
  identity: {
    fullName: string;
    displayName: string;
    roles: string[];
    college: string;
    gradYear: string;
  };
  links: SocialLinks;
  content: SiteDictionary;
}
