import { Card } from "@/components/ui/Card";

const bonuses = [
  {
    icon: "📱",
    title: "Bônus #1: Calculadora de Precificação Automática",
    description:
      "Planilha inteligente que calcula exatamente quanto cobrar por cada tamanho de garrafa (300ml, 500ml, 1L) pra garantir 100% de lucro.",
  },
  {
    icon: "🎯",
    title: "Bônus #2: Lista Secreta de Fornecedores",
    description:
      "Contatos diretos dos melhores fornecedores de polpa, garrafas e embalagens. Pague preço de atacado mesmo comprando pouco.",
  },
  {
    icon: "👑",
    title: "Bônus #3: 50 Legendas Prontas para Instagram",
    description:
      "É só copiar e colar! Textos persuasivos que dão água na boca e fazem o cliente pedir na hora. Nunca mais trave na hora de postar.",
  },
  {
    icon: "📸",
    title: "Bônus #4: Banco de Imagens Profissionais",
    description:
      "Mais de 100 fotos de açaí em alta resolução pra você usar nas suas redes sociais e cardápio antes mesmo de tirar suas próprias fotos.",
  },
  {
    icon: "💰",
    title: "Bônus #5: Suporte VIP no WhatsApp",
    description:
      "Acesso direto ao meu número pessoal para tirar dúvidas sobre receitas, ponto do açaí e vendas. Você não estará sozinha!",
  },
  {
    icon: "📏",
    title: "Bônus #6: Receitas Fit, Zero e Low Carb",
    description:
      "Aprenda a fazer açaí para diabéticos e fitness. Um mercado gigante e pouco explorado que paga o dobro pelo produto.",
  },
  {
    icon: "🏠",
    title: "Bônus #7: Comunidade Secreta de Alunas",
    description:
      "Entre para o grupo exclusivo, troque experiências, receitas e dicas de vendas com quem já está faturando alto com açaí.",
  },
  {
    icon: "🎓",
    title: "Bônus #8: Certificado de Especialista",
    description:
      "Receba um certificado oficial de conclusão do curso para passar autoridade e confiança para seus clientes.",
  },
];

export function Bonuses() {
  const sparkCount = 6;

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      {/* Sparkles Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(sparkCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-sparkle"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              background:
                i % 3 === 0
                  ? "hsl(330 100% 71%)"
                  : i % 3 === 1
                    ? "hsl(277 58% 59%)"
                    : "hsl(45 93% 66%)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-slide-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-gradient-neon glow-neon-pink">
              Bônus Irresistíveis que Turbinam Seu Lucro
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto">
            Imagine faturar o triplo desde o dia 1? Esses bônus exclusivos vão
            transformar sua cozinha em uma máquina de dinheiro.{" "}
            <span className="text-accent font-bold">
              Valor total fácil R$ 797 – grátis pra você!
            </span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bonuses.map((bonus, i) => (
            <Card
              key={i}
              className="card-glass p-6 space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-in group border-border/50"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {bonus.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gradient-gold leading-tight">
                {bonus.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {bonus.description}
              </p>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-12 md:mt-16 animate-slide-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="inline-block bg-gradient-neon p-6 md:p-8 rounded-2xl shadow-lg space-y-3 mx-4">
            <p className="text-base sm:text-2xl md:text-3xl font-black text-background">
              💎 Todos esses bônus são seus de GRAÇA ao garantir sua vaga agora!
            </p>
            {/* The Badge component was used here in original JS as `t({variant:"bonus"})`, likely a small badge or text */}
            <div className="flex items-center justify-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-bold backdrop-blur-sm">
                🎁 OFERTA POR TEMPO LIMITADO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
