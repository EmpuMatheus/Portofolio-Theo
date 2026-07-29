import { profile } from '../data/profile'
import AmbientGlow from '../components/ui/AmbientGlow'
import DeveloperTerminal from './DeveloperTerminal'
import CodeEditorCard from './CodeEditorCard'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <AmbientGlow
        color="#22C55E"
        position={{ top: '55%', left: '25%' }}
        size={500}
        opacity={0.08}
        className="hidden md:block"
      />
      <AmbientGlow
        color="#8B5CF6"
        position={{ top: '55%', left: '75%' }}
        size={500}
        opacity={0.08}
        className="hidden md:block"
      />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 50%, #22C55E 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, #8B5CF6 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="container-content relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-green-bright text-sm md:text-base mb-6">
          {profile.greeting}
        </p>

        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] text-text-primary mb-4 text-balance">
          {profile.displayName}
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-[620px] mb-8 leading-relaxed">
          <span className="text-text-primary">{profile.role.split('&')[0].trim()} &</span>{' '}
          <span className="text-green-bright font-medium">
            {profile.role.split('&')[1].trim()}
          </span>
        </p>

        <p className="text-text-secondary max-w-[620px] mb-10 leading-relaxed text-base md:text-lg">
          {profile.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-primary text-background-primary font-medium rounded-md hover:bg-green-bright hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.08)]"
          >
            <span className="font-mono text-sm">&lt;/&gt;</span>
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-default text-text-secondary font-medium rounded-md hover:border-green-bright hover:text-green-bright hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        <div className="w-full max-w-[900px] relative">
          <DeveloperTerminal />
          <CodeEditorCard />
        </div>
      </div>
    </section>
  )
}
