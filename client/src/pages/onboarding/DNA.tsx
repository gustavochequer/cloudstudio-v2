import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    title: "Qual é a essência da sua marca?",
    description: "Descreva em poucas palavras o que torna sua marca única.",
    placeholder: "Ex: Somos uma marca de moda sustentável que valoriza a autenticidade e o minimalismo..."
  },
  {
    id: 2,
    title: "Quem é seu público-alvo?",
    description: "Descreva seu cliente ideal: idade, interesses, valores.",
    placeholder: "Ex: Mulheres de 25-40 anos, urbanas, conscientes, que valorizam qualidade sobre quantidade..."
  },
  {
    id: 3,
    title: "Qual tom de voz representa sua marca?",
    description: "Como sua marca se comunica? Formal, casual, inspiradora?",
    placeholder: "Ex: Tom amigável e inspirador, sem ser excessivamente formal. Usamos linguagem acessível..."
  },
  {
    id: 4,
    title: "Quais cores e estilos visuais definem sua marca?",
    description: "Descreva a paleta de cores e o estilo visual que você prefere.",
    placeholder: "Ex: Tons terrosos (bege, marrom, verde musgo), fotografia natural, layouts minimalistas..."
  },
  {
    id: 5,
    title: "Que emoção você quer despertar no seu público?",
    description: "Qual sentimento seus posts devem transmitir?",
    placeholder: "Ex: Confiança, inspiração, pertencimento a uma comunidade consciente..."
  }
];

export default function DNA() {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (!answers[questions[currentQuestion].id]) {
      toast.error("Por favor, responda a pergunta antes de continuar.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finalizar onboarding
      toast.success("DNA da Marca configurado com sucesso!");
      setLocation("/dashboard/studio");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/40 p-4">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors">
              <Sparkles className="w-5 h-5 text-primary" />
              CloudStudio
            </a>
          </Link>
          <div className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Definindo o DNA da sua marca</span>
            </div>
            
            <h1 className="text-4xl font-bold">{question.title}</h1>
            <p className="text-lg text-muted-foreground">{question.description}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="answer">Sua resposta</Label>
            <Textarea
              id="answer"
              placeholder={question.placeholder}
              value={answers[question.id] || ""}
              onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
              rows={6}
              className="resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>

            <Button onClick={handleNext} className="gap-2">
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

