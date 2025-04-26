import React from 'react';
import { 
  TruckIcon, 
  ClockIcon, 
  UsersIcon, 
  EyeIcon, 
  LayoutDashboardIcon,
  LineChartIcon,
  TrendingUpIcon,
  ZapIcon,
  CalendarIcon,
  SearchIcon,
  PercentIcon
} from 'lucide-react';

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import DataTable from '../components/DataTable';
import { overviewData, vehicleData, viewTimeData, demographicData } from '../data/mockData';

const DashboardPage = () => {
  // Prepare data for the combined weekly activity chart
  const weeklyActivityData = overviewData.weeklyActivity.map(day => ({
    name: day.day,
    Vehicles: day.vehicles,
    Views: day.views,
    People: day.people
  }));

  // Prepare data for category distribution pie chart
  const pieChartData = overviewData.categoryBreakdown.map(item => ({
    name: item.name,
    value: item.count,
    fill: item.color
  }));

  // Prepare columns for top insights table
  const insightColumns = [
    { Header: 'Metric', accessor: 'metric' },
    { Header: 'Value', accessor: 'value' },
  ];

  // Prepare conversion metrics data
  const conversionMetricsColumns = [
    { Header: 'Metric', accessor: 'metric' },
    { Header: 'Value', accessor: 'value' },
    { 
      Header: 'Change', 
      accessor: 'change',
      Cell: ({ value }) => (
        <div className={`flex items-center ${value.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {value.startsWith('+') ? <TrendingUpIcon size={14} className="mr-1" /> : null}
          {value}
        </div>
      )
    },
  ];

  // Prepare vehicle age correlation data
  const vehicleAgeData = overviewData.crossAnalysis.vehicleAgeCorrelation.map(item => ({
    name: item.vehicle,
    'Most Common Age': item.primaryAgeGroup,
    'Percentage': item.percentage
  }));

  // Prepare time-gender distribution data
  const timeGenderData = overviewData.crossAnalysis.timeGenderDistribution.map(item => ({
    name: item.time,
    Male: item.malePercentage,
    Female: item.femalePercentage,
    'Avg. View Time': item.avgViewTime
  }));

  // Prepare vehicle view time correlation data
  const vehicleViewTimeData = overviewData.crossAnalysis.vehicleViewTimeCorrelation.map(item => ({
    name: item.vehicleType,
    'Average View Time (sec)': item.avgViewTime
  }));

  // Prepare weekday vs weekend comparison data
  const weekdayVsWeekendData = [
    { name: 'Weekday', 'Avg Traffic': overviewData.crossAnalysis.weekdayVsWeekend.weekdayAvgTraffic, 'Avg View Time': overviewData.crossAnalysis.weekdayVsWeekend.weekdayAvgViewTime * 100 },
    { name: 'Weekend', 'Avg Traffic': overviewData.crossAnalysis.weekdayVsWeekend.weekendAvgTraffic, 'Avg View Time': overviewData.crossAnalysis.weekdayVsWeekend.weekendAvgViewTime * 100 }
  ];

  // Peak hour comparison data
  const peakHourData = {
    traffic: overviewData.crossAnalysis.peakHourComparison.traffic,
    viewTime: overviewData.crossAnalysis.peakHourComparison.viewTime,
    demographics: overviewData.crossAnalysis.peakHourComparison.demographics,
    vehicle: overviewData.crossAnalysis.peakHourComparison.highestEngagementVehicle,
    age: overviewData.crossAnalysis.peakHourComparison.highestEngagementAge,
    gender: overviewData.crossAnalysis.peakHourComparison.highestEngagementGender
  };

  return (
    <DashboardLayout title="Dashboard Overview">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overall Analytics</h2>
        {/* <p className="text-gray-500 dark:text-gray-400">
          Combined insights from all billboard analytics modules
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Detections"
          value={overviewData.totalDetections.toLocaleString()}
          icon={<LayoutDashboardIcon size={20} />}
          changeType="positive"
          change="12.3%"
          changeText="vs. last month"
        />
        <StatCard
          title="Vehicles Detected"
          value={vehicleData.totalDetections.toLocaleString()}
          icon={<TruckIcon size={20} />}
          changeType="positive"
          change="8.5%"
          changeText="vs. last month"
        />
        <StatCard
          title="Billboard Views"
          value={viewTimeData.totalViews.toLocaleString()}
          icon={<EyeIcon size={20} />}
          changeType="positive"
          change="12.3%"
          changeText="vs. last month"
        />
        <StatCard
          title="People Analyzed"
          value={demographicData.totalPeople.toLocaleString()}
          icon={<UsersIcon size={20} />}
          changeType="positive"
          change="6.8%"
          changeText="vs. last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Weekly Activity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Comparison of all detection types over time
            </p>
          </div>
          <BarChart
            data={weeklyActivityData}
            keys={['Vehicles', 'Views', 'People']}
            xAxisDataKey="name"
            height={300}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Detection Categories</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Distribution across all analytics modules
            </p>
          </div>
          <PieChart 
            data={pieChartData} 
            dataKey="value"
            height={300}
            innerRadius={60}
            outerRadius={100}
          />
        </div>
      </div>

      {/* Conversion metrics section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Key Performance Indicators</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Critical metrics for measuring billboard effectiveness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewData.conversionMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.metric}</p>
              <div className="flex items-center justify-between mt-2">
                <h4 className="text-xl font-bold">{metric.value}</h4>
                <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Peak hour insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Peak Hour Analysis</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cross-analysis of peak engagement across all modules
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-3">Traffic Patterns</h4>
            <div className="flex items-start mb-2">
              <ClockIcon size={18} className="text-primary mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Peak Traffic: <span className="font-medium">{peakHourData.traffic}</span></p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Most Common: <span className="font-medium">{peakHourData.vehicle}</span></p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-3">Viewing Patterns</h4>
            <div className="flex items-start mb-2">
              <EyeIcon size={18} className="text-secondary mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Peak Views: <span className="font-medium">{peakHourData.viewTime}</span></p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Avg. View Time: <span className="font-medium">{viewTimeData.averageViewTimeSeconds} sec</span></p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-md font-semibold mb-3">Demographic Peaks</h4>
            <div className="flex items-start mb-2">
              <UsersIcon size={18} className="text-accent mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Age Group: <span className="font-medium">{peakHourData.age}</span></p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Dominant Gender: <span className="font-medium">{peakHourData.gender}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-analysis charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Weekday vs Weekend Comparison</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Comparing traffic and viewing patterns
            </p>
          </div>
          <BarChart
            data={weekdayVsWeekendData}
            keys={['Avg Traffic', 'Avg View Time']}
            xAxisDataKey="name"
            height={300}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Vehicle Type View Time Correlation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Average time spent viewing by vehicle type
            </p>
          </div>
          <BarChart
            data={vehicleViewTimeData}
            keys={['Average View Time (sec)']}
            xAxisDataKey="name"
            height={300}
            legend={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Gender Distribution by Time of Day</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gender percentages and average view time correlation
            </p>
          </div>
          <BarChart
            data={timeGenderData}
            keys={['Male', 'Female', 'Avg. View Time']}
            xAxisDataKey="name"
            height={250}
            colors={['#3B82F6', '#EC4899', '#10B981']}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Key Insights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Important metrics at a glance
            </p>
          </div>
          <DataTable
            columns={insightColumns}
            data={overviewData.topInsights}
            isPaginated={false}
          />
        </div>
      </div>

    </DashboardLayout>
  );
};

export default DashboardPage; 