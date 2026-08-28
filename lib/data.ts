/**
 * Centralized portfolio content.
 * Update this file to change copy, links, skills, projects, experience, etc.
 * Only facts supported by the CV and project documentation are used here.
 * Unknown values use clearly-marked placeholders that are easy to replace.
 */

export const profile = {
  name: 'Nkosiyezwa Malibongwe Mpanza',
  shortName: 'Nkosiyezwa Mpanza',
  initials: 'NM',
  role: 'Software Engineer',
  location: 'South Africa',
  positioning:
    'Software Engineer focused on building reliable backend applications, REST APIs and database-driven systems, with experience in Python, Django and PostgreSQL and a strong interest in secure software development.',
  heroHeadline: 'Building Reliable & Secure Backend Systems',
  heroSupporting:
    'Software Engineer focused on Python, Django, REST APIs and PostgreSQL, with experience developing backend applications and database-driven systems.',
  heroParagraph:
    'I have professional experience developing backend applications and RESTful APIs, working with PostgreSQL and applying secure software development concepts to keep data confidential and reliable.',
  // Replace this file at /public with the real CV to enable the download.
  cvPath: '/cv/Nkosiyezwa-Mpanza-CV.pdf',
}

export const contact = {
  email: 'nkociempanza121@gmail.com',
  phone: '082 543 0069',
  phoneHref: 'tel:+27825430069',
  github: 'https://github.com/nkocie',
  githubHandle: 'github.com/nkocie',
  linkedin: 'https://linkedin.com/in/nkosiyezwa-m-mpanza-043314239',
  linkedinHandle: 'linkedin.com/in/nkosiyezwa-m-mpanza-043314239',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const snapshot = [
  { label: 'Backend', value: 'Python / Django', icon: 'Server' },
  { label: 'APIs', value: 'REST APIs', icon: 'Network' },
  { label: 'Database', value: 'PostgreSQL / SQL', icon: 'Database' },
  { label: 'Security', value: 'Secure Data Handling', icon: 'ShieldCheck' },
]

export const aboutParagraphs = [
  'Nkosiyezwa is a Software Engineer with professional experience developing backend applications using Python, Django, REST APIs and PostgreSQL, with academic experience in Java. He holds a Diploma in Computer Science from Tshwane University of Technology.',
  'His focus sits at the intersection of backend development, API design, database systems and secure software — building reliable, maintainable applications that handle data carefully.',
]

export const aboutFocus = [
  'Backend development',
  'API development',
  'Database systems',
  'Secure software',
  'Reliable & maintainable applications',
  'Software engineering',
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    items: ['Python', 'Java', 'Kotlin', 'SQL / PL/SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & Frameworks',
    icon: 'Server',
    items: ['Django', 'REST APIs', 'Java MVC', 'Servlets', 'JSP'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    items: ['PostgreSQL', 'SQL', 'PL/SQL'],
  },
  {
    title: 'Development Tools',
    icon: 'Wrench',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Visual Studio Code',
      'IntelliJ IDEA',
      'Android Studio',
      'Jupyter Notebook',
      'MySQL Workbench',
    ],
  },
  {
    title: 'Operating Systems',
    icon: 'Terminal',
    items: ['Linux', 'Windows'],
  },
  {
    title: 'Software Engineering Practices',
    icon: 'GitBranch',
    items: ['Agile Development', 'Debugging', 'Testing', 'Clean Code Principles'],
  },
]

export type Project = {
  id: string
  name: string
  category: string
  description: string
  tech: string[]
  github: string | null
  // Placeholder text shown when a repository URL is not documented.
  githubPlaceholder?: string
  featured?: boolean
}

export const featuredProject = {
  id: 'secure-document-sharing',
  name: 'Secure Document Sharing System',
  category: 'Secure Backend Application',
  tech: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'HTML/CSS', 'JavaScript', 'Git'],
  github: 'https://github.com/aestusanalytics/secureShare',
  overview:
    'The Secure Document Sharing System is a web application for secure document sharing and management. It allows users to upload, manage and share documents while focusing on data security and user privacy.',
  purpose:
    'Built to enable secure document sharing between faculty members and students, with a focus on confidentiality and data integrity across the sharing workflow.',
  backend:
    'A Django backend exposes a REST API layer over a PostgreSQL database, handling document management, authentication and role-based access control server-side.',
  security: [
    'Encrypted file storage',
    'User authentication',
    'Role-based document access',
    'Controlled document sharing',
    'Access logging',
    'Privacy-focused document management',
  ],
  securityNote:
    'Blockchain and cryptography concepts were applied to support secure data handling. Google authentication (OAuth) setup is documented in the project.',
  roles: [
    {
      role: 'Student',
      icon: 'User',
      permissions: ['View documents when permission is granted'],
    },
    {
      role: 'Faculty',
      icon: 'Users',
      permissions: ['Upload documents', 'Delete / update documents', 'Assign student access'],
    },
    {
      role: 'Admin',
      icon: 'ShieldCheck',
      permissions: ['Manage users and roles', 'Monitor document access logs'],
    },
  ],
  functionality: [
    'Secure document upload',
    'Document management',
    'Role-based access',
    'Controlled document sharing',
    'Authentication',
    'Access logging',
    'Data security',
    'User privacy',
  ],
  architecture: [
    { label: 'Users', sub: 'Faculty & Students', icon: 'Users' },
    { label: 'Web Application', sub: 'HTML / CSS / JavaScript', icon: 'Globe' },
    { label: 'Django Backend', sub: 'Application logic', icon: 'Server' },
    { label: 'REST API Layer', sub: 'Document & access endpoints', icon: 'Network' },
    { label: 'PostgreSQL', sub: 'Persistent data store', icon: 'Database' },
  ],
  screenshots: [
    'Screenshot placeholder — replace with project image',
    'Screenshot placeholder — replace with project image',
  ],
}

export const supportingProjects: Project[] = [
  {
    id: 'sa-weather-app',
    name: 'SAWeatherApp',
    category: 'Python API Application',
    description:
      'A Python application that retrieves real-time weather information for cities in South Africa using the OpenWeatherMap API.',
    tech: ['Python', 'Requests', 'OpenWeatherMap API'],
    github: 'https://github.com/Nkocie/SAWeatherApp',
  },
  {
    id: 'shopping-cart-java',
    name: 'Shopping Cart Java GUI Application',
    category: 'Java Application',
    description:
      'A Java Swing desktop application simulating a small e-commerce store with a product catalog, shopping cart, checkout summary, VAT calculation, discounts and shipping options.',
    tech: ['Java', 'Java Swing'],
    github: 'https://github.com/Nkocie/shopping-cart-swing',
  },
]

export const saWeatherFeatures = [
  'Current temperature',
  'Humidity',
  'Weather conditions',
  'South African city lookup',
  'Coordinate-based fallback',
  'OpenWeatherMap API integration',
]

export const shoppingCartFeatures = [
  'Product catalog',
  'Shopping cart',
  'Add / remove / update quantities',
  'VAT calculation',
  'Discounts',
  'Shipping options',
  'Save / load cart state',
  'Checkout summary',
]

export const experience = [
  {
    company: 'Aestus Analytics Pty Ltd',
    role: 'Intern Software Engineer',
    period: 'October 2024 – January 2026',
    stack: 'Python • Django • REST APIs • PostgreSQL • Security Concepts • Testing',
    responsibilities: [
      {
        title: 'Backend Development',
        detail: 'Developed backend applications using Python and Django.',
        icon: 'Server',
      },
      {
        title: 'API Development',
        detail: 'Developed and integrated RESTful APIs.',
        icon: 'Network',
      },
      {
        title: 'Database Development',
        detail: 'Used PostgreSQL for data storage and management.',
        icon: 'Database',
      },
      {
        title: 'Secure Software',
        detail: 'Applied blockchain and cryptography concepts to support secure data handling.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Software Engineering',
        detail: 'Participated in debugging, testing and software development activities.',
        icon: 'Bug',
      },
    ],
  },
]

export const capabilities = [
  {
    title: 'Backend Systems',
    detail: 'Python and Django-based backend applications.',
    icon: 'Server',
  },
  {
    title: 'REST APIs',
    detail: 'Development and integration of RESTful APIs.',
    icon: 'Network',
  },
  {
    title: 'Database Systems',
    detail: 'Relational data storage and management using PostgreSQL and SQL/PLSQL.',
    icon: 'Database',
  },
  {
    title: 'Secure Software',
    detail: 'Applications focused on confidentiality, data integrity and secure data handling.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Software Engineering',
    detail: 'Debugging, testing, maintainable code and clean development practices.',
    icon: 'Bug',
  },
]

export const approach = [
  {
    title: 'Build Clearly',
    detail: 'Prefer understandable, maintainable software.',
    icon: 'PenTool',
  },
  {
    title: 'Work Systematically',
    detail: 'Use structured development, debugging and testing practices.',
    icon: 'ListChecks',
  },
  {
    title: 'Protect Data',
    detail: 'Consider confidentiality, integrity and secure data handling.',
    icon: 'Lock',
  },
  {
    title: 'Keep Learning',
    detail:
      'Continue developing across backend engineering, APIs, databases and modern software technologies.',
    icon: 'Sparkles',
  },
]

export const education = [
  {
    degree: 'Diploma in Computer Science',
    institution: 'Tshwane University of Technology (TUT)',
    status: 'Completed',
  },
]

export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure (OCI) AI Foundations Associate',
    issuer: 'Oracle',
    // Verification fields are intentionally left null until provided.
    credentialId: null as string | null,
    verifyUrl: null as string | null,
  },
  {
    name: 'Oracle Cloud Infrastructure (OCI) Generative AI Professional',
    issuer: 'Oracle',
    credentialId: null as string | null,
    verifyUrl: null as string | null,
  },
]

export const professionalFocus = [
  'Backend Software Engineering',
  'Python / Django Development',
  'REST API Development',
  'Database Development',
  'Secure Software Development',
  'Software Engineering Opportunities',
]
