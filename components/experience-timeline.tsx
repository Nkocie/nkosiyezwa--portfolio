import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/data'

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            index="04"
            eyebrow="Experience"
            title="Professional Experience"
          />
        </Reveal>

        <div className="mt-10">
          {experience.map((job) => (
            <Reveal key={job.company} delay={80} className="relative pl-8 sm:pl-10">
              <span className="absolute top-1.5 left-0 flex size-4 items-center justify-center">
                <span className="absolute size-4 rounded-full bg-primary/20" aria-hidden="true" />
                <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              </span>
              <span className="absolute top-6 left-[7px] h-[calc(100%-1rem)] w-px bg-border" aria-hidden="true" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  <p className="text-sm text-primary">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {job.responsibilities.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-xl border border-border bg-card/50 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                        <Icon name={r.icon} className="size-3.5" />
                      </span>
                      <h4 className="text-sm font-medium">{r.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{r.detail}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-lg border border-border bg-background/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
                {job.stack}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
