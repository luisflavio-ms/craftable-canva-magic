export const ProductDemo = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Tudo Isso Sem Complicação!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Edite diretamente no Canva, <span className="text-primary font-semibold">mesmo que você nunca tenha usado</span> a plataforma antes!
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 mb-8">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&h=675&fit=crop"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-young-mother-with-her-little-daughter-in-nature-eating-a-39764-large.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl transform scale-105"></div>
          </div>

          {/* Bottom Text */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-success/10 border-2 border-success/30 rounded-full">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-semibold text-success-foreground">
                Fornecemos um guia passo a passo para você começar
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Você não precisa ter experiência com design. Nosso tutorial completo te guia em cada etapa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
