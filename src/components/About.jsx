import { profile, interests, languages } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

export default function About() {
  return (
    <section id="apropos" className="section">
      <div className="container-x">
        <SectionTitle eyebrow="À propos" title="Qui suis-je ?" />

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="space-y-5">
              {profile.about.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-500 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {interests.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-6 sm:p-7">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-teal-600">
                Informations
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <span className="text-ink-700">{profile.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <a href={profile.phoneHref} className="text-ink-700 hover:text-teal-600">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all text-ink-700 hover:text-teal-600"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="linkedin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink-700 hover:text-teal-600"
                  >
                    gondo-firmin-kesse
                  </a>
                </li>
              </ul>

              <div className="mt-7 border-t border-paper-200 pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-600">
                  Langues
                </h3>
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-ink-700">{l.name}</span>
                      <span className="text-ink-400">{l.level}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-paper-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
