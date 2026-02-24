import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/computer-training-1152.jpg';

const ComputerTraining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    training: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Training request submitted!");
  };

  return (
    <div>
      <HeroSection title="Computer Training Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Empower Your Skills with Our Computer Training</h2>
            <p className="mb-4">Our training sessions are designed to help individuals and organizations become more proficient with technology. Whether you're a beginner looking to learn the basics or an experienced user aiming to polish your skills, we have something for everyone.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Training Topics Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Basic computer skills</li>
              <li>Advanced software applications</li>
              <li>Internet and email usage</li>
              <li>Data management and spreadsheets</li>
              <li>Digital media and design</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Computer Training?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Experienced Instructors: All of our trainers are certified professionals.</li>
              <li>Flexible Scheduling: We offer classes that fit your busy schedule.</li>
              <li>Customizable Curriculum: Courses tailored to your specific needs.</li>
              <li>Hands-On Learning: Interactive sessions that ensure practical learning.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request Training Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="training">
                  Training Topic
                </label>
                <select
                  name="training"
                  value={formData.training}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="Basic computer skills">Basic computer skills</option>
                  <option value="Advanced software applications">Advanced software applications</option>
                  <option value="Internet and email usage">Internet and email usage</option>
                  <option value="Data management and spreadsheets">Data management and spreadsheets</option>
                  <option value="Digital media and design">Digital media and design</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerTraining;


