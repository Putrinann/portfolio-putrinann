import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  Database,
  FileSearch,
  Github,
  Linkedin,
  Mail,
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
      "Built and supported warehouse digitalization modules that connected daily operational workflows with reporting, data validation, testing, and user feedback.",
    bullets: [
      "Developed and refined 45+ warehouse system menus covering receiving, relabeling, checklist flows, transaction tracking, stocktaking, and operational reporting.",
      "Worked with React, Node.js, Microsoft SQL Server, REST APIs, JavaScript-based interfaces, and QR-integrated flows to support practical warehouse operations.",
      "Prepared test scenarios, validated data and system behavior, documented findings, supported retesting, and helped revise bugs with users and stakeholders.",
      "Trained warehouse staff and supported system adoption by explaining workflows, demonstrating features, and helping users navigate the system.",
      "Translated user feedback into clearer workflows, interface improvements, and follow-up actions for the development team."
    ],
    learning:
      "Strengthened my ability to understand real operational processes, deliver a fullstack system at scale, test and revise features, train end users, and communicate across technical and non-technical teams in a manufacturing environment.",
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
      "Handled 3-4 design requests per week while maintaining output accuracy and consistent delivery timelines.",
      "Produced campaign assets using Canva and Figma while following brand guidelines and stakeholder feedback.",
      "Supported short-form video editing and content preparation using CapCut.",
      "Coordinated revisions with team members and adapted visual deliverables to different campaign needs."
    ],
    learning:
      "Built stronger visual communication, prioritization, stakeholder coordination, and deadline management skills while working in a remote team.",
    tags: ["Graphic Design", "Canva", "Figma", "Campaign Assets", "Brand Guidelines", "Team Coordination", "CapCut / Video Editing"]
  }
];

export const projects = [
  {
    eyebrow: "Project 04",
    priority: 4,
    category: "fun",
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
      "A browser-based virtual photobooth for capturing or uploading photos, selecting favorite shots, decorating them with layouts, frames, filters, colors, draggable stickers, and exporting the final result.",
    details: [
      "Capture flow with webcam access, manual upload, retake, photo selection, and timer options.",
      "Decoration workspace with Polaroid, strip, and grid layouts plus frame templates, filters, sticker placement, photo positioning, and scaling.",
      "Export support for PNG download, browser print, and short WebM animation using canvas rendering."
    ],
    tags: ["React", "Vite", "Tailwind CSS", "react-webcam", "html2canvas", "Photo Export"]
  },
  {
    eyebrow: "Project 02",
    priority: 2,
    category: "web",
    title: "SM4ILS",
    partner: "Smart W4C Integrated Logistics System - PT Wasteforchange Alam Indonesia",
    images: [
      "/images/projects/smails/Screenshot 2026-11-04 000837.png",
      "/images/projects/smails/Screenshot 2026-11-04 000852.png",
      "/images/projects/smails/Screenshot 2026-11-04 000909.png",
      "/images/projects/smails/Screenshot 2026-11-04 004435.png",
      "/images/projects/smails/Screenshot 2026-11-04 004505.png",
      "/images/projects/smails/Screenshot 2026-11-04 004626.png",
      "/images/projects/smails/Screenshot 2026-11-04 004655.png",
      "/images/projects/smails/Screenshot 2026-11-04 004750.png",
      "/images/projects/smails/Screenshot 2026-11-04 004811.png",
      "/images/projects/smails/Screenshot 2026-11-04 004828.png",
      "/images/projects/smails/Screenshot 2026-11-04 004903.png",
      "/images/projects/smails/Screenshot 2026-11-04 004939.png"
    ],
    description:
      "A real-client capstone project that digitalizes WasteforChange's logistics operations into one role-based platform for customer service, route execution, vendor selection, procurement support, and live monitoring.",
    details: [
      "Mapped the transition from fragmented Google Sheets and WhatsApp coordination into an integrated pickup-to-route workflow.",
      "Designed role-based experiences for Customer, Admin Operational, Driver, Vendor, Procurement Staff, and IT/System Administrator.",
      "Combined route optimization, operational monitoring, vendor document review, AHP qualification, Random Forest recommendation support, and chatbot assistance.",
      "Created a user guidebook covering system overview, approval flows, role responsibilities, and step-by-step operational workflows."
    ],
    tags: ["Real Client", "React", "Node.js", "Python", "PostgreSQL", "Machine Learning", "AHP", "Random Forest", "Logistics", "Route Optimization", "Role-Based System", "Operational Monitoring", "Documentation"]
  },
  {
    eyebrow: "Project 05",
    priority: 5,
    category: "web",
    title: "BIMBI",
    partner: "Kindergarten Activity & Habit Tracker",
    images: [
      "/images/projects/bimbi-material-history.png",
      "/images/projects/bimbi-online-report.png",
      "/images/projects/bimbi-report.png",
      "/images/projects/bimbi-landing.png",
      "/images/projects/bimbi-parent-journal.png",
      "/images/projects/bimbi-teacher-dashboard.png"
    ],
    description:
      "A role-based kindergarten communication platform for Admin, Teacher, and Parent users to manage class data, student profiles, daily journals, learning materials, teacher feedback, and parent-facing reports.",
    details: [
      "Admin manages users, classes, teacher assignments, school data, and learning links from one dashboard.",
      "Teachers review daily journals, update class materials and meeting links, add ratings, and monitor student progress.",
      "Parents view child biodata, daily reports, photo galleries, learning history, teacher feedback, and report summaries.",
      "Supabase schema prepares Auth, profiles, classes, students, daily reports, report photos, Edge Functions, and Row-Level Security."
    ],
    tags: ["React 19", "Vite", "Tailwind CSS", "Supabase", "RLS", "Role-Based Access"]
  },
  {
    eyebrow: "Project 01",
    priority: 1,
    category: "web",
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
      "A warehouse digitalization system with 45+ operational menus for logistics, inventory, labeling, receiving, reporting, QR-integrated flows, and Microsoft SQL Server-backed data.",
    details: [
      "Built and refined 45+ menus for warehouse transactions, receiving, relabeling, checklist flows, reports, stocktaking, and operational validation.",
      "Supported QR integration for faster item identification and workflow tracking.",
      "Worked with React, Node.js, JavaScript interfaces, Microsoft SQL Server data, REST APIs, and testing cycles.",
      "Supported end-user training, bug revision, retesting, documentation, and feedback-driven system improvements."
    ],
    tags: ["React", "Node.js", "JavaScript", "Microsoft SQL Server", "REST API", "QR Integration", "45+ Menus", "System Testing", "Staff Training", "Bug Fixing"]
  },
  {
    eyebrow: "Project 03",
    priority: 3,
    category: "data",
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
    eyebrow: "Project 06",
    priority: 6,
    category: "data",
    title: "STUDIVY",
    partner: "Student Performance Prediction Dashboard - Altara",
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
    eyebrow: "Project 07",
    priority: 7,
    category: "web",
    title: "Shoe Revenue Dashboard",
    partner: "Meilan Store",
    images: [
      "/images/projects/meilan-dashboard-censored.png",
      "/images/projects/meilan-order-search.png",
      "/images/projects/meilan-current-cart.png",
      "/images/projects/meilan-invoice.png",
      "/images/projects/meilan-transaction-history.png",
      "/images/projects/meilan-products.png"
    ],
    description:
      "A CRUD-focused shoe store management system for handling product data, stock, order search, cart flow, invoices, transaction history, and dashboard summaries.",
    details: [
      "Product CRUD covers item names, prices, sizes, stock, edit, and delete actions.",
      "Order flow includes product search, cart quantity input, invoice preview, print action, and transaction history.",
      "Dashboard summarizes store activity while keeping the system focused on practical sales administration."
    ],
    tags: ["PHP Native", "CRUD System", "Order Management", "Invoice", "Product Stock", "Dashboard"]
  },
  {
    eyebrow: "Project 08",
    priority: 8,
    category: "web",
    title: "Web Basics Journal",
    partner: "Dicoding - Belajar Dasar Pemrograman Web",
    images: [
      "/images/projects/web-basics-journal-home.png",
      "/images/projects/web-basics-journal-summary.png"
    ],
    description:
      "A simple learning journal website built after completing Dicoding web basics training, covering semantic HTML structure, clean CSS styling, and a compact responsive layout.",
    details: [
      "Built a structured landing page with navigation, hero content, summary cards, article area, and Dicoding learning context.",
      "Practiced semantic HTML sections and reusable CSS styling for spacing, typography, colors, and layout consistency.",
      "Used flexible layout patterns to keep the journal readable across desktop and smaller screens."
    ],
    tags: ["HTML", "CSS", "Semantic HTML", "Flexbox", "Responsive Layout"]
  },
  {
    eyebrow: "Project 09",
    priority: 9,
    category: "data",
    title: "Electric Vehicle Performance Dashboard",
    partner: "Excel Dashboard",
    images: ["/images/projects/data/electric-vehicle-dashboard.png"],
    description:
      "An Excel dashboard for comparing electric vehicle charging metrics, driving distance, battery capacity, cities, days, times, and driver types.",
    problem:
      "Raw electric vehicle records made it difficult to compare charging behavior, battery capacity, and driving patterns across vehicle models, cities, and time dimensions.",
    action:
      "Organized the data in Excel and created pivot-based charts, slicers, KPI views, and a dashboard combining charging metrics, distance driven, battery capacity, day-time patterns, and driver type comparisons.",
    result:
      "Produced an interactive monthly overview that makes vehicle, city, charging, and driving comparisons easier to read and explore.",
    tags: ["Excel", "PivotTable", "PivotChart", "Slicers", "Dashboard", "Data Analysis"]
  },
  {
    eyebrow: "Project 10",
    priority: 10,
    category: "data",
    title: "Pizza Sales Performance Dashboard",
    partner: "Excel Dashboard",
    images: ["/images/projects/data/pizza-sales-dashboard.png"],
    description:
      "An Excel sales dashboard that summarizes pizza revenue, order volume, average order value, category performance, top products, and revenue trends.",
    problem:
      "The order dataset contained many product, category, size, and date records, making it difficult to quickly identify sales drivers and performance changes over time.",
    action:
      "Built KPI cards, timeline controls, slicers, category and size breakdowns, a top-10 pizza chart, monthly revenue trend, and revenue comparison by pizza category.",
    result:
      "Created a compact sales performance view that supports quick comparison of revenue, orders, average order value, top products, and category contribution.",
    tags: ["Excel", "PivotTable", "Timeline", "Slicers", "Sales Analysis", "Dashboard"]
  },
  {
    eyebrow: "Project 11",
    priority: 11,
    category: "data",
    title: "Superstore Sales Dashboard",
    partner: "Power BI Dashboard",
    images: ["/images/projects/data/superstore-sales-dashboard.png"],
    description:
      "A Power BI dashboard for monitoring Superstore sales, profit, customers, products, orders, time trends, shipping modes, categories, and regional performance.",
    problem:
      "Sales and profit information across orders, dates, categories, shipping modes, and regions needed to be consolidated before performance patterns could be understood.",
    action:
      "Created a Power BI dashboard with KPI cards, sales and profit trends, geographic analysis, ship-mode distribution, category contribution, and interactive filters for time and product dimensions.",
    result:
      "Delivered an interactive overview of 2.3M sales, 286.4K profit, 793 customers, 10.0K products sold, and 9,994 orders for faster performance analysis.",
    tags: ["Power BI", "Data Visualization", "Interactive Filters", "Sales Analysis", "Dashboard"]
  },
  {
    eyebrow: "Project 12",
    priority: 12,
    category: "data",
    title: "Pegadaian Transaction Dashboard",
    partner: "Looker Studio Dashboard",
    images: ["/images/projects/data/pegadaian-transaction-dashboard.png"],
    description:
      "A Looker Studio dashboard for exploring Pegadaian transaction data across products, regions, areas, branches, channels, and transaction types.",
    problem:
      "Transaction records across 12 regions, 11 products, 47 areas, and 89 branches were difficult to summarize and compare without an interactive view.",
    action:
      "Built a Looker Studio dashboard with summary KPIs, transaction tables, filters, top-region analysis, product comparison, and geographic visualization for transaction distribution.",
    result:
      "Created a centralized view of 100 transaction records that helps users identify high-performing regions, products, areas, branches, and transaction patterns.",
    tags: ["Looker Studio", "MySQL", "Data Visualization", "Dashboard", "Geographic Analysis", "Transaction Analysis", "Filters"]
  },
  {
    eyebrow: "Project 13",
    priority: 13,
    category: "data",
    title: "Power BI Sales Performance Dashboard",
    partner: "Classroom Data Analysis Exercise",
    images: ["/images/projects/data/class-powerbi-sales-dashboard.png"],
    description:
      "A Power BI classroom dashboard for exploring sales by region and product, profitable products, top-selling products, and sales trends over time.",
    problem:
      "The exercise required turning multi-dimensional sales data into a visual analysis that could compare regions, products, profit, and monthly performance.",
    action:
      "Created interactive Power BI visuals for regional and product sales, top 10 profitable products, top 5 selling products, and sales trends by year and month with slicers for filtering.",
    result:
      "Produced a concise interactive dashboard that makes product performance, regional sales concentration, profitability, and time-based trends easier to compare.",
    tags: ["Power BI", "Data Visualization", "Interactive Filters", "Sales Analysis", "Profit Analysis", "Class Project"]
  },
  {
    eyebrow: "Project 14",
    priority: 14,
    category: "data",
    title: "Sales & Promotion Analysis Dashboard",
    partner: "Looker Studio Classroom Exercise",
    images: ["/images/projects/data/class-looker-sales-promotion-dashboard.png"],
    description:
      "A Looker Studio classroom dashboard combining geographic sales analysis, order quantity, city cost of sales, manufacturer sales, and promotion performance.",
    problem:
      "The exercise required analyzing sales and order data across locations, manufacturers, and promotional campaigns in a way that was easy to explore visually.",
    action:
      "Designed a dashboard with a geographic map, KPI cards, top promotion ranking, city cost-of-sales chart, and manufacturer sales comparison.",
    result:
      "Created an interactive visual summary that highlights geographic order differences, high-cost cities, manufacturer contribution, and promotion effectiveness.",
    tags: ["Looker Studio", "Data Visualization", "Geographic Analysis", "Sales Analysis", "Promotion Analysis", "Class Project"]
  }
];

export const bioCards = [
  {
    title: "Biography",
    icon: PenLine,
    description:
      "I am a Bachelor of Science in Information Systems graduate from President University with a concentration in Data Science. My experience spans warehouse digitalization, fullstack web development, data dashboards, system testing, documentation, and visual communication. I enjoy understanding how work happens in the real world, finding where a process becomes unclear, and shaping it into a more reliable digital workflow."
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
    title: "Event Committee Moments",
    image: "/images/impact/volunteer-committee-moments.png"
  },
  {
    title: "Community Highlights",
    image: "/images/impact/volunteer-moments-collage.png"
  },
  {
    title: "Creative Content & Committee Work",
    image: "/images/impact/volunteer-content-moments.png"
  }
];

export const moments = [
  {
    title: "CHEC Award Moments",
    image: "/images/moments/chec-award-moments.jpeg"
  },
  {
    title: "Final Exam Project Presentation",
    image: "/images/moments/kalbio-final-project.jpeg"
  },
  {
    title: "Event Committee Moments",
    image: "/images/moments/committee-san-pufw-moment.jpeg"
  },
  {
    title: "Youth Harmony Art & Craft",
    image: "/images/impact/yki-art-craft-moments.png"
  },
  {
    title: "SDG 4 with AIESEC",
    image: "/images/moments/sdg-aiesec-moment.png"
  },
  {
    title: "Culture Session",
    image: "/images/moments/sehari-mengabdi-moment.jpeg"
  },
  {
    title: "Kind to the Planet",
    image: "/images/moments/planet-volunteer-moment.jpeg"
  },
  {
    title: "Uni Life Moments",
    image: "/images/moments/graduation-friends-collage-1.jpeg"
  },
  {
    title: "Defense Moments",
    image: "/images/moments/graduation-friends-collage-2.jpeg"
  },
  {
    title: "Community & Volunteer Highlights",
    image: "/images/impact/volunteer-moments-collage.png"
  },
  {
    title: "Creative Content & Committee Work",
    image: "/images/impact/volunteer-content-moments.png"
  },
  {
    title: "Buzzter.id Moments",
    image: "/images/impact/buzzter-moments.png"
  }
];

export const organizations = [
  {
    title: "Event Organizer - Student Awarding Night by BEM President University (2024)",
    image: "/images/certifications/san-event-organizer-certificate.png"
  },
  {
    title: "Volunteer - Gemar Berbagi at Yayasan Yatim Darul Aitam (2024)",
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
  {
    title: "Committee - Youth Harmony Workshop Art & Craft at Yayasan Kanker Indonesia (2024)",
    images: [
      "/images/certifications/youth-harmony-workshop-certificate.png",
      "/images/impact/yki-art-craft-moments.png"
    ]
  },
  {
    title: "Committee - Investment Area 3 by Investment Club President University (2025)",
    image: "/images/certifications/investment-area-committee-certificate.png"
  },
  {
    title: "PR Internal Committee - President University Fashion Week (2024)",
    image: "/images/certifications/pufw-pr-internal-certificate.png"
  },
  {
    title: "PR External Committee - Computing Sport Games Olympiad (2025)",
    image: "/images/certifications/csgo-pr-external-certificate.jpeg"
  },
  {
    title: "Team Leader - Buzzter.id Beverages Business",
    image: "/images/impact/buzzter-moments.png",
    tone: "grayscale"
  },
  { title: "Treasurer - President University Computer and Technology Enthusiast Club" }
];

export const certifications = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Coursera",
    image: "/images/certifications/coursera-google-ai-professional.png",
    note: "Completed 8 courses covering AI for data analysis, research, communication, app building, and deployment."
  },
  {
    title: "Third Winner - CHEC Award 2024",
    issuer: "CHEC",
    image: "/images/certifications/chec-award-2024-certificate.jpeg"
  },
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
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    image: "/images/certifications/dicoding-belajar-dasar-pemrograman-web.png"
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding",
    image: "/images/certifications/dicoding-microsoft-fabric-data-science.png"
  },
  {
    title: "AI Career Readiness Training",
    issuer: "ASEAN Foundation",
    image: "/images/certifications/asean-head-ai-career-readiness.jpeg"
  },
  {
    title: "Finalist - IDEAS National Business Plan Competition Batch 11",
    issuer: "FEB UGM",
    image: "/images/certifications/feb-ugm-business-plan-finalist.png"
  },
  {
    title: "ImpactED 1.0 by AIESEC",
    issuer: "AIESEC",
    image: "/images/certifications/impacted-joining-certificate.png"
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
    tools: ["Excel", "Power BI", "Looker Studio", "SQL", "Python", "Google Sheets", "Data Cleaning", "Reporting", "KPI Tracking", "Process Analysis"]
  },
  {
    category: "Systems & Dev",
    icon: BriefcaseBusiness,
    tools: ["React", "Node.js", "JavaScript", "Django", "PHP", "PostgreSQL", "SQL Server", "Supabase", "HTML", "CSS", "REST API", "QR Integration", "Route Optimization", "AHP", "Random Forest"]
  },
  {
    category: "Workflow & Collaboration",
    icon: UsersRound,
    tools: ["Git", "Documentation", "System Testing", "UAT", "Bug Fixing", "User Training", "User Support", "Microsoft Office", "Canva", "Figma", "Google Workspace", "Stakeholder Coordination", "Public Relations", "Event Planning"]
  }
];

export const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/putri-nurul-annisa", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/putrinann", icon: Github },
  { label: "Email", href: "mailto:putrinannisa04@gmail.com?subject=Portfolio%20Inquiry", icon: Mail },
  { label: "Instagram", href: "https://www.instagram.com/putrinann_", icon: Instagram }
];

export const heroSignals = [
  { label: "Map workflows", icon: FileSearch },
  { label: "Read data clearly", icon: BarChart3 },
  { label: "Improve processes", icon: Workflow },
  { label: "Test with care", icon: ClipboardCheck }
];
