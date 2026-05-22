import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Activities from './components/Activities';
import About from './components/About';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Stats />
      <Activities />
      <About />
      <Pricing />
      <Schedule />
      <Coaches />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
