import { h } from 'vue'
import { automationIdeas } from '../data/content.js'

export default {
  name: 'AutomationPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('div', { class: 'section-head fade-up visible' }, [
        h('h2', '自动化实践'),
        h('p', '我的自动化项目重点从来不只是“省几步点击”，而是把流程转化成长期可复用的能力资产。')
      ]),
      h('div', { class: 'timeline' }, automationIdeas.map((item) => h('div', { class: 'timeline-item glass fade-up visible', key: item.step }, [
        h('small', item.step),
        h('strong', item.step),
        h('p', item.desc),
      ])))
    ])
  }
}
