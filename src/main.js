import { createApp } from "vue";
import {createRouter , createWebHistory} from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheTeam from './components/TheTeam.vue';
import TheWork from './components/TheWork.vue';
import MoreContent from './components/MoreContent.vue' ;
import About from './components/About.vue' ;
import TheClients from './components/TheClients.vue' ;
import ContactUs from './components/ContactUs.vue' ;
import TheAmazing from './components/TheAmazing.vue' ;
//import './sass/main.scss';
import App from "./App.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'',component:TheHeader},
        {path:'/team',component:TheTeam},
        {path:'/work',component:TheWork},
        {path:'/more',component:MoreContent},
        {path:'/about',component:About},
        {path:'/clients',component:TheClients},
        {path:'/contact',component:ContactUs},
        {path:'/amazing',component:TheAmazing},
    ]
})


const app = createApp(App);

app.use(router);

app.mount("#app");