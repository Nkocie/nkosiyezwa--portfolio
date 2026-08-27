import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TechSnapshot } from '@/components/tech-snapshot'
import { About } from '@/components/about'
import { FeaturedProject } from '@/components/featured-project'
import { SupportingProjects } from '@/components/supporting-projects'
import { TechnicalSkills } from '@/components/technical-skills'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { EngineeringCapabilities } from '@/components/engineering-capabilities'
import { EngineeringApproach } from '@/components/engineering-approach'
import { EducationCredentials } from '@/components/education-credentials'
import { ProfessionalFocus } from '@/components/professional-focus'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TechSnapshot />
        <About />
        <FeaturedProject />
        <SupportingProjects />
        <TechnicalSkills />
        <ExperienceTimeline />
        <EngineeringCapabilities />
        <EngineeringApproach />
        <EducationCredentials />
        <ProfessionalFocus />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
