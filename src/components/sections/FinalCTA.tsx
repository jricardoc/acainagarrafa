import { useEffect, useState } from "react";

export function FinalCTA() {
  const [_timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 34 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer);
            return prev;
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative bg-red-900/10 border-t border-b border-red-500/20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-background/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
          <p className="text-red-400 font-bold text-lg md:text-xl mb-12 animate-pulse uppercase">
            🚨 DEPOIS DISSO O PREÇO SOBE PARA R$197!
          </p>

          <div className="max-w-xl mx-auto space-y-6 text-left md:text-center">
            <p className="text-xl text-white font-bold mb-4">
              Você tem duas escolhas AGORA:
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-2xl">❌</span>
                <span className="text-gray-300 font-medium">
                  Continuar apenas passando vontade no feed dos outros.
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-2xl">✅</span>
                <span className="text-white font-bold">
                  Garantir seu desconto e montar seu negócio de açaí HOJE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
