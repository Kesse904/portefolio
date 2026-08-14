import { profile } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

const cards = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Téléphone", value: profile.phone, href: profile.phoneHref },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "gondo-firmin-kesse",
    href: profile.linkedin,
    external: true,
  },
  { icon: "pin", label: "Localisation", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-paper-100">
      <div className="container-x">
        <SectionTitle
          eyebrow="Contact"
          title="Travaillons ensemble"
          subtitle="Une opportunité, un projet d'infrastructure ou simplement une question ? Je réponds sous 24 h."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Tag = c.href ? "a" : "div";
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href
                    ? {
                        href: c.href,
                        ...(c.external ? { target: "_blank", rel: "noreferrer" } : {}),
                      }
                    : {})}
                  className="card group flex h-full items-center gap-4 p-5 sm:p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-100">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {c.label}
                    </div>
                    <div className="mt-0.5 break-words text-sm font-medium text-ink-900 sm:text-base">
                      {c.value}
                    </div>
                  </div>
                  {c.href && (
                    <Icon
                      name="arrow"
                      className="ml-auto h-4 w-4 shrink-0 text-paper-300 transition group-hover:translate-x-1 group-hover:text-teal-500"
                    />
                  )}
                </Tag>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-white p-7 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-ink-900">Besoin de mon CV complet ?</h3>
              <p className="mt-1 text-sm text-ink-500">
                Téléchargez la version PDF avec l'ensemble de mon parcours.
              </p>
            </div>
            <a
              href={profile.cv}
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-600"
            >
              <Icon name="download" className="h-4 w-4" /> Télécharger le CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
