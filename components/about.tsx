import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutFocus, aboutParagraphs } from '@/lib/data'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="about-heading"
            index="01"
            eyebrow="About"
            title="About Me"
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal delay={80} className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <p className="mb-4 font-mono text-xs tracking-wider text-primary uppercase">
                {'// focus areas'}
              </p>
              <ul className="space-y-3">
                {aboutFocus.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
