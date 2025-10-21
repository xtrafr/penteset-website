'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  BookOpen, 
  Trophy, 
  Zap, 
  Lock,
  Users,
  BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Interactive Labs',
    description: 'Practice on real vulnerable web applications with guided tutorials and hints.',
  },
  {
    icon: Globe,
    title: 'Bilingual Support',
    description: 'Complete platform available in English, Spanish, and Euskera languages.',
  },
  {
    icon: BookOpen,
    title: 'Structured Learning',
    description: 'Progressive curriculum from basic concepts to advanced penetration testing.',
  },
  {
    icon: Trophy,
    title: 'Certifications',
    description: 'Industry-aligned certifications and skill assessments for career advancement.',
  },
  {
    icon: Zap,
    title: 'Real-time Feedback',
    description: 'Instant feedback on exercises with detailed explanations and next steps.',
  },
  {
    icon: Lock,
    title: 'Secure Environment',
    description: 'Isolated lab environments ensuring safe learning without security risks.',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Connect with peers, share knowledge, and learn from cybersecurity experts.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Detailed analytics and progress reports to monitor your learning journey.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to master cybersecurity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tools and resources designed for effective cybersecurity education
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}