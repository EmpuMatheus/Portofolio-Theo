export default function ProjectImage({ project }) {
  const hasImage = project.images && project.images.length > 0

  if (hasImage) {
    return (
      <div className="rounded-lg border border-border-default bg-surface-primary overflow-hidden group-hover:border-green-bright/30 transition-colors duration-250">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-default bg-surface-secondary/50">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[11px] text-text-muted ml-2">
            {project.title}
          </span>
        </div>
        <img
          src={project.images[0]}
          alt={`${project.title} screenshot`}
          className="w-full aspect-[16/10] object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border-default bg-surface-primary overflow-hidden group-hover:border-green-bright/30 transition-colors duration-250">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-default bg-surface-secondary/50">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-[11px] text-text-muted ml-2">
          {project.title}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center aspect-[16/10] p-8 text-center">
        <span className="font-mono text-xs text-green-bright tracking-wider mb-4">
          PROJECT.PREVIEW
        </span>
        <span className="font-mono text-base text-text-primary font-medium mb-2">
          {project.title.toUpperCase()}
        </span>
        <span className="font-mono text-xs text-text-muted">
          Screenshot coming soon.
        </span>
      </div>
    </div>
  )
}
