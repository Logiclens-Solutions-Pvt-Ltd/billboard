import React from 'react';
import { TruckIcon, CarIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { FaMotorcycle } from 'react-icons/fa';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import DataTable from '../components/DataTable';
import { vehicleData } from '../data/mockData';

const VehiclesPage = () => {
  // Prepare data for pie chart
  const vehicleTypeData = vehicleData.vehicleTypes.map(type => ({
    name: type.name,
    value: type.count,
    percentage: type.percentage
  }));

  // Prepare data for category comparison
  const categoryData = [
    { name: '2 Wheelers', value: vehicleData.categories.twoWheelers },
    { name: '3 Wheelers', value: vehicleData.categories.threeWheelers },
    { name: '4 Wheelers', value: vehicleData.categories.fourWheelers }
  ];

  // Prepare columns for vehicle types table
  const vehicleTypesColumns = [
    { Header: 'Vehicle Type', accessor: 'name' },
    { Header: 'Count', accessor: 'count', 
      Cell: ({ value }) => <span className="font-medium">{value.toLocaleString()}</span> 
    },
    { Header: 'Percentage', accessor: 'percentage',
      Cell: ({ value }) => <span className="font-medium">{value}%</span>
    }
  ];

  return (
    <DashboardLayout title="Vehicle Detection Analytics">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Vehicle Detection Analysis</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Analytics for all detected vehicles categorized by type
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Vehicles"
          value={vehicleData.totalDetections.toLocaleString()}
          icon={<TruckIcon size={20} />}
          changeType="positive"
          change="8.5%"
          changeText="vs. last month"
        />
        <StatCard
          title="Today's Count"
          value={vehicleData.todayDetections.toLocaleString()}
          icon={<CalendarIcon size={20} />}
          changeType="positive"
          change="12.3%"
          changeText="vs. yesterday"
        />
        <StatCard
          title="2/3 Wheelers"
          value={`${(
            (vehicleData.categories.twoWheelers + vehicleData.categories.threeWheelers) /
            vehicleData.totalDetections *
            100
          ).toFixed(1)}%`}
          icon={<FaMotorcycle size={20} />}
          footer="Of total traffic"
        />
        <StatCard
          title="Peak Time"
          value="6-9 PM"
          icon={<ClockIcon size={20} />}
          footer="Highest traffic period"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Vehicle Types Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Breakdown of detected vehicles by specific type
            </p>
          </div>
          <PieChart 
            data={vehicleTypeData} 
            nameKey="name"
            dataKey="value"
            height={300}
            innerRadius={60}
            outerRadius={100}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Vehicle Categories</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Comparison between 2, 3, and 4 wheelers
            </p>
          </div>
          <BarChart
            data={categoryData}
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
            <h3 className="text-lg font-semibold">Weekly Traffic Trend</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Number of vehicles detected by day of the week
            </p>
          </div>
          <LineChart
            data={vehicleData.weeklyTrend}
            keys={['count']}
            xAxisDataKey="day"
            height={250}
            yAxisLabel="Vehicles"
            legend={false}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Time Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Traffic distribution by time of day
            </p>
          </div>
          <BarChart
            data={vehicleData.timeDistribution}
            keys={['count']}
            xAxisDataKey="hour"
            height={250}
            legend={false}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Vehicle Types Breakdown</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Detailed breakdown of all vehicle types detected
          </p>
        </div>
        <DataTable
          columns={vehicleTypesColumns}
          data={vehicleData.vehicleTypes}
          isPaginated={false}
        />
      </div>
    </DashboardLayout>
  );
};

export default VehiclesPage; 