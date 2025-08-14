# Twemoji Store

A Twemoji-based emoji browsing and selection application with skin tone switching and multiple format export support.

## Reference Project Statement

This project draws inspiration from [ShahriarKh/twemoji-cheatsheet](https://github.com/ShahriarKh/twemoji-cheatsheet). Twemoji graphics are licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) <sup>1</sup>.

## Tech Stack

- [Next.js](https://nextjs.org/) 15.4.5
- [React](https://reactjs.org/) 19.1.0
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand) 5.0.7
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Shadcn](https://ui.shadcn.com/)
- [Emojibase](https://emojibase.dev/)

## Features

- Browse the complete Twemoji emoji library
- Support for 6 different skin tones
- Copy emoji characters
- Export in SVG and PNG formats
- Responsive design for different devices
- Dark/light theme switching

## Quick Start

### Requirements

- Node.js 18.17 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit http://localhost:3000 to view the application.

### Build

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Run Production Version

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

```
twemoji-store/
├── app/                 # Application pages
│   ├── page.tsx         # Home page
│   └── layout.tsx       # Layout component
├── components/          # Components
│   ├── base/            # Base components
│   ├── ui/              # UI components
│   └── layout/          # Layout components
├── store/               # State management
│   └── modules/         # Module states
├── utils/               # Utility functions
└── public/              # Static assets
```

## Acknowledgements

- [Twemoji](https://github.com/twitter/twemoji) - Twitter's open source emoji library
- [Emojibase](https://emojibase.dev/) - Modern emoji database
- [ShahriarKh/twemoji-cheatsheet](https://github.com/ShahriarKh/twemoji-cheatsheet) - Reference project

---

<sup>1</sup> Twemoji graphics are licensed under CC-BY 4.0, see [Twemoji LICENSE-GRAPHICS](https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS) for details.
