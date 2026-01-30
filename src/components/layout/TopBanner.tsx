import { useState, useEffect } from "react";

export function TopBanner() {
  const [time, setTime] = useState({ minutes: 4, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const { minutes, seconds } = prev;
        if (seconds > 0) {
          return { minutes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          // Reset to 04:59 loop or stop? Original loops to 4:59 in snippet
          return { minutes: 4, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[hsl(280,100%,5%)] via-[hsl(277,70%,15%)] to-[hsl(280,100%,5%)] border-b-4 border-primary shadow-2xl">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Timer Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-foreground font-black text-sm sm:text-base uppercase tracking-wide">
              ⚠️ OFERTA EXPIRA EM:
            </span>
            <div className="flex items-center gap-1 sm:gap-2 bg-background/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-primary/50">
              <div className="flex items-center gap-1 text-foreground font-black text-lg sm:text-2xl tabular-nums">
                <span className="bg-primary/20 px-2 py-1 rounded">
                  {String(time.minutes).padStart(2, "0")}
                </span>
                <span className="text-primary">:</span>
                <span className="bg-primary/20 px-2 py-1 rounded">
                  {String(time.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Vagas Section */}
          <div className="flex items-center gap-2 bg-gradient-neon text-background px-4 py-2 rounded-lg font-black text-sm sm:text-base animate-pulse">
            🔥 RESTAM APENAS 23 VAGAS!
          </div>
        </div>
      </div>
    </div>
  );
}
