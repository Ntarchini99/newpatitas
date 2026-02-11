import { CheckCircle, Globe, MapPin, ArrowRight, AlertCircle } from 'lucide-react';

export const Requirements = () => {
  const internationalReqs = [
    'Consultar requisitos específicos en la web de SENASA',
    'Cada país tiene requisitos diferentes',
    'Documentación debe tramitarse con anticipación'
  ];

  const localReqs = [
    'Vacunación antirrábica',
    'Libreta sanitaria o certificado de salud actualizado al momento del viaje'
  ];

  return (
    <section id="requisitos" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Requisitos de Viaje
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Toda la documentación que necesitas para viajar con tu mascota
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          
          {/* Viajes Nacionales */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-blue-200">
              
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Viajes Nacionales</h3>
              </div>

              {/* Requirements List */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 mb-5 sm:mb-6">
                <ul className="space-y-3 sm:space-y-4">
                  {localReqs.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Alert */}
              <div className="flex items-start gap-2 sm:gap-3 p-4 sm:p-5 bg-blue-50 rounded-lg sm:rounded-xl border-l-4 border-blue-500">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm sm:text-base leading-snug">
                  Documentación simple pero importante para garantizar la seguridad de tu mascota durante el viaje.
                </p>
              </div>
            </div>
          </div>

          {/* Viajes Internacionales */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-purple-200">
              
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Viajes Internacionales</h3>
              </div>

              {/* Requirements List */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 mb-5 sm:mb-6">
                <ul className="space-y-3 sm:space-y-4">
                  {internationalReqs.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.senasa.gob.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 w-full px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-base sm:text-lg group-hover:scale-105"
              >
                Ir a SENASA
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};