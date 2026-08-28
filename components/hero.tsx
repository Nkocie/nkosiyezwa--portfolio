import Image from 'next/image'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SystemDiagram, type DiagramNode } from '@/components/system-diagram'
import { contact, profile } from '@/lib/data'

const heroNodes: DiagramNode[] = [
  { label: 'Client', sub: 'Web application', icon: 'Globe', method: 'GET' },
  { label: 'REST API', sub: 'Request routing', icon: 'Network', method: 'POST' },
  { label: 'Django', sub: 'Application logic', icon: 'Server' },
  { label: 'PostgreSQL', sub: 'Persistent storage', icon: 'Database' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pt-40 lg:pb-24">
        <div>
          {/* Header Row: Location Tag & Top-Right Profile Picture */}
          <div className="flex items-start justify-between gap-4">
            <Reveal
              as="div"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm"
            >
              <span className="size-1.5 rounded-full bg-primary animate-diagram-pulse" aria-hidden="true" />
              <MapPin className="size-3" aria-hidden="true" />
              {profile.location}
            </Reveal>

            {/* Profile Picture */}
            <Reveal delay={30} className="shrink-0">
              <div className="relative size-24 sm:size-28 lg:size-32 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl shadow-primary/10">
                <Image
                  src={profile.avatar || "/profile.jpg"}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <p className="mt-6 font-mono text-sm tracking-wider text-primary uppercase">
              {profile.role}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg font-medium text-foreground/90 text-pretty sm:text-xl">
              {profile.heroHeadline}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              {profile.heroSupporting}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
              {profile.heroParagraph}
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<a href="#projects">View Featured Work<ArrowDown /></a>} />
            <Button
              size="lg"
              variant="outline"
              render={
                <a href={profile.cvPath} download>
                  <Download />
                  Download CV
                </a>
              }
            />
            <Button
              size="lg"
              variant="ghost"
              render={
                <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <GithubIcon />
                  GitHub
                </a>
              }
            />
            <Button
              size="lg"
              variant="ghost"
              render={
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <LinkedinIcon />
                  LinkedIn
                </a>
              }
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <div className="relative rounded-2xl border border-border bg-card/50 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-5">
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">request_flow.log</span>
            </div>
            <SystemDiagram nodes={heroNodes} caption="Illustrative request flow" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
