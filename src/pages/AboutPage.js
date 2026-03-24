import { h } from 'vue'

export default {
  name: 'AboutPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('div', { class: 'section-head fade-up visible' }, [
        h('h2', '关于 / 联系'),
        h('p', '如果你希望找到一个既能做前端体验，又能把 AI 接进真实流程的人，这里就是你该看到的那种组合型能力展示。')
      ]),
      h('div', { class: 'grid-2' }, [
        h('div', { class: 'section glass fade-up visible lift' }, [
          h('h3', '我想做的事'),
          h('p', '我更偏好做那些兼具视觉表达、技术实现、工具整合和真实部署的项目。对我来说，作品不应该只停在截图和概念，而应该跑起来、发出去、能被使用。')
        ]),
        h('div', { class: 'section glass fade-up visible lift' }, [
          h('h3', '联系方式'),
          h('div', { class: 'list' }, [
            ['Email', '625681352@qq.com'],
            ['GitHub', 'github.com/ltj199626'],
            ['Focus', '前端开发 / AI 应用开发 / 自动化系统 / 独立项目落地']
          ].map(([title, desc]) => h('div', { class: 'list-item', key: title }, [
            h('div', { class: 'dot' }),
            h('div', [h('strong', title), h('span', desc)])
          ])))
        ])
      ]),
      h('div', { class: 'cta glass fade-up visible' }, [
        h('h2', '我想做的不只是功能，而是能被记住的产品表达。'),
        h('p', '如果你在看一个人是否值得加入团队，除了技术本身，我更愿意用真正上线的作品、完整闭环的工具和持续输出的内容来回答这个问题。'),
        h('div', { class: 'actions', style: 'justify-content:center;' }, [
          h('a', { class: 'btn btn-primary', href: 'mailto:625681352@qq.com' }, '发邮件联系我'),
          h('a', { class: 'btn btn-secondary', href: 'https://github.com/ltj199626', target: '_blank', rel: 'noreferrer' }, '查看 GitHub')
        ])
      ])
    ])
  }
}
