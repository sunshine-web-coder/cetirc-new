"use client"

import { useState, useEffect } from 'react';

const useToggleLanguage = () => {
  const languages = ['en', 'de', 'fr']; // Add more languages as needed
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => {
      const currentIndex = languages.indexOf(prevLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      return languages[nextIndex];
    });
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return { language, toggleLanguage };
};

export default useToggleLanguage;
