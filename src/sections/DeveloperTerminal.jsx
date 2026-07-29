import { useState, useEffect, useRef } from 'react'

const lines = [
  { text: '', delay: 400, type: 'empty' },
  { text: '$ whoami', delay: 600, type: 'command' },
  { text: 'Matheus', delay: 400, type: 'output' },
  { text: 'Web Developer & System Builder', delay: 500, type: 'output' },
  { text: '', delay: 300, type: 'empty' },
  { text: '$ focus', delay: 500, type: 'command' },
  { text: 'Web Applications', delay: 300, type: 'output' },
  { text: 'Business Systems', delay: 300, type: 'output' },
  { text: 'Infrastructure', delay: 400, type: 'output' },
  { text: '', delay: 300, type: 'empty' },
  { text: '$ status', delay: 500, type: 'command' },
  { text: '', delay: 300, type: 'empty' },
]

const statusMessages = [
  'Ready to build something useful.',
  "Let's turn your ideas into reliable systems.",
  'Have a problem worth solving?',
  "Let's build the solution.",
  'Simplify your business.',
  'Automate the workflow.',
  'Build a better system.',
  'Turning business problems into digital solutions.',
  'From Interface to Infrastructure.',
]

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

export default function DeveloperTerminal() {
  const reduced = useReducedMotion()
  const [visibleLines, setVisibleLines] = useState(reduced ? lines.length : 0)
  const [statusText, setStatusText] = useState('')
  const started = useRef(false)

  useEffect(() => {
    let interval

    if (reduced) {
      setVisibleLines(lines.length)
      return
    }

    let currentIndex = 0
    const runTyping = () => {
      if (currentIndex < lines.length) {
        setVisibleLines(currentIndex + 1)
        currentIndex++
        const delay = lines[currentIndex - 1]?.delay || 300
        interval = setTimeout(runTyping, delay)
      } else {
        setVisibleLines(lines.length)
      }
    }

    interval = setTimeout(runTyping, 600)

    return () => clearTimeout(interval)
  }, [reduced])

  useEffect(() => {
    if (visibleLines < lines.length) return

    if (reduced) {
      setStatusText(statusMessages[0])
      return
    }

    if (started.current) return
    started.current = true

    let messageIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer

    const tick = () => {
      const currentMessage = statusMessages[messageIndex]

      if (!isDeleting) {
        charIndex++
        setStatusText(currentMessage.slice(0, charIndex))

        if (charIndex === currentMessage.length) {
          timer = setTimeout(() => {
            isDeleting = true
            tick()
          }, 3500)
          return
        }
        timer = setTimeout(tick, 85)
      } else {
        charIndex--
        setStatusText(currentMessage.slice(0, charIndex))

        if (charIndex === 0) {
          isDeleting = false
          messageIndex = (messageIndex + 1) % statusMessages.length
          timer = setTimeout(tick, 700)
          return
        }
        timer = setTimeout(tick, 55)
      }
    }

    timer = setTimeout(tick, 700)

    return () => clearTimeout(timer)
  }, [reduced, visibleLines])

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden border border-border-default bg-surface-primary/90 backdrop-blur-sm"
      role="region"
      aria-label="Developer terminal"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-default bg-surface-secondary/50">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-text-muted ml-3">
          matheus@workspace
        </span>
      </div>

      <div className="p-5 md:p-6 font-mono text-sm leading-relaxed min-h-[200px] md:min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => {
          if (line.type === 'empty') {
            return <div key={i} className="h-4" />
          }
          return (
            <div key={i} className="flex">
              {line.type === 'command' ? (
                <>
                  <span className="text-green-bright mr-2 shrink-0">$</span>
                  <span className="text-text-primary">{line.text}</span>
                </>
              ) : (
                <span className="text-text-secondary ml-5">{line.text}</span>
              )}
            </div>
          )
        })}
        {visibleLines >= lines.length && (
          <>
            <div className="flex mt-4">
              <span className="text-green-bright text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-green-bright mr-2 align-middle animate-pulse" aria-hidden="true" />
                OPEN FOR PROJECTS
              </span>
            </div>
            <div className="flex items-baseline mt-2 min-h-[1.75rem]">
              <span className="text-green-bright/80 mr-2 shrink-0">&gt;</span>
              <span className="text-text-secondary">{statusText}</span>
              {!reduced && (
                <span
                  className="inline-block w-2.5 h-5 bg-green-bright animate-[blinkCursor_1s_step-end_infinite] ml-0.5"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="flex items-center mt-2">
              <span className="text-green-bright mr-2 shrink-0">$</span>
            </div>
          </>
        )}
      </div>

    </div>
  )
}
