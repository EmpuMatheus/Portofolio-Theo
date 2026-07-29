import { useScrollReveal } from '../hooks/useScrollReveal'
import { socialLinks } from '../data/socialLinks'
import { Mail, Github, Linkedin } from 'lucide-react'

const channels = [
  { key: 'email', icon: Mail, label: 'Email', href: socialLinks.email ? `mailto:${socialLinks.email}` : null },
  { key: 'github', icon: Github, label: 'GitHub', href: socialLinks.github },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin },
]

const availableChannels = channels.filter((c) => c.href)

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="section-spacing bg-background-primary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            05 / CONTACT
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-4">
          Let&apos;s Build Something.
        </h2>

        <p className="text-text-secondary max-w-[480px] mb-10 leading-relaxed">
          Have a project, collaboration, or opportunity in mind?
          <br />
          Let&apos;s talk.
        </p>

        <div className="max-w-[520px]">
          <div className="rounded-lg border border-border-default bg-surface-primary/90 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-default bg-surface-secondary/50">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-3">
                matheus@contact
              </span>
            </div>

            <div className="p-5 md:p-6 font-mono text-sm leading-relaxed">
              <p className="text-green-bright mb-1">$ contact matheus</p>
              <p className="text-green-bright/80 mb-1">&gt; Ready for collaboration.</p>

              {availableChannels.length > 0 ? (
                <>
                  <p className="text-text-muted mb-4">&gt; Select a channel:</p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {availableChannels.map((channel) => {
                      const Icon = channel.icon
                      return (
                        <a
                          key={channel.key}
                          href={channel.href}
                          target={channel.key !== 'email' ? '_blank' : undefined}
                          rel={channel.key !== 'email' ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-2 px-4 py-2 border border-border-default text-text-secondary rounded-md hover:border-green-bright hover:text-green-bright transition-all duration-200 text-sm"
                        >
                          <Icon size={14} />
                          {channel.label}
                        </a>
                      )
                    })}
                  </div>
                </>
              ) : (
                <p className="text-text-muted mb-4">
                  &gt; Contact channels are being configured.
                </p>
              )}

              <div className="flex items-center mt-2">
                <span className="text-green-bright mr-2 shrink-0">$</span>
                <span
                  className="inline-block w-2.5 h-5 bg-green-bright animate-[blinkCursor_1s_step-end_infinite]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
