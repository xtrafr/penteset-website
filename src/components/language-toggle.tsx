'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSettings } from '@/hooks/use-settings';

export function LanguageToggle() {
  const { settings, updateLanguage } = useSettings();

  const toggleLanguage = () => {
    const currentLang = settings.language;
    const nextLang = currentLang === 'EN' ? 'ES' : currentLang === 'ES' ? 'EU' : 'EN';
    updateLanguage(nextLang);
  };

  const getLanguageLabel = () => {
    return settings.language;
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
    >
      <Languages className="h-4 w-4" />
      <span className="absolute -bottom-1 -right-1 text-xs font-bold">
        {getLanguageLabel()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}