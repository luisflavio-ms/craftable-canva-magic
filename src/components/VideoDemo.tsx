export const VideoDemo = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* iPhone Mockup with Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative w-[280px] h-[570px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=800&fit=crop"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              As Artes Já Estão Prontas!
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Você não precisa criar nada do zero. Todas as ilustrações já estão 
                <span className="text-primary font-semibold"> finalizadas e prontas para usar</span>.
              </p>
              <p>
                É só editar a capa com o <span className="text-primary font-semibold">nome e idade da criança</span> de 
                forma super fácil e rápida direto no Canva.
              </p>
              <p>
                Em poucos minutos você tem uma revista <span className="text-primary font-semibold">100% personalizada</span> 
                e pronta para vender!
              </p>
            </div>
            
            <div className="flex gap-3 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-success">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Fácil de Usar</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Super Rápido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
