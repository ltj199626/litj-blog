import { h, ref, onMounted, watch, nextTick } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

export default {
  setup() {
    const progress = ref(0)
    const route = useRoute()
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      progress.value = height <= 0 ? 0 : (window.scrollY / height) * 100
    }
    const reveal = () => {
      document.querySelectorAll('.fade-up').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92) el.classList.add('visible')
      })
    }
    onMounted(() => {
      const tick = () => { updateProgress(); reveal() }
      tick()
      window.addEventListener('scroll', tick, { passive: true })
      window.addEventListener('resize', tick)
    })
    watch(() => route.fullPath, async () => {
      await nextTick()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => { reveal(); updateProgress() }, 80)
    })
    return () => h('div', [
      h('div', { class: 'progress', style: { width: `${progress.value}%` } }),
      h('div', { class: 'ambient' }),
      h('div', { class: 'ambient-2' }),
      h('div', { class: 'shell' }, [
        h('nav', { class: 'nav glass fade-up visible' }, [
          h('div', { class: 'nav-inner' }, [
            h(RouterLink, { to: '/', class: 'brand' }, { default: () => [h('div', { class: 'brand-mark' }, 'L'), h('div', 'Litj / Vue 3 Portfolio')] }),
            h('div', { class: 'nav-links' }, [
              h(RouterLink, { to: '/', class: 'nav-link' }, { default: () => '首页' }),
              h(RouterLink, { to: '/projects', class: 'nav-link' }, { default: () => '项目' }),
              h(RouterLink, { to: '/ai-guides', class: 'nav-link' }, { default: () => 'AI 教程' }),
              h(RouterLink, { to: '/automation', class: 'nav-link' }, { default: () => '自动化' }),
              h(RouterLink, { to: '/blog', class: 'nav-link' }, { default: () => '博客' }),
              h(RouterLink, { to: '/about', class: 'nav-link' }, { default: () => '关于' }),
            ])
          ])
        ])
      ]),
      h(RouterView),
      h('div', { class: 'shell' }, [h('footer', `© ${new Date().getFullYear()} Litj · Vue 3 Portfolio · Built for interview impact and real deployment.`)])
    ])
  }
}
