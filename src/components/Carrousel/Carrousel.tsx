import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pets = [
    {
      id: 1,
      name: 'Renzo',
      breed: 'Baradero - Rio Tercero',
      image: 'https://i.postimg.cc/wTbFdLKz/Whats-App-Image-2026-02-11-at-15-51-18.jpg',
    },
    {
      id: 2,
      name: 'Rocky',
      breed: 'Santiago del Estero - Laboulaye, Cordoba',
      image: 'https://i.postimg.cc/dtrd5x2C/Whats-App-Image-2026-02-11-at-18-30-10.jpg',
    },
    {
      id: 3,
      name: 'Becky y Tokio',
      breed: 'San José de Feliciano - Ostende',
      image: 'https://i.postimg.cc/4y2ymJZY/Whats_App_Image_2026_02_11_at_15_51_18_(2).jpg',
    },
    {
      id: 4,
      name: 'Cachorrita beagle',
      breed: 'Salsipuedes, Cordoba - San Salvador de Jujuy',
      image: 'https://i.postimg.cc/DzwhbdNW/Whats_App_Image_2026_02_10_at_12_23_19.jpg',
    },
    {
      id: 5,
      name: 'Cleo',
      breed: 'Jesus Maria, Cordoba - Tartagal, Salta',
      image: 'https://i.postimg.cc/MH3HvWxf/Whats_App_Image_2026_02_11_at_15_51_19.jpg',
    },
    {
      id: 6,
      name: 'Chato',
      breed: 'Pico Truncado - Berazategui',
      image: 'https://i.postimg.cc/XNsp2g5L/Whats_App_Image_2026_02_11_at_15_51_20.jpg',
    },
    {
      id: 7,
      name: 'Juana',
      breed: 'Congreso - Aeropuerto de Ezeiza',
      image: 'https://i.postimg.cc/PJVJPtht/Whats_App_Image_2026_02_11_at_15_51_22_(3).jpg',
    },
    {
      id: 8,
      name: 'Toby',
      breed: 'Pilar - Villa Urquiza',
      image: 'https://i.postimg.cc/d3N3Lqvt/Whats_App_Image_2026_02_11_at_15_51_22_(2).jpg',
    },
    {
      id: 9,
      name: 'Muñi Fabi',
      breed: 'Godoy Cruz, Mendoza - Don Torcuato, Buenos Aires',
      image: 'https://i.postimg.cc/pVsp0B8v/Whats_App_Image_2026_02_11_at_15_51_22.jpg',
    },
    {
      id: 10,
      name: 'Castiel',
      breed: 'General Pico, La Pampa - Caseros, Buenos Aires',
      image: 'https://i.postimg.cc/y6LkfTRM/Whats_App_Image_2026_02_11_at_15_51_20_(2).jpg',
    },
    {
      id: 11,
      name: 'Chito',
      breed: 'La Rioja - Caballito, Buenos Aires',
      image: 'https://i.postimg.cc/hvfHn2Qt/Whats_App_Image_2026_02_12_at_16_52_36.jpg',
    },
    {
      id: 12,
      name: 'Oslo',
      breed: 'San Jose de Feliciano - Ostende',
      image: 'https://i.postimg.cc/KjRdb031/Whats_App_Image_2026_02_12_at_16_52_35_(1).jpg',
    },
    {
      id: 13,
      name: 'Merli',
      breed: 'Villa Devoto - Costa Azul',
      image: 'https://i.postimg.cc/XqpTWsBX/Whats_App_Image_2026_02_12_at_16_52_35.jpg',
    },
    {
      id: 14,
      name: 'Billy Boy',
      breed: 'Cipolleti, Rio Negro - San Telmo, Caba',
      image: 'https://i.postimg.cc/ncm8rwMn/Whats_App_Image_2026_02_12_at_18_46_32.jpg',
    },
    {
      id: 15,
      name: 'Simón y Ramses',
      breed: 'Zarate - Mendoza',
      image: 'https://i.postimg.cc/MHvhw9fv/Whats_App_Image_2026_02_12_at_16_52_35_(2).jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pets.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pets.length) % pets.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section id="galeria" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Conoce a algunas de las mascotas que viajan felices con nosotros
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4 lg:px-0">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel Track */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {pets.map((pet) => (
                  <div key={pet.id} className="w-full flex-shrink-0 px-1 sm:px-2">
                    <div className="relative group">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] object-cover rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl"
                      />
                      
                      {/* Overlay con nombre */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6 lg:p-8 rounded-b-2xl sm:rounded-b-3xl">
                        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{pet.name}</h3>
                        <p className="text-white/90 text-base sm:text-lg lg:text-xl">{pet.breed}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación - Desktop */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 lg:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-10 items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="lg:w-7 lg:h-7" />
            </button>
            
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 lg:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-10 items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} className="lg:w-7 lg:h-7" />
            </button>

            {/* Botones de navegación - Mobile (dentro de la imagen) */}
            <button
              onClick={prevSlide}
              className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 flex-wrap px-4">
            {pets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-primary to-primary-light'
                    : 'w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};