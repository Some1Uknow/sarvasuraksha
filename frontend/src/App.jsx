import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LawyerDashboard from "./components/LawyerDashboard";
import JudgeDashboard from "./components/JudgeDashboard";
import StakeholderDashboard from "./components/StakeholderDashboard";
import CaseDocuments from "./components/CaseDocuments";
import Pricing from "./components/Pricing";
import LandingPage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lawyer" element={<LawyerDashboard />} />
        <Route path="/judge" element={<JudgeDashboard />} />
        <Route
          path="/stakeholder-dashboard"
          element={<StakeholderDashboard />}
        />
        <Route path="/case/:id" element={<CaseDocuments />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
