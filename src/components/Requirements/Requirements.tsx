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
    <section id="requisitos" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Requisitos de Viaje
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Toda la documentación que necesitas para viajar con tu mascota
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-blue-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Viajes Nacionales</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-6">
                <ul className="space-y-4">
                  {localReqs.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-3 p-5 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-gray-700 text-base">
                  Documentación simple pero importante para garantizar la seguridad de tu mascota durante el viaje.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-purple-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Viajes Internacionales</h3>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-6">
                <ul className="space-y-4">
                  {internationalReqs.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              
              <a
                href="https://www.senasa.gob.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg group-hover:scale-105"
              >
                Ir a SENASA
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};