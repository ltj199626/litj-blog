export const heroStats = [
  { title: 'Frontend', desc: '在视觉层级、滚动节奏、交互反馈与页面完成度上保持克制而稳定的表达。' },
  { title: 'AI Apps', desc: '把模型能力接进文件、工作流、脚本与真实业务动作，而不止停在一次调用。' },
  { title: 'Shipping', desc: '把一个想法推进到可展示、可部署、可持续迭代的状态，补上最后的交付闭环。' }
]

export const projects = [
  { title: 'AI Coding Assistant CLI', desc: '从零搭建本地 coding assistant，覆盖代码生成、解释、diff / patch、安全局部修改、多文件上下文、自动测试与 git 总结，让 AI 真正进入开发闭环。', tags: ['Python', 'LLM API', 'CLI', 'Automation'] },
  { title: 'Vue 3 Portfolio Blog', desc: '把个人站升级成 Vue 3 + Router + Vite 的工程化项目，不只展示页面，也展示内容结构、视觉表达和发布能力。', tags: ['Vue 3', 'Vue Router', 'Vite', 'GitHub Pages'] },
  { title: 'Automation Workflow Suite', desc: '围绕消息、文件、脚本和外部服务做自动化整合，把高频重复动作收敛成可复用、可维护、可持续扩展的流程工具链。', tags: ['Workflow', 'PowerShell', 'Python', 'Integration'] }
]

export const aiGuides = [
  { title: '如何搭建一个真正可用的 AI 助手', points: ['先定义助手解决的是哪类高频问题，而不是一上来就调用模型。', '为模型提供结构化上下文：文件、历史、偏好、目标和边界。', '所有自动改动都要有预览、校验和失败兜底。'] },
  { title: 'Prompt 工程的核心不是玄学，而是约束设计', points: ['好的 Prompt 更像接口协议，边界清晰比辞藻华丽更重要。', '输出结构要可验证，最好能落到 JSON、patch 或固定格式。', '后处理与验证链路决定了 AI 工具最终是否稳定。'] },
  { title: '怎么把 AI 真正接进开发流程', points: ['让 AI 参与代码生成只是起点，更重要的是把它接进 patch、测试、git 和发布。', 'AI 应用真正的门槛在流程整合，不在单次调用。', '一个能长期使用的 AI 工具，必须具备上下文管理和错误恢复能力。'] }
]

export const automationIdeas = [
  { step: '发现摩擦点', desc: '优先挑那些高频、重复、低判断、容易错的步骤下手，把时间还给更有价值的决策。' },
  { step: '封装输入输出', desc: '把脚本、命令或服务抽象成稳定接口，后续才方便被组合成真正可复用的系统。' },
  { step: '接入 AI 与部署链路', desc: '把 AI、文件、GitHub、消息和发布动作连接成闭环，让自动化不只停在本地脚本层。' }
]

export const blogPosts = [
  { category: 'AI × Workflow', title: '把 AI 真正接进工作流，而不是停留在一次调用', desc: '更有价值的 AI 应用，不是回答一次问题，而是接住上下文、文件、动作与发布流程，最终形成完整闭环。' },
  { category: 'Frontend × Product', title: '为什么前端作品的“感觉”本身就是竞争力', desc: '真正让人记住你的，往往不是技术名词，而是视觉层级、滚动节奏、交互细节和整体完成度。' },
  { category: 'Independent Builder', title: '从 idea 到上线，拉开差距的是最后 20%', desc: '很多项目不是输在开始，而是输在发布、部署、域名、路径、展示和最后的收尾。' },
  { category: 'Tutorial', title: '如何把一个 AI Demo 变成作品集加分项', desc: '重点不是调通接口，而是把体验、结构、验证和上线结果一起做出来。' },
  { category: 'Career', title: '技术博客如何写得像真实项目复盘', desc: '最能打动人的不是泛泛而谈，而是拆问题、给方法、展示结果，并交代边界与反思。' },
  { category: 'Engineering', title: '为什么工程化能力会放大你的前端表达力', desc: '稳定的页面表达，背后其实是组件化、路由、发布、样式组织和性能意识的共同作用。' }
]
