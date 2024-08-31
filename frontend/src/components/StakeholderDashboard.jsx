import React from 'react';
import { Link } from 'react-router-dom';

const StakeholderDashboard = () => {
  const cases = [
    { id: 1, title: 'Smith vs. Johnson', status: 'Active' },
    // Add more cases as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Stakeholder Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-gray-900">My Cases</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cases.map((case_) => (
                <Link
                  key={case_.id}
                  to={`/case/${case_.id}`}
                  className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{case_.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">Status: {case_.status}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StakeholderDashboard;