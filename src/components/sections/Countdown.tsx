import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 59 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          // Timer finished logic - just reset loop without popup
          minutes = 4;
          seconds = 59;
        }
        return { minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Visible Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent pointer-events-none" />

            <div className="relative z-10 text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-8 h-8 text-primary animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-black text-gradient-neon">
                  Última Chamada
                </h2>
              </div>

              <p className="text-xl sm:text-2xl text-foreground/90 font-bold uppercase">
                ⚠️ Essa oferta expira em:
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-md mx-auto">
                <div className="bg-gradient-neon p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl animate-pulse-glow">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-black text-background">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-background/90 font-black mt-1 sm:mt-2 tracking-wider">
                    MINUTOS
                  </div>
                </div>
                <div className="bg-gradient-neon p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl animate-pulse-glow">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-black text-background">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-background/90 font-black mt-1 sm:mt-2 tracking-wider">
                    SEGUNDOS
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-lg sm:text-xl text-destructive font-black animate-pulse uppercase">
                  🚨 DEPOIS DISSO O PREÇO SOBE PARA R$197!
                </p>
                <p className="text-xl sm:text-2xl font-black text-foreground">
                  Você tem duas escolhas AGORA:
                </p>

                <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                  <div className="bg-background/40 p-4 sm:p-5 rounded-xl border-2 border-destructive/50">
                    <p className="text-muted-foreground text-sm sm:text-base font-bold">
                      ❌ Continuar apenas passando vontade no feed dos outros.
                    </p>
                  </div>
                  <div className="bg-gradient-neon/20 p-4 sm:p-5 rounded-xl border-2 border-accent">
                    <p className="text-accent font-black text-sm sm:text-base">
                      ✅ Garantir seu desconto e montar seu negócio de açaí
                      HOJE.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
