type Position = 'Frontend' | 'Backend' | 'Full-Stack'
type Role = 'developer' | 'designer' | 'manager' | 'qa' | 'seo'
type Technology =
  // Languages
  | 'PHP'
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'Go'

  // Frontend
  | 'HTML5'
  | 'CSS3'
  | 'Sass'
  | 'Less'
  | 'Vue.js'
  | 'React'
  | 'jQuery'
  | 'Backbone.js'

  // Backend / Frameworks
  | 'Laravel'
  | 'Yii'
  | 'Phalcon'
  | 'Slim'
  | 'Fat-Free Framework'
  | 'Kohana'
  | 'CodeIgniter'
  | 'Spiral + RoadRunner'
  | 'Node.js'

  // APIs / Communication
  | 'REST API'
  | 'GraphQL'
  | 'WebSocket'

  // Databases / Storage
  | 'MySQL'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Redis'
  | 'Memcached'
  | 'ScyllaDB'
  | 'ElasticSearch'
  | 'CouchDB'
  | 'Sphinx'

  // Other
  | 'Firebase'

type Environment =
  | 'AWS'
  | 'Amazon EC2'
  | 'Amazon S3'
  | 'Amazon SES'
  | 'Docker'
  | 'Docker Compose'
  | 'Kubernetes'
  | 'CI/CD'
  | 'GitHub Actions'
  | 'Linux'
  | 'Ubuntu'
  | 'Nginx'
  | 'Apache'
  | 'Supervisor'

type TeamCounts = Partial<Record<Role, number>>

export { Position, Technology, Environment, TeamCounts }
