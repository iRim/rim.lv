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
    'Full-stack web developer with commercial and freelance experience since 2010.' +
    ' I develop, modernize, and maintain web applications with a focus on stability and scalability.' +
    ' My work includes PHP and Laravel backends, JavaScript and Vue.js interfaces, database design and optimization, API development and integration, and legacy code modernization.',
}

export const siteContent = {
  role: 'Full-Stack Web Developer',
  specialism: 'PHP / Laravel / JavaScript / Vue.js',
  skillGroups: {
    Backend: ['PHP', 'Laravel', 'Yii', 'Kohana', 'CodeIgniter', 'Slim', 'Fat-Free', 'REST API'],
    Frontend: ['JavaScript', 'Vue.js', 'React', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
    'Data & tools': [
      'MySQL',
      'MongoDB',
      'ScyllaDB',
      'Redis',
      'Elasticsearch',
      'Memcached',
      'WebSocket',
    ],
  },
  expertise: [
    'REST API development',
    'Database design & optimization',
    'Legacy code modernization',
    'Responsive UI development',
    'Third-party integrations',
    'Real-time features',
    'Web application maintenance',
    'Cross-browser compatibility',
  ],
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
    highlights: [
      'Commercial projects for the Ukrainian market, including online stores and corporate sites',
      'Project support and maintenance',
    ],
    technologies: ['PHP', 'Yii', 'MySQL', 'Memcached', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    company: 'UkiePro',
    period: {
      from: new Date(2011, 8),
      to: new Date(2012, 8),
    },
    description: 'Small commercial projects for USA.',
    highlights: [
      'Development of small commercial projects for the US market',
      'Backend and frontend implementation with REST API integrations',
    ],
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
    highlights: [
      'Delivered more than 10 small and medium-sized web projects',
      'Developed servicebox.ru, a catalog of service providers and companies',
      'Implemented user questions and technical answers functionality',
    ],
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
    highlights: [
      'Developed hssports.com for school teams, players, and sports statistics',
      'Implemented data presentation and navigation for sports-related records',
    ],
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
    highlights: [
      'Delivered small and medium-sized catalogs and personal websites',
      'Implemented interactive features such as polls and chats',
    ],
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
    highlights: [
      'Developed APIs for mobile applications and websites',
      'Implemented client-side features for financial platforms',
      'Delivered web projects of varying complexity',
    ],
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
    highlights: [
      'Maintained and supported a legacy PHP project',
      'Migrated interface components from jQuery to Vue.js',
      'Integrated an ORM into the existing application',
    ],
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
    highlights: [
      'Development of a commercial trading platform',
      'Backend logic, front-end implementation, responsive layouts, and cross-browser compatibility',
    ],
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'Redis', 'HTML5', 'CSS3'],
  },

  {
    freelance: true,
    period: {
      from: new Date(2025, 2),
      to: new Date(2026, 1),
    },
    description:
      'Development and maintenance of web applications, database design and optimization, API development and integration, data parser development and support, and modernization of legacy code to newer PHP versions.',
    highlights: [
      'Developed and maintained web applications',
      'Designed and optimized databases; developed and integrated APIs',
      'Developed and supported data parsers and modernized legacy PHP code',
    ],
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
      'Sass',
    ],
  },

  {
    freelance: false,
    period: {
      from: new Date(2026, 1),
      to: new Date(2026, 6),
    },
    company: 'Proacto',
    description: 'Layout implementation and integration into a custom Drupal template.',
    highlights: [
      'Implemented responsive layouts',
      'Integrated the layout into a custom Drupal template',
    ],
    technologies: ['PHP', 'Twig', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
  },

  {
    freelance: true,
    period: {
      from: new Date(2026, 6),
    },
    description:
      'Development and maintenance of web applications, modernization of legacy code to newer PHP versions.',
    highlights: [
      'Developed and maintained web applications',
      'Modernized legacy code to newer PHP versions',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'Vue.js',
      'jQuery',
      'MySQL',
      'Redis',
      'HTML5',
      'CSS3',
      'Sass',
    ],
  },
]
