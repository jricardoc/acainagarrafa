import { Shield, Clock } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-accent/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-gold p-4 rounded-full">
                <Shield className="w-12 h-12 text-background" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black">
              <span className="text-gradient-gold">Garantia Blindada</span>
              <br />
              <span className="text-foreground">de 15 Dias</span>
            </h2>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-foreground/90">
                Teste por <span className="text-accent font-bold">15 dias</span>
                .
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Se você não conseguir fazer um{" "}
                <span className="text-accent/90 font-semibold">
                  açaí cremoso que vende sozinho
                </span>{" "}
                ou não recuperar seu investimento na primeira hora de venda...{" "}
                <span className="text-primary font-bold">
                  devolvo 100% do seu dinheiro na hora
                </span>
                .
              </p>

              <div className="flex items-center justify-center gap-2 pt-4">
                <Clock className="w-5 h-5 text-accent" />
                <p className="text-accent font-bold text-lg">
                  Zero risco. Investimento protegido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
