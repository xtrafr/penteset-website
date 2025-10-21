'use client';

import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { STORAGE_KEYS } from '@/types';
import type {
  User,
  UserProgress,
  Assessment,
  UserAchievement,
  LabSession,
} from '@/types';

// Cookie options
const COOKIE_OPTIONS = {
  expires: 365, // 1 year
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
};

// Generic storage utilities
export class LocalStorage {
  static get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return null;
    }
  }

  static set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  }

  static remove(key: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }

  static clear(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}

// Cookie utilities
export class CookieStorage {
  static get(key: string): string | undefined {
    return Cookies.get(key);
  }

  static set(key: string, value: string): void {
    Cookies.set(key, value, COOKIE_OPTIONS);
  }

  static remove(key: string): void {
    Cookies.remove(key);
  }
}

// User management
export class UserStorage {
  static getCurrentUser(): User | null {
    return LocalStorage.get<User>(STORAGE_KEYS.USER);
  }

  static setCurrentUser(user: User): void {
    LocalStorage.set(STORAGE_KEYS.USER, user);
    CookieStorage.set('user_id', user.id);
  }

  static logout(): void {
    LocalStorage.remove(STORAGE_KEYS.USER);
    CookieStorage.remove('user_id');
  }

  static createUser(userData: Omit<User, 'id' | 'createdAt' | 'isActive'>): User {
    const user: User = {
      id: uuidv4(),
      ...userData,
      isActive: true,
      createdAt: new Date().toISOString(),
    };
    
    this.setCurrentUser(user);
    return user;
  }

  static updateUser(updates: Partial<User>): User | null {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return null;

    const updatedUser = { ...currentUser, ...updates };
    this.setCurrentUser(updatedUser);
    return updatedUser;
  }
}

// Progress tracking
export class ProgressStorage {
  static getAllProgress(): UserProgress[] {
    return LocalStorage.get<UserProgress[]>(STORAGE_KEYS.PROGRESS) || [];
  }

  static getUserProgress(userId: string): UserProgress[] {
    const allProgress = this.getAllProgress();
    return allProgress.filter(p => p.userId === userId);
  }

  static getLessonProgress(userId: string, lessonId: string): UserProgress | null {
    const userProgress = this.getUserProgress(userId);
    return userProgress.find(p => p.lessonId === lessonId) || null;
  }

  static updateProgress(progress: Omit<UserProgress, 'id' | 'createdAt' | 'updatedAt'>): UserProgress {
    const allProgress = this.getAllProgress();
    const existingIndex = allProgress.findIndex(
      p => p.userId === progress.userId && p.lessonId === progress.lessonId
    );

    const now = new Date().toISOString();
    const progressRecord: UserProgress = {
      ...progress,
      createdAt: existingIndex >= 0 ? allProgress[existingIndex].createdAt : now,
      updatedAt: now,
    };

    if (existingIndex >= 0) {
      allProgress[existingIndex] = progressRecord;
    } else {
      allProgress.push(progressRecord);
    }

    LocalStorage.set(STORAGE_KEYS.PROGRESS, allProgress);
    return progressRecord;
  }

  static getPathProgress(userId: string, pathId: string): {
    completed: number;
    total: number;
    percentage: number;
  } {
    const userProgress = this.getUserProgress(userId);
    const pathProgress = userProgress.filter(p => p.pathId === pathId);
    const completed = pathProgress.filter(p => p.completedAt).length;
    const total = pathProgress.length;
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }
}

// Assessment storage
export class AssessmentStorage {
  static getAllAssessments(): Assessment[] {
    return LocalStorage.get<Assessment[]>(STORAGE_KEYS.ASSESSMENTS) || [];
  }

  static getUserAssessments(userId: string): Assessment[] {
    const allAssessments = this.getAllAssessments();
    return allAssessments.filter(a => a.userId === userId);
  }

  static saveAssessment(assessment: Omit<Assessment, 'id' | 'completedAt'>): Assessment {
    const allAssessments = this.getAllAssessments();
    const newAssessment: Assessment = {
      id: uuidv4(),
      ...assessment,
      completedAt: new Date().toISOString(),
    };

    allAssessments.push(newAssessment);
    LocalStorage.set(STORAGE_KEYS.ASSESSMENTS, allAssessments);
    return newAssessment;
  }
}

// Achievement storage
export class AchievementStorage {
  static getUserAchievements(userId: string): UserAchievement[] {
    const allAchievements = LocalStorage.get<UserAchievement[]>(STORAGE_KEYS.ACHIEVEMENTS) || [];
    return allAchievements.filter(a => a.userId === userId);
  }

  static unlockAchievement(userId: string, achievementId: string): UserAchievement {
    const allAchievements = LocalStorage.get<UserAchievement[]>(STORAGE_KEYS.ACHIEVEMENTS) || [];
    
    // Check if already unlocked
    const existing = allAchievements.find(
      a => a.userId === userId && a.achievementId === achievementId
    );
    
    if (existing) return existing;

    const newAchievement: UserAchievement = {
      id: uuidv4(),
      userId,
      achievementId,
      unlockedAt: new Date().toISOString(),
    };

    allAchievements.push(newAchievement);
    LocalStorage.set(STORAGE_KEYS.ACHIEVEMENTS, allAchievements);
    return newAchievement;
  }
}

// Lab session storage
export class LabSessionStorage {
  static getAllSessions(): LabSession[] {
    return LocalStorage.get<LabSession[]>(STORAGE_KEYS.LAB_SESSIONS) || [];
  }

  static getUserSessions(userId: string): LabSession[] {
    const allSessions = this.getAllSessions();
    return allSessions.filter(s => s.userId === userId);
  }

  static createSession(session: Omit<LabSession, 'id' | 'createdAt'>): LabSession {
    const allSessions = this.getAllSessions();
    const newSession: LabSession = {
      id: uuidv4(),
      ...session,
      createdAt: new Date().toISOString(),
    };

    allSessions.push(newSession);
    LocalStorage.set(STORAGE_KEYS.LAB_SESSIONS, allSessions);
    return newSession;
  }

  static updateSession(sessionId: string, updates: Partial<LabSession>): LabSession | null {
    const allSessions = this.getAllSessions();
    const sessionIndex = allSessions.findIndex(s => s.id === sessionId);
    
    if (sessionIndex === -1) return null;

    allSessions[sessionIndex] = { ...allSessions[sessionIndex], ...updates };
    LocalStorage.set(STORAGE_KEYS.LAB_SESSIONS, allSessions);
    return allSessions[sessionIndex];
  }
}

// Settings storage
export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  language: 'EN' | 'ES' | 'EU';
  notifications: boolean;
  autoSave: boolean;
}

export class SettingsStorage {
  static getSettings(): UserSettings {
    return LocalStorage.get<UserSettings>(STORAGE_KEYS.SETTINGS) || {
      theme: 'system',
      language: 'EN',
      notifications: true,
      autoSave: true,
    };
  }

  static updateSettings(updates: Partial<UserSettings>): UserSettings {
    const currentSettings = this.getSettings();
    const newSettings = { ...currentSettings, ...updates };
    LocalStorage.set(STORAGE_KEYS.SETTINGS, newSettings);
    return newSettings;
  }
}