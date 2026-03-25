import { h } from 'vue'
import { blogPosts } from '../data/content.js'

export default {
  name: 'BlogPage',
  setup() {
    return () => h('div', { class: 'page shell' }, [
      h('section', { class: 'page-hero fade-up visible' }, [
        h('div', { class: 'eyebrow' }, 'Writing'),
        h('h1', '博客文章'),
        h('p', '这里的内容更接近真实项目复盘：会谈方法、取舍、流程和结果，而不只是停留在泛泛经验。')
      ]),
      h('div', { class: 'article-grid' }, blogPosts.map((article) => h('div', { class: 'article-card fade-up visible lift', key: article.title }, [
        h('div', { class: 'article-meta' }, article.category),
        h('h3', article.title),
        h('p', article.desc),
      ])))
    ])
  }
}
