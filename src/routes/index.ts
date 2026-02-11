export const routes = {
  home: '#inicio',
  services: '#servicios',
  about: '#nosotros',
  testimonials: '#testimonios',
  contact: '#contacto',
} as const;

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
