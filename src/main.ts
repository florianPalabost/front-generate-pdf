import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { PluginOptions } from 'vue-toastification';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import { VDataTable, VDataTableServer, VDataTableVirtual } from 'vuetify/labs/VDataTable';

import { aliases, fa } from 'vuetify/iconsets/fa';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/styles';
import 'vue-toastification/dist/index.css';

import './style.css';
import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa
        }
    },
    components: { ...components },
    directives
});

const app = createApp(App);

app.use(createPinia()); // root store
app.use(router);
app.use(Toast);
app.use(vuetify);

app.mount('#app');
