import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import ProjectImage from '../components/ui/ProjectImage'
import { Link } from 'react-router-dom'

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="section-spacing bg-background-secondary scroll-mt-[80px]">
      <div
        ref={ref}
        className={`container-content transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-green-bright tracking-wider">
            03 / PROJECTS
          </span>
          <span className="h-px flex-1 bg-border-default" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary mb-4">
          Featured Projects.
        </h2>

        <p className="text-text-secondary max-w-[620px] mb-12 md:mb-16 leading-relaxed">
          Systems and applications I&apos;ve built to solve real operational
          problems.
        </p>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
              >
                <div
                  className={`group ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {project.images && project.images.length > 0 ? (
                    <ProjectImage project={project} />
                  ) : (
                    <Link to={`/projects/${project.id}`}>
                      <ProjectImage project={project} />
                    </Link>
                  )}
                </div>

                <div
                  className={`${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="font-mono text-xs text-green-bright tracking-wider block mb-3">
                    {project.number} / FEATURED PROJECT
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                    {project.title.toUpperCase()}
                  </h3>

                  {project.fullTitle && project.fullTitle !== project.title && (
                    <p className="text-text-muted font-mono text-sm mb-4">
                      {project.fullTitle.replace(`${project.title} — `, '')}
                    </p>
                  )}

                  <p className="text-text-secondary leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-text-muted px-2.5 py-1 rounded border border-border-default bg-surface-primary/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-green-bright transition-colors duration-200 group/link"
                    >
                      View Case Study
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
