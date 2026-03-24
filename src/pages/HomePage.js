import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { heroStats } from '../data/content.js'

export default {
  name: 'HomePage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'hero' }, [
        h('div', { class: 'hero-main glass fade-up visible' }, [
          h('div', { class: 'hero-badge' }, 'Vue 3 Portfolio · Frontend × AI × Shipping'),
          h('h1', { class: 'hero-title', innerHTML: '我把 <span class="accent">前端体验</span>、<span class="accent">AI 能力</span> 和 <span class="accent">自动化流程</span><br />做成真正可以上线的产品。' }),
          h('p', { class: 'hero-desc' }, '我是 Litj，聚焦前端开发与 AI 应用开发。相比单点技能，我更擅长把界面表达、工具整合、自动化流程和部署发布串成一个完整闭环，让作品既能展示，又能实际落地。'),
          h('div', { class: 'actions' }, [
            h(RouterLink, { to: '/projects', class: 'btn btn-primary' }, { default: () => '查看项目' }),
            h(RouterLink, { to: '/ai-guides', class: 'btn btn-secondary' }, { default: () => '看 AI 教程' }),
          ]),
          h('div', { class: 'stats' }, heroStats.map((item) => h('div', { class: 'stat', key: item.title }, [
            h('strong', item.title),
            h('span', item.desc),
          ])))
        ]),
        h('div', { class: 'hero-side' }, [
          h('div', { class: 'hero-side-card glass fade-up visible lift' }, [
            h('h3', '核心关键词'),
            h('div', { class: 'chips' }, ['前端开发', 'AI 工具整合', '自动化项目', '独立项目落地', '技术表达', '部署上线'].map((text) => h('span', { class: 'chip', key: text }, text)))
          ]),
          h('div', { class: 'hero-side-card glass fade-up visible lift' }, [
            h('h3', '我想传达的价值'),
            h('p', '我不想只展示“会什么框架”，而是展示我能把想法真正做成一个完整数字产品：看起来专业、流程跑得通、最终能上线。')
          ])
        ])
      ]),
      h('section', { class: 'section-block' }, [
        h('div', { class: 'section-head fade-up visible' }, [
          h('h2', '为什么这个站值得放进简历'),
          h('p', '因为它不只是主页，而是一套有结构、有内容、有技术选型、有发布链路的完整作品站。')
        ]),
        h('div', { class: 'grid-3' }, [
          ['技术选型明确', '使用 Vue 3 + Router + Vite 做内容组织，不是简单静态拼页面，体现了更清晰的工程思维。'],
          ['内容表达更强', '不仅有项目，还有 AI 教程、自动化实践与博客栏目，更像一个真正持续更新的技术站点。'],
          ['部署闭环完整', '从设计、开发到 GitHub Pages 和自定义域名上线，形成了真实的产品交付路径。']
        ].map(([title, desc]) => h('div', { class: 'card glass fade-up visible lift', key: title }, [h('h3', title), h('p', desc)])))
      ])
    ])
  }
}
