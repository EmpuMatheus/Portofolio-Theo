import { useState, useEffect } from 'react'

const code = [
  { text: 'const matheus = {', color: 'text-text-primary' },
  { text: '  role: "Web Developer",', color: 'text-orange-300/90' },
  { text: '', color: '' },
  { text: '  focus: [', color: 'text-text-primary' },
  { text: '    "Web Applications",', color: 'text-orange-300/90' },
  { text: '    "Business Systems",', color: 'text-orange-300/90' },
  { text: '    "Infrastructure"', color: 'text-orange-300/90' },
  { text: '  ],', color: 'text-text-primary' },
  { text: '', color: '' },
  { text: '  mindset: "solve real problems",', color: 'text-green-bright/90' },
  { text: '', color: '' },
  { text: '  status: "building"', color: 'text-green-bright/90' },
  { text: '};', color: 'text-text-primary' },
]

export default function CodeEditorCard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={`
        hidden md:block absolute -right-8 top-1/2 -translate-y-1/2
        w-[280px] lg:w-[320px] rounded-lg overflow-hidden
        border border-border-default bg-surface-secondary/95 backdrop-blur-sm
        shadow-[0_0_30px_rgba(34,197,94,0.06)]
        transition-all duration-700 ease-out
        ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
      `}
      role="region"
      aria-label="Code editor"
    >
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border-default bg-surface-secondary/50">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-[11px] text-text-muted ml-2">
          matheus.js
        </span>
      </div>

      <div className="p-4 font-mono text-[13px] leading-relaxed">
        <div className="flex items-start gap-3">
          <div className="text-text-muted text-xs select-none leading-relaxed pt-0.5" aria-hidden="true">
            {code.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div>
            {code.map((line, i) => (
              <div key={i} className={`whitespace-pre ${line.color || ''}`}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
