import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { WorkExperienceInterface, SocialsInterface } from './interfaces'

export const contacts = {
  email: 'rusenko.i@outlook.com',
}

export const languages = {
  Ukrainian: 'Native',
  English: 'Pre-intermediate (A2+)',
  Russian: 'Fluent',
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
    name: 'Email',
    url: 'mailto:' + contacts.email,
    title: contacts.email,
    icon: faEnvelope,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Rusenko_I',
    title: '/Rusenko_I',
    icon: faTelegram,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/iRim',
    title: '/iRim',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rusenko-i/',
    title: '/in/rusenko-i',
    icon: faLinkedin,
  },
]

export const workExpirience: WorkExperienceInterface[] = [
  {
    company: 'Kraser',
    period: {
      from: new Date(2010, 10),
      to: new Date(2011, 7),
    },
    description:
      'Mainly commercial projects for Ukrainian market, internet stores, corporate sites and projects support.',
    technologies: ['PHP', 'Yii', 'MySQL', 'Memcached', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    company: 'UkiePro',
    period: {
      from: new Date(2011, 8),
      to: new Date(2012, 8),
    },
    description: 'Small commercial projects for USA.',
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
  {
    freelance: true,
    period: {
      from: new Date(2012, 8),
      to: new Date(2018, 4),
    },
    description:
      'More than 10 small and medium projects. servicebox.ru – is a catalog of masters and companies in Russia providing service and repair, answer technical questions of users.',
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'jQuery',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Sphinx',
      'CouchDB',
      'Memcached',
      'HTML5',
      'CSS3',
    ],
  },

  {
    company: 'UkiePro',
    period: {
      from: new Date(2018, 4),
      to: new Date(2019, 1),
    },
    description:
      'hssports.com - site displays statistics according to schools teams, players and sports',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'MySQL', 'HTML5', 'CSS3'],
  },

  {
    freelance: true,
    period: {
      from: new Date(2019, 1),
      to: new Date(2020, 9),
    },
    description:
      'Small to medium-sized projects, including catalogs, personal websites, and interactive features such as polls and chats.',
    technologies: [
      'PHP',
      'Laravel',
      'Slim',
      'JavaScript',
      'jQuery',
      'Vue.js',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Memcached',
      'HTML5',
      'CSS3',
    ],
  },

  {
    company: 'YamSoft',
    period: {
      from: new Date(2020, 9),
      to: new Date(2024, 5),
    },
    description:
      'Developed projects of varying complexity, focusing on API development for mobile applications and websites, as well as client-side features for financial platforms.',
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'Vue.js',
      'MySQL',
      'MongoDB',
      'Redis',
      'Firebase',
      'HTML5',
      'CSS3',
    ],
  },

  {
    freelance: true,
    period: {
      from: new Date(2024, 5),
      to: new Date(2025, 1),
    },
    description:
      'Maintenance and support of a legacy PHP project, including migration from jQuery to Vue.js and ORM integration.',
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'jQuery',
      'Vue.js',
      'MySQL',
      'MongoDB',
      'Redis',
      'WebSocket',
      'HTML5',
      'CSS3',
    ],
  },

  {
    company: 'Ncase',
    period: {
      from: new Date(2025, 1),
      to: new Date(2025, 2),
    },
    description:
      'Full-stack development of a commercial trading platform, covering backend logic, front-end implementation, responsive layouts, and cross-browser compatibility.',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'Redis', 'HTML5', 'CSS3'],
  },

  {
    freelance: true,
    period: {
      from: new Date(2025, 2),
    },
    description:
      'Development and maintenance of web applications, database design and optimization, API development and integration, data parser development and support, and modernization of legacy code to newer PHP versions.',
    technologies: [
      'PHP',
      'Laravel',
      'Yii',
      'Fat-Free',
      'Spiral + RoadRunner',
      'JavaScript',
      'Vue.js',
      'React',
      'jQuery',
      'MySQL',
      'MongoDB',
      'ScyllaDB',
      'Redis',
      'WebSocket',
      'HTML5',
      'CSS3',
    ],
  },
]
