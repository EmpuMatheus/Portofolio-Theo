import { useScrollReveal } from '../hooks/useScrollReveal'
import DeveloperProfile from '../components/ui/DeveloperProfile'

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="section-spacing bg-background-primary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-10 md:mb-12">
          About Me.
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="space-y-5 text-text-secondary leading-relaxed max-w-[640px]">
            <p className="text-base md:text-lg">
              I&apos;m a Web Developer focused on building practical web
              applications and internal business systems.
            </p>
            <p>
              I enjoy working across the entire system — from user interfaces
              and backend services to databases, infrastructure, and
              networking.
            </p>
            <p>
              For me, development isn&apos;t only about writing code or
              creating interfaces. It&apos;s about understanding a problem,
              designing the right workflow, connecting the necessary
              technologies, and building a solution that actually works in
              real-world operations.
            </p>
            <p className="text-text-muted text-sm">
              My technical interests include web development, business
              systems, database integration, server infrastructure,
              networking, and automation. I especially enjoy projects where
              software connects directly with operational processes such as
              inventory management, warehouse operations, reporting, and
              enterprise data.
            </p>
          </div>

          <div className="w-full md:w-[340px] lg:w-[380px] shrink-0">
            <DeveloperProfile />
          </div>
        </div>
      </div>
    </section>
  )
}
