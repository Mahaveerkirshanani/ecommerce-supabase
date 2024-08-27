"use client";

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'EN', name: 'English', flag: '/flags/united-kingdom.png' },
  { code: 'US', name: 'English (US)', flag: '/flags/united-states-of-america.png' },
  { code: 'FR', name: 'French', flag: '/flags/france.png' },
  { code: 'ES', name: 'Spanish', flag: '/flags/spain.png' },
  { code: 'CN', name: 'Chinese', flag: '/flags/china.png' },
  { code: 'IN', name: 'Hindi', flag: '/flags/india.png' },
  { code: 'PK', name: 'Urdu', flag: '/flags/pakistan.png' },
];

const LanguageSelector: React.FC = () => {
  // Set the initial language to the first in the list (English by default)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Add logic to handle the language change (e.g., update context or localStorage)
  };

  return (
    <div className="relative inline-block">
      {/* Selected Language Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border rounded-md shadow-sm bg-black/80 dark:bg-black/80 border-white/70 dark:border-gray-700 hover:bg-black/80 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          width={20}
          height={20}
          className="mr-2"
        />
        <span className="text-sm font-medium">{selectedLanguage.code}</span>
        <IoIosArrowDown className="ml-2" />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-black/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10">
          {languages.map((language) => (
            <li
              key={language.code}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-black/80 dark:hover:bg-gray-700"
              onClick={() => handleLanguageChange(language)}
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium">{language.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
