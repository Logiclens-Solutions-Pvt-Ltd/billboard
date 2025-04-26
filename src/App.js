import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import Pages
import DashboardPage from './pages/DashboardPage';
import VehiclesPage from './pages/VehiclesPage';
import ViewTimePage from './pages/ViewTimePage';
import DemographicsPage from './pages/DemographicsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/view-time" element={<ViewTimePage />} />
          <Route path="/demographics" element={<DemographicsPage />} />
          
          {/* Redirect unmatched routes to Dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
