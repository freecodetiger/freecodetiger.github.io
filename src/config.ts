export const siteConfig = {
  name: "张鹏程",
  title: "Software Engineer",
  description: "张鹏程 · 软件工程师的个人网站",
  accentColor: "#1d4ed8",
  social: {
    email: "2388387947@qq.com",
    github: "https://github.com/freecodetiger",
  },
  aboutMe:
    "软件工程师，武汉大学软件工程在读，目前在影石 Insta360 剪辑 SDK 组做移动端工程。比起满足于用 API，我更想搞清楚 API 之下发生了什么——从界面、框架、运行时一路摸到系统层；也相信技术复杂度应该消失在体验里。写过 macOS 终端、语音剪辑、本地优先的 AI 助手，也给 WhisperKit 修过中文时间戳的 bug。",
  skills: ["C++", "Swift", "Kotlin", "Rust", "TypeScript", "Metal", "FFmpeg", "AppKit", "macOS", "Android"],
  proGhostty: {
    name: "ProGhostty",
    tagline: "面向 AI CLI 开发者的现代 macOS 终端",
    summary:
      "我天天泡在终端里写代码、跑 AI CLI，却总觉得它困在一个二十年前的壳里：输出一多就跳，历史回不到想看的位置，滚动起来完全不像一块现代软件。对比了 cmux、Ghostty、MacTerm 之后，干脆自己动手，做一款保留实时交互、又能像素级回滚历史的 macOS 终端。",
    bullets: [
      "一开始自己啃 ANSI，发现要永远追着终端语义补课。后来直接把 Ghostty 的 libghostty-vt 拿来当唯一语义来源，Swift 只负责把交互、渲染、滚动和窗口工作区这层搭起来——真实 PTY 交互一点不少。",
      "渲染试过 NSTextView、试过 HTML，都打不到“顺滑滚动”那条线。最后设计成“整行直接切历史、不足一行用 GPU 像素平移”的 Metal 模型，再配屏外 overscan 和裁剪，滚动到边缘也不会丢行。",
      "AI CLI 一直往外吐输出，阅读位置却老被拉跑。我把滚动拆成纯值引擎、绝对行解析、历史窗口三层，坐标跟着 scrollback 走：新内容继续追加，你读的位置纹丝不动，核心逻辑还能单独跑单测。",
      "状态所有权靠不可变快照、协议边界和单向依赖（App → Core → PTY → VT → Renderer）钉死，架构守卫直接接进 CI。11 周发了 35 个版本，滚动、VT 桥接、分屏、输入状态一路迭代下来。",
    ],
    skills: ["C++", "Swift", "AppKit", "Metal", "Ghostty"],
    link: "https://github.com/freecodetiger/ProGhostty",
    site: "https://ghostty.praw.top",
  },
  projects: [
    {
      name: "AirTrim",
      description: "用声音剪视频——想剪哪里，说出来就行。把传统剪辑一长串手动步骤，收敛成一句句指令。",
      bullets: [
        "给口播视频做剪辑，想把“选段、截断、拼接、导出”这一套流程压成一句话的事。",
        "顺着语音识别重构剪辑路径，路上顺手在 WhisperKit 里挖出个中文时间戳的 bug，修完还合进了上游（见开源经历）。",
      ],
      link: "https://github.com/freecodetiger/AirTrim",
      skills: ["Swift", "iOS", "Media", "AI"],
    },
    {
      name: "OpenRec",
      description: "嫌现成录屏工具不顺手，就自己写了个原生 macOS 录屏应用。贴近系统，把捕获和录制管线捏在自己手里。",
      link: "https://github.com/freecodetiger/OpenRec",
      skills: ["Swift", "macOS", "Media"],
    },
    {
      name: "DDL Agent",
      description: "每天被截止日期追着跑，索性让 AI 替自己管日程。本地优先的 Android 助手，数据留在手机里，不靠云端聊天 demo 糊弄人。",
      link: "https://github.com/freecodetiger/fucktheddl",
      skills: ["Kotlin", "Android", "AI", "SQLite"],
    },
  ],
  experience: [
    {
      company: "影石创新 Insta360 · 剪辑 SDK 组",
      title: "移动端开发实习",
      dateRange: "2026.06 - 至今",
      bullets: [
        "主导新多轨剪辑 KMP + CMP 跨端重构，业务与 UI 收敛到 commonMain，双端真机通过并合入",
        "重构播放器 Seek 链路：快速/精确分类解码、丢弃过期请求，拖动延迟约 400ms → 20ms，消除 Pop 音",
        "为 iOS 端 LLM Agent 交付剪辑工具，建立“必定回调且仅回调一次”的异步硬契约，工具清单与实现不再漂移",
      ],
    },
  ],
  openSource: {
    name: "WhisperKit",
    tagline: "Apple 端侧语音识别框架 · ICML 2025 · GitHub 6.3k+ stars",
    description: "做 AirTrim 时撞见一个中文时间戳错乱的问题，顺着源码往下挖，从定位到修复用了一天，PR 三天被维护者合入。",
    bullets: [
      "AirTrim 里中文词级时间戳对不上，钻进去查：NLLanguageRecognizer 吐的是 BCP-47 语言标签，分词却按 ISO 639-1 白名单判断，中文就这么被扔进了错的分支。",
      "先把 Locale 语言码归一化，再补上简繁中文的回归测试；PR #511 三天合入，人也进了 v1.1.0 的贡献者名单。",
    ],
    prLink: "https://github.com/argmaxinc/argmax-oss-swift/pull/511",
    repoLink: "https://github.com/argmaxinc/argmax-oss-swift",
  },
  photography: {
    intro:
      "镜头是我的另一只眼睛。签约视觉中国，拍街头人文，也拍武大的晨昏四季。偶尔也在短视频里讲讲技术、聊聊成长——把会写代码这件事，也讲给镜头外的人听。",
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
      caption: "在一次活动上与李德仁院士同框——做技术的人，敬重的从来是把事做到极致的人。",
    },
  },
  education: [
    {
      school: "武汉大学",
      degree: "计算机学院",
      dateRange: "2023.08 - 2027.06",
    },
  ],
};
