import { useScrollReveal } from '../hooks/useScrollReveal'
import AmbientGlow from '../components/ui/AmbientGlow'

export default function Philosophy() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-spacing bg-background-secondary relative overflow-hidden">
      <AmbientGlow
        color="#22C55E"
        position={{ top: '50%', left: '30%' }}
        size={500}
        opacity={0.06}
        className="hidden md:block"
      />
      <AmbientGlow
        color="#8B5CF6"
        position={{ top: '50%', left: '70%' }}
        size={400}
        opacity={0.04}
        className="hidden md:block"
      />

      <div
        ref={ref}
        className={`container-content relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="max-w-[800px] mx-auto">
          <span className="font-mono text-xs text-green-bright tracking-wider block mb-8 md:mb-10">
            SYSTEM.PHILOSOPHY
          </span>

          <p className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-text-primary leading-[1.1] mb-4 text-balance">
            I don&apos;t just build interfaces.
          </p>

          <p className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.1] mb-10 md:mb-12 text-balance">
            <span className="text-text-primary">I build </span>
            <span className="text-green-bright">systems</span>
            <span className="text-text-primary"> that solve problems.</span>
          </p>

          <p className="text-text-secondary max-w-[600px] leading-relaxed mb-10 md:mb-12">
            My focus is turning operational challenges into reliable digital
            solutions through web development, databases, automation,
            infrastructure, and thoughtful system design.
          </p>

          <div className="font-mono text-sm text-text-muted">
            <span className="text-green-bright">From Interface</span>
            <br />
            to Infrastructure.
          </div>
        </div>
      </div>
    </section>
  )
}
