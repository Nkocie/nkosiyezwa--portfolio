import { GithubIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import {
  saWeatherFeatures,
  shoppingCartFeatures,
  supportingProjects,
  type Project,
} from '@/lib/data'

const featureMap: Record<string, string[]> = {
  'sa-weather-app': saWeatherFeatures,
  'shopping-cart-java': shoppingCartFeatures,
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const features = featureMap[project.id] ?? []
  return (
    <Reveal
      delay={delay}
      className="group flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      {features.length ? (
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px] text-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-2">
        {project.github ? (
          <Button
            variant="outline"
            size="sm"
            render={
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                View on GitHub
              </a>
            }
          />
        ) : (
          <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border bg-background/40 px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <GithubIcon className="size-3.5" aria-hidden="true" />
            {project.githubPlaceholder}
          </span>
        )}
      </div>
    </Reveal>
  )
}

export function SupportingProjects() {
  return (
    <section aria-labelledby="supporting-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <Reveal>
          <h2 id="supporting-heading" className="text-2xl font-semibold tracking-tight">
            Supporting Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Additional engineering breadth across Python API work and Java application development.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {supportingProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
