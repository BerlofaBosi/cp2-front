// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
        <div className="grid grid-rows-[80px_auto_80px] h-[20rem] gap-0" >
          <div className="bg-emerald-400" />
          <div className="bg-emerald-200" />
          <div className="bg-emerald-400" />
        </div>
    </div>
  );
}
