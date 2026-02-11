export interface NavItem {
  label: string;
  id: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  pet: string;
  image: string;
  rating: number;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  petType: string;
  service: string;
  message: string;
}

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}
