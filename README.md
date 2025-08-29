<div align="center">
  <h1>🦋 Kelebek Dashboard</h1>
  <p><em>Modern SaaS Dashboard for Food Delivery Systems</em></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Biome-2.2.2-60A5FA?style=for-the-badge&logo=biome" alt="Biome" />
  </p>
</div>

---

## ✨ Features

- 🎨 **Modern UI Components** - Built with Radix UI primitives
- 📊 **Interactive Charts** - Powered by Recharts for beautiful data visualization
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **Type Safety** - Full TypeScript support
- 🚀 **Performance Optimized** - Next.js 15 with App Router
- 🎯 **Drag & Drop** - Atlassian's Pragmatic Drag and Drop
- 📅 **Date Management** - React Aria date components
- 🌙 **Theme Support** - Dark/Light mode with next-themes

## 🛠️ Tech Stack

| Category | Technology |
 |----------|------------|
 | **Framework** | Next.js 15.4.5 |
 | **Runtime** | React 19.1.1 |
 | **UI Library** | Radix UI (Multiple components) |
 | **Styling** | Tailwind CSS 4.1.11 |
 | **Charts** | Recharts 3.1.2 |
 | **Tables** | TanStack Table 8.21.3 |
 | **Icons** | Remix Icons 4.6.0 |
 | **Date Handling** | React Aria + Internationalized Date |
 | **Drag & Drop** | Atlassian Pragmatic DnD 1.7.4 |
 | **Themes** | next-themes 0.4.6 |
 | **Language** | TypeScript 5.9.2 |
 | **Linting** | Biome 2.2.2 |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kelebek-radix-recharts
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main application routes
│   ├── settings/          # Settings pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── Button.tsx        # Custom button component
│   ├── Card.tsx          # Card component
│   ├── LineChart.tsx     # Chart components
│   └── ...
├── data/                 # Data management
│   ├── data.ts          # Sample data
│   └── schema.ts        # Data schemas
└── lib/                 # Utility functions
    ├── utils.ts         # General utilities
    └── chartUtils.ts    # Chart-specific utilities
```

## 🎨 Available Components

- **Form Elements**: Button, Input, Select, Checkbox, Switch, RadioCard
- **Layout**: Card, Divider, TabNavigation, Table
- **Feedback**: Badge, ProgressBar, ProgressCircle, Tooltip
- **Overlays**: Dialog, Drawer, Popover, Dropdown
- **Data Visualization**: LineChart (Recharts integration)
- **Navigation**: CommandBar, Searchbar
- **Date & Time**: Calendar, DatePicker

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
pnpm check            # Check and fix code issues
pnpm typecheck        # TypeScript type checking

# Dependencies
pnpm update           # Check outdated packages
pnpm update:run       # Update all packages
```

## 📦 Key Dependencies

### Core Framework
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.2** - Type-safe development

### UI & Styling
- **Radix UI Components** - Accessible, unstyled UI primitives
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Tailwind Variants 2.1.0** - Component variant management
- **next-themes 0.4.6** - Theme switching support

### Data Visualization & Interaction
- **Recharts 3.1.2** - Composable charting library
- **TanStack Table 8.21.3** - Headless table building
- **Atlassian Pragmatic DnD 1.7.4** - Drag and drop functionality

### Date & Time
- **React Aria DatePicker 3.15.0** - Accessible date components
- **Internationalized Date 3.8.2** - Date internationalization
- **date-fns 4.1.0** - Date utility library
- **React Day Picker 9.8.1** - Date picker component

### Development Tools
- **Biome 2.2.2** - Fast formatter and linter
- **PostCSS 8.5.6** - CSS transformation tool

## 🎯 Key Features

### Dashboard Overview
- Real-time analytics and metrics
- Interactive charts with Recharts
- Responsive grid layout with Tailwind

### Data Management
- Advanced table functionality with TanStack Table
- Drag & drop interfaces with Pragmatic DnD
- Date picking with React Aria components

### Modern Development
- Type-safe development with TypeScript
- Fast formatting and linting with Biome
- Theme switching with next-themes

## 🔧 Configuration

### Site Configuration
Edit `src/app/siteConfig.ts` to customize:
- Application name and description
- Base URLs and navigation links
- SEO metadata

### Styling
- **Tailwind Config**: `tailwind.config.ts`
- **Global Styles**: `src/app/globals.css`
- **Component Variants**: Using `tailwind-variants`

## 🌟 Performance Features

- **Font Optimization**: Automatic Inter font loading via `next/font`
- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination

## Developer 👨‍💻

Created by [Burak Ünal](https://burakunal28.vercel.app/)

## License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Table Documentation](https://tanstack.com/table/latest)

---

<div align="center">
  <p>Made with ❤️ for modern web development</p>
</div>
