import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { QueryProvider } from '@/components/query-provider';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'CyberLearn - Advanced Cybersecurity Education',
    template: '%s | CyberLearn',
  },
  description: 'Master cybersecurity with hands-on penetration testing labs, interactive lessons, and real-world scenarios. Learn from beginner to professional level.',
  keywords: ['cybersecurity', 'penetration testing', 'ethical hacking', 'security education', 'pentesting labs'],
  authors: [{ name: 'CyberLearn Team' }],
  creator: 'CyberLearn',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'CyberLearn - Advanced Cybersecurity Education',
    description: 'Master cybersecurity with hands-on penetration testing labs and interactive lessons.',
    siteName: 'CyberLearn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberLearn - Advanced Cybersecurity Education',
    description: 'Master cybersecurity with hands-on penetration testing labs and interactive lessons.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}