import { Hero } from "@/components/Hero";
import { VideoDemo } from "@/components/VideoDemo";
import { Benefits } from "@/components/Benefits";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProductDemo } from "@/components/ProductDemo";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoDemo />
      <Benefits />
      <ProductShowcase />
      <ProductDemo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
