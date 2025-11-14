// Portfolio Data untuk Blog Portofolio Telkomsel PDI

export const personalInfo = {
  name: "Your Name",
  title: "Product Development & Innovation Developer",
  tagline: "Innovative Web Developer & Problem Solver",
  description: "Passionate developer dengan focus pada web development dan innovative solutions. Target: Product Development & Innovation Internship di Telkomsel.",
  email: "your.email@example.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/EviewNicks",
  avatar: "/images/profile/avatar.jpg"
};

export const projects = [
  {
    id: "omr-answer-sheet",
    title: "OMR Answer Sheet Grading System",
    description: "Computer Vision-based system untuk automated answer sheet grading menggunakan image processing dan machine learning algorithms.",
    longDescription: "Sistem otomasi untuk pemeriksaan jawaban lembar OMR (Optical Mark Recognition) menggunakan teknologi computer vision. Project ini mengimplementasikan image processing algorithms untuk mendeteksi dan membaca jawaban siswa secara otomatis.",
    technologies: ["Python", "OpenCV", "Image Processing", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/EviewNicks/omr_grading_system",
    liveUrl: null,
    featured: true,
    category: "Computer Vision",
    image: "/images/projects/omr-system.jpg",
    achievements: [
      "Accuracy rate di atas 95%",
      "Processing time 5x lebih cepat dari manual",
      "Support multiple answer sheet formats"
    ]
  },
  {
    id: "rental-baju",
    title: "Rental Baju Platform",
    description: "E-commerce platform untuk rental pakaian dengan booking system dan inventory management.",
    longDescription: "Platform e-commerce khusus untuk layanan rental pakaian dengan fitur booking online, inventory management, payment integration, dan user dashboard untuk tracking order.",
    technologies: ["Web Development", "Database Management", "Payment Gateway", "User Authentication"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    category: "E-commerce",
    image: "/images/projects/rental-baju.jpg",
    achievements: [
      "Increase customer retention by 40%",
      "Automated inventory management",
      "Integrated payment system"
    ]
  }
];

export const skills = {
  primary: [
    {
      name: "Next.js",
      level: 90,
      category: "Frontend Framework",
      description: "Advanced development dengan App Router, Server Components, dan modern React patterns"
    },
    {
      name: "Python",
      level: 85,
      category: "Backend Development",
      description: "Web development, data processing, dan machine learning applications"
    },
    {
      name: "Software Engineering",
      level: 80,
      category: "Engineering Practices",
      description: "Clean architecture, design patterns, dan systematic development approaches"
    }
  ],
  secondary: [
    {
      name: "Project Management - JIRA",
      level: 75,
      category: "Project Tools",
      description: "Agile methodologies, sprint planning, dan project tracking"
    },
    {
      name: "Database Management",
      level: 70,
      category: "Data Management",
      description: "SQL/NoSQL databases, query optimization, dan data modeling"
    },
    {
      name: "API Development",
      level: 75,
      category: "Backend Development",
      description: "RESTful APIs, authentication, dan integration patterns"
    }
  ]
};

export const experiences = [
  {
    title: "Web Development Projects",
    period: "2023 - Present",
    description: "Development of various web applications dengan focus pada innovative solutions dan user experience optimization.",
    achievements: [
      "Implemented responsive design patterns",
      "Integrated modern web technologies",
      "Optimized application performance"
    ]
  }
];

export const certifications = [
  {
    title: "Web Development Fundamentals",
    issuer: "Online Learning Platform",
    date: "2024",
    image: "/images/certifications/web-dev.jpg"
  },
  {
    title: "Python Programming",
    issuer: "Tech Academy",
    date: "2024",
    image: "/images/certifications/python.jpg"
  }
];

export const navigationItems = [
  { label: "Beranda", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/EviewNicks",
    icon: "GitHub"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: "LinkedIn"
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: "Mail"
  }
];

// Portfolio color scheme berdasarkan Telkomsel branding
export const colors = {
  telkomselRed: "#e32636",
  telkomselDarkRed: "#b71c1c",
  telkomselLightRed: "#ff5252",
  corporateGray: "#2e3440",
  lightGray: "#eceff4",
  accentGray: "#4c566a",
  innovationBlue: "#5e81ac",
  techGreen: "#88c0d0"
};