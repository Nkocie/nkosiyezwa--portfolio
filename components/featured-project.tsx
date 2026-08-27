import { ImageIcon, Lock, ShieldCheck } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SystemDiagram, type DiagramNode } from '@/components/system-diagram'
import { featuredProject as p } from '@/lib/data'

const archNodes: DiagramNode[] = p.architecture.map((n) => ({
  label: n.label,
  sub: n.sub,
  icon: n.icon,
}))

function Panel({
  step,
  title,
  children,
  className = '',
}: {
  step: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card/50 p-6 sm:p-7 ${className}`}>
      <div className="mb-4 flex items-center gap-2">
        <span className="font-mono text-xs text-primary">{step}</span>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export function FeaturedProject() {
  return (
    <section id="projects" aria-labelledby="featured-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="featured-heading"
            index="02"
            eyebrow="Featured Work"
            title="Featured Work"
            description="A real backend application involving API development, database design and security-related functionality."
          />
        </Reveal>

        {/* Case study header */}
        <Reveal delay={80} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] to-transparent p-6 sm:p-8">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    <ShieldCheck className="size-3.5" aria-hidden="true" />
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 font-mono text-sm text-muted-foreground">
                  {p.tech.slice(0, 4).join(' • ')}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                  {p.overview}
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  size="lg"
                  render={
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                      View on GitHub
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Body grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Reveal delay={60} className="lg:col-span-2">
            <Panel step="/* 01 */" title="Problem & Purpose" className="h-full">
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {p.purpose}
              </p>
            </Panel>
          </Reveal>

          <Reveal delay={120}>
            <Panel step="/* 02 */" title="Technical Stack" className="h-full">
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          {/* Architecture */}
          <Reveal delay={60}>
            <Panel step="/* 03 */" title="Architecture" className="h-full">
              <SystemDiagram nodes={archNodes} caption="Illustrative application architecture" />
            </Panel>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="grid h-full gap-6">
              <Panel step="/* 04 */" title="Backend">
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.backend}
                </p>
              </Panel>

              <Panel step="/* 05 */" title="Security">
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {p.security.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-foreground">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                        <Lock className="size-3" aria-hidden="true" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {p.securityNote}
                </p>
              </Panel>
            </div>
          </Reveal>

          {/* Roles & permissions */}
          <Reveal delay={60} className="lg:col-span-3">
            <Panel step="/* 06 */" title="Roles & Permissions">
              <div className="grid gap-4 md:grid-cols-3">
                {p.roles.map((r) => (
                  <div
                    key={r.role}
                    className="rounded-xl border border-border bg-background/60 p-5"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                        <Icon name={r.icon} className="size-4" />
                      </span>
                      <span className="text-sm font-semibold">{r.role}</span>
                    </div>
                    <ul className="space-y-2">
                      {r.permissions.map((perm) => (
                        <li
                          key={perm}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>

          {/* Key functionality */}
          <Reveal delay={60} className="lg:col-span-3">
            <Panel step="/* 07 */" title="Key Functionality">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {p.functionality.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          {/* Screenshots */}
          <Reveal delay={60} className="lg:col-span-3">
            <Panel step="/* 08 */" title="Screenshots">
              <div className="grid gap-4 sm:grid-cols-2">
                {p.screenshots.map((label, i) => (
                  <div
                    key={i}
                    className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-background/40 p-6 text-center"
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground">
                      <ImageIcon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="font-mono text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>

          {/* Repository */}
          <Reveal delay={60} className="lg:col-span-3">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card/50 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 font-mono text-xs text-primary">{'/* 09 */ repository'}</p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground underline-offset-4 hover:underline"
                >
                  github.com/aestusanalytics/secureShare
                </a>
              </div>
              <Button
                variant="outline"
                render={
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                    View on GitHub
                  </a>
                }
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
