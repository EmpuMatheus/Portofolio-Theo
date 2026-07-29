import { useState, useEffect } from 'react'
import { techMarquee } from '../data/skills'

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
        className={`flex items-center h-[50px] md:h-[64px] overflow-hidden ${
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
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm text-text-muted hover:text-green-bright transition-colors duration-200 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
