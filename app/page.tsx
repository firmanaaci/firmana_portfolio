import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#121212]">
      <Header />
      
      {/* Container dihapus dari sini agar background section bisa full-width */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}