import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SectionPage from './pages/SectionPage';
import SearchResultsPage from './pages/SearchResultsPage';
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import SensorDashboard from './pages/SensorDashboard';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/sensor-dashboard" element={<SensorDashboard />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
};

export default App;
