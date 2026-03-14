export const projects = [
  {
    id: "01",
    title: "E-Commerce Platform & Admin Dashboard (Backend API)",
    desc: "Developed a robust RESTful API for an e-commerce platform in collaboration with a frontend team. Implemented Role-Based Access Control (RBAC) utilizing JWT, and integrated Redis for secure session management. Leveraged Go's Concurrency (Goroutines) for asynchronous tasks such as email notifications, and ensured production-ready reliability by implementing Graceful Shutdown and Zap Logger. Managed database architecture with PostgreSQL and GORM, achieving a 50% unit test coverage.",
    image: "/images/project-1.png",
    tools: ["Golang", "Gin", "PostgreSQL", "Redis", "GORM", "JWT"],
    githubUrl: "https://github.com/IhzhaNB/E-Commerce-Platform-Backend-API",
  },
  {
    id: "02",
    title: "Point of Sales (POS) RESTful API",
    desc: "Built a scalable RESTful API for a restaurant Point of Sales system handling order management, inventory tracking, and table reservations. Designed the relational database schema using PostgreSQL and GORM, featuring advanced query optimization for dynamic filtering and pagination on revenue reports. Implemented multi-layered authentication with OTP validation via email and secure Role-Based Access Control (Superadmin/Staff).",
    image: "/images/project-2.png",
    tools: ["Golang", "Gin", "PostgreSQL", "GORM", "Zap Logger"],
    githubUrl:
      "https://github.com/dandimuzaki/project-POS-APP-golang-kelompok-integer",
  },
  {
    id: "03",
    title: "Office Inventory CLI System",
    desc: "Created a Command Line Interface (CLI) application for office inventory management using idiomatic Go architecture. Developed complex business logic including declining balance depreciation calculations, asset lifespan tracking, and keyword-based search functionalities. Ensured data integrity through strict input validation, consistent error handling, and direct integration with a PostgreSQL database.",
    image: "/images/project-3.png",
    tools: ["Golang", "PostgreSQL", "Cobra", "Tabwriter"],
    githubUrl: "https://github.com/IhzhaNB/project-app-inventaris-cli-ihzhanb",
  },
];

export const aboutItems = [
  {
    id: 1,
    icon: "/images/about-icon-1.png",
    title: "LOGIC-DRIVEN PROBLEM SOLVER",
    text: "Combining a background in Data Science with structured algorithmic thinking to engineer highly optimized and efficient backend solutions.",
  },
  {
    id: 2,
    icon: "/images/about-icon-2.png",
    title: "ROBUST SYSTEM ARCHITECTURE",
    text: "Building secure, scalable RESTful APIs equipped with JWT authentication, RBAC, and seamless integrations for PostgreSQL and Redis databases.",
  },
  {
    id: 3,
    icon: "/images/about-icon-32.png",
    title: "AGILE & COLLABORATIVE",
    text: "Thriving in fast-paced environments through effective communication, Git-based version control, and a strong commitment to modern SDLC practices.",
  },
];

export const linksToCopy1 = [
  {
    id: 1,
    label: "Email",
    link: "mailto:ihzhabaihaqqi05@gmail.com",
  },
  {
    id: 2,
    label: "Linkedin",
    link: "https://id.linkedin.com/in/ihzhanb",
  },
];

export const linksToCopy2 = [
  {
    id: 3,
    label: "Github",
    link: "https://github.com/IhzhaNB",
  },
  {
    id: 4,
    label: "WhatsApp",
    link: "https://wa.me/6285779389695",
  },
];
