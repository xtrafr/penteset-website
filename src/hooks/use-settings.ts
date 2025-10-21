'use client';

import { useState, useEffect } from 'react';
import { SettingsStorage, type UserSettings } from '@/lib/storage';

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'system',
    language: 'EN',
    notifications: true,
    autoSave: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentSettings = SettingsStorage.getSettings();
    setSettings(currentSettings);
    setIsLoading(false);
  }, []);

  const updateSettings = (updates: Partial<UserSettings>) => {
    const newSettings = SettingsStorage.updateSettings(updates);
    setSettings(newSettings);
    return newSettings;
  };

  const updateTheme = (theme: 'light' | 'dark' | 'system') => {
    return updateSettings({ theme });
  };

  const updateLanguage = (language: 'EN' | 'ES' | 'EU') => {
    return updateSettings({ language });
  };

  const toggleNotifications = () => {
    return updateSettings({ notifications: !settings.notifications });
  };

  const toggleAutoSave = () => {
    return updateSettings({ autoSave: !settings.autoSave });
  };

  return {
    settings,
    isLoading,
    updateSettings,
    updateTheme,
    updateLanguage,
    toggleNotifications,
    toggleAutoSave,
  };
}