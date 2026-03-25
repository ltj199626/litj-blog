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
          h('h1', { class: 'hero-title', innerHTML: '为界面带来 <span class="accent">更好的感觉</span>，为产品带来 <span class="accent">真正的完成度</span>。' }),
          h('p', { class: 'hero-desc' }, '我做前端体验、AI 应用与自动化流程，也关心它们最后是否真的能上线、能被使用、能留下专业而清晰的第一印象。'),
          h('div', { class: 'actions' }, [
            h(RouterLink, { to: '/projects', class: 'btn btn-primary' }, { default: () => '查看项目' }),
            h(RouterLink, { to: '/about', class: 'btn btn-secondary' }, { default: () => '了解我' }),
          ]),
          h('div', { class: 'stats' }, heroStats.map((item) => h('div', { class: 'stat', key: item.title }, [
            h('strong', item.title),
            h('span', item.desc),
          ])))
        ]),
        h('div', { class: 'hero-side' }, [
          h('div', { class: 'hero-side-card fade-up visible lift' }, [
            h('h3', '我在做什么'),
            h('p', '把前端表达、AI 集成、自动化流程和最终交付放进同一套产品视角里，而不是把它们拆成彼此割裂的技能点。'),
            h('div', { class: 'chips' }, ['前端体验', 'AI 集成', '自动化流程', '产品交付', '工程表达', '独立项目'].map((text) => h('span', { class: 'chip', key: text }, text)))
          ]),
          h('div', { class: 'hero-side-card fade-up visible lift' }, [
            h('h3', '这个站想表达什么'),
            h('p', '不是单纯列出我会什么，而是让人快速感受到：我能把一个想法做成完成度高、体验清楚、可以发布的数字产品。')
          ])
        ])
      ]),
      h('section', { class: 'section-block' }, [
        h('div', { class: 'section-head fade-up visible' }, [
          h('div', { class: 'eyebrow' }, 'Selected work'),
          h('h2', '用更克制的页面，把重点留给真正重要的内容'),
          h('p', '项目不是为了罗列技术栈，而是为了展示一个人如何把视觉表达、实现能力与最终交付串成闭环。')
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
          h('h2', '内容不是补充说明，而是作品本身的一部分'),
          h('p', '博客、AI 教程与自动化实践一起构成这个站的表达方式：不仅展示页面，也展示判断、方法和落地路径。')
        ]),
        h('div', { class: 'article-grid' }, blogPosts.slice(0, 3).map((article) => h('div', { class: 'article-card fade-up visible lift', key: article.title }, [
          h('div', { class: 'article-meta' }, article.category),
          h('h3', article.title),
          h('p', article.desc),
        ])))
      ]),
      h('div', { class: 'cta fade-up visible' }, [
        h('h2', '好的页面不只是好看，而是让价值更容易被看见。'),
        h('p', '如果你在看一个前端 / AI 开发者是否具备真正的产品交付能力，这个站想回答的是：完成度、品味、结构和最终落地。'),
        h('div', { class: 'actions', style: 'justify-content:center;' }, [
          h(RouterLink, { to: '/blog', class: 'btn btn-primary' }, { default: () => '浏览内容' }),
          h(RouterLink, { to: '/ai-guides', class: 'btn btn-secondary' }, { default: () => '查看 AI 教程' }),
        ])
      ])
    ])
  }
}
