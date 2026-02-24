// import React, { useState } from 'react';
// import HeroSection from '../components/HeroSection';
// import heroImage from '../assets/DataRecovery2.webp'; // Adjust the file path if necessary

// const DataRecovery = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     deviceType: '',
//     issue: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div>
//       <HeroSection title="Data Recovery" image={heroImage} />
//       <div className="container p-8 mx-auto">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div>
//             <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
//               <h2 className="mb-4 text-3xl font-semibold">Professional Data Recovery Services</h2>
//               <p className="mb-4">
//                 Loss of data can be stressful and damaging, especially if the data is sensitive or critical for business operations. Our data recovery experts utilize state-of-the-art technology to retrieve data from a wide range of devices:
//               </p>
//               <ul className="mb-4 list-disc list-inside">
//                 <li>Hard drives (HDD and SSD)</li>
//                 <li>USB flash drives</li>
//                 <li>Memory cards</li>
//                 <li>Mobile devices</li>
//                 <li>Server and RAID arrays</li>
//               </ul>
//               <p>We handle all types of data loss situations, including mechanical failures, accidental deletions, virus attacks, and software malfunctions.</p>
//             </div>

//             <div className="text-center">
//               <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Contact Us for Data Recovery</button>
//             </div>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-4 text-2xl font-semibold">Tell Us About Your Problem</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="deviceType">
//                   Device Type
//                 </label>
//                 <select
//                   name="deviceType"
//                   value={formData.deviceType}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 >
//                   <option value="" disabled>Select Device Type</option>
//                   <option value="HDD">Hard Drive (HDD)</option>
//                   <option value="SSD">Solid State Drive (SSD)</option>
//                   <option value="USB">USB Flash Drive</option>
//                   <option value="MemoryCard">Memory Card</option>
//                   <option value="Mobile">Mobile Device</option>
//                   <option value="RAID">Server/RAID</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="issue">
//                   Description of the Issue
//                 </label>
//                 <textarea
//                   name="issue"
//                   value={formData.issue}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   rows="4"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataRecovery;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/DataRecovery2.webp'; // Adjust the file path if necessary

const DataRecovery = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for the field
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.deviceType) newErrors.deviceType = 'Please select a device type';
    if (!formData.issue.trim()) newErrors.issue = 'Please describe the issue';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      // Replace with your actual form submission logic (e.g., API call)
      await fakeApiCall(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        issue: ''
      });
      alert("Data recovery request submitted successfully!");
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Submission failed. Please try again.');
    }
  };

  // Fake API call for demonstration purposes
  const fakeApiCall = (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000));

  // Define the canonical URL for this page
  const canonicalUrl = 'https://bestcomputertec.com/residential-support/data-recovery';

  return (
    <div>
      {/* Helmet for canonical URL */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Data Recovery Services | Your Company Name</title>
        <meta name="description" content="Professional data recovery services to retrieve your lost or damaged data from various devices." />
      </Helmet>

      <HeroSection title="Data Recovery" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-3xl font-semibold">Professional Data Recovery Services</h2>
              <p className="mb-4">
                Loss of data can be stressful and damaging, especially if the data is sensitive or critical for business operations. Our data recovery experts utilize state-of-the-art technology to retrieve data from a wide range of devices:
              </p>
              <ul className="mb-4 list-disc list-inside">
                <li>Hard drives (HDD and SSD)</li>
                <li>USB flash drives</li>
                <li>Memory cards</li>
                <li>Mobile devices</li>
                <li>Server and RAID arrays</li>
              </ul>
              <p>We handle all types of data loss situations, including mechanical failures, accidental deletions, virus attacks, and software malfunctions.</p>
            </div>

            <div className="text-center">
              <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Contact Us for Data Recovery</button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Tell Us About Your Problem</h3>
            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : null}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : null}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : null}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Device Type Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="deviceType">
                  Device Type
                </label>
                <select
                  name="deviceType"
                  id="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.deviceType ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.deviceType ? 'true' : 'false'}
                  aria-describedby={errors.deviceType ? 'deviceType-error' : null}
                >
                  <option value="" disabled>Select Device Type</option>
                  <option value="HDD">Hard Drive (HDD)</option>
                  <option value="SSD">Solid State Drive (SSD)</option>
                  <option value="USB">USB Flash Drive</option>
                  <option value="MemoryCard">Memory Card</option>
                  <option value="Mobile">Mobile Device</option>
                  <option value="RAID">Server/RAID</option>
                </select>
                {errors.deviceType && (
                  <p className="mt-1 text-xs text-red-500" id="deviceType-error">
                    {errors.deviceType}
                  </p>
                )}
              </div>

              {/* Description of the Issue */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="issue">
                  Description of the Issue
                </label>
                <textarea
                  name="issue"
                  id="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.issue ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  rows="4"
                  required
                  aria-invalid={errors.issue ? 'true' : 'false'}
                  aria-describedby={errors.issue ? 'issue-error' : null}
                />
                {errors.issue && (
                  <p className="mt-1 text-xs text-red-500" id="issue-error">
                    {errors.issue}
                  </p>
                )}
              </div>

              {/* Submission Feedback */}
              {submitError && (
                <p className="mb-4 text-xs text-red-500">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="mb-4 text-xs text-green-500">Your request has been submitted successfully!</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRecovery;
