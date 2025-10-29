import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Pricing() {
  const handleCheckout = () => {
    toast.success("Iniciando checkout...");
    // Mock checkout
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors">
              <Logo className="w-6 h-6" />
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
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Plano Simples e Transparente</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesso completo ao CloudStudio por um preço justo
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold">Plano Mensal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Tudo que você precisa para criar posts incríveis
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">R$ 99</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cancele quando quiser, sem multas
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleCheckout}
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
                    <span className="text-sm">Ajustes conversacionais ilimitados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Calendário de posts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suporte prioritário</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Atualizações automáticas</span>
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
                <h3 className="font-semibold mb-2">O que está incluído no plano?</h3>
                <p className="text-muted-foreground">
                  Acesso completo a todas as funcionalidades do CloudStudio: geração ilimitada de posts,
                  DNA da Marca personalizado, Consultor de Estilo com IA, calendário de posts e muito mais.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-muted-foreground">
                  Sim, você pode cancelar a qualquer momento sem multas ou taxas adicionais. 
                  Seu acesso continuará até o final do período pago.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quantos posts posso gerar?</h3>
                <p className="text-muted-foreground">
                  O plano oferece geração ilimitada de posts (imagem + legenda). Crie quantos posts 
                  você precisar para suas campanhas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Como funciona o DNA da Marca?</h3>
                <p className="text-muted-foreground">
                  Durante o onboarding, você responde 5 perguntas estratégicas sobre sua marca. 
                  A IA usa essas informações para garantir que todos os posts gerados sejam consistentes 
                  com a identidade da sua marca.
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

