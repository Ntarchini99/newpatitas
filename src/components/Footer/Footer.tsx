import { PawPrint, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import terminosPdf from '../../assets/pdf/tycpatitascar.pdf';


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <PawPrint size={24} />
              </div>
              <span className="text-2xl font-bold">Patitas Car</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transporte seguro y profesional para tus mascotas. Cuidamos de ellas como si fueran nuestras.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Transporte Local
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Viajes internacionales terrestres
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Reservas Programadas
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400">
                    <Phone size={20} className="text-primary mt-1" />
                    <div>
                      <p>+54 9 11 2321-8193</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <Mail size={20} className="text-primary mt-1" />
                    <div>
                      <p>patitascar25@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href="http://qr.afip.gob.ar/?qr=vajrJ6ibhLMZ2qySgKksHw,,"
                target="_F960AFIPInfo"
                className="transition-opacity duration-300 hover:opacity-80 flex-shrink-0"
              >
                <img
                  src="https://i.postimg.cc/SKrcHF6Q/qr.png"
                  alt="AFIP - Código QR"
                  className="h-28 w-28"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              2024 Patitas Car. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-gray-400">
              {/* <a href="#" className="hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a> */}
              <a
                href={terminosPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Términos y Condiciones
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
