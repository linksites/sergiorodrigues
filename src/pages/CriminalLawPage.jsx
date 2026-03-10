import { criminalServices } from "../content/office";

const results = [
  {
    title: "Atuação em audiência de custódia",
    description:
      "Estratégia de urgência com foco em legalidade do flagrante, cautelares proporcionais e preservação de direitos fundamentais.",
  },
  {
    title: "Defesa em ação penal complexa",
    description:
      "Organização de prova documental, definição de tese principal e subsidiária, e atuação coordenada em instrução e memoriais.",
  },
  {
    title: "Recurso para revisão de decisão restritiva",
    description:
      "Construção recursal orientada por jurisprudência atual, com argumentação técnica e pedido de tutela urgente quando cabível.",
  },
];

export default function CriminalLawPage() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14 md:py-20">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.22em] text-gold-300">Ciências Criminais</p>
        <h1 className="font-display text-5xl text-stone-100 md:text-6xl">Atuação especializada em Direito Penal</h1>
        <p className="mt-4 max-w-3xl text-lg text-stone-300">
          Defesa técnica em investigação, ação penal, recursos e execução. Cada caso é conduzido com estratégia
          jurídica individualizada, observando prova, jurisprudência e contexto processual.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {criminalServices.map((service, index) => (
          <article
            key={service.title}
            className="gold-outline reveal rounded-2xl p-6"
            style={{ animationDelay: `${80 + index * 70}ms` }}
          >
            <h2 className="font-display text-3xl text-gold-300">{service.title}</h2>
            <p className="mt-2 text-stone-300">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 reveal">
        <h2 className="font-display text-4xl text-gold-300">Casos e Resultados</h2>
        <p className="mt-2 max-w-3xl text-stone-400">
          Exemplos institucionais anonimizados para demonstrar método de trabalho. Cada processo possui dinâmica própria,
          sem promessa de resultado futuro.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {results.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-gold-600/30 bg-zinc-950/80 p-6 reveal"
            style={{ animationDelay: `${120 + index * 80}ms` }}
          >
            <h3 className="font-display text-2xl text-gold-300">{item.title}</h3>
            <p className="mt-2 text-stone-300">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gold-600/30 bg-zinc-950/80 p-6">
        <h2 className="font-display text-3xl text-gold-300">Perguntas frequentes</h2>
        <ul className="mt-4 space-y-2 text-stone-300">
          <li>• O que fazer em caso de prisão em flagrante?</li>
          <li>• Como funciona a audiência de custódia?</li>
          <li>• Quando cabe habeas corpus?</li>
          <li>• Quais documentos levar na primeira consulta?</li>
        </ul>
      </div>
    </section>
  );
}