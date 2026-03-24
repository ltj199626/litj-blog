import { h } from 'vue'
import { aiGuides } from '../data/content.js'

export default {
  name: 'AIGuidesPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('div', { class: 'section-head fade-up visible' }, [
        h('h2', 'AI 使用教程'),
        h('p', '这一栏我故意做得偏“方法论”，因为相比工具名，面试里更能加分的是你如何把 AI 变成可复用能力。')
      ]),
      h('div', { class: 'grid-3' }, aiGuides.map((guide) => h('div', { class: 'section glass fade-up visible lift', key: guide.title }, [
        h('h3', guide.title),
        h('div', { class: 'list' }, guide.points.map((point) => h('div', { class: 'list-item', key: point }, [
          h('div', { class: 'dot' }),
          h('div', [h('span', point)])
        ])))
      ])))
    ])
  }
}
