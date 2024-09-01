import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <aside className="fixed w-1/5 h-full bg-gray-800 text-white p-4 space-y-4">
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL
          alt="Placeholder"
          className="w-16 h-16 object-cover rounded-full bg-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">User name</h2>
          <p className="text-sm">User Type: Lawyer</p>
          <p className="text-sm">Account Type: Basic (free)</p>
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveComponent("activeCases")}
              className="block p-2 rounded hover:bg-gray-700 w-full text-left"
            >
              Active Cases
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("editProfile")}
              className="block p-2 rounded hover:bg-gray-700 w-full text-left"
            >
              Edit Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("settings")}
              className="block p-2 rounded hover:bg-gray-700 w-full text-left"
            >
              Settings
            </button>
          </li>
        </ul>
      </nav>
      <Link to="/">
        {" "}
        <button className="w-full p-2 bg-red-600 rounded hover:bg-red-700">
          LOGOUT
        </button>
      </Link>
    </aside>
  );
};

export default Sidebar;
