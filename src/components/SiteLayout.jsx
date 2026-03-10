import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { office } from "../content/office";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/ciencias-criminais", label: "Ciências Criminais" },
  { to: "/contato", label: "Contato" },
];

export default function SiteLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-stone-100">
      <header className="sticky top-0 z-50 border-b border-gold-600/30 bg-black/85 backdrop-blur">
        <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/logonovacirculo.jpeg"
              alt="Logo Sérgio Rodrigues Advocacia Criminal"
              className="h-11 w-11 rounded-full border border-gold-600/50 object-cover"
            />
            <div>
              <p className="font-display text-2xl leading-none text-gold-300">Sérgio Rodrigues</p>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Advocacia Criminal</p>
            </div>
          </NavLink>

          <button
            type="button"
            className="rounded border border-gold-600/60 px-3 py-2 text-gold-300 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            Menu
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive ? "bg-gold-500 text-black" : "text-stone-300 hover:bg-gold-600/20 hover:text-gold-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="mx-auto mb-4 flex w-[min(1120px,92vw)] flex-col gap-2 rounded-xl border border-gold-600/30 bg-zinc-950 p-3 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm transition ${
                    isActive ? "bg-gold-500 text-black" : "text-stone-300 hover:bg-gold-600/20"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gold-600/20 py-8">
        <div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-4 text-sm text-stone-400">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logonovacirculo.jpeg"
              alt="Sérgio Rodrigues Advocacia Criminal"
              className="h-9 w-9 rounded-full border border-gold-600/40 object-cover"
            />
            <p>
              {office.name} | {office.focus}
            </p>
          </div>
          <p>
            {office.oab} | {office.city}
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}