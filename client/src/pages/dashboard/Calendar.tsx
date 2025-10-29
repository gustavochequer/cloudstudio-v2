import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Calendar as CalendarIcon, Settings, Wand2, Plus } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Calendar() {
  const handleAddPost = () => {
    toast.info("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 p-6 space-y-6">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors">
            <Sparkles className="w-6 h-6 text-primary" />
            CloudStudio
          </a>
        </Link>

        <nav className="space-y-2">
          <Link href="/dashboard/studio">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              <Wand2 className="w-5 h-5" />
              <span>Estúdio Mágico</span>
            </a>
          </Link>
          <Link href="/dashboard/consultor">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>Consultor de Estilo</span>
            </a>
          </Link>
          <Link href="/dashboard/calendar">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
              <CalendarIcon className="w-5 h-5" />
              <span>Calendário</span>
            </a>
          </Link>
          <Link href="/dashboard/settings">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </a>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container max-w-6xl py-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Calendário de Posts</h1>
              <p className="text-muted-foreground">
                Organize e agende seus posts de forma estratégica
              </p>
            </div>
            <Button onClick={handleAddPost} className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Post
            </Button>
          </div>

          <div className="grid gap-4">
            {/* Sample posts */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-lg bg-muted flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Post sobre Sustentabilidade</h3>
                      <span className="text-sm text-muted-foreground">
                        {new Date(Date.now() + i * 86400000).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Um post inspirador sobre práticas sustentáveis na moda...
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Editar</Button>
                      <Button size="sm" variant="outline">Publicar</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

