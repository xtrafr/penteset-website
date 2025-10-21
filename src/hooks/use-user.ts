'use client';

import { useState, useEffect } from 'react';
import { UserStorage } from '@/lib/storage';
import { User, UserRole, Language } from '@/types';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = UserStorage.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = (email: string, firstName: string, lastName: string) => {
    const newUser = UserStorage.createUser({
      email,
      firstName,
      lastName,
      role: UserRole.STUDENT,
      preferredLanguage: Language.EN,
    });
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    UserStorage.logout();
    setUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    const updatedUser = UserStorage.updateUser(updates);
    setUser(updatedUser);
    return updatedUser;
  };

  const updateLastLogin = () => {
    if (user) {
      const updatedUser = updateUser({ lastLoginAt: new Date().toISOString() });
      return updatedUser;
    }
    return null;
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser,
    updateLastLogin,
  };
}