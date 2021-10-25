require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createI18n } from 'vue-i18n';
import Particles from "particles.vue3";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const i18n= createI18n({

    locale: 'pt',
    fallbackLocale:'en',
    messages:{
        en:{
            curriculum:{
                education:'Education' ,
            },
            nav:{
                curriculum:'Curriculum',
                contacts: 'Contacts',
                hobbies:'Hobbies',
            },

            hello: 'hello!',
        },
        pt:{
            curriculum:{
              education:'Educação' ,
            },
            nav:{
                curriculum:'Currículo',
                contacts: 'Contactos',
                hobbies:'Passatempos',
            },
            hello:'Olá !',
        }
    }
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(i18n)
            .use(Particles)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
