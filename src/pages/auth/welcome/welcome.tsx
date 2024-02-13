import { Button } from "@/components/ui/button";

export function WelcomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Seja bem vindo</h1>
      <h3>Acesse agora a plataforma para buscar ou publicar jobs.</h3>
      <div className="flex flex-col gap-2">
        <Button>Sou candidato</Button>
        <Button variant="secondary">Sou recrutador</Button>
      </div>
    </div>
  );
}
