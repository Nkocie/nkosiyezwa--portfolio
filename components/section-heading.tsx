import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  id?: string
  index?: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-primary">
          {index ? <span className="text-muted-foreground">{index}</span> : null}
          <span className="text-primary">{'//'}</span>
          <span className="tracking-wider uppercase">{eyebrow}</span>
        </div>
      ) : null}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
