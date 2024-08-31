import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettings({ ...settings, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update (e.g., API call)
    console.log('Settings updated:', settings);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleSettingsChange}
              className="mr-2"
            />
            Enable Notifications
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleSettingsChange}
              className="mr-2"
            />
            Enable Dark Mode
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
