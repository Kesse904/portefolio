import { education, certifications } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="formation" className="section">
      <div className="container-x">
        <SectionTitle eyebrow="Parcours académique" title="Formation & certifications" />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="cap" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-ink-900">Formation</h3>
              </div>

              <div className="space-y-5">
                {education.map((e) => (
                  <div
                    key={e.title}
                    className="border-l-2 border-teal-200 pl-4 transition hover:border-teal-500"
                  >
                    <h4 className="text-sm font-semibold leading-snug text-ink-900 sm:text-base">
                      {e.title}
                    </h4>
                    <p className="mt-1 text-sm text-ink-500">{e.school}</p>
                    <p className="mt-0.5 text-xs text-ink-400">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="badge" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-ink-900">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-xl bg-paper-100 px-4 py-3.5 text-sm text-ink-700 transition hover:bg-teal-50"
                  >
                    <Icon name="check" className="h-4 w-4 shrink-0 text-teal-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
