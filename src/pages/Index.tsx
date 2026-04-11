import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "ELYRION | Web Development, Cyber Security & Systems Engineering";
  }, []);

  return (
    // scroll-smooth enables CSS smooth scrolling for anchor links
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />

      {/*
        Peek wrapper: negative margin pulls Features up so it's
        slightly visible below the Hero on most viewports.
        Adjust -mt-16 / -mt-24 to taste.
      */}
      <div className="-mt-20 sm:-mt-24 relative z-20">
        <Features />
      </div>

      <HowItWorks />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;