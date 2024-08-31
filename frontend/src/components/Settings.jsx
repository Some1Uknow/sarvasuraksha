import React, { useState } from 'react';
import { FaBell, FaMoon, FaUserShield, FaLanguage, FaAccessibleIcon } from 'react-icons/fa';

const SettingSection = ({ title, children, icon }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </div>
);

const ToggleSetting = ({ name, label, checked, onChange }) => (
  <label className="flex items-center justify-between py-2">
    <span>{label}</span>
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        htmlFor={name}
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  </label>
);

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      enable: true,
      sound: true,
      caseSummaries: true,
      courtReminders: true,
    },
    appearance: {
      darkMode: false,
      highContrast: false,
      fontSize: 'medium',
    },
    privacy: {
      twoFactorAuth: false,
      dataSharing: true,
      anonymizeSearches: false,
    },
    language: 'english',
    accessibility: {
      screenReader: false,
      closedCaptions: false,
    },
  });

  const handleSettingsChange = (category, setting, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [setting]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update (e.g., API call)
    console.log('Settings updated:', settings);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form onSubmit={handleSubmit}>
        <SettingSection title="Notifications" icon={<FaBell className="text-blue-500" />}>
          <ToggleSetting
            name="enableNotifications"
            label="Enable Notifications"
            checked={settings.notifications.enable}
            onChange={(e) => handleSettingsChange('notifications', 'enable', e.target.checked)}
          />
          <ToggleSetting
            name="notificationSound"
            label="Notification Sound"
            checked={settings.notifications.sound}
            onChange={(e) => handleSettingsChange('notifications', 'sound', e.target.checked)}
          />
          <ToggleSetting
            name="caseSummaries"
            label="Case Summaries"
            checked={settings.notifications.caseSummaries}
            onChange={(e) => handleSettingsChange('notifications', 'caseSummaries', e.target.checked)}
          />
          <ToggleSetting
            name="courtReminders"
            label="Court Reminders"
            checked={settings.notifications.courtReminders}
            onChange={(e) => handleSettingsChange('notifications', 'courtReminders', e.target.checked)}
          />
        </SettingSection>

        <SettingSection title="Appearance" icon={<FaMoon className="text-purple-500" />}>
          <ToggleSetting
            name="darkMode"
            label="Dark Mode"
            checked={settings.appearance.darkMode}
            onChange={(e) => handleSettingsChange('appearance', 'darkMode', e.target.checked)}
          />
          <ToggleSetting
            name="highContrast"
            label="High Contrast"
            checked={settings.appearance.highContrast}
            onChange={(e) => handleSettingsChange('appearance', 'highContrast', e.target.checked)}
          />
          <div className="flex items-center justify-between py-2">
            <span>Font Size</span>
            <select
              value={settings.appearance.fontSize}
              onChange={(e) => handleSettingsChange('appearance', 'fontSize', e.target.value)}
              className="ml-2 p-2 border rounded"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </SettingSection>

        <SettingSection title="Privacy & Security" icon={<FaUserShield className="text-green-500" />}>
          <ToggleSetting
            name="twoFactorAuth"
            label="Two-Factor Authentication"
            checked={settings.privacy.twoFactorAuth}
            onChange={(e) => handleSettingsChange('privacy', 'twoFactorAuth', e.target.checked)}
          />
          <ToggleSetting
            name="dataSharing"
            label="Data Sharing"
            checked={settings.privacy.dataSharing}
            onChange={(e) => handleSettingsChange('privacy', 'dataSharing', e.target.checked)}
          />
          <ToggleSetting
            name="anonymizeSearches"
            label="Anonymize Searches"
            checked={settings.privacy.anonymizeSearches}
            onChange={(e) => handleSettingsChange('privacy', 'anonymizeSearches', e.target.checked)}
          />
        </SettingSection>

        <SettingSection title="Language" icon={<FaLanguage className="text-red-500" />}>
          <div className="flex items-center justify-between py-2">
            <span>Preferred Language</span>
            <select
              value={settings.language}
              onChange={(e) => handleSettingsChange('language', e.target.value)}
              className="ml-2 p-2 border rounded"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
              <option value="gujarati">Gujarati</option>
            </select>
          </div>
        </SettingSection>

        <SettingSection title="Accessibility" icon={<FaAccessibleIcon className="text-yellow-500" />}>
          <ToggleSetting
            name="screenReader"
            label="Screen Reader Support"
            checked={settings.accessibility.screenReader}
            onChange={(e) => handleSettingsChange('accessibility', 'screenReader', e.target.checked)}
          />
          <ToggleSetting
            name="closedCaptions"
            label="Closed Captions"
            checked={settings.accessibility.closedCaptions}
            onChange={(e) => handleSettingsChange('accessibility', 'closedCaptions', e.target.checked)}
          />
        </SettingSection>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;