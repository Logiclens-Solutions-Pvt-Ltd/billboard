import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  TruckIcon, 
  ClockIcon, 
  UsersIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Settings2Icon,
  LineChartIcon,
  ActivityIcon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'Vehicle Detection', path: '/vehicles', icon: <TruckIcon size={20} /> },
    { name: 'View Time Analysis', path: '/view-time', icon: <ClockIcon size={20} /> },
    { name: 'Demographics', path: '/demographics', icon: <UsersIcon size={20} /> },
  ];

  const secondaryNavItems = [
    { name: 'Reports', path: '/reports', icon: <LineChartIcon size={20} /> },
    { name: 'Activity', path: '/activity', icon: <ActivityIcon size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings2Icon size={20} /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col justify-between text-gray-800 dark:text-gray-200`}>
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <LayoutDashboardIcon className="text-primary" size={24} />
              <h1 className="text-lg font-bold">Logiclens</h1>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto">
              <LayoutDashboardIcon className="text-primary" size={24} />
            </div>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {collapsed ? <ChevronRightIcon size={20} /> : <ChevronLeftIcon size={20} />}
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            {!collapsed && <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">Main Menu</p>}
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    } transition-colors duration-200`}
                  >
                    <span className={`${collapsed ? 'mx-auto' : 'mr-3'}`}>{item.icon}</span>
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {!collapsed && <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">Other</p>}
            <ul className="space-y-2">
              {secondaryNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    } transition-colors duration-200`}
                  >
                    <span className={`${collapsed ? 'mx-auto' : 'mr-3'}`}>{item.icon}</span>
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200">
          <span className={`${collapsed ? 'mx-auto' : 'mr-3'}`}>
            <LogOutIcon size={20} />
          </span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 