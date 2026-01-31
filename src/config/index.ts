import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Position, Technology, Environment, TeamCounts } from './types'

interface SocialsInterface {
  name: string
  url: string
  icon: IconDefinition
}

interface WorkExperienceInterface {
  position: Position
  company: string
  period: {
    from: Date
    to: Date | 'Present'
  }
  nda: boolean
  description: string
  team?: TeamCounts
  technologies: Technology[]
  environment?: Environment[]
}

export const header = {
  title: 'Ihor Rusenko',
  description:
    'Full-stack web developer with many years of experience in commercial and freelance projects.' +
    '<br>' +
    'I develop, modernize, and maintain web applications with a focus on stability and scalability.',
}

export const socials: SocialsInterface[] = [
  {
    name: 'Telegram',
    url: 'https://t.me/Rusenko_I',
    icon: faTelegram,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/iRim',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rusenko-i/',
    icon: faLinkedin,
  },
]

export const workExpirience: WorkExperienceInterface[] = [
  {
    position: 'Full-Stack',
    company: 'Kraser',
    period: {
      from: new Date(2010, 10),
      to: new Date(2011, 7),
    },
    nda: true,
    description:
      'Mainly commercial projects for Ukrainian market, internet stores, corporate sites and projects support.',
    team: {
      developer: 2,
      designer: 1,
      seo: 1,
    },
    technologies: ['PHP', 'Yii', 'MySQL', 'Memcached', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    position: 'Full-Stack',
    company: 'UkiePro',
    period: {
      from: new Date(2011, 8),
      to: new Date(2012, 8),
    },
    nda: true,
    description: 'Small commercial projects for USA.',
    team: {
      developer: 4,
      designer: 1,
    },
    technologies: [
      'PHP',
      'Kohana',
      'CodeIgniter',
      'REST API',
      'JavaScript',
      'jQuery',
      'MySQL',
      'HTML5',
      'CSS3',
    ],
  },
]
