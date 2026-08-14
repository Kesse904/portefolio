import { skills } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="competences" className="section bg-paper-100">
      <div className="container-x">
        <SectionTitle
          eyebrow="Compétences"
          title="Stack technique"
          subtitle="Les technologies et outils que j'utilise au quotidien pour concevoir, sécuriser et superviser des infrastructures."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card group h-full p-6">
                <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-100">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-ink-900">{s.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="tag">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
