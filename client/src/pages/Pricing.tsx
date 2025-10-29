import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Pricing() {
  const handleCheckout = (plan: string) => {
    toast.success(`Iniciando checkout para o plano ${plan}...`);
    // Mock checkout
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors">
              <Sparkles className="w-6 h-6 text-primary" />
              CloudStudio
            </a>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Começar Grátis</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Crown className="w-4 h-4 text-primary" />
              <span>Oferta Exclusiva para Founders</span>
            </div>
            <h1 className="text-5xl font-bold">Escolha seu plano</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesso completo ao CloudStudio com preços especiais de lançamento
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder Plan */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                Melhor Valor
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">Founder Lifetime</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Acesso vitalício ao CloudStudio
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">R$ 499</span>
                    <span className="text-muted-foreground">pagamento único</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">
                    Economize R$ 689 no primeiro ano
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleCheckout("Founder Lifetime")}
                >
                  Garantir Acesso Vitalício
                </Button>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Posts ilimitados (imagem + legenda)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">DNA da Marca personalizado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Consultor de Estilo com IA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ajustes conversacionais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Calendário de posts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">Atualizações vitalícias</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">Mensal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Flexibilidade para testar
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">R$ 99</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cancele quando quiser
                  </p>
                </div>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleCheckout("Mensal")}
                >
                  Começar Agora
                </Button>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Posts ilimitados (imagem + legenda)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">DNA da Marca personalizado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Consultor de Estilo com IA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ajustes conversacionais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Calendário de posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto pt-12 border-t border-border/40">
            <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">O que está incluído no plano Founder?</h3>
                <p className="text-muted-foreground">
                  Acesso completo e vitalício a todas as funcionalidades do CloudStudio, incluindo 
                  todas as atualizações futuras.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Posso cancelar o plano mensal?</h3>
                <p className="text-muted-foreground">
                  Sim, você pode cancelar a qualquer momento sem multas ou taxas adicionais.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quantos posts posso gerar?</h3>
                <p className="text-muted-foreground">
                  Ambos os planos oferecem geração ilimitada de posts (imagem + legenda).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 CloudStudio. Powered by Cloudifly.</p>
        </div>
      </footer>
    </div>
  );
}

