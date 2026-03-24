import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.js'
import ProjectsPage from './pages/ProjectsPage.js'
import AIGuidesPage from './pages/AIGuidesPage.js'
import AutomationPage from './pages/AutomationPage.js'
import BlogPage from './pages/BlogPage.js'
import AboutPage from './pages/AboutPage.js'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/ai-guides', component: AIGuidesPage },
    { path: '/automation', component: AutomationPage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: AboutPage },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
