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
      title: "Ravi Kumar vs. Smita Patel",
      parties: "Ravi Kumar, Smita Patel",
      description: "Dispute over breach of business contract.",
      importantDates: "2024-09-10 (Filing Deadline)",
      assignedTasks: "Review contract, prepare defense strategy.",
      recentActivity: "Uploaded contract analysis report.",
      status: "In Progress",
    },
    {
      id: 2,
      title: "State of Maharashtra vs. Rajesh Mehta",
      parties: "State of Maharashtra, Rajesh Mehta",
      description: "Criminal case involving alleged fraud.",
      importantDates: "2024-08-30 (Court Appearance)",
      assignedTasks: "Prepare witness statements, gather evidence.",
      recentActivity: "Filed motion to dismiss.",
      status: "Pending",
    },
    {
      id: 3,
      title: "Aditi Sharma vs. Vikram Singh",
      parties: "Aditi Sharma, Vikram Singh",
      description: "Dispute over property ownership.",
      importantDates: "2024-10-15 (Mediation)",
      assignedTasks: "Review property deeds, prepare settlement offer.",
      recentActivity: "Sent settlement offer to opposing counsel.",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Arjun Verma vs. Priya Rao",
      parties: "Arjun Verma, Priya Rao",
      description: "Dispute over employment contract.",
      importantDates: "2024-11-01 (Arbitration)",
      assignedTasks:
        "Review employment contract, prepare arbitration statement.",
      recentActivity: "Received arbitration notice from opposing counsel.",
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
      <main className="flex-grow p-6 ml-1/5" style={{ marginLeft: "20%" }}>
        {renderComponent()}
      </main>
    </div>
  );
};

export default LawyerDashboard;
