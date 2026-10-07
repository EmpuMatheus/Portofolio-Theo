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

      <div className="container-content relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16 mb-12 lg:mb-16">
          <div className="flex-shrink-0 flex flex-col items-center lg:pt-10 xl:pt-11 md:pt-6">
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px]">
              <div
                className="absolute inset-[-10px] rounded-full border border-dashed border-green-bright/25"
                aria-hidden="true"
              />
              <img
                src="/assets/profile-photo.webp"
                alt="Matheus — Web Developer & System Builder"
                className="relative w-full h-full rounded-full object-cover object-center border-2 border-green-bright/40 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
              />
              <div className="profile-photo-orbit" aria-hidden="true">
                <div className="orbit-track orbit-track-outer" />
                <div className="orbit-track orbit-track-inner" />
                <div className="orbit-arm">
                  <span className="orbit-particle" />
                </div>
                <div className="orbit-arm-reverse">
                  <span className="orbit-particle orbit-particle-dim" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-primary/60 border border-border-default backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-bright animate-pulse" />
              <span className="font-mono text-[11px] text-text-secondary tracking-wide">
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-green-bright text-sm md:text-base mb-6">
              {profile.greeting}
            </p>

            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] text-text-primary mb-4 text-balance">
              {profile.displayName}
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-[620px] mb-8 leading-relaxed mx-auto lg:mx-0">
              <span className="text-text-primary">
                {profile.role.split('&')[0].trim()} &
              </span>{' '}
              <span className="text-green-bright font-medium">
                {profile.role.split('&')[1].trim()}
              </span>
            </p>

            <p className="text-text-secondary max-w-[620px] mb-10 leading-relaxed text-base md:text-lg mx-auto lg:mx-0">
              {profile.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          </div>
        </div>

        <div className="w-full max-w-[900px] relative mx-auto">
          <DeveloperTerminal />
          <CodeEditorCard />
        </div>
      </div>
    </section>
  )
}
