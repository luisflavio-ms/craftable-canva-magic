import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const features = [
  "100+ páginas de desenhos",
  "Totalmente editável no Canva",
  "Temas variados (animais, princesas, super-heróis)",
  "Capas personalizáveis",
  "Formato pronto para impressão",
  "Atualizações gratuitas",
  "Suporte por WhatsApp",
  "Licença comercial incluída",
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-12 space-y-4">
              <Badge className="text-lg px-6 py-2 bg-success text-success-foreground">
                Oferta Especial
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground">
                Pack Completo Canva
              </h2>
              <p className="text-2xl text-muted-foreground">
                Revistas Personalizadas + Desenhos para Colorir
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-card-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {features.slice(4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-card-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl bg-muted/50">
              <div>
                <p className="text-lg text-muted-foreground line-through mb-2">De R$ 197,00</p>
                <p className="text-5xl font-bold text-primary mb-2">R$ 47,00</p>
                <p className="text-muted-foreground">ou 11x de R$ 5,08 • Acesso vitalício</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
