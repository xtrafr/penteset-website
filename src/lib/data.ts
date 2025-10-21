import { v4 as uuidv4 } from 'uuid';
import type {
  LearningPath,
  PathTranslation,
  Lesson,
  LessonTranslation,
  VulnerableLab,
  LabTranslation,
  Achievement,
  AchievementTranslation,
} from '@/types';
import {
  Difficulty,
  Language,
  AchievementType,
} from '@/types';

// Sample Learning Paths
export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-beginner-web-security',
    slug: 'beginner-web-security',
    difficulty: Difficulty.BEGINNER,
    estimatedHours: 20,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    lessons: ['lesson-intro-cybersec', 'lesson-web-basics', 'lesson-first-vuln'],
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'Web Security Fundamentals',
        description: 'Learn the basics of web application security and common vulnerabilities.',
        pathId: 'path-beginner-web-security',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Fundamentos de Seguridad Web',
        description: 'Aprende los conceptos básicos de seguridad en aplicaciones web y vulnerabilidades comunes.',
        pathId: 'path-beginner-web-security',
      },
      {
        id: uuidv4(),
        language: Language.EU,
        name: 'Web Segurtasunaren Oinarriak',
        description: 'Ikasi web aplikazioen segurtasunaren oinarriak eta ohiko ahultasunak.',
        pathId: 'path-beginner-web-security',
      },
    ],
  },
  {
    id: 'path-intermediate-pentesting',
    slug: 'intermediate-pentesting',
    difficulty: Difficulty.INTERMEDIATE,
    estimatedHours: 40,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    lessons: ['lesson-sql-injection', 'lesson-xss-attacks', 'lesson-csrf-protection'],
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'Penetration Testing Essentials',
        description: 'Master intermediate penetration testing techniques and methodologies.',
        pathId: 'path-intermediate-pentesting',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Fundamentos de Pentesting',
        description: 'Domina las técnicas y metodologías intermedias de pentesting.',
        pathId: 'path-intermediate-pentesting',
      },
      {
        id: uuidv4(),
        language: Language.EU,
        name: 'Pentesting Oinarriak',
        description: 'Menderatu pentesting teknika eta metodologia ertainak.',
        pathId: 'path-intermediate-pentesting',
      },
    ],
  },
  {
    id: 'path-advanced-exploitation',
    slug: 'advanced-exploitation',
    difficulty: Difficulty.ADVANCED,
    estimatedHours: 60,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    lessons: ['lesson-buffer-overflow', 'lesson-privilege-escalation', 'lesson-advanced-persistence'],
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'Advanced Exploitation Techniques',
        description: 'Learn advanced exploitation methods and post-exploitation techniques.',
        pathId: 'path-advanced-exploitation',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Técnicas Avanzadas de Explotación',
        description: 'Aprende métodos avanzados de explotación y técnicas post-explotación.',
        pathId: 'path-advanced-exploitation',
      },
      {
        id: uuidv4(),
        language: Language.EU,
        name: 'Ustiapen Teknika Aurreratuak',
        description: 'Ikasi ustiapen metodo aurreratuak eta post-ustiapen teknikak.',
        pathId: 'path-advanced-exploitation',
      },
    ],
  },
];

// Sample Lessons
export const LESSONS: Lesson[] = [
  {
    id: 'lesson-intro-cybersec',
    slug: 'introduction-to-cybersecurity',
    pathId: 'path-beginner-web-security',
    order: 1,
    difficulty: Difficulty.BEGINNER,
    estimatedDuration: 45,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        title: 'Introduction to Cybersecurity',
        description: 'Learn the fundamental concepts of cybersecurity and why it matters.',
        content: {
          type: 'theory',
          sections: [
            {
              id: uuidv4(),
              type: 'text',
              title: 'What is Cybersecurity?',
              content: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks...',
            },
            {
              id: uuidv4(),
              type: 'video',
              title: 'Cybersecurity Overview',
              content: 'https://example.com/video/cybersec-intro',
            },
          ],
        },
        lessonId: 'lesson-intro-cybersec',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        title: 'Introducción a la Ciberseguridad',
        description: 'Aprende los conceptos fundamentales de la ciberseguridad y por qué es importante.',
        content: {
          type: 'theory',
          sections: [
            {
              id: uuidv4(),
              type: 'text',
              title: '¿Qué es la Ciberseguridad?',
              content: 'La ciberseguridad es la práctica de proteger sistemas, redes y programas de ataques digitales...',
            },
          ],
        },
        lessonId: 'lesson-intro-cybersec',
      },
      {
        id: uuidv4(),
        language: Language.EU,
        title: 'Zibersegurtasunaren Sarrera',
        description: 'Ikasi zibersegurtasunaren oinarrizko kontzeptuak eta zergatik den garrantzitsua.',
        content: {
          type: 'theory',
          sections: [
            {
              id: uuidv4(),
              type: 'text',
              title: 'Zer da Zibersegurtasuna?',
              content: 'Zibersegurtasuna sistemak, sareak eta programak eraso digitaletatik babesteko praktika da...',
            },
          ],
        },
        lessonId: 'lesson-intro-cybersec',
      },
    ],
  },
  {
    id: 'lesson-sql-injection',
    slug: 'sql-injection-attacks',
    pathId: 'path-intermediate-pentesting',
    order: 1,
    difficulty: Difficulty.INTERMEDIATE,
    estimatedDuration: 90,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        title: 'SQL Injection Attacks',
        description: 'Master SQL injection techniques and learn how to identify and exploit SQL vulnerabilities.',
        content: {
          type: 'practical',
          sections: [
            {
              id: uuidv4(),
              type: 'text',
              title: 'Understanding SQL Injection',
              content: 'SQL injection is a code injection technique that exploits vulnerabilities in database queries...',
            },
            {
              id: uuidv4(),
              type: 'code',
              title: 'Basic SQL Injection Example',
              content: "SELECT * FROM users WHERE username = 'admin' OR '1'='1' --",
            },
          ],
          exercises: [
            {
              id: uuidv4(),
              type: 'practical',
              title: 'Find the SQL Injection',
              description: 'Identify and exploit the SQL injection vulnerability in the login form.',
              instructions: '1. Navigate to the login page\n2. Try different SQL injection payloads\n3. Extract user data',
              hints: ['Try using single quotes', 'Look for error messages', 'Use UNION SELECT'],
            },
          ],
        },
        lessonId: 'lesson-sql-injection',
      },
    ],
  },
];

// Sample Vulnerable Labs
export const VULNERABLE_LABS: VulnerableLab[] = [
  {
    id: 'lab-sql-injection-basic',
    slug: 'sql-injection-basic',
    difficulty: Difficulty.BEGINNER,
    vulnerabilityTypes: ['SQL Injection', 'Authentication Bypass'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    dockerImage: 'cyberlearn/sqli-basic:latest',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'Basic SQL Injection Lab',
        description: 'Practice SQL injection attacks on a vulnerable login form.',
        hints: [
          'Try using single quotes to break the query',
          'Look for SQL error messages',
          'Use OR conditions to bypass authentication',
        ],
        labId: 'lab-sql-injection-basic',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Laboratorio Básico de Inyección SQL',
        description: 'Practica ataques de inyección SQL en un formulario de login vulnerable.',
        hints: [
          'Intenta usar comillas simples para romper la consulta',
          'Busca mensajes de error SQL',
          'Usa condiciones OR para eludir la autenticación',
        ],
        labId: 'lab-sql-injection-basic',
      },
    ],
  },
  {
    id: 'lab-xss-reflected',
    slug: 'xss-reflected',
    difficulty: Difficulty.INTERMEDIATE,
    vulnerabilityTypes: ['Cross-Site Scripting', 'Reflected XSS'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    dockerImage: 'cyberlearn/xss-reflected:latest',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'Reflected XSS Challenge',
        description: 'Exploit reflected XSS vulnerabilities in search functionality.',
        hints: [
          'Check the search parameter in the URL',
          'Try injecting JavaScript code',
          'Look for places where input is reflected',
        ],
        labId: 'lab-xss-reflected',
      },
    ],
  },
];

// Sample Achievements
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'achievement-first-lesson',
    slug: 'first-lesson-completed',
    type: AchievementType.LESSON_COMPLETION,
    criteria: { lessonsCompleted: 1 },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'First Steps',
        description: 'Completed your first cybersecurity lesson!',
        achievementId: 'achievement-first-lesson',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Primeros Pasos',
        description: '¡Completaste tu primera lección de ciberseguridad!',
        achievementId: 'achievement-first-lesson',
      },
      {
        id: uuidv4(),
        language: Language.EU,
        name: 'Lehen Urratsak',
        description: 'Zure lehen zibersegurtasun ikasgaia osatu duzu!',
        achievementId: 'achievement-first-lesson',
      },
    ],
  },
  {
    id: 'achievement-sql-master',
    slug: 'sql-injection-master',
    type: AchievementType.SKILL_MASTERY,
    criteria: { skillType: 'sql-injection', labsCompleted: 5 },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    translations: [
      {
        id: uuidv4(),
        language: Language.EN,
        name: 'SQL Injection Master',
        description: 'Mastered SQL injection techniques by completing 5 labs!',
        achievementId: 'achievement-sql-master',
      },
      {
        id: uuidv4(),
        language: Language.ES,
        name: 'Maestro de Inyección SQL',
        description: '¡Dominaste las técnicas de inyección SQL completando 5 laboratorios!',
        achievementId: 'achievement-sql-master',
      },
    ],
  },
];

// Data access functions
export function getLearningPaths(): LearningPath[] {
  return LEARNING_PATHS;
}

export function getLearningPath(id: string): LearningPath | null {
  return LEARNING_PATHS.find(path => path.id === id) || null;
}

export function getLearningPathBySlug(slug: string): LearningPath | null {
  return LEARNING_PATHS.find(path => path.slug === slug) || null;
}

export function getLessons(): Lesson[] {
  return LESSONS;
}

export function getLesson(id: string): Lesson | null {
  return LESSONS.find(lesson => lesson.id === id) || null;
}

export function getLessonBySlug(slug: string): Lesson | null {
  return LESSONS.find(lesson => lesson.slug === slug) || null;
}

export function getLessonsForPath(pathId: string): Lesson[] {
  return LESSONS.filter(lesson => lesson.pathId === pathId)
    .sort((a, b) => a.order - b.order);
}

export function getVulnerableLabs(): VulnerableLab[] {
  return VULNERABLE_LABS;
}

export function getVulnerableLab(id: string): VulnerableLab | null {
  return VULNERABLE_LABS.find(lab => lab.id === id) || null;
}

export function getVulnerableLabBySlug(slug: string): VulnerableLab | null {
  return VULNERABLE_LABS.find(lab => lab.slug === slug) || null;
}

export function getAchievements(): Achievement[] {
  return ACHIEVEMENTS;
}

export function getAchievement(id: string): Achievement | null {
  return ACHIEVEMENTS.find(achievement => achievement.id === id) || null;
}