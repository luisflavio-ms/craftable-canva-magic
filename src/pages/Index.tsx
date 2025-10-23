import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
