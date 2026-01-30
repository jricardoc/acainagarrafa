import { Check } from "lucide-react";

export function StartNow() {
  const handleProCheckout = () => {
    // Analytics + Redirect logic
    window.location.href = "https://pay.hotmart.com/J104173808P?off=6ymc50iy";
  };

  const handleBasicCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href =
      "https://pay.hotmart.com/J104173808P?checkoutMode=10";
  };

  const features = [
    "Garantia 15 dias",
    "Acesso imediato",
    "Todos os bônus",
    "Suporte VIP",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center space-y-6 md:space-y-8 border-2 border-primary/50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-gradient-neon glow-neon-pink">
              Comece Agora
            </span>
            <br />
            <span className="text-foreground">
              e Faça Sua Primeira Venda em 7 Dias
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-background/40 px-4 py-2 rounded-full border border-accent/30"
              >
                <Check className="w-4 h-4 text-accent" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleProCheckout}
              className="bg-gradient-neon text-background font-black sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 h-auto rounded-xl md:rounded-2xl animate-pulse-glow hover:scale-105 transition-transform w-full md:w-auto text-xs inline-flex items-center justify-center cursor-pointer"
            >
              SIM, QUERO O PLANO PRO AGORA
            </button>

            <p className="text-lg text-muted-foreground">
              Por apenas <span className="text-accent font-bold">R$ 14,90</span>
            </p>

            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              (Garantia 15 dias + acesso imediato + todos os bônus + suporte
              VIP)
            </p>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-muted-foreground text-sm mb-2">
                Não tem R$14,90 agora?
              </p>
              <a
                href="#"
                onClick={handleBasicCheckout}
                className="text-accent hover:text-accent/80 font-bold text-sm underline transition-colors cursor-pointer"
              >
                Comece por R$9,90 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
