import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

const faqs = [
  {
    question: "Nunca fiz cookies antes, vou conseguir?",
    answer:
      "Com certeza! O método foi desenvolvido pensando em quem nunca ligou um forno na vida. Ensinamos do zero absoluto, passo a passo, mostrando exatamente o ponto da massa e os segredos para não errar.",
  },
  {
    question: "Quanto tempo leva para fazer a primeira venda?",
    answer:
      "Temos alunas que vendem no mesmo dia em que postam as primeiras fotos! Seguindo nosso módulo de Vendas Rápidas, você consegue seus primeiros clientes em até 7 dias, usando apenas seu WhatsApp e Instagram.",
  },
  {
    question: "Preciso de equipamentos caros?",
    answer:
      "Não! Você começa com o que tem em casa: uma bacia, uma colher e um forno (pode ser o do fogão comum). Não precisa de batedeira planetária nem utensílios profissionais para começar faturando.",
  },
  {
    question: "Os cookies duram quanto tempo?",
    answer:
      "Nossos cookies têm validade de até 10 a 15 dias embalados corretamente (ensinamos como no curso) e a massa crua pode ser congelada por até 3 meses, o que facilita muito sua produção e estoque.",
  },
  {
    question: "Tem garantia? E se eu não gostar?",
    answer:
      "Sim! Você tem 15 dias de Garantia Blindada. Pode entrar, assistir às aulas e testar as receitas. Se não gostar de absolutamente nada, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    question: "Vou ter acesso para sempre?",
    answer:
      "No Plano PRO (mais vendido), o acesso é VITALÍCIO! No Plano Básico, o acesso é de 6 meses. Recomendamos o Pro para que você possa sempre consultar as receitas e atualizações.",
  },
  {
    question: "Quanto posso ganhar vendendo cookies?",
    answer:
      "Isso depende da sua dedicação, mas nossas alunas faturam em média de R$150 a R$350 por dia. Algumas que se dedicam integralmente passam de R$5.000,00 mensais trabalhando de casa.",
  },
  {
    question: "Como funciona o acesso ao curso?",
    answer:
      "O acesso chega no seu e-mail e WhatsApp imediatamente após a confirmação do pagamento. É 100% online, você assiste quando quiser pelo celular, tablet ou computador.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-400 font-medium mb-2 uppercase tracking-widest">
            Sessão final:
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
              Dúvidas Frequentes
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        {/* FAQ Card */}
        <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 bg-card/20 border border-white/5">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors text-base sm:text-lg font-bold text-gray-200 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Text */}
        <p className="text-center mt-8 text-muted-foreground">
          Ainda tem dúvidas?{" "}
          <span className="text-green-500 font-bold cursor-pointer hover:underline">
            Entre em contato pelo WhatsApp
          </span>
        </p>
      </div>
    </section>
  );
}
