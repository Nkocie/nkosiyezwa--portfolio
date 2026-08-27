import {
  Bug,
  Code2,
  Database,
  GitBranch,
  Globe,
  ListChecks,
  Lock,
  Mail,
  Network,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  Users,
  Wrench,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const registry: Record<string, IconComponent> = {
  Bug,
  Code2,
  Database,
  Github: GithubIcon,
  GitBranch,
  Globe,
  Linkedin: LinkedinIcon,
  ListChecks,
  Lock,
  Mail,
  Network,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  Users,
  Wrench,
}

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Cmp = registry[name] ?? Code2
  return <Cmp className={className} aria-hidden="true" />
}
