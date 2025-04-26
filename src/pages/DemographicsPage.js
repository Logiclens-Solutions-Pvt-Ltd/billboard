import React from 'react';
import { UsersIcon, UserIcon, CalendarIcon, ClockIcon, SparklesIcon } from 'lucide-react';

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import { demographicData } from '../data/mockData';

const DemographicsPage = () => {
  // Prepare data for pie chart
  const genderData = [
    { name: 'Male', value: demographicData.genderDistribution.male, percentage: Math.round(demographicData.genderDistribution.male / demographicData.totalPeople * 100) },
    { name: 'Female', value: demographicData.genderDistribution.female, percentage: Math.round(demographicData.genderDistribution.female / demographicData.totalPeople * 100) }
  ];

  // Prepare data for age breakdown
  const ageData = demographicData.ageGroups.map(group => ({
    name: group.group,
    value: group.count,
    percentage: group.percentage
  }));

  // Prepare data for gender by age chart
  const genderByAgeData = demographicData.genderByAge.map(data => ({
    name: data.group,
    Male: data.male,
    Female: data.female
  }));

  // Prepare data for peak hours
  const peakHoursData = demographicData.peakHours.map(data => ({
    name: data.hour,
    Male: data.male,
    Female: data.female
  }));

  return (
    <DashboardLayout title="Demographics Analytics">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Demographics Analysis</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Analytics for age and gender of viewers looking at billboards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total People"
          value={demographicData.totalPeople.toLocaleString()}
          icon={<UsersIcon size={20} />}
          changeType="positive"
          change="6.8%"
          changeText="vs. last month"
        />
        <StatCard
          title="Today's Count"
          value={demographicData.todayDetections.toLocaleString()}
          icon={<CalendarIcon size={20} />}
          changeType="positive"
          change="4.2%"
          changeText="vs. yesterday"
        />
        <StatCard
          title="Male/Female Ratio"
          value={`${Math.round(demographicData.genderDistribution.male / demographicData.genderDistribution.female * 100) / 100}`}
          icon={<UserIcon size={20} />}
          footer="Male to female ratio"
        />
        <StatCard
          title="Primary Age Group"
          value="19-25"
          icon={<SparklesIcon size={20} />}
          footer="Most common age group"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Gender Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Breakdown of viewers by gender
            </p>
          </div>
          <PieChart 
            data={genderData} 
            nameKey="name"
            dataKey="value"
            height={300}
            innerRadius={60}
            outerRadius={100}
            colors={['#3B82F6', '#EC4899']}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Age Group Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Viewers categorized by age groups
            </p>
          </div>
          <BarChart
            data={ageData}
            keys={['value']}
            xAxisDataKey="name"
            height={300}
            legend={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Gender by Age Group</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Distribution of male and female viewers across age groups
            </p>
          </div>
          <BarChart
            data={genderByAgeData}
            keys={['Male', 'Female']}
            xAxisDataKey="name"
            height={250}
            colors={['#3B82F6', '#EC4899']}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Weekly Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Viewer trends throughout the week
            </p>
          </div>
          <LineChart
            data={demographicData.weeklyTrend}
            keys={['count']}
            xAxisDataKey="day"
            height={250}
            legend={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Peak Hours by Gender</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gender distribution at different times of day
            </p>
          </div>
          <BarChart
            data={peakHoursData}
            keys={['Male', 'Female']}
            xAxisDataKey="name"
            height={300}
            colors={['#3B82F6', '#EC4899']}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Gender Ratio by Day</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Percentage distribution of genders throughout the week
            </p>
          </div>
          <BarChart
            data={demographicData.weeklyTrend}
            keys={['malePercentage', 'femalePercentage']}
            xAxisDataKey="day"
            stacked={true}
            height={300}
            colors={['#3B82F6', '#EC4899']}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DemographicsPage; 