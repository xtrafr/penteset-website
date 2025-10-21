# 🚀 Deployment Guide - CyberLearn Platform

## Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xtrafr/penteset-website)

### Option 2: Manual Deployment

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/xtrafr/penteset-website.git
   cd penteset-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Test Locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 to verify everything works.

4. **Deploy to Vercel**
   
   **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```
   
   **Via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `xtrafr/penteset-website`
   - Click "Deploy"

## 🌐 Alternative Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### GitHub Pages (Static Export)
1. Add to `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out` folder to GitHub Pages

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ⚙️ Environment Variables

The platform works without any environment variables, but you can optionally set:

```env
# Optional: Custom app URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Optional: AI features (future)
OPENAI_API_KEY=your-openai-key

# Optional: Lab deployment (future)
DOCKER_API_URL=your-docker-api
```

## 🔧 Configuration

### Custom Domain (Vercel)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Performance Optimization
The platform is already optimized with:
- ✅ Next.js 14 App Router
- ✅ Static generation where possible
- ✅ Optimized images and fonts
- ✅ Tree shaking and code splitting
- ✅ Local storage for data (no database needed)

## 📊 Monitoring

### Vercel Analytics (Recommended)
1. Go to your Vercel project
2. Enable "Analytics" in settings
3. Monitor performance and usage

### Google Analytics (Optional)
Add to `src/app/layout.tsx`:
```tsx
import Script from 'next/script'

// Add in the <head> section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🚨 Troubleshooting

### Build Errors
- Ensure Node.js version is 18+
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run type-check`

### Deployment Issues
- Verify all files are committed to git
- Check build logs in Vercel dashboard
- Ensure no environment variables are required

### Performance Issues
- Enable Vercel Edge Functions if needed
- Use Vercel Image Optimization
- Monitor Core Web Vitals in Vercel Analytics

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Dark/light mode works
- [ ] Language switching works
- [ ] Local storage persists data
- [ ] Mobile responsive design
- [ ] All navigation links work
- [ ] Performance score 90+ on Lighthouse

## 🔄 Updates and Maintenance

### Updating Content
1. Edit files in `src/lib/data.ts`
2. Commit and push changes
3. Vercel auto-deploys from main branch

### Adding New Features
1. Create feature branch
2. Develop and test locally
3. Create pull request
4. Merge to main for auto-deployment

## 📞 Support

- **Repository**: https://github.com/xtrafr/penteset-website
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub Discussions for questions

---

🎉 **Your CyberLearn platform is now live and ready for students!**