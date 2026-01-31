// Button import removed as it is unused

// Helper component extracted from original source "Gm"
function DeliveryInfo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 text-center mt-4 p-3 rounded-xl bg-card border border-accent/20 ${className}`}
    >
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm font-medium text-foreground">
          Acesso enviado automaticamente pelo WhatsApp
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-foreground/70">
        <span className="text-accent">✓</span>
        <span>Material liberado após confirmação do pagamento</span>
      </div>
    </div>
  );
}

export function Hero() {
  const handleCTAClick = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-foreground block">
                Você também pode <span className="text-accent">faturar de</span>
              </span>
              <span className="text-foreground block">
                <span className="text-accent underline decoration-accent decoration-4 underline-offset-4">
                  R$150 a R$450/dia
                </span>{" "}
                com Açaí na Garrafa
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-foreground/90 leading-relaxed">
              <span className="text-accent font-bold">
                Você não precisa de experiência na cozinha
              </span>{" "}
              — método passo a passo do primeiro envase ao lucro diário.
              Receitas virais, refrescantes e{" "}
              <span className="font-semibold">
                extremamente fáceis de fazer para mudar o seu mês
              </span>
              .
            </p>

            <div className="text-center lg:text-left space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-foreground/50 line-through text-lg">
                  De R$29
                </span>
                <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                  -90% OFF
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-foreground/70 text-sm">a partir de</span>
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-gradient-gold">
                  R$9,90
                </p>
              </div>

              <p className="text-sm sm:text-base text-accent font-semibold flex items-center justify-center lg:justify-start gap-1">
                <span>✓</span> Acesso vitalício por R$14,90 + Garantia de 15
                dias
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  handleCTAClick();
                }}
                className="bg-gradient-neon text-background font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 h-auto rounded-full w-full sm:w-auto inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                SIM! QUERO FATURAR COM AÇAÍ! 🥤
              </a>
              <DeliveryInfo />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="https://www.acervodopsicologo.com/wp-content/uploads/2026/01/hero-cookie-small.jpg"
                  type="image/jpeg"
                />
                <img
                  src="https://www.acervodopsicologo.com/wp-content/uploads/2026/01/hero-cookie-small.jpg"
                  alt="Açaí na garrafa"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover object-center"
                  loading="eager"
                  width={600}
                  height={400}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>

            <div className="mt-6 text-center lg:text-left">
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="text-accent font-bold whitespace-nowrap">
                  +600 alunos
                </span>{" "}
                já faturam com açaí na garrafa em 2026 usando este método que
                transforma uma simples mistura em vendas explodindo no WhatsApp.
              </p>
            </div>

            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-accent text-accent-foreground px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-lg md:animate-float">
              +600 Alunos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
