import { profile, stats } from "../data.js";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-teal-200/40 blur-[120px]" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-sky-200/40 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,36,56,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,36,56,.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 0%, #000 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <span className="chip mb-6">
            <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
            Disponible pour de nouvelles opportunités
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-ink-900 sm:text-5xl lg:text-6xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-teal-600 sm:text-xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-600 hover:shadow-lift"
            >
              Me contacter <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-paper-300 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-teal-300 hover:bg-teal-50"
            >
              <Icon name="download" className="h-4 w-4" /> Télécharger le CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ink-500">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-teal-600"
            >
              <Icon name="linkedin" className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-teal-600"
            >
              <Icon name="mail" className="h-4 w-4" /> {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="justify-self-center">
          <div className="relative">
            <div className="absolute -inset-5 animate-float rounded-full bg-gradient-to-tr from-teal-300/45 to-sky-300/35 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-lift ring-1 ring-paper-300 sm:h-80 sm:w-80">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-x mt-16 sm:mt-20">
        <Reveal delay={250}>
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-paper-300 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs font-medium leading-tight text-ink-500 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
