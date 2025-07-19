import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import StrategicDashboardHomepage from "pages/strategic-dashboard-homepage";
import ExecutiveSummaryHub from "pages/executive-summary-hub";
import StrategicIntelligenceCenter from "pages/strategic-intelligence-center";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<StrategicDashboardHomepage />} />
        <Route path="/strategic-dashboard-homepage" element={<StrategicDashboardHomepage />} />
        <Route path="/executive-summary-hub" element={<ExecutiveSummaryHub />} />
        <Route path="/strategic-intelligence-center" element={<StrategicIntelligenceCenter />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;