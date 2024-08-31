import React from "react";
import { Link } from "react-router-dom";

const JudgeDashboard = () => {
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

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-1/5 bg-gray-800 text-white p-4 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-sm">User Type: Judge</p>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/active-cases"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Active Cases
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming-cases"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Upcoming Cases
              </Link>
            </li>
            <li>
              <Link
                to="/documents"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Documents
              </Link>
            </li>
            <li>
              <Link
                to="/edit-profile"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <button className="w-full p-2 bg-red-600 rounded hover:bg-red-700">
            LOGOUT
          </button>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Active Cases: {cases.length}
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {cases.map((case_) => (
            <div key={case_.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                {case_.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Parties Involved:</strong> {case_.parties}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Description:</strong> {case_.description}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Important Dates:</strong> {case_.importantDates}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Assigned Tasks:</strong> {case_.assignedTasks}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Recent Activity:</strong> {case_.recentActivity}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    case_.status === "In Progress"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  Status: {case_.status}
                </span>
                <Link
                  to={`/case/${case_.id}`}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JudgeDashboard;
