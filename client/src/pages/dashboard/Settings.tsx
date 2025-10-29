import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, MessageSquare, Calendar, Settings as SettingsIcon, Wand2 } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Settings() {
  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
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
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Calendário</span>
            </a>
          </Link>
          <Link href="/dashboard/settings">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
              <SettingsIcon className="w-5 h-5" />
              <span>Configurações</span>
            </a>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl py-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Configurações</h1>
            <p className="text-muted-foreground">
              Gerencie suas preferências e informações da conta
            </p>
          </div>

          <div className="space-y-6">
            {/* Account Settings */}
            <div className="p-6 rounded-lg bg-card border border-border space-y-6">
              <h2 className="text-2xl font-semibold">Informações da Conta</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="João Silva" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao@exemplo.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" defaultValue="Minha Marca" />
                </div>
              </div>

              <Button onClick={handleSave}>Salvar Alterações</Button>
            </div>

            {/* Brand DNA */}
            <div className="p-6 rounded-lg bg-card border border-border space-y-4">
              <h2 className="text-2xl font-semibold">DNA da Marca</h2>
              <p className="text-muted-foreground">
                Você configurou o DNA da sua marca durante o onboarding. 
                Para fazer alterações, entre em contato com o suporte.
              </p>
              <Button variant="outline">Ver DNA Configurado</Button>
            </div>

            {/* Subscription */}
            <div className="p-6 rounded-lg bg-card border border-border space-y-4">
              <h2 className="text-2xl font-semibold">Assinatura</h2>
              <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div>
                  <p className="font-semibold">Plano Founder Lifetime</p>
                  <p className="text-sm text-muted-foreground">Acesso vitalício ativo</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">R$ 499</p>
                  <p className="text-sm text-muted-foreground">Pagamento único</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

