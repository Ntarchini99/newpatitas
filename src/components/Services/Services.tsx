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
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-110`}></div>
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                  
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-10">
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center">
                      {service.description}
                    </p>
                    
                    <div className={`bg-gradient-to-br ${service.bgPattern} rounded-2xl p-6 shadow-lg`}>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-800 transform group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                            <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-md`}>
                              <CheckCircle className="text-white" size={18} />
                            </div>
                            <span className="text-base font-medium text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="inline-block bg-gradient-to-r from-primary to-primary-light p-1 rounded-3xl shadow-xl">
            <div className="bg-white px-10 py-8 rounded-3xl">
              <p className="text-gray-700 text-xl mb-3">
                ¿Necesitas un servicio personalizado?
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-bold text-2xl">
                Contáctanos y lo diseñamos juntos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};