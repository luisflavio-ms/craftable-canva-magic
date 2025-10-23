import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content: "Comecei há 2 meses e já vendi mais de 50 revistas! O retorno foi incrível.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Designer Gráfico",
    content: "Perfeito para quem quer ter uma renda extra. Super fácil de personalizar!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Mãe Empreendedora",
    content: "Meus clientes amam! As crianças ficam encantadas com as revistas personalizadas.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground">
            Centenas de pessoas já estão lucrando com o Pack
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
