import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-slate-900 transition-colors duration-500 overflow-hidden">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
