import { office } from "../content/office";

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = (formData.get("nome") || "").toString().trim();
    const whatsappCliente = (formData.get("whatsapp") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const mensagem = (formData.get("mensagem") || "").toString().trim();

    const texto = [
      "Olá, Sérgio Rodrigues Advocacia.",
      "",
      "Novo pré-atendimento:",
      `Nome: ${nome}`,
      `WhatsApp: ${whatsappCliente}`,
      `E-mail: ${email}`,
      `Mensagem: ${mensagem || "Não informado."}`,
    ].join("\n");

    const url = `https://wa.me/5591982096180?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14 md:py-20">
      <div className="mb-8 reveal">
        <p className="text-sm uppercase tracking-[0.22em] text-gold-300">Contato</p>
        <h1 className="font-display text-5xl text-stone-100 md:text-6xl">Fale diretamente com o escritório</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <article className="gold-outline reveal rounded-2xl p-7">
          <h2 className="font-display text-3xl text-gold-300">Canais oficiais</h2>
          <div className="mt-4 space-y-3 text-stone-300">
            <p>
              WhatsApp: <a className="text-gold-300 underline decoration-gold-600/60" href={office.whatsapp} target="_blank" rel="noreferrer">{office.phoneNumber}</a>
            </p>
            <p>
              E-mail: <a className="text-gold-300 underline decoration-gold-600/60" href={`mailto:${office.email}`}>{office.email}</a>
            </p>
            <p>
              Base de atendimento: {office.city}
            </p>
          </div>
          <p className="mt-5 text-sm text-stone-400">Atendimento online para todo o Brasil, com prioridade para casos urgentes.</p>
        </article>

        <form className="gold-outline reveal rounded-2xl p-7 [animation-delay:140ms]" onSubmit={handleSubmit}>
          <h2 className="font-display text-3xl text-gold-300">Pré-atendimento</h2>
          <div className="mt-4 grid gap-3">
            <input
              name="nome"
              className="rounded-xl border border-gold-600/35 bg-black/60 p-3 text-stone-100 outline-none transition focus:border-gold-400"
              placeholder="Nome"
              required
            />
            <input
              name="whatsapp"
              className="rounded-xl border border-gold-600/35 bg-black/60 p-3 text-stone-100 outline-none transition focus:border-gold-400"
              placeholder="WhatsApp"
              required
            />
            <input
              name="email"
              className="rounded-xl border border-gold-600/35 bg-black/60 p-3 text-stone-100 outline-none transition focus:border-gold-400"
              placeholder="E-mail"
              type="email"
              required
            />
            <textarea
              name="mensagem"
              className="min-h-32 rounded-xl border border-gold-600/35 bg-black/60 p-3 text-stone-100 outline-none transition focus:border-gold-400"
              placeholder="Descreva a situação em poucas linhas"
            />
          </div>
          <button type="submit" className="mt-4 rounded-full bg-gold-500 px-6 py-3 font-semibold text-black transition hover:bg-gold-400">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}