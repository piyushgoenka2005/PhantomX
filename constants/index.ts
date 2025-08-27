import { 
  Users, 
  GraduationCap, 
  User, 
  Shield, 
  Target, 
  Zap, 
  MessageCircle,
  Globe,
  Award,
} from 'lucide-react';

import type { 
  NavItem, 
  Feature, 
  FeatureSection, 
  Product, 
  Solution, 
  Testimonial, 
  Stat 
} from '@/types';

// Navigation Constants
export const NAV_ITEMS: NavItem[] = [
  { name: 'Products', href: '#products' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#resources' },
  { name: 'Company', href: '#company' },
  { name: 'Business', href: '#business' }
];

// Feature Constants
export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'Comprehensive Security Training',
    description: 'Access a vast library of hands-on labs, courses, and challenges covering all aspects of cybersecurity.',
    benefits: [
      '40+ Academy Courses',
      '500+ Hands-on Labs',
      'Real-world Scenarios',
      'Industry Certifications'
    ]
  },
  {
    icon: Target,
    title: 'Attack Simulation Platform',
    description: 'Practice offensive security techniques in safe, controlled environments designed for skill development.',
    benefits: [
      'Penetration Testing Labs',
      'Red Team Scenarios',
      'Vulnerability Research',
      'Exploit Development'
    ]
  },
  {
    icon: Users,
    title: 'Team Development Tools',
    description: 'Build and assess your cybersecurity team with enterprise-grade training and evaluation tools.',
    benefits: [
      'Custom Learning Paths',
      'Team Assessments',
      'Progress Tracking',
      'Talent Development'
    ]
  },
  {
    icon: Zap,
    title: 'Real-time Threat Intelligence',
    description: 'Stay ahead of emerging threats with up-to-date content and real-world attack simulations.',
    benefits: [
      'Latest CVE Coverage',
      'Threat Landscape Updates',
      'MITRE ATT&CK Mapping',
      'Industry Trends'
    ]
  }
];

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: 'Learning Paths',
    description: 'Fully guided journeys into a wide range of skills or proficiency in specific security job-roles.',
    character: {
      name: 'Irked',
      avatar: 'I',
      bgColor: 'bg-lime-500',
      borderColor: 'border-lime-500'
    },
    interactive: {
      type: 'toggle',
      label: 'Guided Mode',
      enabled: 'Enabled'
    },
    content: {
      title: 'Question 1',
      text: 'What script can be used to search possi'
    }
  },
  {
    title: 'Real-world Scenarios',
    description: 'Cutting-edge labs focusing on the latest technologies and attack vectors — released every week!',
    character: {
      name: 'Bart',
      avatar: 'B',
      bgColor: 'bg-orange-500',
      borderColor: 'border-orange-500'
    },
    interactive: {
      type: 'performance',
      label: 'Performance',
      status: 'Optimized'
    },
    content: {
      title: 'Attack Vector:',
      text: 'SQL Injection Target: Web Application'
    }
  },
  {
    title: 'Industry Certifications',
    description: 'Innovative courses and exams that will make a market-ready professional out of you!',
    character: {
      name: 'Charon',
      avatar: 'C',
      bgColor: 'bg-red-600',
      borderColor: 'border-red-600'
    },
    interactive: {
      type: 'certifications',
      label: 'Certifications',
      status: 'Achieved'
    },
    content: {
      title: 'HTB Certified',
      text: 'Web Exploitation Specialist'
    }
  }
];

// Product Constants
export const PRODUCTS: Product[] = [
  {
    title: 'Teams',
    icon: Users,
    description: 'Build attack-ready teams with enterprise-grade training and assessment tools.',
    features: [
      'Courses & Certifications',
      'Cyber Ranges',
      'Enterprise Attack Simulations',
      'Gamified Team Assessments',
      'Talent Sourcing'
    ],
    cta: 'Start free trial',
    color: 'blue'
  },
  {
    title: 'Schools',
    icon: GraduationCap,
    description: 'Empower the next generation of cybersecurity professionals.',
    features: [
      'Courses & Learning Paths',
      'Hands-on Labs',
      'Gamified Team Exercises',
      'Industry Certifications',
      'Student Programs'
    ],
    cta: 'Get a demo',
    color: 'blue'
  },
  {
    title: 'Individuals',
    icon: User,
    description: 'Start your cybersecurity journey with comprehensive courses and hands-on labs.',
    features: [
      'Courses & Learning Paths',
      'Hacking Labs',
      'Capture The Flag',
      'Industry Certifications',
      'Job Board'
    ],
    cta: 'Get started for free',
    color: 'blue'
  }
];

// Solution Constants
export const SOLUTIONS: Solution[] = [
  {
    title: 'Red Teams',
    icon: Target,
    description: 'Test and grow your skills in all penetration testing and adversarial domains, from information gathering to documentation and reporting.',
    features: [
      'Industry-recognized certifications',
      'Hands-on penetration testing labs',
      'Corporate red team scenarios',
      'MITRE ATT&CK framework mapping'
    ],
    cta: 'See more'
  },
  {
    title: 'Blue Teams',
    icon: Shield,
    description: 'Stay connected to the threat landscape and learn how to detect techniques, tactics, and procedures used by real adversaries.',
    features: [
      'Market-connected courses',
      'Hands-on investigation labs',
      'Gamified blue team assessments',
      'NIST/NICE framework mapping'
    ],
    cta: 'See more'
  },
  {
    title: 'Purple Approach',
    icon: Zap,
    description: 'Master offensive strategies to enable effective defensive operations. For modern, 360° cyber professionals and organizations.',
    features: [
      'CVE-based vulnerable labs',
      'Real-time attack & defense simulation',
      'Realistic enterprise scenarios',
      'Extensive mapping and reporting'
    ],
    cta: 'See more'
  }
];

// Testimonial Constants
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Since we introduced Hack The Box, the team can now quickly learn the theoretical and practical sides of penetration testing with very in-depth and up-to-date materials. To spice up the learning, we have a \"Hacker of the Month\" where we recognize the most progressive employee in our lab environment.",
    author: "Alexis Lingad",
    position: "Information Security Analyst",
    company: "PUMA SE",
    logo: "PUMA"
  },
  {
    quote: "Hack The Box has been an invaluable resource in developing and training our team. The content is extremely engaging through the gamified approach and the pace at which new and high quality content is updated ensures our team's skills are always sharp. The labs offer a breadth of technical challenge and variety, unparalleled anywhere else in the market.",
    author: "Josiah Beverton",
    position: "Lead Security Consultant",
    company: "Context",
    logo: "Context"
  },
  {
    quote: "Hack The Box has been great for recruitment to quickly establish the caliber of ethical hacking candidates. The platform provides a credible overview of a professional's skills and ability when selecting the right hire. An active HTB profile strengthens a candidate's position in the job market, making them stand out from the crowd and highlighting their commitment to skill development.",
    author: "Ryan Virani",
    position: "UK Team Lead",
    company: "Adeptis",
    logo: "Adeptis"
  },
  {
    quote: "My team and I used Professional Labs from Hack The Box to get used to the new trends of the Red Team concept. After a lot of positive frustration, dedication, and self-study we managed to finish the challenge and leave with much more knowledge than we had before. I strongly recommend this service to teams composed of dedicated persons, who love the technical aspects of penetration testing and also enjoy assisted self-study.",
    author: "Marco Rottigni",
    position: "Chief Technical Security Officer",
    company: "Qualys",
    logo: "Qualys"
  }
];

// Stats Constants
export const STATS: Stat[] = [
  {
    icon: Users,
    value: '3.7M+',
    label: 'Active Users',
    description: 'Global community of cybersecurity professionals'
  },
  {
    icon: MessageCircle,
    value: '200K+',
    label: 'Discord Members',
    description: 'Chat about labs, share resources and jobs'
  },
  {
    icon: Globe,
    value: '500+',
    label: 'Labs Available',
    description: 'Real-world scenarios updated weekly'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Certifications',
    description: 'Industry-recognized credentials'
  }
];

// Animation Constants
export const ANIMATION_CONFIGS = {
  fadeIn: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
};

// Theme Constants
export const THEME_COLORS = {
  primary: '#3b82f6',
  secondary: '#60a5fa',
  accent: '#84cc16',
  background: '#111827',
  text: '#ffffff'
};

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  demo: '/api/demo'
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  VALIDATION: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Thank you! Your message has been sent successfully.',
  NEWSLETTER_SUBSCRIBED: 'Successfully subscribed to our newsletter!',
  DEMO_REQUESTED: 'Demo request submitted successfully!'
};
