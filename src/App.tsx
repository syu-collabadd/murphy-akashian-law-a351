import Nav from './components/Nav';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
