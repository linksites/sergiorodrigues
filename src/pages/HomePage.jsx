import { Link } from "react-router-dom";
import { differentials, office } from "../content/office";

export default function HomePage() {
  const logo = `${import.meta.env.BASE_URL}assets/logo.png`;

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="reveal space-y-6">
          <p className="inline-flex rounded-full border border-gold-600/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold-300">
            {office.focus}
          </p>
          <h1 className="font-display text-5xl leading-tight text-stone-100 md:text-7xl">
            Defesa criminal estratégica com postura técnica e comunicação clara.
          </h1>
          <p className="max-w-2xl text-lg text-stone-300">
            Atuação em investigação, ação penal, recursos e execução penal. Atendimento em {office.city} e online para todo o Brasil.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/ciencias-criminais" className="rounded-full bg-gold-500 px-6 py-3 font-semibold text-black transition hover:bg-gold-400">
              Conheça a atuação
            </Link>
            <Link to="/contato" className="rounded-full border border-gold-500/70 px-6 py-3 font-semibold text-gold-300 transition hover:bg-gold-600/20">
              Falar no WhatsApp
            </Link>
          </div>
        </div>

        <aside className="gold-outline reveal rounded-2xl p-6 [animation-delay:120ms]">
          <img
            src={logo}
            alt="Emblema SR Advocacia"
            className="mx-auto mb-5 h-28 w-28 rounded-xl border border-gold-600/35 object-cover"
          />
          <h2 className="font-display text-3xl text-gold-300">Compromisso com resultado e ética</h2>
          <p className="mt-3 text-stone-300">
            Cada caso recebe diagnóstico jurídico, definição de prioridades e plano de atuação com acompanhamento contínuo.
          </p>
          <ul className="mt-5 space-y-2 text-stone-300">
            {differentials.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
