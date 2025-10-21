'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Students', value: '10,000+' },
  { label: 'Vulnerable Labs', value: '50+' },
  { label: 'Learning Hours', value: '100,000+' },
  { label: 'Success Rate', value: '95%' },
];

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by cybersecurity professionals worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of learners who have advanced their cybersecurity careers with CyberLearn
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}