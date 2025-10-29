import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";
import { Download, MessageSquare, Calendar, Settings, Wand2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<{
    image: string;
    caption: string;
  } | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Por favor, descreva o post que você quer criar.");
      return;
    }

    setIsGenerating(true);
    
    // Mock API call
    setTimeout(() => {
      setGeneratedPost({
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
        caption: `🌟 ${prompt}\n\n✨ Criado com CloudStudio - onde sua marca ganha vida!\n\n#marketing #conteudo #brandstrategy`
      });
      setIsGenerating(false);
      toast.success("Post gerado com sucesso!");
    }, 2000);
  };

  const handleDownload = () => {
    toast.success("Download iniciado!");
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 p-6 space-y-6">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors">
            <img src="/logo.png" alt="CloudStudio" className="w-6 h-6 " style={{ filter: "brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(2476%) hue-rotate(225deg) brightness(101%) contrast(101%)" }} />
            CloudStudio
          </a>
        </Link>

        <nav className="space-y-2">
          <Link href="/dashboard/studio">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
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
          <div>
            <h1 className="text-4xl font-bold mb-2">Estúdio Mágico</h1>
            <p className="text-muted-foreground">
              Descreva o post que você quer criar e deixe a IA fazer o resto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">O que você quer comunicar?</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Ex: Um post sobre sustentabilidade mostrando uma pessoa usando roupas da nossa coleção eco-friendly em um ambiente natural..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={8}
                    className="resize-none"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="w-full gap-2"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gerando...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Gerar Post Completo
                    </>
                  )}
                </Button>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm">
                <p className="text-muted-foreground">
                  💡 <strong>Dica:</strong> Seja específico sobre o contexto, emoção e elementos visuais 
                  que você quer no post. A IA usará o DNA da sua marca para criar algo único.
                </p>
              </div>
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              {generatedPost ? (
                <div className="space-y-4">
                  <div className="p-6 rounded-lg bg-card border border-border space-y-4">
                    <h3 className="font-semibold">Preview do Post</h3>
                    
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={generatedPost.image} 
                        alt="Post gerado" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Legenda</Label>
                      <Textarea
                        value={generatedPost.caption}
                        readOnly
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleDownload} className="flex-1 gap-2">
                        <Download className="w-4 h-4" />
                        Baixar Post
                      </Button>
                      <Link href="/dashboard/consultor">
                        <Button variant="outline" className="gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Ajustar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-12 rounded-lg bg-card border border-border border-dashed">
                  <div className="text-center space-y-4">
                    <Loader2 className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Seu post aparecerá aqui após a geração
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

