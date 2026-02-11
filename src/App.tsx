import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Requirements } from './components/Requirements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Carousel } from './components/Carrousel/Carrousel';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Requirements />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
