import React from 'react';
import { BellIcon, SunIcon, MoonIcon, SearchIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ title }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-[61px] flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-4">
        {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            className="pl-10 pr-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-primary focus:border-primary text-gray-900 dark:text-white"
            placeholder="Search..."
          />
        </div> */}

        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>

        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
            <BellIcon className="w-5 h-5" />
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
            M
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 