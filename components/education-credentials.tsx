import { Award, ExternalLink, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications, education } from '@/lib/data'

export function EducationCredentials() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20 bg-card/20">
      <div className="mx-auto max-w-6xl border-y border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            id="education-heading"
            index="07"
            eyebrow="Education"
            title="Education & Credentials"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <Reveal delay={60}>
            <p className="mb-4 font-mono text-xs tracking-wider text-primary uppercase">
              {'// education'}
            </p>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                    <span className="mt-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                      {e.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={120}>
            <p className="mb-4 font-mono text-xs tracking-wider text-primary uppercase">
              {'// certifications'}
            </p>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <Award className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold tracking-tight text-balance">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                    {c.verifyUrl ? (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-primary underline-offset-4 hover:underline"
                      >
                        Verify credential
                        <ExternalLink className="size-3" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
