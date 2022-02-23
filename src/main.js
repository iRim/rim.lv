import {
	createApp,
} from 'vue'
import {
	FontAwesomeIcon
} from './fontawesome'
import router from './router'
import App from './App.vue'

createApp(App)
	.component('fa-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app')