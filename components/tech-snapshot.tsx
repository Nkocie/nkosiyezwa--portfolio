import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { snapshot } from '@/lib/data'

export function TechSnapshot() {
  return (
    <section aria-label="Technical snapshot" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {snapshot.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 70}
              className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="truncate text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
