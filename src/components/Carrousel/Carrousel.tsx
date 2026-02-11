import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pets = [
    {
      id: 1,
      image: 'https://i.postimg.cc/jjSWdfQ1/f.jpg',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/sfkP36k6/g.jpg',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/bY70qC7V/a.jpg',
    },
    {
      id: 4,
      name: 'Rocky',
      breed: 'Bulldog',
      image: 'https://i.postimg.cc/DzwhbdNW/Whats_App_Image_2026_02_10_at_12_23_19.jpg',
    },
    {
      id: 5,
      name: 'Coco',
      breed: 'Beagle',
      image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      name: 'Toby',
      breed: 'Husky',
      image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=600&fit=crop',
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
    <section id="galeria" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nuestros Clientes
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Conoce a algunas de las mascotas que viajan felices con nosotros
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {pets.map((pet) => (
                  <div key={pet.id} className="w-full flex-shrink-0 px-2">
                    <div className="relative group">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                      />
                      
                      {/* Overlay con nombre */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 rounded-b-3xl">
                        <h3 className="text-white text-4xl font-bold mb-2">{pet.name}</h3>
                        <p className="text-white/90 text-xl">{pet.breed}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-8">
            {pets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-primary to-primary-light'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
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