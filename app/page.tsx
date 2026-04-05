import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow container mx-auto px-6 lg:px-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
      
      {/* Simple Footer */}
      <Footer />
    </div>
  );
}