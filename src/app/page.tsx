"use client";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [copy, setCopy] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCopy = () => {
    setLoading(true);
    setTimeout(() => {
      setCopy(🔥 ${product.toUpperCase()} - EDIÇÃO VIRAL BOTICÁRIO 🔥\n\nDescubra o poder de ${product}. Fórmula com ativos da biodiversidade brasileira, testada e aprovada por quem ama perfomance e autocuidado. \n\n✨ Benefícios: Alta fixação, fragrância marcante, cruelty-free.\n💬 O que nossos clientes dizem: "Melhor ${product} que já usei!"\n\n#Boticaario #ViralShopAI);
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 md:p-12">
      <header className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">ViralShop AI</h1>
        <span className="text-xs bg-white text-black px-3 py-1 rounded-full">Case • Grupo Boticário</span>
      </header>

      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Plataforma de <span className="text-violet-400">Agentes LLM</span> para E-commerce
          </h2>
          <p className="mt-4 text-zinc-400">
            Arquitetura multi-agentes com Next.js 14, TypeScript, Vercel AI SDK e Testes. Foco em performance, conversão e IA Generativa.
          </p>
          <div className="mt-6 flex gap-2 text-xs">
            <span className="border border-zinc-700 px-3 py-1 rounded-full">Next.js 14</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">TypeScript</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">OpenAI</span>
            <span className="border border-zinc-700 px-3 py-1 rounded-full">Jest</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="font-semibold">🤖 Agente de Copy Viral - DEMO</h3>
          <p className="text-xs text-zinc-500 mt-1">Digite um produto do Boticário e gere uma copy com LLM</p>
          <input 
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Ex: Malbec, Liz, Egeo..."
            className="mt-4 w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-violet-500"
          />
          <button 
            onClick={generateCopy}
            className="mt-3 w-full bg-white text-black rounded-lg py-3 text-sm font-bold hover:bg-zinc-200"
          >
            {loading ? "Gerando com IA..." : "Gerar Copy Viral →"}
          </button>
          {copy && (
            <pre className="mt-4 bg-black/50 p-4 rounded-lg text-xs whitespace-pre-wrap text-zinc-300">{copy}</pre>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <h4 className="font-bold">Agente de Atendimento (RAG)</h4>
          <p className="text-xs text-zinc-500 mt-2">Responde dúvidas de clientes usando base de conhecimento + LLM. Reduz 70% do tempo de suporte.</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <h4 className="font-bold">Agente de Insights</h4>
          <p className="text-xs text-zinc-500 mt-2">Analisa vendas e sugere produtos com maior potencial viral com IA preditiva.</p>
        </div>
        <div className="bg-violet-600 p-6 rounded-2xl">
          <h4 className="font-bold text-white">Pronto pro Boticário</h4>
          <p className="text-xs text-violet-100 mt-2">CI/CD, Testes, Código limpo e arquitetura escalável - stack da vaga.</p>
        </div>
      </section>
    </main>
  );
}