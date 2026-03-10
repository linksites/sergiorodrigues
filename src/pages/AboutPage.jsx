import { office } from "../content/office";

const qualities = [
  "Atuação estratégica em Ciências Criminais",
  "Defesa técnica em inquérito e ação penal",
  "Comunicação direta, transparente e contínua",
  "Análise probatória com foco em resultado jurídico",
];

const specifications = [
  "Atendimento presencial em Belém/PA e online para todo o Brasil",
  "Suporte para casos urgentes, inclusive em plantões e custódia",
  "Estratégia processual personalizada para cada fase do caso",
  "Acompanhamento completo até recursos e execução penal",
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14 md:py-20">
      <div className="mb-8 reveal">
        <p className="text-sm uppercase tracking-[0.22em] text-gold-300">Sobre o escritório</p>
        <h1 className="font-display text-5xl text-stone-100 md:text-6xl">Atuação criminal com rigor técnico</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <article className="gold-outline reveal rounded-2xl p-7">
          <figure className="overflow-hidden rounded-xl border border-gold-600/40 bg-black/40">
            <img
              src="/assets/perfil-sergio-rodrigues.jpg"
              alt="Sérgio Rodrigues"
              className="h-[380px] w-full object-cover object-top"
            />
            <figcaption className="border-t border-gold-600/30 px-4 py-3 text-sm text-stone-400">
              Sérgio Rodrigues | Advogado Criminalista
            </figcaption>
          </figure>

          <h2 className="mt-6 font-display text-3xl text-gold-300">Perfil profissional</h2>
          <p className="mt-3 text-stone-300">
            Sérgio Rodrigues conduz sua atuação com foco em defesa criminal técnica, estratégica e humanizada,
            preservando direitos fundamentais e estruturando cada etapa do caso com precisão jurídica.
          </p>
          <p className="mt-3 text-stone-400">
            A bio profissional do escritório é orientada por compromisso ético, preparo para decisões urgentes e
            relacionamento transparente com o cliente, do primeiro atendimento até os desdobramentos finais.
          </p>

          <div className="mt-6 rounded-xl border border-gold-600/30 bg-black/30 p-5">
            <h3 className="font-display text-2xl text-gold-300">Qualidades e especificações</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-stone-400">Qualidades</p>
            <ul className="mt-2 space-y-2 text-stone-300">
              {qualities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-stone-400">Especificações de atendimento</p>
            <ul className="mt-2 space-y-2 text-stone-300">
              {specifications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="gold-outline reveal rounded-2xl p-7 [animation-delay:140ms]">
          <h2 className="font-display text-3xl text-gold-300">Método de atendimento</h2>
          <ol className="mt-4 space-y-3 text-stone-300">
            <li>1. Atendimento inicial para identificar urgência, risco e prioridade processual.</li>
            <li>2. Diagnóstico jurídico e definição da linha defensiva adequada ao caso concreto.</li>
            <li>3. Execução técnica com atuação em audiências, petições estratégicas e recursos.</li>
            <li>4. Atualização periódica com linguagem acessível e foco em tomada de decisão.</li>
          </ol>
          <p className="mt-5 border-t border-gold-600/30 pt-4 text-sm text-stone-400">
            {office.oab} | {office.city}
          </p>
        </article>
      </div>
    </section>
  );
}