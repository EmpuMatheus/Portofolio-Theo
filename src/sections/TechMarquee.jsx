import { useState, useEffect } from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiSap,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiDocker,
  SiLinux,
  SiNginx,
  SiMikrotik,
  SiUbiquiti,
} from 'react-icons/si'
import { techMarquee } from '../data/skills'

const iconMap = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  'SAP HANA': SiSap,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Tailwind CSS': SiTailwindcss,
  Vite: SiVite,
  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  Nginx: SiNginx,
  MikroTik: SiMikrotik,
  Ubiquiti: SiUbiquiti,
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function TechMarquee() {
  const reduced = useReducedMotion()
  const items = [...techMarquee, ...techMarquee]

  return (
    <section
      className="relative border-t border-b border-border-default bg-background-secondary"
      aria-label="Technologies"
    >
      <div
        className={`flex items-center h-[56px] md:h-[72px] overflow-hidden ${
          reduced ? '' : 'group'
        }`}
      >
        <div
          className={`flex items-center gap-12 md:gap-16 whitespace-nowrap ${
            reduced
              ? 'flex-wrap justify-center px-4'
              : '[animation:marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]'
          }`}
        >
          {items.map((item, i) => {
            const Icon = iconMap[item.name]
            return (
              <span
                key={`${item.name}-${i}`}
                className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-sm text-text-muted select-none transition-all duration-200 hover:text-text-secondary"
              >
                {Icon && (
                  <Icon
                    className="inline-block transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
                    size={20}
                    color={item.color}
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  />
                )}
                {item.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
