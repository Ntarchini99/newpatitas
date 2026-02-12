import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Requisitos', id: 'requisitos' },
    { label: 'Clientes', id: 'galeria' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="p-1 rounded-full group-hover:scale-110 transition-transform duration-300 ">
              <img 
                src="https://i.postimg.cc/PqqGKffv/Whats-App-Image-2026-02-11-at-11-41-30.jpg" 
                alt="Patitas Car Logo" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Patitas Car
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-primary relative group ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/patitas_car/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/PatitasCaroficial"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('contacto')}
            className={`hidden md:block px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Reservar
          </button>

          <button
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 animate-slide-down">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full mx-4 mt-3 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              Reservar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};