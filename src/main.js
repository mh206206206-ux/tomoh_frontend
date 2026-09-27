import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// roots file css
import './assets/styles/roots.css';
// _reset file css
import './assets/styles/_reset.css';
// hugeicons icons
import iconsPlugin from './plugins/iconsPlugin.js';

const vueApp = createApp(App);


// use icons plugin
vueApp.use(iconsPlugin);

// use router and mount  #app
vueApp.use(router).mount('#app');
