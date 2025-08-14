# Twemoji Store

一个基于 Twemoji 的表情符号浏览和选择应用，支持皮肤色调切换和多种格式导出。

## 参考项目声明

本项目部分功能和页面样式参考了 [ShahriarKh/twemoji-cheatsheet](https://github.com/ShahriarKh/twemoji-cheatsheet) 项目。Twemoji 图形资源采用 [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可证 <sup>1</sup>。

## 技术栈

- [Next.js](https://nextjs.org/) 15.4.5
- [React](https://reactjs.org/) 19.1.0
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand) 5.0.7
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Radix UI](https://www.radix-ui.com/)
- [Emojibase](https://emojibase.dev/)

## 功能特性

- 浏览完整的 Twemoji 表情符号库
- 支持 6 种不同的皮肤色调选择
- 支持复制表情符号字符
- 支持导出 SVG 和 PNG 格式
- 响应式设计，适配不同设备
- 深色/浅色主题切换

## 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

### 安装

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

### 开发

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

访问 http://localhost:3000 查看应用。

### 构建

```bash
npm run build
# 或
yarn build
# 或
pnpm build
# 或
bun build
```

### 运行生产版本

```bash
npm run start
# 或
yarn start
# 或
pnpm start
# 或
bun start
```

## 项目结构

```
twemoji-store/
├── app/                 # 应用页面
│   ├── page.tsx         # 主页
│   └── layout.tsx       # 布局组件
├── components/          # 组件
│   ├── base/            # 基础组件
│   ├── ui/              # UI 组件
│   └── layout/          # 布局组件
├── store/               # 状态管理
│   └── modules/         # 模块状态
├── utils/               # 工具函数
└── public/              # 静态资源
```

## 鸣谢

- [Twemoji](https://github.com/twitter/twemoji) - Twitter 开源的表情符号库
- [Emojibase](https://emojibase.dev/) - 现代 emoji 数据库
- [ShahriarKh/twemoji-cheatsheet](https://github.com/ShahriarKh/twemoji-cheatsheet) - 参考项目

---

<sup>1</sup> Twemoji 图形资源使用 CC-BY 4.0 许可证，详情请参考 [Twemoji LICENSE-GRAPHICS](https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS)。
