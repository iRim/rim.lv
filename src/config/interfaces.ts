import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { Position, Technology, TeamCounts } from './types'

interface HeaderInterface {
  title?: string
  description: string
}

interface BaseWorkExperienceInterface {
  // position: Position
  period: {
    from: Date
    to?: Date
  }
  // nda: boolean
  description: string
  // team?: TeamCounts
  technologies: Technology[]
}

interface WorkExperienceFreelanceInterface extends BaseWorkExperienceInterface {
  freelance: true
  company?: string
}

interface WorkExperienceCompaniesInterface extends BaseWorkExperienceInterface {
  freelance?: false
  company: string
}

type WorkExperienceInterface = WorkExperienceFreelanceInterface | WorkExperienceCompaniesInterface

interface SocialsInterface {
  name: string
  url: string
  title: string
  icon: IconDefinition
}

export type { WorkExperienceInterface, SocialsInterface, HeaderInterface }
