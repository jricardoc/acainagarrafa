import { Card } from "@/components/ui";

const recipesData = [
  {
    title: "Sabores Tradicionais",
    recipes: [
      "⭐ Açaí Puro Prime – A base perfeita e ultra cremosa",
      "⭐ Açaí com Leite Ninho – O campeão de vendas absoluto",
      "⭐ Açaí com Paçoca – Crocância e sabor brasileiro",
      "⭐ Açaí com Banana – O clássico energético",
      "⭐ Açaí com Morango – Refrescância garantida",
      "⭐ Açaí Guaraná Power – O combustível para o dia a dia",
    ],
  },
  {
    title: "Linha Gourmet (Ticket Alto)",
    recipes: [
      "⭐ Açaí Sensação – Brigadeiro artesanal e morango",
      "⭐ Açaí Pavê de Oreo – Camadas de puro prazer visual",
      "⭐ Açaí com Nutella Real – O queridinho do público Premium",
      "⭐ Açaí Prestígio – Coco ralado e chocolate meio amargo",
      "⭐ Açaí Cheesecake – Toque sofisticado de frutas vermelhas",
      "⭐ Açaí Meio a Meio – Cupuaçu e Açaí (a dupla perfeita)",
    ],
  },
  {
    title: "Linha Especial (Onda 2026)",
    recipes: [
      "⭐ Açaí Zero Açúcar – Para diabéticos e restritos",
      "⭐ Açaí Whey Protein – Foco total no público de academia",
      "⭐ Açaí Vegano – Sem nenhum derivado animal",
      "⭐ Açaí Energy Max – Com pó de guaraná e catuaba",
      "⭐ Açaí Kids – Com confeitos e cores vibrantes",
      "⭐ Açaí Detox – Batido com frutas e fibras",
    ],
  },
];

export function Recipes() {
  return (
    <section
      id="recipes"
      className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden"
    >
      {/* Sparkles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-sparkle hidden md:block"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-slide-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-gradient-neon glow-neon-pink">
              Cardápio de Sucesso
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto">
            Descubra as combinações mais vendidas e refrescantes, divididas em
            categorias para você faturar alto.{" "}
            <span className="text-accent font-bold">
              Todas testadas e aprovadas!
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {recipesData.map((category, idx) => (
            <Card
              key={idx}
              className="card-glass p-6 md:p-8 space-y-4 hover:scale-105 transition-transform duration-300 animate-slide-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-gold glow-neon-purple">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.recipes.map((recipe, rIdx) => (
                  <li
                    key={rIdx}
                    className="text-sm sm:text-base text-foreground/90 flex items-start gap-2"
                  >
                    <span>{recipe}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div
          className="text-center animate-slide-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="inline-block bg-gradient-neon p-6 md:p-8 rounded-2xl shadow-lg">
            <p className="sm:text-2xl md:text-3xl font-black text-background text-base">
              🤑 Transforme R$50 em R$180 por lote com técnicas comprovadas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
