import { experience } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionTitle eyebrow="Parcours" title="Expérience professionnelle" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400 via-teal-200 to-transparent sm:left-[19px]" />

          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 100}>
              <div className="relative mb-10 pl-12 sm:pl-16">
                <span className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full border-2 border-teal-300 bg-white shadow-soft sm:h-10 sm:w-10">
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-teal-500 ${
                      job.current ? "animate-pulse" : "opacity-45"
                    }`}
                  />
                </span>

                <div className="card p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-bold text-ink-900 sm:text-xl">{job.role}</h3>
                    {job.current && (
                      <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal-600">
                        En poste
                      </span>
                    )}
                  </div>

                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="font-semibold text-teal-600">{job.company}</span>
                    <span className="inline-flex items-center gap-1.5 text-ink-400">
                      <Icon name="pin" className="h-3.5 w-3.5" />
                      {job.place}
                    </span>
                    <span className="text-ink-400">{job.period}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {job.tasks.map((t, k) => (
                      <li key={k} className="flex gap-3 text-sm leading-relaxed text-ink-500">
                        <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-500" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-paper-200 pt-5">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
