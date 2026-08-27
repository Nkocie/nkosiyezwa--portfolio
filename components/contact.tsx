import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { contact } from '@/lib/data'

const channels = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'Phone', value: contact.phone, href: contact.phoneHref, icon: Phone },
  { label: 'GitHub', value: contact.githubHandle, href: contact.github, icon: GithubIcon },
  { label: 'LinkedIn', value: contact.linkedinHandle, href: contact.linkedin, icon: LinkedinIcon },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs tracking-wider text-primary uppercase">
                {'// contact'}
              </p>
              <h2
                id="contact-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Let&apos;s Build Something Reliable
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Interested in discussing a software engineering opportunity, project or backend
                development role? Let&apos;s connect.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  size="lg"
                  render={
                    <a href={`mailto:${contact.email}`}>
                      <Mail />
                      Get In Touch
                    </a>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  render={
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                      GitHub
                    </a>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  render={
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon />
                      LinkedIn
                    </a>
                  }
                />
              </div>
            </div>

            <div className="relative mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const isExternal = c.href.startsWith('http')
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-left transition-colors hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                      <c.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm text-foreground">{c.value}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
