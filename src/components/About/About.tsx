export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Patitas Car
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos una empresa especializada en el transporte de mascotas, nacida del amor por los animales y el compromiso con su bienestar. Entendemos que tus mascotas son parte de tu familia, por eso las tratamos con el mismo cariño y cuidado que merecen.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nuestro equipo está formado por profesionales capacitados con amplia experiencia en transporte. Cada vehículo está especialmente equipado con sistemas de ventilación, climatización y seguridad para garantizar el máximo confort durante el viaje.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Patitas Car, no solo transportamos mascotas, creamos experiencias positivas tanto para los animales como para sus dueños, brindando tranquilidad, confianza y un servicio de excelencia en cada viaje.
            </p>


          </div>

          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.postimg.cc/sfkP36k6/g.jpg"
                alt="Mascota feliz"
                className="rounded-2xl shadow-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://i.postimg.cc/DzwhbdNW/Whats_App_Image_2026_02_10_at_12_23_19.jpg"
                alt="Transporte de mascotas"
                className="rounded-2xl shadow-xl h-64 w-full object-cover mt-8 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://i.postimg.cc/bY70qC7V/a.jpg"
                alt="Cuidado animal"
                className="rounded-2xl shadow-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://i.postimg.cc/dtrd5x2C/Whats-App-Image-2026-02-11-at-18-30-10.jpg"
                alt="Mascota en viaje"
                className="rounded-2xl shadow-xl h-64 w-full object-cover mt-8 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
