export const siteConfig = {
  name: "张鹏程",
  title: "Agent / AI 应用工程师",
  description:
    "张鹏程的个人网站：专注 Context Engineering、RAG、Long-term Memory 与 Agent Runtime，把 Agent 做成可靠、可解释的真实产品。",
  accentColor: "#1d4ed8",
  heroStatement: "用客户端系统工程的可靠性，把 Agent 做成真正可用的产品。",
  social: {
    email: "2388387947@qq.com",
    github: "https://github.com/freecodetiger",
    douyin:
      "https://www.douyin.com/user/MS4wLjABAAAAMxajoknnDSz8fgoiREjZ90c41uHb7cX2Cc_UyS29sahIpcIMmKc8O1PmKr1Bqtpe?from_tab_name=main",
  },
  about: [
    "我是一名 Agent / AI 应用工程师，武汉大学软件工程在读，目前在影石 Insta360 剪辑 SDK 组实习。关注的不只是把模型接进产品，更是 Context 如何选择、工具如何约束、失败如何降级，以及用户为什么愿意长期使用。",
    "客户端与系统工程是我的底座。做过跨端剪辑、播放器 Seek、macOS 终端和端侧语音，这些经历让我习惯用异步契约、预算、幂等、可观测性和测试去约束不确定性——现在也用同样的方法做 Agent。",
    "代码之外，我是视觉中国签约摄影师，也在短视频里分享技术与成长，积累了 2000+ 关注者。我喜欢把复杂系统讲清楚，也在意产品被看见、被理解时的质感。",
  ],
  capabilityGroups: [
    {
      name: "Context Engineering",
      skills: ["Semantic Planning", "Structured Output", "Policy Compilation", "Context Budget"],
    },
    {
      name: "Retrieval & Memory",
      skills: ["Hybrid RAG", "RRF / Rerank", "Small-to-Big", "Long-term Memory"],
    },
    {
      name: "Runtime & Reliability",
      skills: ["Tool Calling", "Routing / Fallback", "Idempotency", "Tracing / Evaluation"],
    },
    {
      name: "Client & Systems",
      skills: ["Swift / Kotlin", "C++", "Async / Networking", "Testing / CI"],
    },
  ],
  elsepage: {
    name: "ElsePage",
    chineseName: "页外",
    tagline: "一个把阅读反思沉淀为长期思想脉络的 Reading Agent",
    summary:
      "我没有把 AI 做成一个随时打断阅读的聊天框，而是把它嵌进“读—思考—回应—沉淀”的循环：用户的原话先被保存，Agent 再从已读内容和长期记忆中选择证据，给出克制、可回到原文的回应。",
    repo: "https://github.com/freecodetiger/Elsepage",
    caseStudy: "/elsepage/",
    loop: ["Read", "Reflect", "Discuss", "Remember", "Reconnect"],
    facts: [
      { value: "356", label: "自动化测试" },
      { value: "10 × 11", label: "回归场景 × 行为维度" },
      { value: "4", label: "LLM 子流程" },
    ],
    capabilities: [
      {
        index: "01",
        title: "Context Planning",
        description:
          "LLM 负责理解意图，Swift Validator 与 Policy Compiler 决定可用来源、检索策略、预算和 Fallback。",
      },
      {
        index: "02",
        title: "Evidence-grounded RAG",
        description:
          "Parent / Child Chunking、FTS + Vector、RRF、可选 Rerank 与 Small-to-Big，共同服务 read-so-far 检索。",
      },
      {
        index: "03",
        title: "Evolving Memory",
        description:
          "Thought、Question、Memory 带 Evidence、Relation 与 Revision；模型提议更新，确定性规则负责裁决。",
      },
      {
        index: "04",
        title: "Bounded Runtime",
        description:
          "时间、调用与输出预算，配合取消、幂等、引用复核和 Trace，让失败可降级、行为可追踪。",
      },
    ],
  },
  agentPractice: [
    {
      index: "01",
      eyebrow: "Tool Contract",
      title: "让工具定义与真实能力保持一致",
      description:
        "为 iOS 端一键成片 Agent 独立交付换模板、批量删段与对话可视化等工具；区分 LLM 视角的 Tool 意图与端口原子 func，并让 schema 成为工具清单的单一真相源。",
      outcome: "减少 prompt 声明与实现漂移造成的错误调用",
    },
    {
      index: "02",
      eyebrow: "Async Reliability",
      title: "把不确定异步收敛成硬契约",
      description:
        "针对下载失败、用户取消、后台中断等路径不回调导致 Agent 永久挂起的问题，在引擎边界建立“必定回调且仅回调一次”契约，并加入软超时兜底。",
      outcome: "8 个单测覆盖成功、失败、取消、中断、双触发与零触发",
    },
  ],
  aiHarness:
    "参与团队跨仓 AI 工作空间与 MR Review Skill 演进：Agent 负责语义判断，脚本负责确定性校验；评审结论需要规则依据和代码行号，证据不足时降级为“疑似”。",
  projects: [
    {
      name: "ProGhostty",
      eyebrow: "Systems Engineering",
      description:
        "面向 AI CLI 长输出阅读的现代 macOS 终端。以 libghostty-vt 为唯一终端语义源，用 Swift / AppKit / Metal 构建 PTY、滚动、分屏与渲染边界。",
      proof: "11 周迭代 · 41 个公开 Releases · 架构守卫接入 CI",
      link: "https://github.com/freecodetiger/ProGhostty",
      site: "https://ghostty.praw.top",
      skills: ["Swift", "C++", "Metal", "AppKit", "PTY / VT"],
    },
    {
      name: "DDL Agent",
      eyebrow: "Earlier Agent Product",
      description:
        "本地优先的 Android 日程助手：自然语言先转成结构化提案，再经过本地规则引擎与用户确认写入 Room，而不是让模型直接修改数据。",
      proof: "15 个公开 Releases · BYOK · Android",
      link: "https://github.com/freecodetiger/fucktheddl",
      site: "https://ddlagent.praw.top",
      skills: ["Kotlin", "Structured Output", "Local-first", "Rule Engine"],
    },
  ],
  experience: [
    {
      company: "影石创新 Insta360 · 剪辑 SDK 组",
      title: "移动端开发暑期实习",
      dateRange: "2026.06 - 至今",
      bullets: [
        "主导运动模糊、轨迹延时、HDR 与 Player 模块 KMP / CMP 重构，业务编排和 UI 收敛至 commonMain，双端真机验证并合入稳定分支。",
        "重构播放器 Seek 链路：快速 / 精确分类解码、最新请求优先并丢弃过期任务，将拖动延迟从约 400ms 降至约 20ms，同时消除音频 Pop 音。",
        "将客户端里的异步、取消、超时与测试经验迁移到 Agent 工具边界和运行可靠性治理。",
      ],
    },
  ],
  openSource: {
    frameworkIntro:
      "WhisperKit 是 Argmax 开源的 Apple 端侧语音识别框架，把 Whisper 模型推理与词级时间戳能力带进 Swift / Core ML 生态。相关研究工作入选 ICML 2025，GitHub 获得 6.3k+ stars，是 Apple 端侧语音工程中具有广泛影响力的开源基础设施。",
    impactFacts: ["6.3k+ GitHub stars", "ICML 2025", "Apple On-device ASR"],
    name: "AirTrim → WhisperKit",
    tagline: "从真实产品问题出发，修到上游框架",
    description:
      "开发开源口播剪辑工具 AirTrim 时，中文词级时间戳出现错乱。我沿调用链定位到 BCP-47 标签与 ISO 639-1 白名单之间的协议错配，一天内完成归一化修复和简繁中文回归测试。",
    proof:
      "PR #511 经维护者评审后 3 天合入 argmaxinc/argmax-oss-swift，并进入 v1.1.0 Release。",
    airTrimLink: "https://github.com/freecodetiger/AirTrim",
    prLink: "https://github.com/argmaxinc/argmax-oss-swift/pull/511",
    repoLink: "https://github.com/argmaxinc/argmax-oss-swift",
  },
  photography: {
    intro:
      "镜头是我的另一只眼睛。签约视觉中国，拍街头人文，也拍武大的晨昏四季；偶尔在短视频里讲技术、聊成长，把会写代码这件事讲给镜头外的人听。",
    gallery: [
      { image: "/photograph/renwen-1.jpg", label: "人文摄影", alt: "街头人文摄影作品 1" },
      { image: "/photograph/renwen-2.jpg", label: "人文摄影", alt: "街头人文摄影作品 2" },
      { image: "/photograph/renwen-3.jpg", label: "人文摄影", alt: "街头人文摄影作品 3" },
      { image: "/photograph/renwen-4.jpg", label: "人文摄影", alt: "街头人文摄影作品 4" },
      { image: "/photograph/renwen-5.jpg", label: "人文摄影", alt: "街头人文摄影作品 5" },
      { image: "/photograph/campus-1.jpg", label: "武大校园", alt: "武汉大学校园风光 1" },
      { image: "/photograph/campus-2.jpg", label: "武大校园", alt: "武汉大学校园夜景 2" },
      { image: "/photograph/campus-3.jpg", label: "武大校园", alt: "武汉大学校园风光 3" },
      { image: "/photograph/campus-4.jpg", label: "武大校园", alt: "武汉大学校园风光 4" },
      { image: "/photograph/campus-5.jpg", label: "武大校园", alt: "武汉大学校园风光 5" },
    ],
    highlight: {
      image: "/photograph/lishidren.jpg",
      label: "与李德仁院士合影",
      caption: "做技术的人，敬重的从来是把一件事做到极致的人。",
    },
  },
  education: [
    {
      school: "武汉大学",
      degree: "计算机学院 · 软件工程本科",
      dateRange: "2023.08 - 2027.06",
    },
  ],
};
