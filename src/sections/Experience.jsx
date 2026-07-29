import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data/experience'

export default function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="section-spacing bg-background-primary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            04 / EXPERIENCE
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-4">
          Professional Experience.
        </h2>

        <p className="text-text-secondary max-w-[620px] mb-12 md:mb-16 leading-relaxed">
          A journey through software development, IT infrastructure,
          enterprise systems, and digital design.
        </p>

        <div className="relative">
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px bg-border-default" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-12 md:pl-14">
                <div className="absolute left-[11px] md:left-[15px] top-1.5 w-3 h-3 rounded-full bg-green-bright ring-4 ring-background-primary" aria-hidden="true" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] text-green-bright/70 tracking-wider">
                    {item.period.toUpperCase()}
                  </span>
                  {item.current && (
                    <span className="font-mono text-[10px] text-green-bright tracking-wider">
                      ● CURRENT
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                  {item.role}
                </h3>

                <p className="text-sm md:text-base text-text-secondary font-medium mb-4">
                  {item.company}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-0 text-green-bright/50">
                        •
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-text-muted px-2.5 py-1 rounded border border-border-default bg-surface-primary/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
