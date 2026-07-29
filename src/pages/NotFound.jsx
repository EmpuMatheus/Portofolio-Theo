import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary px-4">
      <h1 className="font-mono text-7xl md:text-8xl text-green-bright font-bold mb-8">
        404
      </h1>

      <div className="font-mono text-sm leading-relaxed mb-8 text-center">
        <p className="text-green-bright mb-1">$ locate page</p>
        <p className="text-text-muted mb-1">Error: resource not found.</p>
        <p className="text-text-secondary">
          Looks like this route doesn&apos;t exist.
        </p>
      </div>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-default text-text-secondary rounded-md hover:border-green-bright hover:text-green-bright transition-all duration-200 font-mono text-sm"
      >
        Return Home
      </Link>
    </div>
  )
}
