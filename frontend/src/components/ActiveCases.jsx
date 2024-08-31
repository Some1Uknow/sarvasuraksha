// ActiveCases.js
import React from "react";
import { Link } from "react-router-dom";

const ActiveCases = ({ cases }) => {
  return (
    <div>
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
    </div>
  );
};

export default ActiveCases;
