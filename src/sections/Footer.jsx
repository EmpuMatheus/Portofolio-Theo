import { socialLinks } from '../data/socialLinks'
import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { key: 'github', icon: Github, href: socialLinks.github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { key: 'email', icon: Mail, href: socialLinks.email ? `mailto:${socialLinks.email}` : null, label: 'Email' },
]

const activeLinks = links.filter((l) => l.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-default bg-background-secondary">
      <div className="container-content py-10 md:py-12 flex flex-col items-center text-center">
        <span className="text-text-primary font-mono text-lg font-medium mb-3">
          <span className="text-green-bright">&lt;</span>
          Matheus
          <span className="text-green-bright"> /&gt;</span>
        </span>

        <p className="text-text-muted text-sm mb-4">
          From Interface to Infrastructure.
        </p>

        {activeLinks.length > 0 && (
          <div className="flex items-center gap-5 mb-5">
            {activeLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target={link.key !== 'email' ? '_blank' : undefined}
                  rel={link.key !== 'email' ? 'noopener noreferrer' : undefined}
                  className="text-text-muted hover:text-green-bright transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        )}

        <p className="text-text-muted/60 text-xs">
          Designed &amp; Built with Code.
          <br className="sm:hidden" />
          {' '}&copy; {year} Matheus
        </p>
      </div>
    </footer>
  )
}
