import React from 'react';
import { ClockIcon, EyeIcon, TrendingUpIcon, CalendarIcon, ClipboardListIcon } from 'lucide-react';

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import DataTable from '../components/DataTable';
import { viewTimeData } from '../data/mockData';

const ViewTimePage = () => {
  // Prepare data for pie chart
  const durationData = viewTimeData.viewDurations.map(duration => ({
    name: duration.duration,
    value: duration.count,
    percentage: duration.percentage
  }));

  // Prepare data for time of day chart
  const timeOfDayData = viewTimeData.timeOfDay.map(time => ({
    name: time.hour,
    'Avg Time (sec)': time.averageTime,
    'View Count': time.count
  }));

  // Prepare columns for recent views table
  const recentViewsColumns = [
    { Header: 'ID', accessor: 'id' },
    { 
      Header: 'Time', 
      accessor: 'timestamp',
      Cell: ({ value }) => {
        const date = new Date(value);
        return (
          <span>
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        );
      }
    },
    { 
      Header: 'Date', 
      accessor: 'timestamp',
      Cell: ({ value }) => {
        const date = new Date(value);
        return (
          <span>
            {date.toLocaleDateString()}
          </span>
        );
      }
    },
    { Header: 'Duration', accessor: 'duration',
      Cell: ({ value }) => <span className="font-medium">{value} sec</span>
    },
    { Header: 'Day Part', accessor: 'dayPart' }
  ];

  return (
    <DashboardLayout title="View Time Analytics">
      <div className="mb-6">
        <p className="text-gray-500 dark:text-gray-400">
          Analytics for viewer engagement and time spent looking at billboards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Views"
          value={viewTimeData.totalViews.toLocaleString()}
          icon={<EyeIcon size={20} />}
          changeType="positive"
          change="12.3%"
          changeText="vs. last month"
        />
        <StatCard
          title="Today's Views"
          value={viewTimeData.todayViews.toLocaleString()}
          icon={<CalendarIcon size={20} />}
          changeType="positive"
          change="5.2%"
          changeText="vs. yesterday"
        />
        <StatCard
          title="Avg View Time"
          value={`${viewTimeData.averageViewTimeSeconds} sec`}
          icon={<ClockIcon size={20} />}
          changeType="positive"
          change="0.8 sec"
          changeText="vs. last month"
        />
        <StatCard
          title="Peak Time"
          value="6-9 PM"
          icon={<TrendingUpIcon size={20} />}
          footer="Highest engagement period"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">View Duration Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Breakdown of time viewers spend looking at billboards
            </p>
          </div>
          <PieChart 
            data={durationData} 
            nameKey="name"
            dataKey="value"
            height={300}
            innerRadius={60}
            outerRadius={100}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Average View Time by Day</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Weekly trend of average viewing duration
            </p>
          </div>
          <LineChart
            data={viewTimeData.weeklyTrend}
            keys={['averageTime']}
            xAxisDataKey="day"
            height={300}
            yAxisLabel="Seconds"
            legend={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Time of Day Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Average view time and counts throughout the day
            </p>
          </div>
          <BarChart
            data={timeOfDayData}
            keys={['Avg Time (sec)', 'View Count']}
            xAxisDataKey="name"
            height={250}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Weekly View Count</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total views by day of the week
            </p>
          </div>
          <BarChart
            data={viewTimeData.weeklyTrend}
            keys={['count']}
            xAxisDataKey="day"
            height={250}
            legend={false}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Recent View Records</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Latest billboard view entries with timestamp and duration
          </p>
        </div>
        <DataTable
          columns={recentViewsColumns}
          data={viewTimeData.recentViews}
        />
      </div>
    </DashboardLayout>
  );
};

export default ViewTimePage; 