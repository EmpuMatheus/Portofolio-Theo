import { useState, useEffect } from 'react'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact']

const ACTIVATION_LINE = 0.35

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const activationLine = window.scrollY + window.innerHeight * ACTIVATION_LINE
      let current = ''

      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (top <= activationLine && bottom > activationLine) {
          current = id
          break
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}
