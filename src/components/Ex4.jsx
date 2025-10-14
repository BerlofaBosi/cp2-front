// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8 p-0.5">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
        <div className="w-full md:w-sm bg-amber-300 p-3 rounded-2xl flex justify-self-center flex-col ">
          <h1><b>Título</b></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, provident? Asperiores odio aut id iusto laboriosam possimus quasi. Necessitatibus, magnam dolores iure similique in ipsum quis. Delectus voluptates eligendi ex.</p>
          <button className="bg-blue-500 w-min p-2 rounded-2xl self-center hover:bg-blue-700 text-white text-justify">Botão</button>
        </div>
    </div>
  );
}