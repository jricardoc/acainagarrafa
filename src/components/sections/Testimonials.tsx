import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui";

const testimonials = [
  {
    name: "Marcos T.",
    location: "Salvador - BA",
    text: "Gente, eu achei que R$2,90 era brincadeira! Mas já fiz R$1.200 na primeira semana vendendo na porta da academia. O povo pira na cremosidade.",
    rating: 5,
    image: null,
  },
  {
    name: "Luciana S.",
    location: "Rio de Janeiro - RJ",
    text: "Trabalho em casa, cuido dos meus filhos e faço as garrafinhas à noite. Vendo tudo pelo WhatsApp pros vizinhos. Melhor renda extra que já tive!",
    rating: 5,
    image:
      "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/testimonial-fernanda-DjxSwsd_.webp",
  },
  {
    name: "Roberto P.",
    location: "São Paulo - SP",
    text: "Tenho uma sorveteria e adicionei o açaí na garrafa. Dobrei meu faturamento no balcão. A técnica de conservação é real, não cristaliza!",
    rating: 5,
    image: null,
  },
  {
    name: "Amanda K.",
    location: "Curitiba - PR",
    text: "Pago minha faculdade inteira só vendendo no intervalo. O módulo de abordagem ajudou muito a perder a vergonha. Vende muito fácil.",
    rating: 5,
    image:
      "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/testimonial-claudia-VSeTvPgL.webp",
  },
  {
    name: "Juliana M.",
    location: "Recife - PE",
    text: "O açaí gourmet com Nutella é o que mais sai aqui. As fotos do bônus ajudaram demais a divulgar no Instagram. Curso completo!",
    rating: 5,
    image:
      "https://www.acervodopsicologo.com/wp-content/uploads/2026/01/testimonial-juliana-QdBHO2wM.webp",
  },
];

export function Testimonials() {
  const handleCTAClick = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            <span className="text-gradient-neon">Histórias Reais</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground font-medium max-w-2xl mx-auto">
            Pessoas comuns que transformaram suas vidas vendendo açaí na
            garrafa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-sm sm:text-base font-medium mb-4 italic leading-relaxed min-h-[80px]">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}

                <div>
                  <p className="text-foreground font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-gold text-background font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto rounded-xl hover:scale-105 transition-transform w-full sm:w-auto max-w-md animate-pulse-glow"
          >
            GARANTIR MINHA VAGA! 🔥
          </Button>
        </div>
      </div>
    </section>
  );
}
