import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaClipboardList,
  FaSearch,
  FaGooglePlay,
  FaApple,
  FaSignInAlt,
  FaUserPlus,
  FaRobot,
  FaTimes,
} from "react-icons/fa";

const SarvaSurakshaLandingPage = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/564x/f7/e9/0a/f7e90adb4024280973203534beca25f7.jpg"
              alt="Indian Emblem"
              className="h-12"
            />
            <div>
              <h1 className="text-xl font-bold">SARVASURAKSHA</h1>
              <p className="text-sm">
                A Secure and Transparent Legal Ecosystem
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link
              to="/pricing"
              className="bg-white text-green-700 p-2 rounded-md"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <img
            src="https://static.toiimg.com/thumb/msid-97606013,width-1280,height-720,resizemode-4/97606013.jpg"
            alt="Secure Legal System"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center ">
            <h2 className="text-white text-2xl ml-20 font-bold">
              Securing India's courts using the power of blockchain
            </h2>
            <div className="mt-4 ml-20 flex space-x-4">
              <Link to="/login">
                <button className="flex items-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  <FaSignInAlt className="mr-2" />
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="flex items-center bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
                  <FaUserPlus className="mr-2" />
                  Register
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Access Menu */}
        <div className="absolute right-4 top-64 bg-white rounded-full p-2 shadow-lg">
          <div className="flex flex-col items-center space-y-2">
            <Link
              to="/file-case"
              className="bg-green-500 text-white p-2 rounded-full"
            >
              <FaClipboardList size={24} />
            </Link>
            <Link
              to="/case-status"
              className="bg-orange-500 text-white p-2 rounded-full"
            >
              <FaSearch size={24} />
            </Link>
            <Link
              to="/report-issue"
              className="bg-yellow-500 text-white p-2 rounded-full"
            >
              <FaShieldAlt size={24} />
            </Link>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <StatBox
            title="Total Registered Users"
            value="120,000"
            bgColor="bg-red-600"
          />
          <StatBox title="Cases Filed" value="15,000" bgColor="bg-teal-600" />
          <StatBox
            title="Cases Resolved"
            value="10,500"
            bgColor="bg-gray-500"
          />
          <StatBox title="Pending Cases" value="4,500" bgColor="bg-green-700" />
          <StatBox
            title="Total Documents"
            value="50,000"
            bgColor="bg-blue-800"
          />
          <StatBox
            title="Community Support Sessions"
            value="1,200"
            bgColor="bg-blue-600"
          />
          <StatBox
            title="Storage Used"
            value="15000 GB"
            bgColor="bg-purple-600"
          />
          <StatBox
            title="Feedback Received"
            value="30,000"
            bgColor="bg-orange-700"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-2 text-sm">
        <p>© 2024 SarvaSuraksha. All rights reserved.</p>
      </footer>

      {/* Chatbot Icon */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbot}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          {chatbotOpen ? <FaTimes size={50} /> : <FaRobot size={50} />}
        </button>

        {/* Chatbot Window */}
        {chatbotOpen && (
          <div className="fixed bottom-16 right-4 bg-white w-80 h-96 shadow-lg rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Chat with us!</h3>
              <button
                onClick={toggleChatbot}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <p className="text-gray-600">Hello! How can I assist you today?</p>
              {/* Add more mock chat messages here */}
            </div>
            <input
              type="text"
              className="w-full border rounded p-2 mt-2"
              placeholder="Type a message..."
            />
          </div>
        )}
      </div>
    </div>
  );
};

const StatBox = ({ title, value, bgColor }) => (
  <div className={`${bgColor} text-white p-4 rounded shadow`}>
    <h3 className="font-bold text-lg">{value}</h3>
    <p className="text-sm">{title}</p>
  </div>
);

export default SarvaSurakshaLandingPage;
