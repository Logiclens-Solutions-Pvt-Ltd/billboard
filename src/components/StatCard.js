import React from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';

const StatCard = ({ title, value, icon, change, changeType, changeText, footer }) => {
  const isPositive = changeType === 'positive';
  const changeColorClass = isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
  const IconComponent = isPositive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-primary">
          {icon}
        </div>
      </div>
      
      {(change || changeText) && (
        <div className="flex items-center mt-4">
          {change && (
            <>
              <IconComponent className={`w-4 h-4 ${changeColorClass} mr-1`} />
              <span className={`text-sm ${changeColorClass} font-medium`}>{change}</span>
            </>
          )}
          {changeText && (
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              {changeText}
            </span>
          )}
        </div>
      )}
      
      {footer && (
        <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">{footer}</p>
        </div>
      )} 
    </div>
  );
};

export default StatCard; 