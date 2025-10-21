// User Management Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  preferredLanguage: Language;
  isActive: boolean;
  createdAt: string;
  lastLoginAt?: string;
}

export interface UserProgress {
  userId: string;
  lessonId: string;
  pathId: string;
  completedAt?: string;
  score?: number; // 0-100
  timeSpent: number; // in seconds
  attempts: number;
  createdAt: string;
  updatedAt: string;
}

// Learning Content Types
export interface LearningPath {
  id: string;
  slug: string;
  difficulty: Difficulty;
  estimatedHours: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  translations: PathTranslation[];
  lessons: string[]; // lesson IDs in order
}

export interface PathTranslation {
  id: string;
  language: Language;
  name: string;
  description: string;
  pathId: string;
}

export interface Lesson {
  id: string;
  slug: string;
  pathId: string;
  order: number;
  difficulty: Difficulty;
  estimatedDuration: number; // in minutes
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  translations: LessonTranslation[];
}

export interface LessonTranslation {
  id: string;
  language: Language;
  title: string;
  description: string;
  content: LessonContent;
  lessonId: string;
}

export interface LessonContent {
  type: 'theory' | 'practical' | 'assessment';
  sections: ContentSection[];
  exercises?: Exercise[];
  quiz?: Quiz;
}

export interface ContentSection {
  id: string;
  type: 'text' | 'video' | 'code' | 'image';
  title: string;
  content: string;
  metadata?: Record<string, any>;
}

export interface Exercise {
  id: string;
  type: 'code' | 'multiple-choice' | 'practical';
  title: string;
  description: string;
  instructions: string;
  solution?: string;
  hints: string[];
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number; // in minutes
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

// Vulnerable Labs Types
export interface VulnerableLab {
  id: string;
  slug: string;
  difficulty: Difficulty;
  vulnerabilityTypes: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  translations: LabTranslation[];
  dockerImage?: string; // For future implementation
}

export interface LabTranslation {
  id: string;
  language: Language;
  name: string;
  description: string;
  hints: string[];
  labId: string;
}

export interface LabSession {
  id: string;
  userId: string;
  labId: string;
  status: LabStatus;
  createdAt: string;
  expiresAt: string;
  terminatedAt?: string;
  containerUrl?: string;
}

// Assessment Types
export interface Assessment {
  id: string;
  userId: string;
  lessonId?: string;
  type: AssessmentType;
  score: number;
  maxScore: number;
  passed: boolean;
  completedAt: string;
  answers?: Record<string, any>;
}

// Achievement Types
export interface Achievement {
  id: string;
  slug: string;
  type: AchievementType;
  criteria: Record<string, any>;
  isActive: boolean;
  createdAt: string;
  translations: AchievementTranslation[];
}

export interface AchievementTranslation {
  id: string;
  language: Language;
  name: string;
  description: string;
  achievementId: string;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: string;
}

// Enums
export enum UserRole {
  STUDENT = 'STUDENT',
  EDUCATOR = 'EDUCATOR',
  ADMIN = 'ADMIN',
}

export enum Language {
  EN = 'EN',
  ES = 'ES',
  EU = 'EU',
}

export enum Difficulty {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum LabStatus {
  DEPLOYING = 'DEPLOYING',
  READY = 'READY',
  ERROR = 'ERROR',
  TERMINATED = 'TERMINATED',
}

export enum AssessmentType {
  QUIZ = 'QUIZ',
  PRACTICAL = 'PRACTICAL',
  CERTIFICATION = 'CERTIFICATION',
}

export enum AchievementType {
  LESSON_COMPLETION = 'LESSON_COMPLETION',
  PATH_COMPLETION = 'PATH_COMPLETION',
  STREAK = 'STREAK',
  SKILL_MASTERY = 'SKILL_MASTERY',
  COMMUNITY = 'COMMUNITY',
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'cyberlearn_user',
  PROGRESS: 'cyberlearn_progress',
  ACHIEVEMENTS: 'cyberlearn_achievements',
  SETTINGS: 'cyberlearn_settings',
  LAB_SESSIONS: 'cyberlearn_lab_sessions',
  ASSESSMENTS: 'cyberlearn_assessments',
} as const;