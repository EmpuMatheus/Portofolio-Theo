import { useScrollReveal } from '../hooks/useScrollReveal'
import { technicalExperience } from '../data/experience'

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
          Experience.
        </h2>

        <p className="text-text-secondary max-w-[620px] mb-12 md:mb-16 leading-relaxed">
          A timeline of professional experience, technical growth, and
          systems I&apos;ve worked with.
        </p>

        <div className="relative">
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px bg-border-default" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {technicalExperience.map((item) => (
              <div key={item.number} className="relative pl-12 md:pl-14">
                <div className="absolute left-[11px] md:left-[15px] top-1.5 w-3 h-3 rounded-full bg-green-bright ring-4 ring-background-primary" aria-hidden="true" />

                <span className="font-mono text-xs text-green-bright tracking-wider block mb-2">
                  {item.number} / {item.area.toUpperCase()}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {item.area}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-4 max-w-[640px]">
                  {item.description}
                </p>

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
