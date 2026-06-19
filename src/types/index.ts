// Button
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Layout
interface LayoutProp {
  children: React.ReactNode;
  variant?: 'default' | 'header' | 'footer';
  className?: string;
}

// Navbar
interface NavbarProp {
  scrolled: boolean;
}

interface NavItem {
  title: string;
  href: string;
}

// NavLinks
interface NavLinksProps {
  variant?: 'mobile' | 'desktop';
  className?: string;
}

// Data: CompanyInfo
interface Social {
  name: string;
  url: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  socials: Social[];
}

// Logo
interface LogoProps {
  className?: string;
}

// Social Media
interface SocialMediaProp {
  className?: string;
}

// Dark Context
interface DarkContextType {
  isDark: boolean;
  toggleDark: () => void;
}

interface DarkProviderProp {
  children: React.ReactNode;
}

// Mobile Menu
interface MobileMenuContextType {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

interface MobileMenuProviderProps {
  children: React.ReactNode;
}

//  Overlay
interface OverlayProps {
  variant: 'dark' | 'light';
}

// Header Section
interface SectionHeader {
  section: string;
  title: string;
  subtitle: string;
}

// Section Header Props
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export type {
  ButtonProps,
  LayoutProp,
  NavbarProp,
  NavItem,
  NavLinksProps,
  CompanyInfo,
  LogoProps,
  SocialMediaProp,
  DarkContextType,
  DarkProviderProp,
  MobileMenuContextType,
  MobileMenuProviderProps,
  OverlayProps,
  SectionHeader,
  SectionHeaderProps,
};

/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
// export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }

/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }

// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
// export interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
