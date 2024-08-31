import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ActiveCases from "./ActiveCases";
import EditProfile from "./EditProfile"; // Example
import Settings from "./Settings"; // Example

const LawyerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("activeCases");

  const cases = [
    {
      id: 1,
      title: "Smith vs. Johnson",
      parties: "John Smith, Michael Johnson",
      description: "Dispute over business contract breach.",
      importantDates: "2024-09-10 (Filing Deadline)",
      assignedTasks: "Review contract, prepare defense strategy.",
      recentActivity: "Uploaded contract analysis report.",
      status: "In Progress",
    },
    {
      id: 2,
      title: "State vs. Davis",
      parties: "State of California, Robert Davis",
      description: "Criminal case involving alleged fraud.",
      importantDates: "2024-08-30 (Court Appearance)",
      assignedTasks: "Prepare witness statements, gather evidence.",
      recentActivity: "Filed motion to dismiss.",
      status: "Pending",
    },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "activeCases":
        return <ActiveCases cases={cases} />;
      case "editProfile":
        return <EditProfile />;
      case "settings":
        return <Settings />;
      default:
        return <ActiveCases />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar setActiveComponent={setActiveComponent} />
      {/* Main Content */}
      <main className="flex-grow p-6 ml-1/5" style={{ marginLeft: '20%' }}>
        {renderComponent()}
      </main>
    </div>
  );
};

export default LawyerDashboard;
