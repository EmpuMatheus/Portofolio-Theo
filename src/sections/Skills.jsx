import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/skills'

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="section-spacing bg-background-secondary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            02 / SKILLS
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-4">
          Tech Stack.
        </h2>

        <p className="text-text-secondary max-w-[620px] mb-12 md:mb-16 leading-relaxed">
          Technologies and tools I use to build, integrate, deploy, and
          maintain digital systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-border-default bg-surface-primary/80 p-5 hover:border-green-bright/40 hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-green-bright">
                  [{category.number}]
                </span>
                <span className="font-mono text-xs text-text-muted tracking-wider">
                  {category.label}
                </span>
              </div>

              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
