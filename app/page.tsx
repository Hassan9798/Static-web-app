import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProductsSection from '@/app/components/ProductsSection';
import GallerySection from '@/app/components/GallerySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
