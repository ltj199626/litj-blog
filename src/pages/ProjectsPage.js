import { h } from 'vue'
import { projects } from '../data/content.js'

export default {
  name: 'ProjectsPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'page-hero fade-up visible' }, [
        h('div', { class: 'eyebrow' }, 'Projects'),
        h('h1', '项目 / 案例'),
        h('p', '这些项目不只是写过什么，更重要的是它们如何把技术、工具和交付思维组合成真正能上线的结果。')
      ]),
      h('div', { class: 'grid-3' }, projects.map((item) => h('div', { class: 'card fade-up visible lift', key: item.title }, [
        h('h3', item.title),
        h('p', item.desc),
        h('div', { class: 'tags' }, item.tags.map((tag) => h('span', { class: 'tag', key: tag }, tag)))
      ])))
    ])
  }
}
