import { SiteData } from "@/types/site";

export const siteData: SiteData = {
  identity: {
    fullName: "Satya Kishore Gollapalli",
    displayName: "Kishore",
    roles: [
      "B.Tech IT Student",
      "Cybersecurity Specialist in Training",
      "Software Developer",
      "AI Automation Builder",
      "Student Entrepreneur",
    ],
    college: "Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh, India",
    gradYear: "2029",
  },

  links: {
    email: "satyakishore877@gmail.com",
    github: "https://github.com/kishore-73-max",
    linkedin: "https://in.linkedin.com/in/satyakishore-gollapalli-937597361",
    portfolio: "https://voicera.in",
  },

  content: {
    meta: {
      title: "Satya Kishore Gollapalli | Software Developer & Cybersecurity Enthusiast",
      description:
        "Official portfolio of Satya Kishore Gollapalli (Kishore) — Information Technology student at Vishnu Institute of Technology, building scalable software, defensive cybersecurity systems, and AI automation.",
      keywords: [
        "Satya Kishore Gollapalli",
        "Kishore",
        "Cybersecurity",
        "Software Development",
        "AI Automation",
        "VOICERA AI",
        "voicera.in",
        "n8n",
        "Vishnu Institute of Technology",
        "Portfolio",
      ],
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      achievements: "Achievements",
      journey: "Journey",
      contact: "Contact",
    },
    hero: {
      badge: "B.Tech IT · Class of 2029",
      name: "SATYA KISHORE GOLLAPALLI",
      displayName: "Kishore",
      headline: "Building at the intersection of Cybersecurity, Software & AI.",
      subtitle: "Student. Developer in progress. Technology builder.",
      bio: "An IT student exploring security, developing software, and turning ideas into practical technology.",
      terminalWhoami: "IT Student | Cybersecurity Enthusiast",
      terminalFocus: "Security | Software | AI Automation",
      terminalStatus: "Learning. Building. Improving.",
      buttons: {
        viewProjects: "View Projects",
        exploreJourney: "Explore My Journey",
        github: "GitHub",
        contact: "Contact",
      },
    },
    about: {
      sectionTitle: "Executive Summary",
      sectionSubtitle: "Academic rigor, engineering mindset, and dedication to practical software.",
      story1:
        "I am an Information Technology student passionate about cybersecurity, software development, and AI-powered automation. I enjoy exploring technology, solving problems, taking part in hackathons, and building practical solutions.",
      story2:
        "My goal is to turn ideas into useful products, collaborate with talented people, and keep improving my technical skills.",
      stats: {
        collegeLabel: "Institution",
        collegeValue: "Vishnu Institute of Technology",
        degreeLabel: "Degree & Specialization",
        degreeValue: "B.Tech in Information Technology",
        gradLabel: "Expected Graduation",
        gradValue: "2029",
        locationLabel: "Location",
        locationValue: "Bhimavaram, Andhra Pradesh, India",
      },
      values: [
        {
          title: "Engineering Discipline",
          desc: "Grounding development in clean architecture, strong defensive principles, and reproducible code standards.",
        },
        {
          title: "Rapid Prototyping",
          desc: "Translating abstract technical requirements into functional, interactive software that delivers immediate value.",
        },
        {
          title: "Continuous Mastery",
          desc: "Actively mastering data structures, algorithms, and defensive systems to build resilient technology.",
        },
      ],
    },
    skills: {
      sectionTitle: "Technical Inventory",
      sectionSubtitle:
        "A transparent, verified breakdown of proficiencies across programming, systems, and security.",
      note: "All skill classifications reflect demonstrable hands-on lab projects, university coursework, and live software builds.",
      categories: [
        {
          title: "Programming Languages",
          iconName: "Code2",
          skills: [
            { name: "Java", levelLabel: "Object-Oriented & Applied" },
            { name: "Python", levelLabel: "Applied & Scripting" },
            { name: "C", levelLabel: "Systems Fundamentals" },
          ],
        },
        {
          title: "Computer Science Foundations",
          iconName: "Binary",
          skills: [
            { name: "DSA", levelLabel: "Active Problem Solving" },
            { name: "Computer Networks", levelLabel: "TCP/IP & OSI Protocols" },
            { name: "DBMS", levelLabel: "Relational Modeling & SQL" },
            { name: "OOP", levelLabel: "Encapsulation & Architecture" },
          ],
        },
        {
          title: "Security & Applied Systems",
          iconName: "Cpu",
          skills: [
            { name: "Cybersecurity", levelLabel: "Comprehensive Defense & Threat Analysis" },
            { name: "AI Automation", levelLabel: "Agentic Workflows & Tool Use" },
            { name: "n8n", levelLabel: "Workflow Orchestration" },
            { name: "Git & GitHub", levelLabel: "Version Control & Review" },
            { name: "Web Development", levelLabel: "Modern React & Next.js" },
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Featured Deployments",
      sectionSubtitle:
        "Live products, interactive prototypes, and security research initiatives.",
      legendTitle: "Deployment Status",
      legend: [
        {
          status: "Completed",
          label: "Live & Deployed",
          description: "Fully built, tested, and actively operating in production.",
          colorClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
        },
        {
          status: "Building",
          label: "Active Development",
          description: "Under active architecture iterations and feature build-out.",
          colorClass: "border-blue-500/40 bg-blue-500/10 text-blue-400",
        },
        {
          status: "Prototype",
          label: "Interactive Prototype",
          description: "Working client-side demonstration testing UI choreography.",
          colorClass: "border-amber-500/40 bg-amber-500/10 text-amber-400",
        },
        {
          status: "Research",
          label: "Applied Research",
          description: "Threat vector analysis, technical literature, and prototyping.",
          colorClass: "border-purple-500/40 bg-purple-500/10 text-purple-400",
        },
        {
          status: "Idea",
          label: "Conceptual Phase",
          description: "Feasibility modeling and architectural design.",
          colorClass: "border-slate-500/40 bg-slate-500/10 text-slate-400",
        },
      ],
      viewDetails: "Details",
      closeDetails: "Close",
      viewCode: "Source Code",
      liveDemo: "Launch Live App",
      comingSoonTooltip: "Coming soon — link will be added upon public release",
      featuresExploredLabel: "Core Capabilities & Architecture",
      items: [
        {
          id: "voicera-ai",
          title: "VOICERA AI",
          category: "AI Automation / Production Startup",
          status: "Completed",
          description:
            "An AI-powered voice receptionist designed to help businesses handle customer calls, appointments, and routine inquiries through automated workflows. Already built and live in production.",
          detailedDescription:
            "VOICERA AI is a production voice automation platform designed for forward-thinking businesses. It transforms customer interactions by deploying conversational voice bots that handle incoming inquiries, coordinate calendars, and eliminate receptionist bottlenecks with zero latency.",
          features: [
            "Production voice agent handling inbound and outbound customer calls",
            "Autonomous appointment scheduling with Google Calendar sync",
            "Intelligent conflict resolution and custom conversational branches",
            "Structured lead capture and automated CRM ingestion pipelines",
            "Multi-node n8n orchestration connecting webhooks, LLMs, and telephony",
          ],
          tags: ["Voice AI", "n8n", "Google Calendar", "Production", "Telephony"],
          codeUrl: "",
          demoUrl: "https://voicera.in",
          notes:
            "Fully built and operating at voicera.in. Active startup initiative delivering real-world voice infrastructure.",
        },
        {
          id: "vedic-resonance",
          title: "Vedic Resonance",
          category: "Web Application / Wellness Technology",
          status: "Prototype",
          description:
            "An immersive wellness web application combining breathing exercises, calming audio, and interactive visual environments.",
          detailedDescription:
            "A technical prototype exploring sensory web experiences. It blends mathematical pacing curves for breathing exercises with Web Audio API soundscapes and reactive graphical canvas elements for stress regulation.",
          features: [
            "Algorithmic rhythmic breathing pacing engine",
            "Multi-track ambient soundscape mixer with Web Audio API",
            "Minimalist, distraction-free sensory visualizer",
            "Engineered for hackathon technical demonstrations and user testing",
          ],
          tags: ["Next.js", "Web Audio API", "Interactive UI", "Hackathon"],
          codeUrl: "",
          demoUrl: "",
          disclaimer:
            "Conceptual design and wellness technology prototype. Does not make medical or therapeutic claims.",
          notes:
            "Exploration of interactive audio-visual feedback loops for focused breathing.",
        },
        {
          id: "smart-cybersecurity",
          title: "Smart Cybersecurity Project",
          category: "Cybersecurity / Threat Intelligence",
          status: "Research",
          description:
            "Exploring hackathon ideas in network security, threat analysis, and intelligent security monitoring.",
          detailedDescription:
            "Applied defensive cybersecurity research project investigating telemetry anomaly heuristics, protocol validation, and automated incident triage pipelines for educational campus networks.",
          features: [
            "Defensive network topology modeling and attack vector simulation",
            "Real-time packet inspection and anomaly pattern recognition",
            "Automated alert consolidation and triage workflows",
            "Evaluation of open-source SIEM engines and intrusion prevention rules",
          ],
          tags: [
            "Network Security",
            "Packet Analysis",
            "Threat Modeling",
            "Security Monitoring",
          ],
          codeUrl: "",
          demoUrl: "",
          notes:
            "Actively researching hackathon problem statements and open-source detection engines.",
        },
      ],
    },
    achievements: {
      sectionTitle: "Honors & Leadership",
      sectionSubtitle:
        "Verified engineering milestones, competitive hackathons, and team leadership.",
      noDateNotice: "Milestones presented without chronological pressure or artificial ranks.",
      items: [
        {
          id: "sih",
          title: "Smart India Hackathon, Participation",
          organization: "Ministry of Education & AICTE",
          type: "National Level Innovation",
          description:
            "Selected and participated in India's premier national hackathon, collaborating under high-pressure conditions to engineer scalable software solutions for institutional challenges.",
          highlightBadge: "National Level",
        },
        {
          id: "iot-workshop",
          title: "IoT Workshop Winner",
          organization: "Vishnu Institute of Technology",
          type: "Technical Engineering Challenge",
          description:
            "Secured 1st place in the university IoT engineering workshop through rapid hardware-software prototyping, sensor integration, and live systems demonstration.",
          highlightBadge: "1st Place Winner",
        },
        {
          id: "student-leadership",
          title: "Student Leadership & Team Coordination",
          organization: "Department of Information Technology",
          type: "Institutional Leadership",
          description:
            "Coordinated student technical cohorts, facilitated peer code review circles, and directed collaborative milestones for semester engineering projects.",
          highlightBadge: "Leadership",
        },
        {
          id: "ai-automation-dev",
          title: "AI Automation Product Development",
          organization: "VOICERA AI Initiative",
          type: "Production Engineering",
          description:
            "Engineered and launched VOICERA AI (voicera.in), creating production-grade voice workflows and scheduling integrations for real business operations.",
          highlightBadge: "Live Builder",
        },
      ],
    },
    exploring: {
      sectionTitle: "Technical Trajectory",
      sectionSubtitle:
        "A structured roadmap of active computational study, defensive security, and scalable software building.",
      steps: [
        {
          step: 1,
          title: "Java & Data Structures",
          statusLabel: "Active Practice",
          description:
            "Deepening mastery of algorithmic complexity, tree traversals, dynamic programming, and computational logic in Java.",
          topics: ["Object-Oriented Design", "Collections Framework", "Algorithm Optimization", "Complexity Analysis"],
        },
        {
          step: 2,
          title: "Defensive Cybersecurity Systems",
          statusLabel: "Advanced Study",
          description:
            "Analyzing network security models, packet inspection architectures, access control hierarchies, and infrastructure defense.",
          topics: ["Network Protocol Security", "Vulnerability Assessment", "Threat Modeling", "Defensive Operations"],
        },
        {
          step: 3,
          title: "Modern Software Architecture",
          statusLabel: "Production Focus",
          description:
            "Architecting clean, type-safe full-stack software with Next.js, TypeScript, scalable databases, and modular design patterns.",
          topics: ["Enterprise TypeScript", "Server Architecture", "State Choreography", "REST & API Design"],
        },
        {
          step: 4,
          title: "Enterprise AI & Voice Automation",
          statusLabel: "Production Proven",
          description:
            "Building robust voice agents and business automation pipelines with n8n, LLM tool-calling, and custom webhook integrations.",
          topics: ["Voice Agent Pipelines", "n8n Infrastructure", "Telephony Gateways", "LLM Integration"],
        },
        {
          step: 5,
          title: "Open Source & Collaborative Git",
          statusLabel: "Expanding",
          description:
            "Practicing disciplined Git hygiene, code review standards, documentation rigor, and participating in open technology.",
          topics: ["Rebase & Branch Hygiene", "Semantic Versioning", "CI/CD Foundations", "Open Source Repositories"],
        },
        {
          step: 6,
          title: "Competitive Hackathons & Innovation",
          statusLabel: "Ongoing",
          description:
            "Uniting with top engineering peers to transform complex industry problem statements into working, scalable prototypes.",
          topics: ["Rapid Execution", "Product Pitches", "System Resilience", "Cross-Domain Synergy"],
        },
      ],
    },
    contact: {
      sectionTitle: "Direct Engagement",
      headline: "Have an idea? Let's build something meaningful.",
      subtext:
        "Open to conversations regarding software engineering, cybersecurity initiatives, hackathons, and AI workflow automation. Reach out directly.",
      emailButton: "Send an Email",
      copyEmail: "Copy Email Address",
      copied: "Copied to clipboard!",
      channels: [
        {
          name: "Email",
          type: "email",
          label: "Direct Email",
          description: "satyakishore877@gmail.com — Best for inquiries and technical discussions.",
        },
        {
          name: "GitHub",
          type: "github",
          label: "Code & Repositories",
          description: "github.com/kishore-73-max — Explore source code, labs, and implementations.",
        },
        {
          name: "LinkedIn",
          type: "linkedin",
          label: "Professional Profile",
          description: "Connect for engineering networks, hackathons, and academic collaborations.",
        },
        {
          name: "Portfolio",
          type: "portfolio",
          label: "VOICERA AI Production",
          description: "voicera.in — Explore the live voice automation platform.",
        },
      ],
      honestDisclaimer:
        "All links are verified and active.",
    },
    footer: {
      tagline: "Engineered with curiosity, precision, and honest craftsmanship.",
      designedBy: "Designed and built by Kishore.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
    common: {
      comingSoon: "Coming soon",
      statusBadge: {
        Completed: "Live & Deployed",
        Building: "Active Development",
        Prototype: "Interactive Prototype",
        Research: "Applied Research",
        Idea: "Conceptual Phase",
      },
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      skipToContent: "Skip to main content",
    },
  },
};
