'use client';

import { useState, useEffect } from 'react';
import { ProgressStorage } from '@/lib/storage';
import type { UserProgress } from '@/types';

export function useProgress(userId?: string) {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const userProgress = ProgressStorage.getUserProgress(userId);
      setProgress(userProgress);
    }
    setIsLoading(false);
  }, [userId]);

  const updateLessonProgress = (
    lessonId: string,
    pathId: string,
    data: {
      score?: number;
      timeSpent: number;
      completed?: boolean;
    }
  ) => {
    if (!userId) return null;

    const existingProgress = ProgressStorage.getLessonProgress(userId, lessonId);
    const attempts = existingProgress ? existingProgress.attempts + 1 : 1;

    const progressData = {
      userId,
      lessonId,
      pathId,
      score: data.score,
      timeSpent: (existingProgress?.timeSpent || 0) + data.timeSpent,
      attempts,
      completedAt: data.completed ? new Date().toISOString() : existingProgress?.completedAt,
    };

    const updatedProgress = ProgressStorage.updateProgress(progressData);
    
    // Update local state
    setProgress(prev => {
      const filtered = prev.filter(p => p.lessonId !== lessonId);
      return [...filtered, updatedProgress];
    });

    return updatedProgress;
  };

  const getLessonProgress = (lessonId: string) => {
    return progress.find(p => p.lessonId === lessonId) || null;
  };

  const getPathProgress = (pathId: string) => {
    if (!userId) return { completed: 0, total: 0, percentage: 0 };
    return ProgressStorage.getPathProgress(userId, pathId);
  };

  const isLessonCompleted = (lessonId: string) => {
    const lessonProgress = getLessonProgress(lessonId);
    return !!lessonProgress?.completedAt;
  };

  const getTotalTimeSpent = () => {
    return progress.reduce((total, p) => total + p.timeSpent, 0);
  };

  const getCompletedLessonsCount = () => {
    return progress.filter(p => p.completedAt).length;
  };

  return {
    progress,
    isLoading,
    updateLessonProgress,
    getLessonProgress,
    getPathProgress,
    isLessonCompleted,
    getTotalTimeSpent,
    getCompletedLessonsCount,
  };
}