import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import CoachesSection from '../components/CoachesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FacilitiesSection from '../components/FacilitiesSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileCTA from '../components/MobileCTA';

export default function HomePage() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ProgramsSection />
      <CoachesSection />
      <TestimonialsSection />
      <FacilitiesSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}
