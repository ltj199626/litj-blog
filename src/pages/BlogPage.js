import { h } from 'vue'
import { blogPosts } from '../data/content.js'

export default {
  name: 'BlogPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('div', { class: 'section-head fade-up visible' }, [
        h('h2', '博客文章'),
        h('p', '这里的内容会偏向项目方法论、AI 工具使用、前端表达与自动化实践。')
      ]),
      h('div', { class: 'article-grid' }, blogPosts.map((article) => h('div', { class: 'article-card glass fade-up visible lift', key: article.title }, [
        h('div', { class: 'article-meta' }, article.category),
        h('h3', article.title),
        h('p', article.desc),
      ])))
    ])
  }
}
