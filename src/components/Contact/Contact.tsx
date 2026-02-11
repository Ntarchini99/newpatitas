import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        petType: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-[#5bb897]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Solicita tu cotización o resuelve tus dudas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Información de contacto */}
          <div className="animate-slide-up">
            <div className="bg-[#5bb897] text-white p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <p className="opacity-90">+54 9 11 2321-8193</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="opacity-90">patitascar25@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="font-semibold mb-3">Horario de Atención</p>
                <p className="opacity-90">
                  Lunes a Domingos: 9:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300"
                        placeholder="+54 9 11 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Tipo de Mascota
                      </label>
                      <select
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300"
                      >
                        <option value="">Seleccionar</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Servicio
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300"
                      >
                        <option value="">Seleccionar</option>
                        <option value="local">Transporte Local</option>
                        <option value="largo">Viaje Largo</option>
                        <option value="express">Servicio Express</option>
                        <option value="programado">Reserva Programada</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5bb897] transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu necesidad..."
                    />
                  </div>

                  <button
  type="submit"
  className="w-full bg-[#f0bebe] text-gray-800 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#e6a9a9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
>
  Enviar Mensaje
  <Send size={20} />
</button>

                </>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle
                    className="text-green-500 mx-auto mb-4"
                    size={64}
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Mensaje Enviado
                  </h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
