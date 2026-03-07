import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaDesktop, FaTools, FaChalkboardTeacher, FaDatabase, FaNetworkWired, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/computer-training-1152.jpg';

const ComputerTraining = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    serviceDeliveryMethod: '',
    problem: ''
  });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'basic-computer-skills', title: 'Basic Computer Skills', description: 'Introduction to computer basics and operating systems.', details: 'Our Basic Computer Skills training covers operating system navigation, file management, internet browsing, email setup and use, and basic troubleshooting.', icon: FaDesktop },
    { id: 'software-training', title: 'Software Training', description: 'Training on various software applications and tools.', details: 'Our Software Training includes introduction to software applications, using office productivity suites, graphic design software basics, software installation and configuration, and troubleshooting software issues.', icon: FaTools },
    { id: 'internet-email', title: 'Internet and Email', description: 'Navigating the internet and managing email accounts.', details: 'Our Internet and Email training covers browsing the web safely, managing email accounts, using search engines effectively, understanding internet security, and configuring email clients.', icon: FaChalkboardTeacher },
    { id: 'security-privacy', title: 'Security and Privacy', description: 'Best practices for online security and privacy.', details: 'Our Security and Privacy training includes protecting personal information, setting strong passwords, recognizing phishing attempts, using antivirus software, and securing online transactions.', icon: FaChalkboardTeacher },
    { id: 'advanced-skills', title: 'Advanced Skills', description: 'Advanced training for more experienced users.', details: 'Our Advanced Skills training covers advanced Excel functions, database management, network configuration, advanced troubleshooting, and system optimization techniques.', icon: FaDesktop },
    { id: 'microsoft-office', title: 'Microsoft Office', description: 'Training on Word, Excel, PowerPoint, and more.', details: 'Our Microsoft Office training includes Word document formatting, Excel data analysis, PowerPoint presentation design, Outlook email management, and Access database creation.', icon: FaTools },
    { id: 'creative-software', title: 'Creative Software', description: 'Training on graphic design and video editing software.', details: 'Our Creative Software training covers introduction to Photoshop, video editing with Premiere Pro, creating graphics with Illustrator, basic animation techniques, and designing layouts with InDesign.', icon: FaTools },
    { id: 'data-management', title: 'Data Management', description: 'Effective data management and organization techniques.', details: 'Our Data Management training covers organizing digital files, using cloud storage solutions, data backup strategies, database management basics, and ensuring data security.', icon: FaDatabase },
    { id: 'remote-work-tools', title: 'Remote Work Tools', description: 'Training on tools for remote work and collaboration.', details: 'Our Remote Work Tools training includes using video conferencing tools, collaborating with team members, managing remote projects, ensuring remote work security, and optimizing remote work productivity.', icon: FaNetworkWired },
    { id: 'customized-training', title: 'Customized Training', description: 'Tailored sessions to meet specific learning goals.', details: 'Our Customized Training includes personalized learning plans, one-on-one training sessions, customized training materials, flexible training schedules, and goal-oriented training outcomes.', icon: FaChalkboardTeacher }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) setSelectedService(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Thanks! Your training request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
    setFormData({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Computer Training Services | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Improve your computer skills with our comprehensive training services in Nationwide. We offer personalized training for all ages, including senior citizens, covering everything from basic computer usage to advanced software and online security training." />
        <meta name="keywords" content="computer training near me, IT training Palm Bay, senior citizen computer training Melbourne FL, software training, online security training, data management, computer classes for seniors, 24x7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/computer-training" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Computer Training Services | 24x7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Enhance your computer skills with 24x7 Tech On Call. Serving Nationwide, we offer tailored training for all ages, including senior citizens." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/computer-training" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Training Services | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Comprehensive computer training services in Nationwide for all ages." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/residential-support" className="hover:text-white transition-colors">Residential Support</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Computer Training</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Computer Training</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Personalized one-on-one training for all skill levels — from beginners to advanced users.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Computer Training Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24x7 Tech On Call, we specialize in comprehensive computer training services to enhance your technical skills. Our certified trainers provide personalized training sessions tailored to your needs, ensuring you gain the knowledge and confidence to use your computer effectively.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-6">Click any service to learn more</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-cyan-200 transition-all service-card overflow-hidden"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6">
                  <div className="w-11 h-11 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-xl text-cyan-500" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
                {selectedService?.id === service.id && (
                  <div className="px-6 pb-6 pt-3 border-t border-cyan-100 bg-cyan-50">
                    <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + Form */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-center">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Affordable Pricing</p>
              <p className="text-6xl font-bold mb-1">$95</p>
              <p className="text-gray-400 text-lg mb-4">Starting price</p>
              <p className="text-gray-400 mb-8">Our computer training sessions are personalized and affordably priced. Contact us for a custom quote based on your training needs and schedule.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Training Needs</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Phone No.</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Type of Training</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass} required>
                    <option value="" disabled>Select a training type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Service Delivery Method</label>
                  <select name="serviceDeliveryMethod" value={formData.serviceDeliveryMethod} onChange={handleChange} className={inputClass} required>
                    <option value="">Select a delivery method</option>
                    <option value="remote-service">Remote Service</option>
                    <option value="onsite-service">Onsite Service</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of Your Training Needs</label>
                  <textarea name="problem" value={formData.problem} onChange={handleChange} rows={4} className={inputClass} required />
                </div>
                <button type="submit" className="w-full bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info: Serving + Steps */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & Beyond</h3>
              </div>
              <p className="text-gray-600">
                For more than two decades, 24x7 Tech On Call has served clients across the entire United States, and nationwide. Our trainers deliver personalized and efficient training solutions for individuals of all ages and skill levels — including senior citizens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the computer training you\'re seeking.', 'Receive a quote for the training sessions.', 'Schedule a personalized training session.', 'Our trainers guide you step by step at your own pace.', 'Receive follow-up support and additional sessions as needed.'].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-400 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Ready to Learn?</h2>
          <p className="text-gray-400 mb-6">
            Our patient and knowledgeable trainers nationwide are ready to help you master your computer at your own pace.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComputerTraining;
