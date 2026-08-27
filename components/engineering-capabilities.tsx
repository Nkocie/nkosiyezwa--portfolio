import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { capabilities } from '@/lib/data'

export function EngineeringCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="scroll-mt-20 bg-card/20">
      <div className="mx-auto max-w-6xl border-y border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="capabilities-heading"
            index="05"
            eyebrow="Capabilities"
            title="What I Build"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className="group rounded-2xl border border-border bg-background/50 p-6 transition-colors hover:border-primary/30"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                <Icon name={c.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {c.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
