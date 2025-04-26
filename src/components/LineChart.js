import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
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
              {entry.name}: <span className="font-medium">{entry.value}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const LineChart = ({
  data,
  keys = [],
  colors = ['#3B82F6', '#10B981', '#8B5CF6'],
  xAxisDataKey = 'name',
  showGrid = true,
  height = 300,
  legend = true,
  className = '',
  tickFormatter = null,
  yAxisLabel = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
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
            tickFormatter={tickFormatter}
            label={{ 
              value: yAxisLabel, 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fontSize: 12 }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          {legend && <Legend wrapperStyle={{ paddingTop: 20 }} />}
          
          {keys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              activeDot={{ r: 6 }}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart; 