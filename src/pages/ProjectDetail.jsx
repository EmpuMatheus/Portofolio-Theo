import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import AmbientGlow from '../components/ui/AmbientGlow'
import ProjectImage from '../components/ui/ProjectImage'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    document.title = project
      ? `${project.title} | Matheus`
      : 'Matheus — Web Developer & System Builder'
    return () => {
      document.title = 'Matheus — Web Developer & System Builder'
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary px-4">
        <h1 className="font-mono text-6xl text-green-bright mb-6">404</h1>
        <p className="font-mono text-text-muted mb-2">
          $ locate project --id {id}
        </p>
        <p className="text-text-secondary mb-8">
          Error: project not found.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-green-bright hover:text-green-primary transition-colors"
        >
          <ArrowLeft size={14} />
          Return to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <AmbientGlow
        color="#22C55E"
        position={{ top: '15%', left: '30%' }}
        size={400}
        opacity={0.06}
        className="hidden md:block"
      />
      <AmbientGlow
        color="#8B5CF6"
        position={{ top: '20%', left: '70%' }}
        size={400}
        opacity={0.05}
        className="hidden md:block"
      />

      <div className="container-content pt-24 pb-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-green-bright transition-colors duration-200 mb-10"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            {project.number} / CASE STUDY
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-text-primary leading-[1.05] mb-3">
          {project.title}
        </h1>

        {project.category && (
          <p className="font-mono text-sm text-text-muted mb-6">
            {project.category}
          </p>
        )}

        <p className="text-text-secondary max-w-[640px] text-lg leading-relaxed mb-8">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-text-muted px-3 py-1.5 rounded border border-border-default bg-surface-primary/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-default text-text-secondary rounded-md hover:border-green-bright hover:text-green-bright transition-all duration-200 text-sm"
            >
              <Github size={14} />
              View on GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-primary text-background-primary rounded-md hover:bg-green-bright transition-all duration-200 text-sm font-medium"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        <div className="mb-14 max-w-[800px]">
          <ProjectImage project={project} />
        </div>
      </div>

      <div className="container-content pb-20 space-y-14 max-w-[800px]">
        {project.overview && (
          <section>
            <span className="font-mono text-xs text-green-bright tracking-wider block mb-3">
              OVERVIEW
            </span>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </section>
        )}

        {project.problem && (
          <section>
            <span className="font-mono text-xs text-green-bright tracking-wider block mb-3">
              THE PROBLEM
            </span>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {project.problem}
            </p>
          </section>
        )}

        {project.solution && (
          <section>
            <span className="font-mono text-xs text-green-bright tracking-wider block mb-3">
              THE SOLUTION
            </span>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {project.solution}
            </p>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section>
            <span className="font-mono text-xs text-green-bright tracking-wider block mb-4">
              KEY FEATURES
            </span>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <span className="w-1 h-1 bg-green-bright rounded-full shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section>
            <span className="font-mono text-xs text-green-bright tracking-wider block mb-3">
              TECHNOLOGY
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm text-text-secondary px-3 py-1.5 rounded border border-border-default bg-surface-primary/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="border-t border-border-default">
        <div className="container-content py-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-green-bright transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
