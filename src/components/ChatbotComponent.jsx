
// import React, { useState, useMemo } from 'react';
// import { ThemeProvider } from 'styled-components';
// import ChatBot from 'react-simple-chatbot';
// import { AiOutlineClose } from 'react-icons/ai';
// import { FaComments } from 'react-icons/fa';

// const ChatbotComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Memoize the steps so they don't get re-initialized on every render
//   const steps = useMemo(() => {
//     console.log('Initializing chatbot steps');
//     return [
//       {
//         id: '1',
//         message: 'Welcome to Best Computer Tech! Are you looking for residential computer help or business solutions service?',
//         trigger: '2',
//       },
//       {
//         id: '2',
//         options: [
//           { value: 'residential', label: 'Residential Computer Help', trigger: 'residential-services' },
//           { value: 'business', label: 'Business Solutions Service', trigger: 'business-services' },
//         ],
//       },
//       {
//         id: 'residential-services',
//         message: 'We offer the following residential services:',
//         trigger: 'residential-options',
//       },
//       {
//         id: 'residential-options',
//         options: [
//           { value: 'hardware-repairs', label: 'Hardware Repairs', trigger: 'hardware-repairs' },
//           { value: 'software-troubleshooting', label: 'Software Troubleshooting', trigger: 'software-troubleshooting' },
//           { value: 'virus-removal', label: 'Virus and Malware Removal', trigger: 'virus-removal' },
//           { value: 'network-setup', label: 'Network Setup and Support', trigger: 'network-setup' },
//           { value: 'data-recovery', label: 'Data Recovery', trigger: 'data-recovery' },
//         ],
//       },
//       {
//         id: 'hardware-repairs',
//         message: 'We fix broken screens, malfunctioning keyboards, and other hardware issues. Contact us to get your device repaired!',
//         end: true,
//       },
//       {
//         id: 'software-troubleshooting',
//         message: 'We resolve operating system errors, application crashes, and software installation issues. Reach out to us for software troubleshooting!',
//         end: true,
//       },
//       {
//         id: 'virus-removal',
//         message: 'We protect your computer from harmful viruses and ensure your data is safe. Let us help you with virus and malware removal!',
//         end: true,
//       },
//       {
//         id: 'network-setup',
//         message: 'We set up and maintain secure and efficient home networks. Contact us for network setup and support!',
//         end: true,
//       },
//       {
//         id: 'data-recovery',
//         message: 'We retrieve lost or corrupted data from hard drives and other storage devices. Get in touch for data recovery services!',
//         end: true,
//       },
//       {
//         id: 'business-services',
//         message: 'We offer the following business solutions:',
//         trigger: 'business-options',
//       },
//       {
//         id: 'business-options',
//         options: [
//           { value: 'network-setup', label: 'Network Setup and Support', trigger: 'business-network-setup' },
//           { value: 'data-recovery', label: 'Data Recovery', trigger: 'business-data-recovery' },
//           { value: 'it-consulting', label: 'IT Consulting', trigger: 'it-consulting' },
//           { value: 'cloud-solutions', label: 'Cloud Solutions', trigger: 'cloud-solutions' },
//         ],
//       },
//       {
//         id: 'business-network-setup',
//         message: 'We set up and maintain secure and efficient office networks. Contact us for business network setup and support!',
//         end: true,
//       },
//       {
//         id: 'business-data-recovery',
//         message: 'We retrieve lost or corrupted business data from servers and storage devices. Get in touch for business data recovery services!',
//         end: true,
//       },
//       {
//         id: 'it-consulting',
//         message: 'We provide IT consulting services to help your business grow and stay competitive. Contact us for expert IT consulting!',
//         end: true,
//       },
//       {
//         id: 'cloud-solutions',
//         message: 'We offer cloud solutions to optimize your business operations. Reach out to us for cloud consulting and support!',
//         end: true,
//       },
//     ];
//   }, []); // Dependency array is empty to ensure steps are only created once

//   const theme = {
//     background: '#ffffff',
//     fontFamily: 'Arial, Helvetica, sans-serif',
//     headerBgColor: '#2563eb',
//     headerFontColor: '#ffffff',
//     headerFontSize: '18px',
//     botBubbleColor: '#2563eb',
//     botFontColor: '#ffffff',
//     userBubbleColor: '#f3f4f6',
//     userFontColor: '#000000',
//   };

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button
//         onClick={toggleChatbot}
//         className={`fixed bottom-6 right-6 bg-cyan-500 text-gray-900 p-4 rounded-full shadow-lg hover:bg-cyan-400 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
//       >
//         {isOpen ? <AiOutlineClose size={24} /> : <FaComments size={24} />}
//       </button>

//       {isOpen && (
//         <div className="fixed h-auto transition-transform duration-500 transform scale-100 bg-white rounded-lg shadow-lg bottom-20 right-6 w-80">
//           <ThemeProvider theme={theme}>
//             <ChatBot steps={steps} />
//           </ThemeProvider>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotComponent;


import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { AiOutlineClose } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Memoize the steps so they don't get re-initialized on every render
  const steps = useMemo(() => {
    return [
      {
        id: '1',
        message: 'Welcome to Best Computer Tech! Are you looking for residential computer help or business solutions service?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 'residential', label: 'Residential Computer Help', trigger: 'residential-services' },
          { value: 'business', label: 'Business Solutions Service', trigger: 'business-services' },
        ],
      },
      {
        id: 'residential-services',
        message: 'We offer the following residential services:',
        trigger: 'residential-options',
      },
      {
        id: 'residential-options',
        options: [
          { value: 'hardware-repairs', label: 'Hardware Repairs', trigger: 'hardware-repairs' },
          { value: 'software-troubleshooting', label: 'Software Troubleshooting', trigger: 'software-troubleshooting' },
          { value: 'virus-removal', label: 'Virus and Malware Removal', trigger: 'virus-removal' },
          { value: 'network-setup', label: 'Network Setup and Support', trigger: 'network-setup' },
          { value: 'data-recovery', label: 'Data Recovery', trigger: 'data-recovery' },
        ],
      },
      {
        id: 'hardware-repairs',
        message: 'We fix broken screens, malfunctioning keyboards, and other hardware issues. Contact us to get your device repaired!',
        end: true,
      },
      {
        id: 'software-troubleshooting',
        message: 'We resolve operating system errors, application crashes, and software installation issues. Reach out to us for software troubleshooting!',
        end: true,
      },
      {
        id: 'virus-removal',
        message: 'We protect your computer from harmful viruses and ensure your data is safe. Let us help you with virus and malware removal!',
        end: true,
      },
      {
        id: 'network-setup',
        message: 'We set up and maintain secure and efficient home networks. Contact us for network setup and support!',
        end: true,
      },
      {
        id: 'data-recovery',
        message: 'We retrieve lost or corrupted data from hard drives and other storage devices. Get in touch for data recovery services!',
        end: true,
      },
      {
        id: 'business-services',
        message: 'We offer the following business solutions:',
        trigger: 'business-options',
      },
      {
        id: 'business-options',
        options: [
          { value: 'network-setup', label: 'Network Setup and Support', trigger: 'business-network-setup' },
          { value: 'data-recovery', label: 'Data Recovery', trigger: 'business-data-recovery' },
          { value: 'it-consulting', label: 'IT Consulting', trigger: 'it-consulting' },
          { value: 'cloud-solutions', label: 'Cloud Solutions', trigger: 'cloud-solutions' },
        ],
      },
      {
        id: 'business-network-setup',
        message: 'We set up and maintain secure and efficient office networks. Contact us for business network setup and support!',
        end: true,
      },
      {
        id: 'business-data-recovery',
        message: 'We retrieve lost or corrupted business data from servers and storage devices. Get in touch for business data recovery services!',
        end: true,
      },
      {
        id: 'it-consulting',
        message: 'We provide IT consulting services to help your business grow and stay competitive. Contact us for expert IT consulting!',
        end: true,
      },
      {
        id: 'cloud-solutions',
        message: 'We offer cloud solutions to optimize your business operations. Reach out to us for cloud consulting and support!',
        end: true,
      },
    ];
  }, []); // Dependency array is empty to ensure steps are only created once

  // MutationObserver to observe changes in the chatbot's DOM
  useEffect(() => {
    const targetNode = document.querySelector('.rsc-container'); // Update with the correct selector for your chatbot container

    if (targetNode) {
      const config = { childList: true, subtree: true };
      const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            console.log('A child node has been added or removed:', mutation);
          }
        }
      };

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);

      return () => observer.disconnect(); // Clean up observer when the component unmounts
    }
  }, [isOpen]);

  const theme = {
    background: '#ffffff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#2563eb',
    headerFontColor: '#ffffff',
    headerFontSize: '18px',
    botBubbleColor: '#2563eb',
    botFontColor: '#ffffff',
    userBubbleColor: '#f3f4f6',
    userFontColor: '#000000',
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-6 right-6 bg-cyan-500 text-gray-900 p-4 rounded-full shadow-lg hover:bg-cyan-400 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <FaComments size={24} />}
      </button>

      {isOpen && (
        <div className="fixed h-auto transition-transform duration-500 transform scale-100 bg-white rounded-lg shadow-lg bottom-20 right-6 w-80">
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
