// import React, { useState } from 'react';
// import HeroSection from '../components/HeroSection';
// import heroImage from '../assets/optimized-hero/networksetupsupport-1152.jpg';

// const NetworkSetupSupport = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     type: '',
//     computers: '',
//     message: ''
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
//       <HeroSection title="Network Setup and Support" image={heroImage} />
//       <div className="container p-8 mx-auto">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div>
//             <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
//               <h2 className="mb-4 text-3xl font-semibold">Professional Network Setup and Support</h2>
//               <p className="mb-4">
//                 Setting up and maintaining secure and efficient home or office networks is crucial for ensuring consistent access and protecting your data. Our expert technicians are here to help you with:
//               </p>
//               <ul className="mb-4 list-disc list-inside">
//                 <li>Initial network planning and layout design</li>
//                 <li>Installation of routers, switches, and other networking hardware</li>
//                 <li>Configuration of wireless networks, including security settings</li>
//                 <li>Troubleshooting connectivity issues</li>
//                 <li>Regular maintenance and network health checks</li>
//               </ul>
//             </div>

//             <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
//               <h3 className="mb-4 text-2xl font-semibold">Why Choose Our Network Setup Services?</h3>
//               <p className="mb-4">
//                 Our team uses the latest technology and best practices to ensure your network is reliable, secure, and tailored to your specific needs:
//               </p>
//               <ul className="mb-4 list-disc list-inside">
//                 <li>Experienced technicians with extensive IT backgrounds</li>
//                 <li>Custom solutions designed to fit both your budget and performance requirements</li>
//                 <li>Fast, efficient service with minimal disruption to your daily operations</li>
//                 <li>Support for both small businesses and large enterprises</li>
//               </ul>
//             </div>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-4 text-2xl font-semibold">Get In Touch</h3>
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
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="type">
//                   Residential or Business
//                 </label>
//                 <select
//                   name="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 >
//                   <option value="" disabled>Select Type</option>
//                   <option value="Residential">Residential</option>
//                   <option value="Business">Business</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="computers">
//                   Number of Computers
//                 </label>
//                 <select
//                   name="computers"
//                   value={formData.computers}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                   required
//                 >
//                   <option value="" disabled>Select Number of Computers</option>
//                   <option value="1-5">1 to 5</option>
//                   <option value="5-10">5 to 10</option>
//                   <option value="10+">10 and up</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
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

//             <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
//               <h3 className="mb-4 text-2xl font-semibold">Get Started Today</h3>
//               <p className="mb-4">
//                 Don’t let network issues slow down your business or jeopardize your security. Contact us today to schedule a consultation or learn more about our network setup and support services.
//               </p>
//               <div className="text-center">
//                 <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Contact Us</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkSetupSupport;

import { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/networksetupsupport-1152.jpg'; // Adjust the file path if necessary

const NetworkSetupSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    computers: '',
    message: ''
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
    if (!formData.type) newErrors.type = 'Please select an option';
    if (!formData.computers) newErrors.computers = 'Please select the number of computers';
    if (!formData.message.trim()) newErrors.message = 'Please provide a description of your issue';
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
        type: '',
        computers: '',
        message: ''
      });
      // Optionally, replace the alert with a more user-friendly notification
      alert("Network setup and support request submitted successfully!");
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Submission failed. Please try again.');
    }
  };

  // Fake API call for demonstration purposes
  const fakeApiCall = (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000));

  // Define the canonical URL for this page
  const canonicalUrl = 'https://24x7techoncall.com/residential-support/network-setup-support';

  return (
    <div>
      {/* Helmet for canonical URL and SEO metadata */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Network Setup and Support | Your Company Name</title>
        <meta name="description" content="Professional network setup and support services to ensure secure and efficient home or office networks." />
      </Helmet>

      <HeroSection title="Network Setup and Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Informational Sections */}
          <div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-3xl font-semibold">Professional Network Setup and Support</h2>
              <p className="mb-4">
                Setting up and maintaining secure and efficient home or office networks is crucial for ensuring consistent access and protecting your data. Our expert technicians are here to help you with:
              </p>
              <ul className="mb-4 list-disc list-inside">
                <li>Initial network planning and layout design</li>
                <li>Installation of routers, switches, and other networking hardware</li>
                <li>Configuration of wireless networks, including security settings</li>
                <li>Troubleshooting connectivity issues</li>
                <li>Regular maintenance and network health checks</li>
              </ul>
            </div>

            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Why Choose Our Network Setup Services?</h3>
              <p className="mb-4">
                Our team uses the latest technology and best practices to ensure your network is reliable, secure, and tailored to your specific needs:
              </p>
              <ul className="mb-4 list-disc list-inside">
                <li>Experienced technicians with extensive IT backgrounds</li>
                <li>Custom solutions designed to fit both your budget and performance requirements</li>
                <li>Fast, efficient service with minimal disruption to your daily operations</li>
                <li>Support for both small businesses and large enterprises</li>
              </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Get In Touch</h3>
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

              {/* Residential or Business Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="type">
                  Residential or Business
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.type ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.type ? 'true' : 'false'}
                  aria-describedby={errors.type ? 'type-error' : null}
                >
                  <option value="" disabled>Select Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Business">Business</option>
                </select>
                {errors.type && (
                  <p className="mt-1 text-xs text-red-500" id="type-error">
                    {errors.type}
                  </p>
                )}
              </div>

              {/* Number of Computers Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="computers">
                  Number of Computers
                </label>
                <select
                  name="computers"
                  id="computers"
                  value={formData.computers}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.computers ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.computers ? 'true' : 'false'}
                  aria-describedby={errors.computers ? 'computers-error' : null}
                >
                  <option value="" disabled>Select Number of Computers</option>
                  <option value="1-5">1 to 5</option>
                  <option value="5-10">5 to 10</option>
                  <option value="10+">10 and up</option>
                </select>
                {errors.computers && (
                  <p className="mt-1 text-xs text-red-500" id="computers-error">
                    {errors.computers}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  rows="4"
                  required
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : null}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500" id="message-error">
                    {errors.message}
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

            {/* Additional Informational Section */}
            <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Get Started Today</h3>
              <p className="mb-4">
                Don’t let network issues disrupt your daily operations or compromise your security. Contact us today to schedule a consultation or learn more about our network setup and support services.
              </p>
              <div className="text-center">
                <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSetupSupport;
