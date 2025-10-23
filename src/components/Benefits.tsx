import { Palette, Clock, DollarSign, Sparkles, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Palette,
    title: "Artes Prontas",
    description: "Mais de 100 desenhos exclusivos já prontos para você usar",
  },
  {
    icon: Clock,
    title: "Super Rápido",
    description: "Personalize em minutos direto no Canva",
  },
  {
    icon: DollarSign,
    title: "Alto Lucro",
    description: "Margem de lucro de até 300% por revista",
  },
  {
    icon: Sparkles,
    title: "Fácil de Editar",
    description: "Interface intuitiva, mesmo sem experiência",
  },
  {
    icon: Users,
    title: "Grande Demanda",
    description: "Pais adoram revistas personalizadas",
  },
  {
    icon: Zap,
    title: "Entrega Digital",
    description: "Sem custos de impressão ou estoque",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher nosso Pack?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para começar a lucrar hoje mesmo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-2 hover:border-primary transition-all hover:shadow-glow hover:-translate-y-2 duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
