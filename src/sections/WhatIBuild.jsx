import { Code, Layout, Server, Database, Container, Network } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { capabilities } from '../data/capabilities'

const iconMap = {
  'Web Applications': Layout,
  'Business Systems': Code,
  'Backend & API': Server,
  'Database Integration': Database,
  Infrastructure: Container,
  Networking: Network,
}

export default function WhatIBuild() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="capabilities" className="section-spacing bg-background-primary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-4">
          What I Build.
        </h2>

        <p className="text-text-secondary max-w-[620px] mb-12 md:mb-16 leading-relaxed">
          I enjoy building systems where software solves practical
          operational problems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.title] || Code
            return (
              <div
                key={cap.title}
                className="rounded-lg border border-border-default bg-surface-primary/80 p-6 hover:border-green-bright/40 hover:-translate-y-1 transition-all duration-250 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    size={18}
                    className="text-text-muted group-hover:text-green-bright transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[11px] text-green-bright tracking-wider">
                    CAPABILITY.{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-text-primary font-semibold text-base mb-2 group-hover:text-green-bright transition-colors duration-200">
                  {cap.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
