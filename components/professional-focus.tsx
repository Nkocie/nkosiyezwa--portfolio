import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { professionalFocus } from '@/lib/data'

export function ProfessionalFocus() {
  return (
    <section aria-labelledby="focus-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="focus-heading"
            index="08"
            eyebrow="Direction"
            title="Professional Focus"
            description="The kind of software engineering work I am building toward."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-3">
          {professionalFocus.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {f}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
