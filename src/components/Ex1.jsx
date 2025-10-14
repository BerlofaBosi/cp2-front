// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white p-2 rounded-2xl hover:bg-blue-900">Alo Alo</button>
        </div>
    </div>
  );
}