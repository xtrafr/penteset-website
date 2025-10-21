# CyberLearn - Advanced Cybersecurity Learning Platform

A modern, full-stack cybersecurity education platform built with Next.js 14, featuring hands-on penetration testing labs, interactive lessons, and multilingual support (English, Spanish, Euskera).

## ✨ Features

- 🎯 **Progressive Learning Paths**: Structured curriculum from beginner to professional level
- 🌐 **Multilingual Support**: Complete platform in English, Spanish, and Euskera
- 🔬 **Interactive Labs**: Hands-on vulnerable applications for practical learning
- 📊 **Advanced Analytics**: Comprehensive progress tracking and performance insights
- 🛡️ **Real-world Scenarios**: Industry-standard penetration testing environments
- 🏆 **Certifications**: Professional skill assessments and career advancement paths
- 🌙 **Dark/Light Mode**: Modern UI with theme switching
- ⚡ **Blazing Fast**: Optimized for performance with Next.js 14 and Vercel

## 🚀 Tech Stack

### Frontend & Backend
- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **Prisma** ORM with PostgreSQL

### Vercel Ecosystem
- **Vercel Postgres** for database
- **Vercel KV** for caching and sessions
- **NextAuth.js** for authentication
- **Vercel Functions** for serverless API

### UI/UX
- **Radix UI** components for accessibility
- **Lucide React** icons
- **Sonner** for notifications
- **React Query** for data fetching

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- Git

### Local Development

1. **Clone and install**:
```bash
git clone <repository-url>
cd cybersecurity-learning-platform
npm install
```

2. **Set up environment**:
```bash
cp .env.example .env.local
# Add your environment variables
```

3. **Set up database**:
```bash
npm run db:generate
npm run db:push
```

4. **Start development server**:
```bash
npm run dev
```

5. **Open**: http://localhost:3000

### Deploy to Vercel

1. **One-click deploy**:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/cybersecurity-learning-platform)

2. **Manual deployment**:
```bash
npm install -g vercel
vercel
```

3. **Set up databases**:
   - Add Vercel Postgres database
   - Add Vercel KV store
   - Configure environment variables

## 📁 Project Structure

```
cybersecurity-learning-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── courses/        # Course pages
│   │   └── labs/           # Lab pages
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── lib/               # Utilities and configurations
│   └── types/             # TypeScript type definitions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run test         # Run tests
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

### Environment Variables

Create a `.env.local` file with:

```env
# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (Vercel Postgres)
POSTGRES_URL=your-postgres-url
POSTGRES_PRISMA_URL=your-postgres-prisma-url
POSTGRES_URL_NON_POOLING=your-postgres-non-pooling-url

# Cache (Vercel KV)
KV_URL=your-kv-url
KV_REST_API_URL=your-kv-rest-api-url
KV_REST_API_TOKEN=your-kv-rest-api-token
```

## 🎨 Design System

The platform uses a modern, accessible design system built with:

- **CSS Variables** for theming
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible components
- **Custom animations** with Framer Motion
- **Responsive design** for all devices

## 🔒 Security Features

- **Authentication** with NextAuth.js
- **Authorization** with role-based access control
- **Input validation** with Zod schemas
- **SQL injection protection** with Prisma
- **XSS protection** with Content Security Policy
- **Rate limiting** for API endpoints

## 🌍 Internationalization

Full support for:
- **English** (en)
- **Spanish** (es)
- **Euskera** (eu)

All content, UI elements, and error messages are localized.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Bundle Size**: Minimized with tree shaking
- **Image Optimization**: Next.js Image component
- **Caching**: Vercel KV for fast data access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com/)
- UI components from [Radix UI](https://radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)