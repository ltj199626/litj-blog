import { h } from 'vue'
import { automationIdeas } from '../data/content.js'

export default {
  name: 'AutomationPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'page-hero fade-up visible' }, [
        h('div', { class: 'eyebrow' }, 'Automation'),
        h('h1', '自动化实践'),
        h('p', '重点从来不只是省几步点击，而是把流程沉淀成长期可复用的能力资产，让动作可以稳定地被重复执行。')
      ]),
      h('div', { class: 'timeline' }, automationIdeas.map((item) => h('div', { class: 'timeline-item fade-up visible', key: item.step }, [
        h('small', item.step),
        h('strong', item.step),
        h('p', item.desc),
      ])))
    ])
  }
}
