import React, { useState } from "react";

const EditProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Lawyer's Street, New Delhi, India",
    specialization: "Criminal Law",
    experience: "10 years",
    barNumber: "IN-123456",
    education: "LLB, Delhi University",
    languages: "English, Hindi",
    profilePicture: "https://via.placeholder.com/150",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Add save logic here
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white text-center">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </header>
      
      <main className="bg-white shadow-md rounded-lg p-8 mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              <h2 className="text-xl font-bold">{profile.fullName}</h2>
              <p className="text-sm text-gray-600">Bar Number: {profile.barNumber}</p>
            </div>
          </div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={profile.specialization}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Education</label>
            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Languages</label>
            <input
              type="text"
              name="languages"
              value={profile.languages}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-center py-2 mt-8 text-sm">
        <p>© 2024 SarvaSuraksha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EditProfilePage;
