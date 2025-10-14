// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
        <div className="flex flex-row justify-center">
          <div className="bg-red-500 size-[50px]"/>
          <div className="bg-red-600 size-[50px]"/>
          <div className="bg-red-700 size-[50px]"/>
        </div>
    </div>
  );
}
