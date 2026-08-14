import { useState } from "react";
import { projects } from "../data.js";
import Icon from "./Icons.jsx";
import Diagram from "./Diagrams.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

function ProjectCard({ p, delay }) {
  const [open, setOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Reveal delay={delay}>
      <article className="card group flex h-full flex-col overflow-hidden">
        {p.image && !imgFailed ? (
          <div className="relative h-48 w-full overflow-hidden bg-paper-200 sm:h-56">
            <img
              src={p.image}
              alt={p.imageAlt || p.title}
              loading="lazy"
              onError={() => setImgFailed(true)}
              style={{ objectPosition: p.imagePos || "50% 50%" }}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/45 via-ink-900/10 to-transparent" />
            <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/70 bg-white/90 text-teal-600 shadow-soft backdrop-blur">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
          </div>
        ) : (
          p.diagram && <Diagram name={p.diagram} className="rounded-none border-0 border-b" />
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="mb-5">
            <h3 className="text-base font-bold leading-snug text-ink-900 sm:text-lg">{p.title}</h3>
            <p className="mt-1 text-sm font-medium text-teal-600">{p.client}</p>
          </div>

          <div className="mb-5">
            <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Contexte
            </h4>
            <p className="text-sm leading-relaxed text-ink-500">{p.context}</p>
          </div>

          <div className="mb-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Résultats obtenus
            </h4>
            <ul className="space-y-2">
              {p.results.map((r, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-ink-500">
                  <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-500" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {open && (
            <div className="mb-5 rounded-xl border border-paper-200 bg-paper-100 p-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
                Actions réalisées
              </h4>
              <ul className="space-y-2">
                {p.actions.map((a, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-500">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className="mb-5 self-start text-sm font-semibold text-teal-600 transition hover:text-teal-500"
          >
            {open ? "− Masquer le détail technique" : "+ Voir le détail technique"}
          </button>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-paper-200 pt-5">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="section bg-paper-100">
      <div className="container-x">
        <SectionTitle
          eyebrow="Réalisations"
          title="Projets techniques"
          subtitle="Des interventions concrètes menées de bout en bout : de l'analyse du besoin à la mise en production et la mesure des résultats."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
