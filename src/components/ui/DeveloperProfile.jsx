export default function DeveloperProfile() {
  const items = [
    { label: 'NAME', value: 'Matheus' },
    { label: 'ROLE', value: 'Web Developer & System Builder' },
    { label: 'FRONTEND', value: 'React / Vite / Tailwind CSS' },
    { label: 'BACKEND', value: 'Node.js / Express' },
    { label: 'DATABASE', value: 'PostgreSQL / SAP HANA / SQLite' },
    { label: 'INFRASTRUCTURE', value: 'Linux / Docker / Nginx' },
    { label: 'NETWORK', value: 'MikroTik / Ubiquiti / UniFi' },
  ]

  return (
    <div
      className="rounded-lg border border-border-default bg-surface-primary/90 overflow-hidden"
      role="region"
      aria-label="Developer profile"
    >
      <div className="px-5 py-3 border-b border-border-default bg-surface-secondary/50">
        <span className="font-mono text-xs text-green-bright tracking-wider">
          DEVELOPER.PROFILE
        </span>
      </div>

      <div className="p-5 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <span className="font-mono text-[11px] text-text-muted tracking-wider block mb-0.5">
              {item.label}
            </span>
            <span className="font-mono text-sm text-text-primary">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-border-default flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-bright opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-bright" />
        </span>
        <span className="font-mono text-xs text-green-bright tracking-wider">
          STATUS: ONLINE
        </span>
      </div>
    </div>
  )
}
