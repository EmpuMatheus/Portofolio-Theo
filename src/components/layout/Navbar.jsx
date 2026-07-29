import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  const activeSection = useActiveSection()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeMenu])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    const id = href.replace('#', '')

    if (isHome) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[rgba(5,9,20,0.8)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-content flex items-center justify-between h-16 md:h-[72px]"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={handleLogoClick}
          className="text-text-primary font-mono text-lg font-medium hover:text-green-bright transition-colors duration-200"
        >
          <span className="text-green-bright">&lt;</span>
          Matheus
          <span className="text-green-bright"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-green-bright'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-bright rounded-full" />
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden relative z-50 p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-background-primary/95 backdrop-blur-md"
            onClick={closeMenu}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
            {navigation.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl font-medium transition-all duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-green-bright'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                style={{
                  animation: !window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? `fadeIn 0.3s ease-out ${i * 0.05}s both`
                    : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
