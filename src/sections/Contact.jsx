import { useScrollReveal } from '../hooks/useScrollReveal'
import { socialLinks } from '../data/socialLinks'
import { Mail } from 'lucide-react'

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
              <p className="text-green-bright/80 mb-3">&gt; Ready for collaboration.</p>

              {socialLinks.email ? (
                <>
                  <p className="text-text-muted mb-1">&gt; Email:</p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="block font-mono text-text-secondary hover:text-green-bright transition-colors duration-200 mb-4"
                  >
                    {socialLinks.email}
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(socialLinks.email)}&su=${encodeURIComponent("Let's Discuss a Project with Matheus")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border-default text-text-secondary rounded-md hover:border-green-bright hover:text-green-bright transition-all duration-200 text-sm"
                    aria-label="Send email to Matheus via Gmail"
                  >
                    <Mail size={14} />
                    Send Email
                  </a>
                </>
              ) : (
                <p className="text-text-muted mb-4">
                  &gt; Contact channels are being configured.
                </p>
              )}

              <div className="flex items-center mt-4">
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
