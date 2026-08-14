import { useEffect, useState } from "react";
import { navLinks, profile } from "../data.js";
import Icon from "./Icons.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const l of navLinks) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-paper-300 bg-white/90 shadow-soft backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#accueil" className="flex items-center gap-2.5 font-bold text-ink-900">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-sm text-white">
            KG
          </span>
          <span className="hidden text-sm tracking-wide sm:block">Kesse Gondo Firmin</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  active === l.href
                    ? "bg-teal-50 text-teal-600"
                    : "text-ink-500 hover:bg-paper-100 hover:text-ink-900"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600 sm:inline-flex"
          >
            <Icon name="download" className="h-4 w-4" />
            CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-paper-300 bg-white text-ink-900 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-paper-300 bg-white shadow-soft lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-ink-700 hover:bg-paper-100 hover:text-teal-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Icon name="download" className="h-4 w-4" />
                Télécharger le CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
