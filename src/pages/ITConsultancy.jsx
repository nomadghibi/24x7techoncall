

// // import React, { useState } from 'react';
// // import HeroSection from '../components/HeroSection';
// // import heroImage from '../assets/optimized-hero/networksetupsupport-1152.jpg'; // Ensure you have a relevant image

// // const ITConsultancy = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     service: '',
// //     date: '',
// //     time: ''
// //   });
// //   const [selectedService, setSelectedService] = useState(null);

// //   const services = [
// //     {
// //       id: 'it-strategy-development',
// //       title: 'IT Strategy Development',
// //       description: 'Developing a strategic IT roadmap that aligns with your business goals.',
// //       details: 'Our IT Strategy Development service involves analyzing your current IT infrastructure and aligning it with your business objectives. We create a strategic plan that ensures your IT investments support your long-term goals.'
// //     },
// //     {
// //       id: 'infrastructure-optimization',
// //       title: 'Infrastructure Optimization',
// //       description: 'Optimizing your IT infrastructure for better performance and cost-efficiency.',
// //       details: 'With Infrastructure Optimization, we assess your current IT setup and recommend changes that improve performance, reduce costs, and increase efficiency. This includes server consolidation, virtualization, and cloud migration strategies.'
// //     },
// //     {
// //       id: 'software-solutions-implementation',
// //       title: 'Software Solutions Implementation',
// //       description: 'Implementing software solutions that enhance your business operations.',
// //       details: 'Our Software Solutions Implementation service helps you integrate the latest software applications that improve productivity and streamline operations. We handle everything from installation to configuration and training.'
// //     },
// //     {
// //       id: 'technology-integration',
// //       title: 'Technology Integration',
// //       description: 'Integrating new technologies seamlessly into your existing systems.',
// //       details: 'Technology Integration ensures that new technologies work harmoniously with your existing systems. We manage the integration process to minimize disruption and ensure a smooth transition to new tools and platforms.'
// //     },
// //     {
// //       id: 'business-process-improvement',
// //       title: 'Business Process Improvement',
// //       description: 'Improving business processes through effective use of technology.',
// //       details: 'Our Business Process Improvement service uses technology to enhance your business processes. We identify inefficiencies and implement solutions that streamline operations, reduce costs, and improve service delivery.'
// //     }
// //   ];

// //   const handleServiceClick = (service) => {
// //     setSelectedService(service);
// //     setFormData({
// //       ...formData,
// //       service: service.title
// //     });
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //     console.log(formData);
// //     alert("IT Consultancy service request submitted!");
// //   };

// //   return (
// //     <div>
// //       <HeroSection title="IT Consultancy Services" image={heroImage} />
// //       <div className="container p-8 mx-auto">
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
// //           <div>
// //             <h2 className="mb-4 text-3xl font-semibold">Optimize Your Business with Our IT Consultancy</h2>
// //             <p className="mb-4">Our IT consultancy services are designed to help businesses optimize their IT infrastructure, implement cutting-edge technology solutions, and develop strategic plans to achieve their business goals.</p>
            
// //             <h3 className="mb-3 text-2xl font-semibold">Our IT Consultancy Services Include:</h3>
// //             <div className="grid grid-cols-1 gap-4">
// //               {services.map((service) => (
// //                 <div
// //                   key={service.id}
// //                   className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${selectedService?.id === service.id ? 'border-blue-500' : 'border-gray-300'}`}
// //                   onClick={() => handleServiceClick(service)}
// //                 >
// //                   <h4 className="text-xl font-bold">{service.title}</h4>
// //                   <p className="text-gray-600">{service.description}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             {selectedService && (
// //               <div className="p-6 mt-8 bg-gray-100 rounded-lg">
// //                 <h4 className="text-2xl font-bold">{selectedService.title}</h4>
// //                 <p className="text-gray-700">{selectedService.details}</p>
// //               </div>
// //             )}
// //           </div>
          
// //           <div className="p-6 bg-white rounded-lg shadow-lg">
// //             <h3 className="mb-4 text-2xl font-semibold">Request IT Consultancy Information</h3>
// //             <form onSubmit={handleSubmit}>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
// //                   Phone
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="service">
// //                   IT Consultancy Service
// //                 </label>
// //                 <select
// //                   name="service"
// //                   value={formData.service}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 >
// //                   <option value="" disabled>Select a service</option>
// //                   {services.map((service) => (
// //                     <option key={service.id} value={service.title}>{service.title}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
// //                   Preferred Date
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="date"
// //                   value={formData.date}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 />
// //               </div>
// //               <div className="mb-4">
// //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
// //                   Preferred Time
// //                 </label>
// //                 <input
// //                   type="time"
// //                   name="time"
// //                   value={formData.time}
// //                   onChange={handleChange}
// //                   className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// //                   required
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
// //               >
// //                 Submit Request
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ITConsultancy;


// import React, { useReducer } from 'react';
// import HeroSection from '../components/HeroSection';
// import heroImage from '../assets/optimized-hero/networksetupsupport-1152.jpg'; // Ensure you have a relevant image

// const initialState = {
//   name: '',
//   email: '',
//   phone: '',
//   service: '',
//   date: '',
//   time: '',
//   errors: {},
//   isSubmitting: false,
//   submitSuccess: false,
//   submitError: ''
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'HANDLE_CHANGE':
//       return {
//         ...state,
//         [action.field]: action.value,
//         errors: { ...state.errors, [action.field]: '' }
//       };
//     case 'SET_ERRORS':
//       return {
//         ...state,
//         errors: action.errors
//       };
//     case 'SUBMIT_START':
//       return {
//         ...state,
//         isSubmitting: true,
//         submitSuccess: false,
//         submitError: ''
//       };
//     case 'SUBMIT_SUCCESS':
//       return {
//         ...state,
//         isSubmitting: false,
//         submitSuccess: true,
//         // Optionally reset form fields
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         date: '',
//         time: ''
//       };
//     case 'SUBMIT_ERROR':
//       return {
//         ...state,
//         isSubmitting: false,
//         submitError: action.error
//       };
//     default:
//       return state;
//   }
// };

// const ITConsultancy = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const services = [
//     // ... (same as your original services array)
//   ];

//   const handleServiceClick = (service) => {
//     dispatch({ type: 'HANDLE_CHANGE', field: 'service', value: service.title });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!state.name.trim()) errors.name = 'Name is required';
//     if (!state.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(state.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!state.phone.trim()) errors.phone = 'Phone is required';
//     if (!state.service) errors.service = 'Please select a service';
//     if (!state.date) errors.date = 'Preferred date is required';
//     if (!state.time) errors.time = 'Preferred time is required';
//     return errors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: 'HANDLE_CHANGE', field: name, value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length > 0) {
//       dispatch({ type: 'SET_ERRORS', errors });
//       return;
//     }

//     dispatch({ type: 'SUBMIT_START' });

//     try {
//       // Replace with your actual form submission logic (e.g., API call)
//       await fakeApiCall(state);
//       dispatch({ type: 'SUBMIT_SUCCESS' });
//       alert("IT Consultancy service request submitted!");
//     } catch (error) {
//       dispatch({ type: 'SUBMIT_ERROR', error: 'Submission failed. Please try again.' });
//     }
//   };

//   // Fake API call for demonstration purposes
//   const fakeApiCall = (data) =>
//     new Promise((resolve) => setTimeout(() => resolve(data), 2000));

//   return (
//     <div>
//       <HeroSection title="IT Consultancy Services" image={heroImage} />
//       <div className="container p-8 mx-auto">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div>
//             <h2 className="mb-4 text-3xl font-semibold">Optimize Your Business with Our IT Consultancy</h2>
//             <p className="mb-4">
//               Our IT consultancy services are designed to help businesses optimize their IT infrastructure,
//               implement cutting-edge technology solutions, and develop strategic plans to achieve their business goals.
//             </p>

//             <h3 className="mb-3 text-2xl font-semibold">Our IT Consultancy Services Include:</h3>
//             <div className="grid grid-cols-1 gap-4">
//               {services.map((service) => (
//                 <div
//                   key={service.id}
//                   className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
//                     state.service === service.title ? 'border-blue-500' : 'border-gray-300'
//                   }`}
//                   onClick={() => handleServiceClick(service)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter') handleServiceClick(service);
//                   }}
//                 >
//                   <h4 className="text-xl font-bold">{service.title}</h4>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               ))}
//             </div>

//             {state.service && (
//               <div className="p-6 mt-8 bg-gray-100 rounded-lg">
//                 <h4 className="text-2xl font-bold">{services.find(s => s.title === state.service).title}</h4>
//                 <p className="text-gray-700">
//                   {services.find(s => s.title === state.service).details}
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-4 text-2xl font-semibold">Request IT Consultancy Information</h3>
//             <form onSubmit={handleSubmit} noValidate>
//               {/* Name Field */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={state.name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.name ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.name ? 'true' : 'false'}
//                   aria-describedby={state.errors.name ? 'name-error' : null}
//                 />
//                 {state.errors.name && (
//                   <p className="mt-1 text-xs text-red-500" id="name-error">
//                     {state.errors.name}
//                   </p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={state.email}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.email ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.email ? 'true' : 'false'}
//                   aria-describedby={state.errors.email ? 'email-error' : null}
//                 />
//                 {state.errors.email && (
//                   <p className="mt-1 text-xs text-red-500" id="email-error">
//                     {state.errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={state.phone}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.phone ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.phone ? 'true' : 'false'}
//                   aria-describedby={state.errors.phone ? 'phone-error' : null}
//                 />
//                 {state.errors.phone && (
//                   <p className="mt-1 text-xs text-red-500" id="phone-error">
//                     {state.errors.phone}
//                   </p>
//                 )}
//               </div>

//               {/* Service Selection */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="service">
//                   IT Consultancy Service
//                 </label>
//                 <select
//                   name="service"
//                   id="service"
//                   value={state.service}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.service ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.service ? 'true' : 'false'}
//                   aria-describedby={state.errors.service ? 'service-error' : null}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   {services.map((service) => (
//                     <option key={service.id} value={service.title}>{service.title}</option>
//                   ))}
//                 </select>
//                 {state.errors.service && (
//                   <p className="mt-1 text-xs text-red-500" id="service-error">
//                     {state.errors.service}
//                   </p>
//                 )}
//               </div>

//               {/* Preferred Date */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
//                   Preferred Date
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   value={state.date}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.date ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.date ? 'true' : 'false'}
//                   aria-describedby={state.errors.date ? 'date-error' : null}
//                 />
//                 {state.errors.date && (
//                   <p className="mt-1 text-xs text-red-500" id="date-error">
//                     {state.errors.date}
//                   </p>
//                 )}
//               </div>

//               {/* Preferred Time */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
//                   Preferred Time
//                 </label>
//                 <input
//                   type="time"
//                   name="time"
//                   id="time"
//                   value={state.time}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border ${
//                     state.errors.time ? 'border-red-500' : 'border-gray-300'
//                   } rounded shadow focus:outline-none focus:shadow-outline`}
//                   required
//                   aria-invalid={state.errors.time ? 'true' : 'false'}
//                   aria-describedby={state.errors.time ? 'time-error' : null}
//                 />
//                 {state.errors.time && (
//                   <p className="mt-1 text-xs text-red-500" id="time-error">
//                     {state.errors.time}
//                   </p>
//                 )}
//               </div>

//               {/* Submission Feedback */}
//               {state.submitError && (
//                 <p className="mb-4 text-xs text-red-500">{state.submitError}</p>
//               )}
//               {state.submitSuccess && (
//                 <p className="mb-4 text-xs text-green-500">Your request has been submitted successfully!</p>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//                 disabled={state.isSubmitting}
//               >
//                 {state.isSubmitting ? 'Submitting...' : 'Submit Request'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ITConsultancy;


import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/networksetupsupport-1152.jpg'; // Ensure you have a relevant image

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  errors: {},
  isSubmitting: false,
  submitSuccess: false,
  submitError: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
        submitSuccess: false,
        submitError: ''
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        submitSuccess: true,
        // Optionally reset form fields
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      };
    case 'SUBMIT_ERROR':
      return {
        ...state,
        isSubmitting: false,
        submitError: action.error
      };
    default:
      return state;
  }
};

const ITConsultancy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const services = [
    {
      id: 'it-strategy-development',
      title: 'IT Strategy Development',
      description: 'Developing a strategic IT roadmap that aligns with your business goals.',
      details: 'Our IT Strategy Development service involves analyzing your current IT infrastructure and aligning it with your business objectives. We create a strategic plan that ensures your IT investments support your long-term goals.'
    },
    {
      id: 'infrastructure-optimization',
      title: 'Infrastructure Optimization',
      description: 'Optimizing your IT infrastructure for better performance and cost-efficiency.',
      details: 'With Infrastructure Optimization, we assess your current IT setup and recommend changes that improve performance, reduce costs, and increase efficiency. This includes server consolidation, virtualization, and cloud migration strategies.'
    },
    {
      id: 'software-solutions-implementation',
      title: 'Software Solutions Implementation',
      description: 'Implementing software solutions that enhance your business operations.',
      details: 'Our Software Solutions Implementation service helps you integrate the latest software applications that improve productivity and streamline operations. We handle everything from installation to configuration and training.'
    },
    {
      id: 'technology-integration',
      title: 'Technology Integration',
      description: 'Integrating new technologies seamlessly into your existing systems.',
      details: 'Technology Integration ensures that new technologies work harmoniously with your existing systems. We manage the integration process to minimize disruption and ensure a smooth transition to new tools and platforms.'
    },
    {
      id: 'business-process-improvement',
      title: 'Business Process Improvement',
      description: 'Improving business processes through effective use of technology.',
      details: 'Our Business Process Improvement service uses technology to enhance your business processes. We identify inefficiencies and implement solutions that streamline operations, reduce costs, and improve service delivery.'
    }
  ];

  const handleServiceClick = (service) => {
    dispatch({ type: 'HANDLE_CHANGE', field: 'service', value: service.title });
  };

  const validate = () => {
    const errors = {};
    if (!state.name.trim()) errors.name = 'Name is required';
    if (!state.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = 'Email is invalid';
    }
    if (!state.phone.trim()) errors.phone = 'Phone is required';
    if (!state.service) errors.service = 'Please select a service';
    if (!state.date) errors.date = 'Preferred date is required';
    if (!state.time) errors.time = 'Preferred time is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'HANDLE_CHANGE', field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    dispatch({ type: 'SUBMIT_START' });

    try {
      // Replace with your actual form submission logic (e.g., API call)
      await fakeApiCall(state);
      dispatch({ type: 'SUBMIT_SUCCESS' });
      alert("IT Consultancy service request submitted!");
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error: 'Submission failed. Please try again.' });
    }
  };

  // Fake API call for demonstration purposes
  const fakeApiCall = (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), 2000));

  // Define the canonical URL for this page
  const canonicalUrl = 'https://bestcomputertec.com/business-solutions/it-consulting';

  return (
    <div>
      {/* Helmet for canonical URL */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <HeroSection title="IT Consultancy Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Optimize Your Business with Our IT Consultancy</h2>
            <p className="mb-4">
              Our IT consultancy services are designed to help businesses optimize their IT infrastructure,
              implement cutting-edge technology solutions, and develop strategic plans to achieve their business goals.
            </p>

            <h3 className="mb-3 text-2xl font-semibold">Our IT Consultancy Services Include:</h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                    state.service === service.title ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => handleServiceClick(service)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleServiceClick(service);
                  }}
                >
                  <h4 className="text-xl font-bold">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {state.service && (
              <div className="p-6 mt-8 bg-gray-100 rounded-lg">
                <h4 className="text-2xl font-bold">{services.find(s => s.title === state.service).title}</h4>
                <p className="text-gray-700">
                  {services.find(s => s.title === state.service).details}
                </p>
              </div>
            )}
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request IT Consultancy Information</h3>
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
                  value={state.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.name ? 'true' : 'false'}
                  aria-describedby={state.errors.name ? 'name-error' : null}
                />
                {state.errors.name && (
                  <p className="mt-1 text-xs text-red-500" id="name-error">
                    {state.errors.name}
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
                  value={state.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.email ? 'true' : 'false'}
                  aria-describedby={state.errors.email ? 'email-error' : null}
                />
                {state.errors.email && (
                  <p className="mt-1 text-xs text-red-500" id="email-error">
                    {state.errors.email}
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
                  value={state.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.phone ? 'true' : 'false'}
                  aria-describedby={state.errors.phone ? 'phone-error' : null}
                />
                {state.errors.phone && (
                  <p className="mt-1 text-xs text-red-500" id="phone-error">
                    {state.errors.phone}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="service">
                  IT Consultancy Service
                </label>
                <select
                  name="service"
                  id="service"
                  value={state.service}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.service ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.service ? 'true' : 'false'}
                  aria-describedby={state.errors.service ? 'service-error' : null}
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
                {state.errors.service && (
                  <p className="mt-1 text-xs text-red-500" id="service-error">
                    {state.errors.service}
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={state.date}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.date ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.date ? 'true' : 'false'}
                  aria-describedby={state.errors.date ? 'date-error' : null}
                />
                {state.errors.date && (
                  <p className="mt-1 text-xs text-red-500" id="date-error">
                    {state.errors.date}
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={state.time}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    state.errors.time ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={state.errors.time ? 'true' : 'false'}
                  aria-describedby={state.errors.time ? 'time-error' : null}
                />
                {state.errors.time && (
                  <p className="mt-1 text-xs text-red-500" id="time-error">
                    {state.errors.time}
                  </p>
                )}
              </div>

              {/* Submission Feedback */}
              {state.submitError && (
                <p className="mb-4 text-xs text-red-500">{state.submitError}</p>
              )}
              {state.submitSuccess && (
                <p className="mb-4 text-xs text-green-500">Your request has been submitted successfully!</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                disabled={state.isSubmitting}
              >
                {state.isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultancy;
