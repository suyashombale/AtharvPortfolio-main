
import LandingBlockVue from "@/components/LandingBlock.vue";
import AboutBlockVue from "@/components/AboutBlock.vue";
import ResumeVue from  "@/components/Resume.vue";
import ContactVue from  "@/components/Contact.vue";
import ProjectsVue from "@/components/Projects.vue";
import AppVue from "@/App.vue";
import { createRouter, createWebHistory } from 'vue-router'

    const routes = [
        {
            path: '/',
            name: 'App',
            component: AppVue,
        },
        {
            path: '/home',
            name: 'Home',
            component: LandingBlockVue,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutBlockVue,
        },
        {
            path: '/resume',
            name: 'Resume',
            component: ResumeVue,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectsVue,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactVue,
        },
        
    ]
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })
    export default router