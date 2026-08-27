import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/data'

export function TechnicalSkills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 bg-card/20">
      <div className="mx-auto max-w-6xl border-y border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            index="03"
            eyebrow="Skills"
            title="Technical Expertise"
            description="Languages, frameworks, databases, tools and engineering practices used across backend and application development."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="rounded-2xl border border-border bg-background/50 p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <Icon name={group.icon} className="size-4" />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
