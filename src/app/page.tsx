"use client";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [copy, setCopy] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCopy = () => {
    if (!product) return;
    setLoading(true);
    setTimeout(() => {
      const text = product.toUpperCase() + " - EDICAO VIRAL BOTICARIO\n\n" +
      "Descubra o poder de " + product + ". Formula com ativos da biodiversidade brasileira, testada para alta performance.\n\n" +
      "Beneficios: Alta fixacao, fragrancia marcante, cruelty-free.\n" +
      "Review: Melhor " + product + " que ja usei!\n\n" +
      "#Boticario #ViralShopAI #LLM";
      setCopy(text);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 md:p-12">
      <header className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">ViralShop AI</h1>
        <span className="text-xs bg-white text-black px-3 py-1 rounded-full">Case Grupo Boticario</span>
      </header>

      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Plataforma de <span className="text-violet-400">Agentes LLM</span> para E-commerce
          </h2>
          <p className="mt-4 text-zinc-400">
            Arquitetura multi-agentes com Next.js 14, TypeScript, Vercel AI SDK e Testes. Foco em performance e IA Generativa.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="border border-zinc-700 px-3 py-1 rounded-full">Next.js 14</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">TypeScript</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">OpenAI</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">Jest</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="font-semibold">Agente de Copy Viral - DEMO</h3>
          <p className="text-xs text-zinc-500 mt-1">Digite um produto e gere copy com LLM</p>
          <input 
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Ex: Malbec, Liz, Egeo..."
            className="mt-4 w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-violet-500"
          />
          <button 
            onClick={generateCopy}
            className="mt-3 w-full bg-white text-black rounded-lg py-3 text-sm font-bold hover:bg-zinc-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Gerando com IA..." : "Gerar Copy Viral"}
          </button>
          {copy && (
            <pre className="mt-4 bg-black/50 p-4 rounded-lg text-xs whitespace-pre-wrap text-zinc-300 border border-zinc-800">{copy}</pre>
          )}
        </div>
      </section>
    </main>
  );
}