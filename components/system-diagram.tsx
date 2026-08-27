import { ArrowDown } from 'lucide-react'
import { Icon } from '@/components/icon'
import { cn } from '@/lib/utils'

export type DiagramNode = {
  label: string
  sub?: string
  icon: string
  method?: string
}

export function SystemDiagram({
  nodes,
  className,
  caption,
}: {
  nodes: DiagramNode[]
  className?: string
  caption?: string
}) {
  return (
    <figure className={cn('flex flex-col', className)}>
      <ul className="flex flex-col gap-0" role="list">
        {nodes.map((node, i) => (
          <li key={node.label} className="flex flex-col">
            <div className="group relative flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 backdrop-blur-sm transition-colors hover:border-primary/40">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                <Icon name={node.icon} className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm font-medium text-foreground">
                    {node.label}
                  </span>
                  {node.method ? (
                    <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wide text-primary">
                      {node.method}
                    </span>
                  ) : null}
                </div>
                {node.sub ? (
                  <p className="truncate font-mono text-xs text-muted-foreground">{node.sub}</p>
                ) : null}
              </div>
              <span
                className="size-1.5 rounded-full bg-primary animate-diagram-pulse"
                style={{ animationDelay: `${i * 0.4}s` }}
                aria-hidden="true"
              />
            </div>

            {i < nodes.length - 1 ? (
              <div className="flex items-center justify-center py-1.5" aria-hidden="true">
                <ArrowDown className="size-4 text-muted-foreground/60" />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      {caption ? (
        <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
