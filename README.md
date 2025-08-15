# AI Answer - 智能问答系统

<div align="center">
  <img src="public/ai-icon.svg" alt="AI Answer Logo" width="120" height="120">
  
  <h3>🤖 基于 React + TypeScript + Vite 的现代化 AI 问答系统</h3>
  
  <p>
    <img src="https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat-square&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vite-5.3.4-purple?style=flat-square&logo=vite" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.4-cyan?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  </p>
  
  <p>
    <a href="https://yqq-a.github.io/ai-answer/">📱 在线体验</a> •
    <a href="#功能特性">✨ 功能特性</a> •
    <a href="#快速开始">🚀 快速开始</a> •
    <a href="#技术栈">🛠️ 技术栈</a> •
    <a href="#贡献">🤝 贡献</a>
  </p>
</div>

---

## 📖 项目简介

AI Answer 是一个现代化的智能问答系统，采用最新的前端技术栈构建。它提供了直观的用户界面，支持自然语言交互，并能够在多个领域为用户提供专业、准确的答案。

### 🎯 设计理念

- **🎨 现代化设计** - 采用简洁优雅的 Material Design 风格
- **⚡ 高性能** - 基于 Vite 构建，提供极速的开发和生产体验
- **📱 响应式** - 完美适配桌面、平板和移动设备
- **🔒 类型安全** - 全面的 TypeScript 支持，减少运行时错误
- **♿ 可访问性** - 遵循 WCAG 标准，确保所有用户都能顺畅使用

## ✨ 功能特性

### 🤖 智能对话
- **自然语言处理** - 理解上下文语境，提供准确回答
- **多轮对话** - 支持连续对话，记住对话历史
- **实时响应** - 毫秒级响应，流畅的对话体验

### 🎨 优秀的用户体验
- **响应式设计** - 完美适配各种设备尺寸
- **主题支持** - 明暗主题切换（计划中）
- **快速提示** - 内置常用问题模板
- **Markdown 渲染** - 支持富文本内容展示

### 🔧 强大的功能
- **消息管理** - 复制、点赞、历史记录
- **文件上传** - 支持多种文件格式（计划中）
- **语音输入** - 语音识别功能（计划中）
- **多语言支持** - 国际化支持（计划中）

### 🚀 高级特性
- **代码高亮** - 智能识别和高亮代码块
- **LaTeX 支持** - 数学公式渲染（计划中）
- **导出功能** - 对话记录导出（计划中）
- **API 集成** - 支持多种 AI 模型接入

## 🛠️ 技术栈

### 核心框架
- **[React 18](https://react.dev/)** - 用户界面构建库
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的 JavaScript 超集
- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具

### 样式和 UI
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[Lucide React](https://lucide.dev/)** - 精美的图标库
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown 渲染组件

### 工具链
- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[PostCSS](https://postcss.org/)** - CSS 处理工具
- **[Autoprefixer](https://autoprefixer.github.io/)** - 自动添加 CSS 前缀

## 🚀 快速开始

### 环境要求

确保你的开发环境满足以下要求：

- **Node.js** >= 16.0.0
- **npm** >= 7.0.0 或 **yarn** >= 1.22.0
- **Git** 用于版本控制

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/yqq-a/ai-answer.git
cd ai-answer
```

2. **安装依赖**
```bash
npm install
# 或使用 yarn
yarn install
```

3. **启动开发服务器**
```bash
npm run dev
# 或使用 yarn
yarn dev
```

4. **打开浏览器**

访问 `http://localhost:3000` 查看应用

### 🔧 可用脚本

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 📁 项目结构

```
ai-answer/
├── public/                 # 静态资源
│   ├── ai-icon.svg        # 应用图标
│   └── ...
├── src/                   # 源代码
│   ├── components/        # React 组件
│   │   ├── ChatInterface.tsx
│   │   ├── Header.tsx
│   │   ├── MessageBubble.tsx
│   │   └── ...
│   ├── types/            # TypeScript 类型定义
│   ├── utils/            # 工具函数
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 应用入口
│   └── index.css         # 全局样式
├── .github/              # GitHub 配置
│   └── workflows/        # CI/CD 工作流
├── package.json          # 项目配置
├── vite.config.ts        # Vite 配置
├── tailwind.config.js    # Tailwind 配置
└── tsconfig.json         # TypeScript 配置
```

## 🎯 使用指南

### 基本使用

1. **开始对话** - 在输入框中输入问题，按 Enter 发送
2. **快速提示** - 点击预设的快速提示开始对话
3. **查看历史** - 在侧边栏查看和管理对话历史
4. **复制内容** - 点击消息旁的复制按钮复制 AI 回答

### 高级功能

- **Markdown 支持** - AI 回答支持 Markdown 格式，包括代码块、表格等
- **键盘快捷键** - Enter 发送，Shift+Enter 换行
- **响应式布局** - 自动适配不同屏幕尺寸

## 🔧 配置

### 环境变量

创建 `.env.local` 文件配置环境变量：

```env
VITE_API_BASE_URL=your_api_url
VITE_APP_TITLE=AI Answer
```

### 自定义主题

修改 `tailwind.config.js` 文件自定义主题：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 自定义主色调
        }
      }
    }
  }
}
```

## 🚀 部署

### GitHub Pages（推荐）

项目已配置 GitHub Actions 自动部署：

1. Fork 此仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 推送代码到 main 分支即可自动部署

### 其他平台

- **Vercel**: 一键部署 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yqq-a/ai-answer)
- **Netlify**: 拖拽 `dist` 目录到 Netlify 控制台
- **自建服务器**: 运行 `npm run build` 后部署 `dist` 目录

## 🤝 贡献

我们欢迎所有形式的贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解详情。

### 贡献方式

- 🐛 **报告 Bug** - 提交 Issue 描述问题
- 💡 **功能建议** - 提出新功能想法
- 📝 **改进文档** - 完善项目文档
- 🔧 **代码贡献** - 提交 Pull Request

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://react.dev/) - 强大的 UI 库
- [Vite](https://vitejs.dev/) - 极速的构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [Lucide](https://lucide.dev/) - 精美的图标库

## 📞 联系我们

- **GitHub Issues** - [提交问题](https://github.com/yqq-a/ai-answer/issues)
- **Email** - [qiuchanye7@gmail.com](mailto:qiuchanye7@gmail.com)

---

<div align="center">
  <p>如果这个项目对你有帮助，请给它一个 ⭐</p>
  <p>Made with ❤️ by <a href="https://github.com/yqq-a">yqq-a</a></p>
</div>
