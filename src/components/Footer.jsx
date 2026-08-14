import { profile, navLinks } from "../data.js";
import Icon from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-paper-300 bg-white py-10">
      <div className="container-x flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-sm font-bold text-white">
            KG
          </span>
          <div>
            <div className="text-sm font-semibold text-ink-900">{profile.name}</div>
            <div className="text-xs text-ink-400">{profile.role}</div>
          </div>
        </div>

        <ul className="hidden gap-5 text-sm text-ink-500 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-teal-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-paper-300 text-ink-500 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
          >
            <Icon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-paper-300 text-ink-500 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container-x mt-8 border-t border-paper-200 pt-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
