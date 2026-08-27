import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { approach } from '@/lib/data'

export function EngineeringApproach() {
  return (
    <section aria-labelledby="approach-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="approach-heading"
            index="06"
            eyebrow="Approach"
            title="Engineering Approach"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 60}
              className="relative rounded-2xl border border-border bg-card/50 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Icon name={a.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {a.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
