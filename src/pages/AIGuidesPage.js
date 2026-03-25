import { h } from 'vue'
import { aiGuides } from '../data/content.js'

export default {
  name: 'AIGuidesPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'page-hero fade-up visible' }, [
        h('div', { class: 'eyebrow' }, 'AI Guides'),
        h('h1', 'AI 使用教程'),
        h('p', '相比工具名，更能加分的是你如何把 AI 变成可复用能力，所以这一栏刻意强调方法论和落地路径。')
      ]),
      h('div', { class: 'grid-3' }, aiGuides.map((guide) => h('div', { class: 'section fade-up visible lift', key: guide.title }, [
        h('h3', guide.title),
        h('div', { class: 'list' }, guide.points.map((point) => h('div', { class: 'list-item', key: point }, [
          h('div', { class: 'dot' }),
          h('div', [h('span', point)])
        ])))
      ])))
    ])
  }
}
