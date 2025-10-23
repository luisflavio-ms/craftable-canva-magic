import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Pronto para começar a lucrar?
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90">
            Junte-se a centenas de empreendedores que já estão transformando criatividade em renda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 rounded-full shadow-glow transition-all hover:scale-105 group">
              Garantir Meu Pack Agora
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 pt-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Garantia de 7 dias • Acesso imediato • Pagamento seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
