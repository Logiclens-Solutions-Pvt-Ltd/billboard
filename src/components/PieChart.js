import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#EC4899', '#6366F1'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md text-gray-900 dark:text-white">
        <div className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: payload[0].payload.fill }}
          />
          <p className="font-medium text-sm">{payload[0].name}</p>
        </div>
        <p className="text-sm mt-1">
          Value: <span className="font-medium">{payload[0].value.toLocaleString()}</span>
        </p>
        {payload[0].payload.percentage && (
          <p className="text-sm">
            Percentage: <span className="font-medium">{payload[0].payload.percentage}%</span>
          </p>
        )}
      </div>
    );
  }

  return null;
};

const PieChart = ({
  data,
  dataKey = 'value',
  nameKey = 'name',
  colors = COLORS,
  height = 300,
  outerRadius = 80,
  innerRadius = 0,
  showLegend = true,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {showLegend && (
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{ paddingTop: 20 }}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart; 