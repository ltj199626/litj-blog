import { h } from 'vue'
import { projects } from '../data/content.js'

export default {
  name: 'ProjectsPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('div', { class: 'section-head fade-up visible' }, [
        h('h2', '项目 / 案例'),
        h('p', '这些项目不只是“写过什么”，更重要的是体现出我如何把技术、工具和交付思维组合成结果。')
      ]),
      h('div', { class: 'grid-3' }, projects.map((item) => h('div', { class: 'card glass fade-up visible lift', key: item.title }, [
        h('h3', item.title),
        h('p', item.desc),
        h('div', { class: 'tags' }, item.tags.map((tag) => h('span', { class: 'tag', key: tag }, tag)))
      ])))
    ])
  }
}
