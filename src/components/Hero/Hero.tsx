import { ArrowRight } from 'lucide-react';
import logoVideo from "../../assets/video/logovideo.mp4";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-[#5bb897] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="text-center md:text-left animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transporte Seguro para tus
                <span className="block mt-4">
                  Mejores Amigos
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Cuidamos de tus mascotas como si fueran nuestras.
                Transporte profesional, cómodo y seguro para tus mascotas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-white text-[#5bb897] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Reservar Ahora
                  <ArrowRight size={20} />
                </button>

                <button
                  onClick={() => scrollToSection('servicios')}
                  className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Ver Servicios
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative max-w-md mx-auto md:max-w-none">

                <img
                  src="https://i.postimg.cc/MH3HvWxf/Whats_App_Image_2026_02_11_at_15_51_19.jpg"
                  alt="Perro feliz en auto"
                  className="rounded-3xl shadow-2xl animate-float transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute -bottom-6 -left-6 w-28 h-28 md:w-40 md:h-40 items-center justify-center hidden md:flex">
                  <video
                    src={logoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-full shadow-xl"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <a
        href="https://wa.me/541123218193"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-50 group"
        aria-label="WhatsApp Patitas Car"
      >
        <div className="relative flex items-center">

          <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            ¡Pedí tu presupuesto!
          </span>

          <img
            src="https://i.postimg.cc/j5Jh9023/f432297640.png"
            alt="WhatsApp"
            className="w-24 h-24 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </a>
    </>
  );
};
