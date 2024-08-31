import React from 'react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Choose Your Plan</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h2>
              <p className="text-gray-600 mb-8">Perfect for individuals or small teams just getting started.</p>
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900">Free</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>10 GB Storage</li>
                  <li>Standard Support (Email and FAQ)</li>
                  <li>Share a Single Document with 10-15 Users</li>
                  <li>Single Layer Encryption</li>
                </ul>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-8 hover:bg-blue-600">
              Get Started
            </button>
          </div>
          
          {/* Advanced Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Plan</h2>
              <p className="text-gray-600 mb-8">Best for professionals and businesses requiring more robust features.</p>
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900">INR 499.99 / month</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Unlimited Storage</li>
                  <li>24/7 Full Support (Email, FAQ, and Phone)</li>
                  <li>Unlimited Users for Document Sharing</li>
                  <li>Advanced Encryption</li>
                  <li>Custom Features (Tailored to Your Needs)</li>
                </ul>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-8 hover:bg-green-600">
              Upgrade Now
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
