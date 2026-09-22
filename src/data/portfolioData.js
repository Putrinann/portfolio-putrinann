import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  Database,
  FileSearch,
  Github,
  Linkedin,
  Mail,
  MessagesSquare,
  Instagram,
  Network,
  PartyPopper,
  PenLine,
  Trophy,
  UsersRound,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];

export const capabilities = [
  {
    title: "Systems",
    description: "Analyzing workflows and building digital systems",
    icon: Network
  },
  {
    title: "Data",
    description: "Reporting, validation and visualization",
    icon: BarChart3
  },
  {
    title: "Process",
    description: "Operational tracking and improvement",
    icon: Workflow
  },
  {
    title: "Quality",
    description: "Testing, validation and reliability",
    icon: ClipboardCheck
  }
];

export const experiences = [
  {
    company: "PT OMRON MANUFACTURING OF INDONESIA",
    location: "On-site",
    image: "/images/experience/omron-building.jpg",
    imageFit: "cover",
    role: "Fullstack Developer Intern - Warehouse Digitalization",
    period: "Sept 2025 - May 2026",
    summary:
      "Built and supported warehouse digitalization modules that connect operational workflows, reporting needs, data validation, testing, and user feedback.",
    bullets: [
      "Developed practical warehouse modules for operational tracking and reporting.",
      "Supported validation, testing, documentation, and user feedback cycles."
    ],
    tags: [
      "System Development",
      "Data Validation",
      "System Testing",
      "Reporting",
      "User Support",
      "Cross-functional Collaboration"
    ]
  },
  {
    company: "HARIAZONE",
    location: "Remote",
    image: "/images/experience/hariazone-logo.jpg",
    imageFit: "contain",
    role: "Internship - Graphic Designer",
    period: "Sept 2024 - Dec 2024",
    summary:
      "Handled campaign design requests while coordinating with team members, meeting deadlines, and keeping deliverables aligned with brand and stakeholder needs.",
    bullets: [
      "Handled 3-4 design requests per week while maintaining output accuracy.",
      "Produced campaign assets using Canva and Figma aligned with brand guidelines."
    ],
    tags: ["Graphic Design", "Canva", "Figma", "Campaign Assets", "Brand Guidelines", "Team Coordination", "CapCut / Video Editing"]
  }
];

export const projects = [
  {
    eyebrow: "Project 01",
    title: "Vanilla Booth",
    partner: "Virtual Photobooth Web App",
    liveUrl: "https://vanilla-virtualbooth.vercel.app/",
    ctaLabel: "Try It",
    images: [
      "/images/projects/vanilla-booth-empty.png",
      "/images/projects/vanilla-booth-upload.png",
      "/images/projects/vanilla-booth-decorate-news.png",
      "/images/projects/vanilla-booth-decorate-retro.png",
      "/images/projects/vanilla-booth-decorate-worn.png"
    ],
    description:
      "A playful virtual photobooth where users can take photos with the camera or upload from their gallery, choose shots to decorate, then customize them with layouts, themes, filters, zoom, drag adjustment, and cute sticker details.",
    tags: ["Camera Capture", "Photo Upload", "Image Decoration", "Filters", "Stickers", "Interactive UI"]
  },
  {
    eyebrow: "Project 02",
    title: "BIMBI",
    partner: "Kindergarten Activity & Habit Tracker",
    liveUrl: "https://bimbi-kindergarten.vercel.app/",
    ctaLabel: "Visit",
    images: [
      "/images/projects/bimbi-report.png",
      "/images/projects/bimbi-landing.png",
      "/images/projects/bimbi-parent-journal.png",
      "/images/projects/bimbi-material-history.png",
      "/images/projects/bimbi-teacher-dashboard.png"
    ],
    description:
      "A full-stack kindergarten platform that connects teachers and parents through role-based portals for daily habit and prayer tracking, 1-3 photo activity submissions, teacher star evaluations, learning-material history, remote-class links, and student biodata management secured with Supabase Row-Level Security.",
    tags: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Auth", "Storage", "Role-Based Access"]
  },
  {
    eyebrow: "Project 03",
    title: "Warehouse Digitalization System",
    partner: "PT OMRON MANUFACTURING OF INDONESIA",
    images: [
      "/images/projects/warehouse-thumbnail.png",
      "/images/projects/warehouse-dashboard.png",
      "/images/projects/warehouse-form.png",
      "/images/projects/warehouse-relabeling.png",
      "/images/projects/warehouse-checklist.png",
      "/images/projects/warehouse-receiving.png",
      "/images/projects/warehouse-transaction-report-blurred.png",
      "/images/projects/warehouse-stocktaking-result-blurred.png",
      "/images/projects/warehouse-migration-blurred.png",
      "/images/projects/warehouse-picking-instruction-blurred.png"
    ],
    description:
      "A practical digital system for warehouse, logistics, inventory, labeling, receiving, and reporting workflows, built to reduce manual process friction.",
    tags: ["React", "Node.js", "SQL Server", "REST API", "System Testing", "User Training"]
  },
  {
    eyebrow: "Project 04",
    title: "Plant Cycle Time Dashboard",
    partner: "PT Kalbio Global Medika / Kalbe",
    images: [
      "/images/projects/plant-cycle-thumbnail.png",
      "/images/projects/plant-cycle-kpi-month.jpg",
      "/images/projects/plant-cycle-dashboard.jpg",
      "/images/projects/plant-cycle-trend.jpg",
      "/images/projects/plant-cycle-overview.jpg",
      "/images/projects/plant-cycle-role-modal.jpg"
    ],
    description:
      "A web dashboard for monitoring plant cycle time across Production, QA, and QC divisions, helping stakeholders detect overdue processes earlier.",
    tags: ["Python", "PostgreSQL", "Dashboard", "Process Analytics"]
  },
  {
    eyebrow: "Project 05",
    title: "STUDIVY",
    partner: "Student Performance Prediction Dashboard",
    images: [
      "/images/projects/studivy-profile.png",
      "/images/projects/studivy-thumbnail.jpg",
      "/images/projects/studivy-altara-dashboard.jpg",
      "/images/projects/studivy-team.jpg"
    ],
    description:
      "A team-built academic decision platform that predicts student performance, recommends suitable instructors, and visualizes learning insights from student inputs.",
    tags: ["Django", "Scikit-Learn", "PostgreSQL", "Chart.js", "Machine Learning"]
  },
  {
    eyebrow: "Project 06",
    title: "Shoe Revenue Dashboard",
    partner: "Meilan Store",
    images: [
      "/images/projects/shoe-revenue-dashboard.svg",
      "/images/projects/shoe-revenue-dashboard-proof-2.svg"
    ],
    description:
      "A revenue dashboard web application with forecasting, data visualization, and export support for cleaner business insights.",
    tags: ["PHP Native", "Forecasting", "Data Visualization", "CSV Export", "PDF Export"]
  }
];

export const bioCards = [
  {
    title: "Biography",
    icon: PenLine,
    description:
      "I am a final-year Information Systems undergraduate student at President University with a concentration in Data Science. I am proactive, adaptable, and experienced in volunteering, event committees, and internships as a fullstack web developer and graphic designer. I work in a structured way, manage time carefully, and contribute well independently or in a team. With strong emotional management, I stay composed under pressure and navigate challenges with poise."
  },
  {
    title: "Fun Facts",
    icon: PartyPopper,
    description:
      "I love traveling, culinary exploring, listening to music, and watching movies or dramas. My playlist moves through R&B, a bit of hip-hop, pop, Indonesian, Western, and K-pop. I am native in Bahasa Indonesia, professionally comfortable in English, and currently learning French and German. I have also taught children, coached elementary students in chess, and joined social projects for elderly communities and the environment. I do a lot because I love learning and creating impact."
  }
];

export const volunteerMoments = [
  {
    title: "Community & Volunteer Highlights",
    image: "/images/impact/volunteer-moments-collage.png"
  },
  {
    title: "Creative Content & Committee Work",
    image: "/images/impact/volunteer-content-moments.png"
  },
  {
    title: "President University Fashion Week Moments",
    image: "/images/impact/volunteer-committee-moments.png"
  }
];

export const organizations = [
  { title: "Event Organizer Student Awarding Night - BEM President University (2024)" },
  {
    title: "PR Internal Committee - President University Fashion Week (2024)",
    image: "/images/certifications/pufw-pr-internal-certificate.png"
  },
  { title: "PR External Committee - Computing Sport Games Olympiad (2025)" },
  { title: "Treasurer - President University Computer and Technology Enthusiast Club" },
  { title: "Multimedia and Design - Investment Club Area 3" },
  { title: "Founder - Namazone" },
  {
    title: "Volunteer - Cemar Berbagi at Yayasan Yatim Darul Aitam (2024)",
    image: "/images/certifications/cemar-berbagi-volunteer.png"
  },
  {
    title: "Delegate - ImpactED 1.0 by AIESEC in President University (2024)",
    image: "/images/certifications/impacted-joining-certificate.png"
  },
  {
    title: "Participant - Youth Today x Join AIESEC (2024)",
    image: "/images/certifications/aiesec-youth-today.png"
  },
  {
    title: "Volunteer - Sehari Mengabdi by SISI Indonesia (2024)",
    image: "/images/certifications/sisi-volunteer-certificate.png"
  },
  { title: "Volunteer - Yayasan Kanker Indonesia" },
  { title: "Team Leader - Buzzter.id (Achieved 60-120% monthly profit margin)" }
];

export const certifications = [
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    image: "/images/certifications/ibm-introduction-data-analytics.png"
  },
  {
    title: "Machine Learning Learning Plan",
    issuer: "AWS",
    image: "/images/certifications/aws-01-machine-learning-learning-plan.jpeg"
  },
  {
    title: "Getting Started with Amazon OpenSearch Service",
    issuer: "AWS",
    image: "/images/certifications/aws-02-opensearch-service.jpeg"
  },
  {
    title: "Amazon Redshift Getting Started",
    issuer: "AWS",
    image: "/images/certifications/aws-03-redshift.jpeg"
  },
  {
    title: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS",
    image: "/images/certifications/aws-04-introduction-machine-learning.jpeg"
  },
  {
    title: "Amazon EMR Getting Started",
    issuer: "AWS",
    image: "/images/certifications/aws-05-emr.jpeg"
  },
  {
    title: "AWS Glue Getting Started",
    issuer: "AWS",
    image: "/images/certifications/aws-06-glue.jpeg"
  },
  {
    title: "Planning a Machine Learning Project",
    issuer: "AWS",
    image: "/images/certifications/aws-07-planning-ml-project.jpeg"
  },
  {
    title: "Machine Learning Essentials for Business and Technical Decision Makers",
    issuer: "AWS",
    image: "/images/certifications/aws-08-ml-essentials.jpeg"
  },
  {
    title: "Machine Learning Terminology and Process",
    issuer: "AWS",
    image: "/images/certifications/aws-09-ml-terminology-process.jpeg"
  },
  {
    title: "Introduction to Amazon SageMaker",
    issuer: "AWS",
    image: "/images/certifications/aws-10-sagemaker.jpeg"
  },
  {
    title: "Introduction to Amazon Athena",
    issuer: "AWS",
    image: "/images/certifications/aws-11-athena.jpeg"
  },
  {
    title: "Exam Readiness: AWS Certified Machine Learning - Specialty",
    issuer: "AWS",
    image: "/images/certifications/aws-12-certified-ml-specialty-readiness.jpeg"
  },
  {
    title: "Serverless Analytics",
    issuer: "AWS",
    image: "/images/certifications/aws-13-serverless-analytics.jpeg"
  },
  {
    title: "Intro to Data Science with Python",
    issuer: "DQLab",
    image: "/images/certifications/dqlab-introduction-data-science-python.png"
  },
  {
    title: "Introduction to Python with AI",
    issuer: "DQLab",
    image: "/images/certifications/dqlab-introduction-python-ai.png"
  },
  {
    title: "Introduction to SQL with AI",
    issuer: "DQLab",
    image: "/images/certifications/dqlab-introduction-sql-ai.png"
  },
  {
    title: "Finalist - IDEAS National Business Plan Competition Batch 11",
    issuer: "FEB UGM",
    image: "/images/certifications/feb-ugm-business-plan-finalist.png"
  },
  {
    title: "Youth Today x Join AIESEC - Enhancing Communication Through Critical Thinking",
    issuer: "AIESEC",
    image: "/images/certifications/aiesec-youth-today.png"
  },
  {
    title: "Internship Program - PT Omron Manufacturing of Indonesia",
    issuer: "Omron",
    image: "/images/certifications/omron-internship-certificate.png"
  }
];

export const awards = [
  {
    title: "Jababeka Scholarship Awardee",
    issuer: "Award",
    icon: Trophy
  },
  {
    title: "CHEC Scholarship Awardee",
    issuer: "Award",
    icon: Trophy
  },
  {
    title: "Finalist Business Plan FEB UGM 2025",
    issuer: "Competition",
    icon: Trophy
  }
];

export const toolkit = [
  {
    category: "Data & Reporting",
    icon: Database,
    tools: ["Excel", "Power BI", "Looker Studio", "SQL", "Python", "Google Sheets", "Data Cleaning", "Reporting"]
  },
  {
    category: "Systems & Dev",
    icon: BriefcaseBusiness,
    tools: ["React", "Node.js", "Django", "PHP", "PostgreSQL", "SQL Server", "HTML", "CSS", "REST API"]
  },
  {
    category: "Workflow & Collaboration",
    icon: UsersRound,
    tools: ["Git", "Documentation", "Testing", "User Support", "Microsoft Office", "Canva", "Figma", "Google Workspace", "Public Relations", "Event Planning"]
  }
];

export const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/putri-nurul-annisa", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/putrinann", icon: Github },
  { label: "Email", href: "mailto:putrinannisa04@gmail.com?subject=Portfolio%20Inquiry", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/6281522555426", icon: MessagesSquare },
  { label: "Instagram", href: "https://www.instagram.com/putrinann_", icon: Instagram }
];

export const heroSignals = [
  { label: "Map workflows", icon: FileSearch },
  { label: "Read data clearly", icon: BarChart3 },
  { label: "Improve processes", icon: Workflow },
  { label: "Test with care", icon: ClipboardCheck }
];
