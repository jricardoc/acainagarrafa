import { Mail, Shield, Lock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-0"
      style={{
        background:
          "linear-gradient(180deg, hsl(280, 100%, 3%) 0%, hsl(280, 50%, 6%) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
      }}
    >
      {/* Decorative top accent line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, hsl(330, 100%, 71%) 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div
                className="flex items-center justify-center text-2xl"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--gradient-neon)",
                  boxShadow: "0 4px 20px rgba(255, 107, 181, 0.3)",
                }}
              >
                🥤
              </div>
              <div>
                <span
                  className="font-black text-xl block tracking-tight"
                  style={{ color: "white" }}
                >
                  Açaí na Garrafa
                </span>
                <span
                  style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}
                >
                  Método Oficial 2026
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Transforme açaí em um negócio lucrativo. Método testado por +600
              alunos que já faturam diariamente.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h4
              className="font-bold text-sm uppercase tracking-wider"
              style={{ color: "white" }}
            >
              Navegação
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#plans"
                className="inline-flex items-center justify-center md:justify-start gap-2"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "hsl(45, 93%, 66%)",
                  }}
                />
                Planos e Preços
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center md:justify-start gap-2"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "hsl(45, 93%, 66%)",
                  }}
                />
                Dúvidas Frequentes
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center md:justify-start gap-2"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "hsl(45, 93%, 66%)",
                  }}
                />
                Termos de Uso
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center md:justify-start gap-2"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "hsl(45, 93%, 66%)",
                  }}
                />
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4
              className="font-bold text-sm uppercase tracking-wider"
              style={{ color: "white" }}
            >
              Contato & Segurança
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:suporte@chefemcasa.site"
                className="text-sm flex items-center gap-3 justify-center md:justify-start"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255, 107, 181, 0.1)",
                  }}
                >
                  <Mail
                    className="w-4 h-4"
                    style={{ color: "hsl(330, 100%, 71%)" }}
                  />
                </div>
                <div>
                  <span className="block">suporte@chefemcasa.site</span>
                  <span style={{ fontSize: "11px", opacity: 0.6 }}>
                    Seg-Sex: 09h às 18h
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                <div
                  className="flex items-center gap-2 text-xs px-3 py-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <Shield className="w-4 h-4" style={{ color: "#22c55e" }} />
                  <span>Compra Segura</span>
                </div>
                <div
                  className="flex items-center gap-2 text-xs px-3 py-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <Lock className="w-4 h-4" style={{ color: "#22c55e" }} />
                  <span>SSL 256-bit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            © {currentYear} Açaí na Garrafa. Todos os direitos reservados.
            <span style={{ margin: "0 8px", opacity: 0.3 }}>|</span>
            CNPJ: 56.406.490/0001-90
          </p>

          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}
          >
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook. Depois que você sair do Facebook, a responsabilidade não é
            mais deles e sim do nosso site. Fazemos todos os esforços para
            indicar claramente e mostrar todas as provas do produto e usar
            resultados reais.
          </p>
        </div>
      </div>
    </footer>
  );
}
