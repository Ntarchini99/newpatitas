import { CheckCircle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Transporte Local',
      description: 'Traslados dentro de la provincia de Buenos Aires, y hacia todas las provincias de la Argentina.',
      features: ['Vehículos climatizados', 'Kit veterinarios', 'Jaulas transportadoras', 'Seguimiento con fotos y videos', 'Ubicación en tiempo real'],
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'from-blue-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop'
    },
    {
      title: 'Transporte terrestre Internacional',
      description: 'Viajes a paises limitrofes: Santiago de Chile, Sur de Brasil y Asunción del Paraguay o Ciudad del este.',
      features: ['Vehículos climatizados', 'Kit veterinarios', 'Jaulas transportadoras', 'Seguimiento con fotos y videos', 'Ubicación en tiempo real'],
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'from-purple-50 to-pink-50',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop'
    },
  ];

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Nuestros Servicios
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-110`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full">
                  
                  {/* Image Header */}
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center px-2">
                      {service.description}
                    </p>
                    
                    {/* Features Box */}
                    <div className={`bg-gradient-to-br ${service.bgPattern} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg`}>
                      <ul className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start sm:items-center gap-2 sm:gap-3 text-gray-800 transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" 
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-md mt-0.5 sm:mt-0`}>
                              <CheckCircle className="text-white" size={16} />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-left leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${service.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-slide-up px-4" style={{ animationDelay: '400ms' }}>
          <div className="inline-block bg-gradient-to-r from-primary to-primary-light p-0.5 sm:p-1 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl">
            <div className="bg-white px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 rounded-2xl sm:rounded-3xl">
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
                ¿Necesitas un servicio personalizado?
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-bold text-lg sm:text-xl lg:text-2xl">
                Contáctanos y lo diseñamos juntos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};