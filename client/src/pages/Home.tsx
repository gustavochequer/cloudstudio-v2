import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">CloudStudio</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/pricing">
              <a className="text-sm hover:text-primary transition-colors">Preços</a>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Começar Grátis</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Seu Diretor de Marketing Virtual</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Posts de marca que
              <span className="text-primary"> funcionam 100%</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esqueça as alucinações do ChatGPT. CloudStudio gera posts completos (imagem + legenda) 
              com a identidade da sua marca, de forma previsível e controlada.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/auth/register">
                <Button size="lg" className="gap-2">
                  Começar Agora <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  Ver Oferta Founder
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Por que CloudStudio, não ChatGPT?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 rounded-lg bg-card border border-border/40">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">DNA da Marca</h3>
                <p className="text-muted-foreground">
                  5 perguntas estratégicas + seu logo = IA que entende sua marca e nunca "alucina".
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-lg bg-card border border-border/40">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Post Completo</h3>
                <p className="text-muted-foreground">
                  Imagem + legenda prontos em segundos. Você compra o resultado, não a ferramenta.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-lg bg-card border border-border/40">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Consultor de Estilo</h3>
                <p className="text-muted-foreground">
                  Chat conversacional que sugere ideias e ajusta posts como um diretor de marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold">
              Oferta Exclusiva para Founders
            </h2>
            <p className="text-xl text-muted-foreground">
              Acesso vitalício por <span className="text-primary font-bold">R$ 499</span> ou 
              plano mensal por <span className="text-primary font-bold">R$ 99</span>.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="gap-2">
                Ver Detalhes da Oferta <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
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

