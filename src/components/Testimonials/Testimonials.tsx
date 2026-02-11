import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const tripPhotos = [
    {
      url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Viaje Feliz',
    },
    {
      url: 'https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mascota Cómoda',
    },
    {
      url: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Transporte Seguro',
    },
    {
      url: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cuidado Profesional',
    },
    {
      url: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Aventura Segura',
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      pet: 'Max - Golden Retriever',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Excelente servicio. Transportaron a Max desde Madrid hasta Barcelona con tanto cuidado y profesionalismo. Llegó feliz y relajado. Totalmente recomendable.',
    },
    {
      name: 'Carlos Rodríguez',
      pet: 'Luna - Gato Persa',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Luna es muy nerviosa con los viajes, pero el equipo de Patitas Car supo cómo tratarla. Me enviaron fotos durante todo el trayecto. Servicio impecable.',
    },
    {
      name: 'Ana Martínez',
      pet: 'Rocky - Bulldog',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Necesitaba llevar a Rocky al veterinario de urgencia. El servicio express fue increíble, llegaron en minutos y lo cuidaron durante todo el camino.',
    },
    {
      name: 'Jorge López',
      pet: 'Coco - Yorkshire',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Uso sus servicios regularmente para llevar a Coco a su peluquería. Siempre puntuales, amables y Coco va feliz con ellos. Son los mejores.',
    },
    {
      name: 'Laura Fernández',
      pet: 'Simba - Gato Mestizo',
      image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Me mudé de ciudad y estaba preocupada por Simba. El viaje fue perfecto, el auto súper limpio y equipado. Simba llegó tranquilo y sin estrés.',
    },
    {
      name: 'Pedro Sánchez',
      pet: 'Bella - Labrador',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Personal muy capacitado y amoroso con los animales. Bella es senior y necesita cuidados especiales que ellos conocen perfectamente. Gracias.',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes y sus mascotas es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={48} />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.pet}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 animate-slide-up">
            Momentos de Nuestros Viajes
          </h3>

          <div className="relative max-w-4xl mx-auto group animate-slide-up">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={tripPhotos[currentPhotoIndex].url}
                alt={tripPhotos[currentPhotoIndex].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-2xl font-bold">
                  {tripPhotos[currentPhotoIndex].title}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentPhotoIndex(
                  (prev) => (prev - 1 + tripPhotos.length) % tripPhotos.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-primary text-gray-800 hover:text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 transform hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={() =>
                setCurrentPhotoIndex(
                  (prev) => (prev + 1) % tripPhotos.length
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-primary text-gray-800 hover:text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 transform hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {tripPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
