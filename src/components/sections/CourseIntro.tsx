import { useState, useRef } from "react";
import { Play } from "lucide-react";

export function CourseIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Dynamically load Wistia scripts exactly as in original source
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/x2ecglf90b.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-foreground">Apresentando:</span>
            <br />
            <span className="text-gradient-neon glow-neon-pink text-4xl md:text-5xl lg:text-6xl">
              Açaí na Garrafa – Nova Onda de 2026
            </span>
          </h2>

          {/* Smartphone Mockup Container */}
          <div className="max-w-sm sm:max-w-md mx-auto" ref={containerRef}>
            <div className="relative mx-auto" style={{ maxWidth: "320px" }}>
              {/* Device Frame */}
              <div
                className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800"
                style={{
                  boxShadow:
                    "0 0 40px 10px hsl(330 100% 71% / 0.25), 0 0 80px 20px hsl(277 58% 59% / 0.15)",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />

                {/* Screen Content */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {isPlaying ? (
                    <div
                      className="absolute inset-0 w-full h-full"
                      dangerouslySetInnerHTML={{
                        __html: `
                          <style>
                            wistia-player[media-id='x2ecglf90b']:not(:defined) { 
                              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/x2ecglf90b/swatch'); 
                              display: block; 
                              filter: blur(5px); 
                              padding-top: 181.94%; 
                            }
                          </style>
                          <wistia-player 
                            media-id="x2ecglf90b" 
                            seo="false"
                            autoplay="true"
                            playsinline="true"
                            style="width: 100%; height: 100%;"
                          ></wistia-player>
                        `,
                      }}
                    />
                  ) : (
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 w-full h-full cursor-pointer group focus:outline-none"
                      aria-label="Reproduzir vídeo"
                    >
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://fast.wistia.com/embed/medias/x2ecglf90b/swatch')",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/40 animate-ping" />
                          <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 animate-pulse" />
                          <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play
                              className="w-8 h-8 text-primary-foreground ml-1"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                        <p className="mt-4 text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                          ▶ Toque para assistir
                        </p>
                      </div>
                    </button>
                  )}
                  {/* Home Bar Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            O curso mais completo do Brasil para você dominar{" "}
            <span className="text-accent font-bold">
              as melhores receitas de açaí
            </span>{" "}
            (clássicos, gourmet e fit) e transformar em{" "}
            <span className="text-primary font-bold">
              lucro diário o ano todo
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
