// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

// Feature Types
export interface Feature {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  benefits?: string[];
  color?: 'blue' | 'green' | 'red' | 'orange';
}

export interface FeatureSection {
  title: string;
  description: string;
  character: {
    name: string;
    avatar: string;
    bgColor: string;
    borderColor: string;
  };
  interactive: {
    type: 'toggle' | 'performance' | 'certifications';
    label: string;
    enabled?: string;
    status?: string;
  };
  content: {
    title: string;
    text: string;
  };
}

// Product Types
export interface Product {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  cta: string;
  color: 'blue' | 'green' | 'red' | 'orange';
}

// Solution Types
export interface Solution {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  cta: string;
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
}

// Stats Types
export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
}

// Component Props Types
export interface HeaderProps {
  isScrolled: boolean;
  onMobileMenuToggle: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FeatureCardProps {
  feature: Feature;
  onAction?: () => void;
}

export interface ProductCardProps {
  product: Product;
  onAction?: () => void;
}

export interface SolutionCardProps {
  solution: Solution;
  onAction?: () => void;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface StatCardProps {
  stat: Stat;
}

// Animation Types
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: AppError | null;
}
