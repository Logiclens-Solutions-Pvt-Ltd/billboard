import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md text-gray-900 dark:text-white">
        <p className="font-medium text-sm">{label}</p>
        {payload.map((entry, index) => (
          <div key={`tooltip-${index}`} className="flex items-center mt-1">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm">
              {entry.name}: <span className="font-medium">{entry.value.toLocaleString()}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const BarChart = ({
  data,
  keys = [],
  colors = ['#3B82F6', '#10B981', '#8B5CF6'],
  xAxisDataKey = 'name',
  stacked = false,
  showGrid = true,
  height = 300,
  legend = true,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={20}
          barGap={stacked ? 0 : 8}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
          <XAxis 
            dataKey={xAxisDataKey} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip content={<CustomTooltip />} />
          {legend && <Legend wrapperStyle={{ paddingTop: 20 }} />}
          
          {keys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId={stacked ? 'stack' : null}
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart; 