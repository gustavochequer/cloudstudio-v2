import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, MessageSquare, Calendar, Settings, Wand2, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function Consultor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Olá! Sou seu Diretor de Marketing Virtual. Estou aqui para te ajudar a criar posts incríveis e ajustar qualquer detalhe. Como posso te ajudar hoje?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Entendi! Vou te ajudar com isso. Baseado no DNA da sua marca, sugiro que você explore temas relacionados à sustentabilidade e autenticidade. Que tal criarmos um post sobre isso?"
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
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
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
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
      <main className="flex-1 flex flex-col">
        <div className="border-b border-border/40 p-6">
          <h1 className="text-2xl font-bold">Consultor de Estilo</h1>
          <p className="text-muted-foreground">
            Converse com seu Diretor de Marketing Virtual
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-2xl rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-2xl rounded-lg p-4 bg-card border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-border/40 p-6">
          <div className="flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button onClick={handleSend} disabled={isTyping} className="gap-2">
              <Send className="w-4 h-4" />
              Enviar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

