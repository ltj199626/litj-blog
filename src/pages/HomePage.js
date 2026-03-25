import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { heroStats, projects, blogPosts } from '../data/content.js'

export default {
  name: 'HomePage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'hero' }, [
        h('div', { class: 'hero-main fade-up visible' }, [
          h('div', { class: 'hero-badge' }, 'Apple-inspired portfolio · Frontend × AI × Shipping'),
          h('h1', { class: 'hero-title', innerHTML: '把 <span class="accent">作品体验</span> 做得更清楚，把 <span class="accent">技术能力</span> 展示得更克制。' }),
          h('p', { class: 'hero-desc' }, '这是一个更接近 Apple 官网表达方式的个人站：大标题、浅色留白、清晰层级，以及真正可以落地上线的项目与内容。'),
          h('div', { class: 'actions' }, [
            h(RouterLink, { to: '/projects', class: 'btn btn-primary' }, { default: () => '查看项目' }),
            h(RouterLink, { to: '/blog', class: 'btn btn-secondary' }, { default: () => '浏览博客' }),
          ]),
          h('div', { class: 'stats' }, heroStats.map((item) => h('div', { class: 'stat', key: item.title }, [
            h('strong', item.title),
            h('span', item.desc),
          ])))
        ]),
        h('div', { class: 'hero-side' }, [
          h('div', { class: 'hero-side-card fade-up visible lift' }, [
            h('h3', '核心关键词'),
            h('p', '聚焦前端体验、AI 工具整合、自动化能力和完整交付，而不是堆叠技术名词。'),
            h('div', { class: 'chips' }, ['前端开发', 'AI 集成', '自动化流程', '产品交付', '工程表达', '独立项目'].map((text) => h('span', { class: 'chip', key: text }, text)))
          ]),
          h('div', { class: 'hero-side-card fade-up visible lift' }, [
            h('h3', '这个站的目标'),
            h('p', '让人一眼看懂我擅长什么、做过什么，以及为什么这些能力可以直接转化成真实产品结果。')
          ])
        ])
      ]),
      h('section', { class: 'section-block' }, [
        h('div', { class: 'section-head fade-up visible' }, [
          h('div', { class: 'eyebrow' }, 'Selected work'),
          h('h2', '用更简洁的页面，突出真正重要的内容'),
          h('p', '首页重点呈现代表项目与内容入口，内页统一成同一套浅色、克制、留白充足的 Apple 风格。')
        ]),
        h('div', { class: 'grid-3' }, projects.map((item) => h('div', { class: 'card fade-up visible lift', key: item.title }, [
          h('h3', item.title),
          h('p', item.desc),
          h('div', { class: 'tags' }, item.tags.map((tag) => h('span', { class: 'tag', key: tag }, tag)))
        ])))
      ]),
      h('section', { class: 'section-block' }, [
        h('div', { class: 'section-head fade-up visible' }, [
          h('div', { class: 'eyebrow' }, 'Latest writing'),
          h('h2', '内容不只是在补充，而是作品的一部分'),
          h('p', '博客、AI 教程与自动化实践一起构成这个站的表达方式：不仅展示页面，也展示思考与交付路径。')
        ]),
        h('div', { class: 'article-grid' }, blogPosts.slice(0, 3).map((article) => h('div', { class: 'article-card fade-up visible lift', key: article.title }, [
          h('div', { class: 'article-meta' }, article.category),
          h('h3', article.title),
          h('p', article.desc),
        ])))
      ]),
      h('div', { class: 'cta fade-up visible' }, [
        h('h2', '不是把页面做得更花，而是把价值表达得更准。'),
        h('p', '如果你在看一个前端 / AI 开发者是否具备真正的产品交付能力，这个站想回答的是完整度、品味和落地能力。'),
        h('div', { class: 'actions', style: 'justify-content:center;' }, [
          h(RouterLink, { to: '/about', class: 'btn btn-primary' }, { default: () => '了解更多' }),
          h(RouterLink, { to: '/ai-guides', class: 'btn btn-secondary' }, { default: () => '查看 AI 教程' }),
        ])
      ])
    ])
  }
}
