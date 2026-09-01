# freecodetiger.github.io

张鹏程的个人网站，定位为 Agent / AI 应用工程作品集。网站使用 Astro、Tailwind CSS 和少量 GSAP 构建，并通过 GitHub Pages 发布。

## 内容结构

- 首页：个人定位、能力地图、ElsePage 旗舰案例、真实业务中的 Agent 工程实践、其他项目、开源贡献、经历、教育和摄影。
- `/elsepage/`：ElsePage Reading Agent 的产品与工程 Case Study。
- `/resume/`：隐去手机号的公开网页简历，可直接打印或另存 PDF。

## 本地开发

```bash
npm install
npm run dev
```

生产校验：

```bash
npm run check
npm run build
```

## 技术栈

- Astro 5
- Tailwind CSS 4
- TypeScript
- GSAP（摄影画廊交互）

## 发布

推送到 `master` 分支后，`.github/workflows/deploy.yml` 会构建并部署到 GitHub Pages。

线上地址：[freecodetiger.github.io](https://freecodetiger.github.io/)
