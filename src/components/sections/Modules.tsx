import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS - using correct v12 exports
import "swiper/css";
import "swiper/css/pagination";

const galleryImages = [
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-2-DDaCk0zi.jpg",
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-3-BLDsXVwo.jpg",
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-4-DAkWOtuH.jpg",
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-5-DPb10Akv.jpg",
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-6-G__8OHDS.jpg",
  "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/cookie-showcase-7-ox_uulzR.jpg",
];

const modules = [
  "Módulo 1: A base secreta que NUNCA fica com cristais de gelo.",
  "Módulo 2: 20 combinações e caldas artesanais (Nutella, Leite Ninho, Morango...)",
  "Módulo 3: Linha Fit & Proteica (A tendência que domina as academias em 2026).",
  "Módulo 4: Técnica de envase rápido e higiene (Encha 50 garrafas em minutos).",
  "Módulo 5: Embalagem e Rótulos (Como deixar sua garrafa com cara de marca famosa).",
  "Módulo 6: Precificação Real 2026 + Planilha de lucro automático.",
  "Módulo 7: Como vender no semáforo, escolas e academias (O script de abordagem).",
  "Módulo 8: Primeira venda em 24 horas.",
];

const styleInjection = `
  .swiper-pagination-bullet {
    background: hsl(var(--foreground));
    opacity: 0.3;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    background: hsl(var(--primary));
    opacity: 1;
    width: 24px;
    border-radius: 4px;
  }
`;

export function Modules() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      <style>{styleInjection}</style>

      <div className="container mx-auto max-w-5xl mb-16 md:mb-20">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-gradient-neon glow-neon-pink">
              Receitas que Vendem Sozinhas
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto">
            Veja os resultados incríveis que você vai conseguir fazer com nossas
            receitas testadas e aprovadas!
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            speed={600}
            grabCursor={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            style={{ paddingBottom: "50px" }}
          >
            {galleryImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-card aspect-square">
                  <img
                    src={src}
                    alt={`Açaí ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden aspect-square border-2 border-primary/20 shadow-lg"
            >
              <img
                src={src}
                alt={`Açaí ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Módulos Grid */}
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
            <span className="text-gradient-gold">O que Você Vai</span> <br />{" "}
            <span className="text-foreground">Aprender</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="card-glass p-6 rounded-2xl border border-border/50 flex items-start gap-4"
            >
              <div className="bg-gradient-neon p-2 rounded-full flex-shrink-0 text-background mt-1">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <span className="text-accent font-bold text-sm uppercase block mb-1 tracking-wider">
                  Módulo {i + 1}
                </span>
                <p className="text-foreground font-medium leading-snug text-base">
                  {mod.replace(/^Módulo \d+: /, "")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 pb-4 flex justify-center">
          <a
            href="#plans"
            className="bg-gradient-neon text-background font-bold text-lg px-12 py-6 rounded-xl shadow-lg shadow-accent/20 animate-pulse-glow w-full sm:w-auto text-center"
          >
            COMEÇAR AGORA! 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
