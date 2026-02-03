import {
  Check,
  X,
  Shield,
  QrCode,
  CreditCard,
  Receipt,
  Sparkles,
  Lock,
} from "lucide-react";

// Delivery Info Component (reused logic)
function DeliveryInfo({
  variant,
  className = "",
}: {
  variant: "plan-pro" | "plan-basic";
  className?: string;
}) {
  const styles = {
    "plan-pro": "mt-4 p-3 rounded-lg bg-accent/10 border border-accent/30",
    "plan-basic": "mt-4 p-3 rounded-lg bg-muted/30 border border-border/50",
  };

  return (
    <div
      className={`flex flex-col items-center gap-1 text-center ${styles[variant]} ${className}`}
    >
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-xs font-medium text-foreground">
          Receba no WhatsApp em segundos
        </span>
      </div>
      <span className="text-xs text-foreground/60">
        Sem e-mails perdidos. Sem links confusos.
      </span>
    </div>
  );
}

// Payment Security Component (matching 'b' in JS)
function PaymentSecurity() {
  const methods = [
    { icon: QrCode, label: "Pix", description: "Instantâneo" },
    { icon: CreditCard, label: "Cartão", description: "Até 12x" },
    { icon: Receipt, label: "Boleto", description: "À vista" },
  ];

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-accent">
        <Shield className="w-5 h-5" />
        <span className="text-sm font-semibold uppercase tracking-wide">
          Pagamento 100% Seguro
        </span>
        <Lock className="w-4 h-4" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {methods.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg bg-card border border-border/30 w-[100px]"
          >
            <m.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              {m.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {m.description}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-muted-foreground max-w-md">
        🔒 Dados protegidos com criptografia SSL
      </p>
    </div>
  );
}

import { redirectToCheckout } from "@/lib/utils";

export function Plans() {
  const handleCheckout = (plan: string, _price: number) => {
    if (plan === "Pro") {
      redirectToCheckout("https://pay.hotmart.com/J104173808P?off=6ymc50iy");
    } else {
      redirectToCheckout("https://pay.hotmart.com/J104173808P?checkoutMode=10");
    }
  };

  return (
    <section id="plans" className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            <span className="text-gradient-gold">Escolha</span>{" "}
            <span className="text-foreground">Seu Plano</span>
          </h2>
          <p className="text-lg text-destructive-foreground">
            Comece hoje e faça sua primeira venda em 24 horas
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PRO PLAN */}
          <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 border-2 border-primary relative overflow-hidden transform md:scale-105">
            <div className="absolute top-0 right-0 bg-gradient-neon px-6 py-2 rounded-bl-2xl font-bold text-background flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              MAIS VENDIDO
            </div>

            <div className="text-center mb-6 mt-8">
              <h3 className="text-3xl font-black text-gradient-neon mb-2">
                Pro
              </h3>
              <p className="text-foreground">Acesso completo + suporte VIP</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-6xl font-black text-gradient-gold mb-2">
                R$ 14,90
              </div>
              <p className="text-secondary-foreground">
                Preço Único • Melhor investimento
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Acesso VITALÍCIO aos 8 módulos",
                "Suporte VIP direto no WhatsApp do Chef",
                "Calculadora de precificação automática",
                "50 legendas + Banco de fotos profissionais",
                "Bônus Extra: E-book Sucos Detox e Energéticos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleCheckout("Pro", 14.9)}
              className="w-full bg-gradient-neon text-background font-bold text-sm sm:text-base md:text-lg py-5 sm:py-6 h-auto rounded-xl flex items-center justify-center btn-glow hover:scale-105 transition-transform"
            >
              QUERO O PLANO PRO AGORA
            </button>
            <p className="text-center text-accent text-sm mt-4">
              🔥 Garantia de 15 dias • Acesso imediato
            </p>
            <DeliveryInfo variant="plan-pro" />
          </div>

          {/* BASIC PLAN */}
          <div className="card-glass rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-border/50 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Básico
              </h3>
              <p className="text-muted-foreground">Comece sua jornada</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-5xl font-black text-gradient-neon mb-2">
                R$ 9,90
              </div>
              <p className="text-foreground">Preço Único</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Acesso de 6 meses aos 8 módulos",
                "Grupo VIP de alunos",
                "Material base em PDF e Vídeo",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
              {/* Visual comparison of missing features */}
              {[
                "Suporte VIP direto no WhatsApp",
                "Calculadora de precificação",
                "50 legendas + Fotos pro",
              ].map((item, i) => (
                <div
                  key={i + 10}
                  className="flex items-start gap-3 text-muted-foreground/50"
                >
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleCheckout("Basic", 9.9)}
              className="w-full border border-primary/50 text-sm sm:text-base py-5 sm:py-6 h-auto flex items-center justify-center rounded-md text-foreground bg-muted/20 hover:bg-muted/30 transition-colors"
            >
              ESCOLHER BÁSICO
            </button>
            <DeliveryInfo variant="plan-basic" />
          </div>
        </div>

        <PaymentSecurity />
      </div>
    </section>
  );
}
