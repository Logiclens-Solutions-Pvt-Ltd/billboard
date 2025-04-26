// Mock data for vehicles detected
export const vehicleData = {
  totalDetections: 12458,
  todayDetections: 342,
  weeklyGrowth: 8.5,
  categories: {
    twoWheelers: 5621,
    threeWheelers: 2138,
    fourWheelers: 4699
  },
  vehicleTypes: [
    { name: 'Motorcycle', count: 3245, percentage: 26.0 },
    { name: 'Scooter', count: 2376, percentage: 19.1 },
    { name: 'Auto Rickshaw', count: 2138, percentage: 17.2 },
    { name: 'Hatchback', count: 1892, percentage: 15.2 },
    { name: 'Sedan', count: 1458, percentage: 11.7 },
    { name: 'SUV', count: 1349, percentage: 10.8 }
  ],
  timeDistribution: [
    { hour: '6-9 AM', count: 2348 },
    { hour: '9-12 PM', count: 2967 },
    { hour: '12-3 PM', count: 1876 },
    { hour: '3-6 PM', count: 2134 },
    { hour: '6-9 PM', count: 3133 }
  ],
  weeklyTrend: [
    { day: 'Mon', count: 1732 },
    { day: 'Tue', count: 1821 },
    { day: 'Wed', count: 1935 },
    { day: 'Thu', count: 1887 },
    { day: 'Fri', count: 2145 },
    { day: 'Sat', count: 1432 },
    { day: 'Sun', count: 1506 }
  ]
};

// Mock data for billboard view time
export const viewTimeData = {
  totalViews: 8762,
  todayViews: 245,
  averageViewTimeSeconds: 5.7,
  weeklyGrowth: 12.3,
  viewDurations: [
    { duration: '0-2 sec', count: 2134, percentage: 24.4 },
    { duration: '2-5 sec', count: 3245, percentage: 37.0 },
    { duration: '5-10 sec', count: 2348, percentage: 26.8 },
    { duration: '10-30 sec', count: 835, percentage: 9.5 },
    { duration: '30+ sec', count: 200, percentage: 2.3 }
  ],
  timeOfDay: [
    { hour: '6-9 AM', averageTime: 4.2, count: 1356 },
    { hour: '9-12 PM', averageTime: 5.6, count: 1845 },
    { hour: '12-3 PM', averageTime: 4.8, count: 1542 },
    { hour: '3-6 PM', averageTime: 6.2, count: 1963 },
    { hour: '6-9 PM', averageTime: 7.5, count: 2056 }
  ],
  recentViews: [
    { id: 1, timestamp: '2023-06-18 08:42:23', duration: 8.2, dayPart: 'Morning' },
    { id: 2, timestamp: '2023-06-18 09:15:47', duration: 12.5, dayPart: 'Morning' },
    { id: 3, timestamp: '2023-06-18 12:32:11', duration: 4.7, dayPart: 'Noon' },
    { id: 4, timestamp: '2023-06-18 15:20:33', duration: 6.3, dayPart: 'Afternoon' },
    { id: 5, timestamp: '2023-06-18 17:45:18', duration: 9.1, dayPart: 'Evening' },
    { id: 6, timestamp: '2023-06-18 18:12:52', duration: 5.6, dayPart: 'Evening' },
    { id: 7, timestamp: '2023-06-18 19:25:08', duration: 7.2, dayPart: 'Evening' }
  ],
  weeklyTrend: [
    { day: 'Mon', averageTime: 5.2, count: 1152 },
    { day: 'Tue', averageTime: 5.5, count: 1232 },
    { day: 'Wed', averageTime: 5.8, count: 1318 },
    { day: 'Thu', averageTime: 5.4, count: 1265 },
    { day: 'Fri', averageTime: 6.2, count: 1486 },
    { day: 'Sat', averageTime: 6.5, count: 1124 },
    { day: 'Sun', averageTime: 5.9, count: 1185 }
  ]
};

// Mock data for demographic analysis
export const demographicData = {
  totalPeople: 9567,
  todayDetections: 287,
  weeklyGrowth: 6.8,
  genderDistribution: {
    male: 5218,
    female: 4349
  },
  ageGroups: [
    { group: '0-12', count: 784, percentage: 8.2 },
    { group: '13-18', count: 1324, percentage: 13.8 },
    { group: '19-25', count: 2145, percentage: 22.4 },
    { group: '26-35', count: 1876, percentage: 19.6 },
    { group: '36-50', count: 1658, percentage: 17.3 },
    { group: '51-65', count: 1234, percentage: 12.9 },
    { group: '65+', count: 546, percentage: 5.7 }
  ],
  genderByAge: [
    { group: '0-12', male: 412, female: 372 },
    { group: '13-18', male: 687, female: 637 },
    { group: '19-25', male: 1143, female: 1002 },
    { group: '26-35', male: 1025, female: 851 },
    { group: '36-50', male: 876, female: 782 },
    { group: '51-65', male: 687, female: 547 },
    { group: '65+', male: 388, female: 158 }
  ],
  peakHours: [
    { hour: '6-9 AM', male: 534, female: 486 },
    { hour: '9-12 PM', male: 732, female: 651 },
    { hour: '12-3 PM', male: 656, female: 587 },
    { hour: '3-6 PM', male: 845, female: 726 },
    { hour: '6-9 PM', male: 1056, female: 968 }
  ],
  weeklyTrend: [
    { day: 'Mon', count: 1267, malePercentage: 54, femalePercentage: 46 },
    { day: 'Tue', count: 1348, malePercentage: 56, femalePercentage: 44 },
    { day: 'Wed', count: 1432, malePercentage: 53, femalePercentage: 47 },
    { day: 'Thu', count: 1356, malePercentage: 55, femalePercentage: 45 },
    { day: 'Fri', count: 1542, malePercentage: 52, femalePercentage: 48 },
    { day: 'Sat', count: 1284, malePercentage: 51, femalePercentage: 49 },
    { day: 'Sun', count: 1338, malePercentage: 54, femalePercentage: 46 }
  ]
};

// Combined data for overview dashboard
export const overviewData = {
  totalDetections: vehicleData.totalDetections + viewTimeData.totalViews + demographicData.totalPeople,
  categoryBreakdown: [
    { name: 'Vehicle Detection', count: vehicleData.totalDetections, color: '#3B82F6' },
    { name: 'Billboard Views', count: viewTimeData.totalViews, color: '#10B981' },
    { name: 'Demographic Analysis', count: demographicData.totalPeople, color: '#8B5CF6' }
  ],
  weeklyActivity: [
    { day: 'Mon', vehicles: 1732, views: 1152, people: 1267 },
    { day: 'Tue', vehicles: 1821, views: 1232, people: 1348 },
    { day: 'Wed', vehicles: 1935, views: 1318, people: 1432 },
    { day: 'Thu', vehicles: 1887, views: 1265, people: 1356 },
    { day: 'Fri', vehicles: 2145, views: 1486, people: 1542 },
    { day: 'Sat', vehicles: 1432, views: 1124, people: 1284 },
    { day: 'Sun', vehicles: 1506, views: 1185, people: 1338 }
  ],
  topInsights: [
    { metric: 'Peak Traffic Time', value: '6-9 PM' },
    { metric: 'Most Common Vehicle', value: 'Motorcycle' },
    { metric: 'Avg. View Duration', value: '5.7 sec' },
    { metric: 'Primary Age Group', value: '19-25 yrs' }
  ],
  // New correlation data between all three use cases
  crossAnalysis: {
    vehicleAgeCorrelation: [
      { vehicle: 'Motorcycle', primaryAgeGroup: '19-25', percentage: 42 },
      { vehicle: 'Scooter', primaryAgeGroup: '26-35', percentage: 38 },
      { vehicle: 'Auto Rickshaw', primaryAgeGroup: '36-50', percentage: 45 },
      { vehicle: 'Hatchback', primaryAgeGroup: '26-35', percentage: 36 },
      { vehicle: 'Sedan', primaryAgeGroup: '36-50', percentage: 41 },
      { vehicle: 'SUV', primaryAgeGroup: '36-50', percentage: 38 }
    ],
    timeGenderDistribution: [
      { time: 'Morning', malePercentage: 58, femalePercentage: 42, avgViewTime: 4.8 },
      { time: 'Noon', malePercentage: 54, femalePercentage: 46, avgViewTime: 5.1 },
      { time: 'Afternoon', malePercentage: 52, femalePercentage: 48, avgViewTime: 5.9 },
      { time: 'Evening', malePercentage: 51, femalePercentage: 49, avgViewTime: 6.6 }
    ],
    vehicleViewTimeCorrelation: [
      { vehicleType: 'Two Wheeler', avgViewTime: 4.2 },
      { vehicleType: 'Three Wheeler', avgViewTime: 5.8 },
      { vehicleType: 'Four Wheeler', avgViewTime: 6.5 }
    ],
    peakHourComparison: {
      traffic: '6-9 PM',
      viewTime: '6-9 PM', 
      demographics: '6-9 PM',
      highestEngagementVehicle: 'Sedan',
      highestEngagementAge: '19-25',
      highestEngagementGender: 'Male'
    },
    weekdayVsWeekend: {
      weekdayAvgTraffic: 1904,
      weekendAvgTraffic: 1469,
      weekdayAvgViewTime: 5.6,
      weekendAvgViewTime: 6.2,
      weekdayTopDemographic: '26-35 Male',
      weekendTopDemographic: '19-25 Mixed'
    }
  },
  // Key conversion metrics
  conversionMetrics: [
    { metric: 'View-to-Engagement Ratio', value: '23.4%', change: '+2.1%' },
    { metric: 'Avg. Attention Score', value: '7.2/10', change: '+0.4' },
    { metric: 'Recall Estimation', value: '64%', change: '+5%' },
    { metric: 'Traffic-to-View Ratio', value: '76.3%', change: '+3.2%' }
  ]
}; 