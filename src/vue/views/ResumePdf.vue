<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { header, languages, siteContent, socials, workExpirience } from '@/config'
import { i18n } from '@/config/i18n'
import { formatDate } from '@/utils/date'
import avatar from '@/img/photo.webp'

const contactLinks = socials.map((social) => ({
  ...social,
  external: !social.url.startsWith('mailto:'),
}))

function formatPeriod(period) {
  const from = formatDate(period.from, i18n.dateFormat, i18n.locale)
  const to = period.to ? formatDate(period.to, i18n.dateFormat, i18n.locale) : i18n.labels.present

  return `${from} – ${to}`
}

function companyName(item) {
  return item.freelance ? i18n.labels.freelance : item.company
}
</script>

<template>
  <main class="pdf-shell">
    <article class="pdf-page">
      <header class="pdf-header">
        <img class="pdf-avatar" :src="avatar" :alt="header.title" width="132" height="132" />
        <div class="pdf-identity">
          <p class="pdf-kicker">{{ i18n.labels.curriculumVitae }}</p>
          <h1>{{ header.title }}</h1>
          <p class="pdf-role">{{ siteContent.role }}</p>
          <p class="pdf-specialism">{{ siteContent.specialism }}</p>
          <nav class="pdf-contact-list" :aria-label="i18n.labels.contactInformation">
            <a
              v-for="contact in contactLinks"
              :key="contact.name"
              :href="contact.url"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener noreferrer' : undefined"
            >
              <FontAwesomeIcon :icon="contact.icon" aria-hidden="true" />
              <span>{{ contact.title }}</span>
            </a>
            <span class="pdf-contact-item">
              <FontAwesomeIcon :icon="faMapMarkerAlt" aria-hidden="true" />
              <span>Ivano-Frankivsk region, Ukraine</span>
            </span>
          </nav>
        </div>
      </header>

      <div class="pdf-intro">
        <section class="pdf-section pdf-profile" aria-labelledby="pdf-profile-heading">
          <h2 id="pdf-profile-heading">{{ i18n.labels.profile }}</h2>
          <p>{{ header.description }}</p>
        </section>

        <section class="pdf-section pdf-skills" aria-labelledby="pdf-skills-heading">
          <h2 id="pdf-skills-heading">{{ i18n.labels.skills }}</h2>
          <div class="pdf-skill-groups">
            <div
              v-for="(group, name) in siteContent.skillGroups"
              :key="name"
              class="pdf-skill-group"
            >
              <h3>{{ name }}</h3>
              <ul>
                <li v-for="skill in group" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="pdf-section pdf-languages" aria-labelledby="pdf-languages-heading">
          <h2 id="pdf-languages-heading">{{ i18n.labels.languages }}</h2>
          <dl>
            <div v-for="(level, language) in languages" :key="language">
              <dt>{{ language }}</dt>
              <dd>{{ level }}</dd>
            </div>
          </dl>
        </section>
      </div>

      <section class="pdf-section pdf-expertise" aria-labelledby="pdf-expertise-heading">
        <h2 id="pdf-expertise-heading">{{ i18n.labels.expertise }}</h2>
        <ul>
          <li v-for="item in siteContent.expertise" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="pdf-section pdf-experience" aria-labelledby="pdf-experience-heading">
        <h2 id="pdf-experience-heading">{{ i18n.labels.experience }}</h2>
        <div class="pdf-experience-list">
          <article
            v-for="(item, key) in [...workExpirience].reverse()"
            :key="key"
            class="pdf-experience-entry"
          >
            <p class="pdf-experience-date">{{ formatPeriod(item.period) }}</p>
            <div class="pdf-experience-content">
              <header class="pdf-job-heading">
                <h3>
                  {{ item.position || siteContent.role }}
                  <span class="pdf-company">— {{ companyName(item) }}</span>
                </h3>
              </header>
              <ul class="pdf-highlights">
                <li v-for="highlight in item.highlights || [item.description]" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
              <p class="pdf-technologies">
                <strong>Technologies:</strong> {{ item.technologies.join(', ') }}.
              </p>
            </div>
          </article>
        </div>
      </section>
    </article>
  </main>
</template>
