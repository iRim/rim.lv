<script setup>
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { header, languages, siteContent, socials, workExpirience } from '@/config'
import { i18n } from '@/config/i18n'
import avatar from '@/img/photo.webp'
import ResumeHeader from '../components/resume/ResumeHeader.vue'
import ResumeProfile from '../components/resume/ResumeProfile.vue'
import ResumeSkills from '../components/resume/ResumeSkills.vue'
import ResumeLanguages from '../components/resume/ResumeLanguages.vue'
import ResumeExpertise from '../components/resume/ResumeExpertise.vue'
import ResumeExperience from '../components/resume/ResumeExperience.vue'
import ResumeFooter from '../components/resume/ResumeFooter.vue'

const icons = {
  Email: faEnvelope,
  Telegram: faTelegram,
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  Website: faGlobe,
}

const contactLinks = socials.map((social) => ({
  ...social,
  external: !social.url.startsWith('mailto:'),
  icon: icons[social.name] || social.icon,
}))

const buildDate = __BUILD_DATE__

function downloadPdf() {
  window.print()
}
</script>

<template>
  <div class="resume-shell">
    <article class="resume-page">
      <ResumeHeader
        :title="header.title"
        :role="siteContent.role"
        :specialism="siteContent.specialism"
        :kicker="i18n.labels.curriculumVitae"
        :download-label="i18n.labels.downloadPdf"
        :contacts-label="i18n.labels.contactInformation"
        :contacts="contactLinks"
        :avatar="avatar"
        @download="downloadPdf"
      />

      <div class="resume-intro">
        <ResumeProfile :title="i18n.labels.profile" :description="header.description" />
        <ResumeSkills :title="i18n.labels.skills" :groups="siteContent.skillGroups" />
        <ResumeLanguages :title="i18n.labels.languages" :languages="languages" />
      </div>

      <ResumeExpertise :title="i18n.labels.expertise" :items="siteContent.expertise" />
      <ResumeExperience
        :title="i18n.labels.experience"
        :entries="workExpirience"
        :freelance-label="i18n.labels.freelance"
        :present-label="i18n.labels.present"
        :default-position="siteContent.role"
        :date-format="i18n.dateFormat"
        :locale="i18n.locale"
      />
      <ResumeFooter
        :year="new Date().getFullYear()"
        :label="i18n.labels.lastUpdate"
        :build-date="buildDate"
      />
    </article>
  </div>
</template>
