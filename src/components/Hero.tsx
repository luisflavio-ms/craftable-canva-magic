import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coloring.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent-foreground font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Lucre com Criatividade
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight">
              Transforme Revistas de Colorir em{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-accent px-4 py-1 rounded-lg">Lucro!</span>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              As artes já estão prontas! Basta editar a capa com o nome e idade da criança de forma fácil e rápida no Canva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground hover:bg-primary-foreground/20 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full">
                Ver Exemplos
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Revistas de colorir personalizadas" 
              className="relative rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
