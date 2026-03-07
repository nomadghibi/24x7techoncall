import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLaptop, FaKeyboard, FaBatteryFull, FaHdd, FaMemory, FaMicrochip, FaFan, FaPlug, FaShieldAlt, FaTools, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/hardwarerepairs-1152.jpg';

const PcLaptopRepairs = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repairType: '',
    problem: ''
  });

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'screen-replacement', title: 'Screen Replacement', description: 'Fixing broken or damaged laptop screens.', details: 'Our Screen Replacement services include broken screen repair, display issues fix, screen replacement, touchscreen repair, and pixel dead removal.', icon: FaLaptop },
    { id: 'keyboard-replacement', title: 'Keyboard Replacement', description: 'Repairing or replacing malfunctioning keyboards.', details: 'Our Keyboard Replacement services include keyboard keys replacement, keyboard backlight fix, keyboard layout change, water damage repair, and keyboard configuration.', icon: FaKeyboard },
    { id: 'battery-replacement', title: 'Battery Replacement', description: 'Installing new batteries for extended device life.', details: 'Our Battery Replacement services include battery health check, battery replacement, charging issues fix, battery calibration, and power management.', icon: FaBatteryFull },
    { id: 'hard-drive-replacement', title: 'Hard Drive Replacement', description: 'Upgrading or replacing faulty hard drives.', details: 'Our Hard Drive Replacement services include hard drive upgrade, data recovery, faulty drive replacement, SSD upgrade, and storage configuration.', icon: FaHdd },
    { id: 'ram-upgrade', title: 'RAM Upgrade', description: 'Enhancing performance with additional memory.', details: 'Our RAM Upgrade services include memory upgrade, performance enhancement, RAM configuration, compatibility check, and system optimization.', icon: FaMemory },
    { id: 'motherboard-repair', title: 'Motherboard Repair', description: 'Diagnosing and fixing motherboard issues.', details: 'Our Motherboard Repair services include component repair, power issues fix, BIOS update, hardware diagnostics, and performance optimization.', icon: FaMicrochip },
    { id: 'cooling-system-repair', title: 'Cooling System Repair', description: 'Ensuring efficient cooling to prevent overheating.', details: 'Our Cooling System Repair services include fan replacement, thermal paste application, overheating fix, cooling system upgrade, and temperature monitoring.', icon: FaFan },
    { id: 'power-supply-replacement', title: 'Power Supply Replacement', description: 'Fixing issues with the power supply unit.', details: 'Our Power Supply Replacement services include PSU replacement, power issues diagnostics, cable management, voltage regulation, and power optimization.', icon: FaPlug },
    { id: 'virus-malware-removal', title: 'Virus and Malware Removal', description: 'Removing harmful software to protect your data.', details: 'Our Virus and Malware Removal services include virus removal, malware cleanup, security software installation, system scan, and data protection.', icon: FaShieldAlt },
    { id: 'software-troubleshooting', title: 'Software Troubleshooting', description: 'Fixing software issues and reinstalling operating systems.', details: 'Our Software Troubleshooting services include OS reinstallation, software updates, error fixes, application configuration, and system optimization.', icon: FaTools }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) {
      setSelectedService(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
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
        alert('Thanks! Your repair request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
    setFormData({ name: '', phone: '', email: '', repairType: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>PC and Laptop Repairs | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Get expert PC and laptop repair services in Nationwide. We specialize in screen replacement, keyboard repair, virus removal, and more. Any brand, any problem, we fix it all!" />
        <meta name="keywords" content="PC repair near me, laptop repair near me, computer repair Palm Bay, computer repair Melbourne FL, screen replacement, keyboard repair, battery replacement, virus removal, Windows repair, Mac repair, free diagnostic" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/pc-laptop-repairs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PC and Laptop Repairs | 24/7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Professional PC and laptop repair services including virus removal, screen replacement, and more. Serving Nationwide for over 20 years." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/pc-laptop-repairs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PC and Laptop Repairs | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Expert PC and laptop repairs in Nationwide. We fix any brand, any problem. Free diagnostic available." />
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
            <span className="text-gray-300">PC & Laptop Repairs</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">PC and Laptop Repairs</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Any brand, any problem — our certified technicians fix it all with free diagnostics.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert PC and Laptop Repairs</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we specialize in comprehensive PC and laptop repairs for any brand and any problem, serving Nationwide, for over 20 years. Whether it's a Windows or Mac, our certified technicians provide free diagnostics and are equipped to fix it all, ensuring your device is restored to peak performance quickly and efficiently.
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
              <p className="text-gray-400 mb-8">Our PC and laptop repair services are competitively priced for the Space Coast area. Contact us today for an exact quote based on your specific repair needs.</p>
              <Link
                to="/contact"
                className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Repair Needs</h3>
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
                  <label className={labelClass}>Type of Repair</label>
                  <select name="repairType" value={formData.repairType} onChange={handleChange} className={inputClass} required>
                    <option value="" disabled>Select a repair type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of the Problem</label>
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
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & Space Coast</h3>
              </div>
              <p className="text-gray-600 mb-3">
                24/7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient PC and laptop repair services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, and provide remote services across the USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the issue you\'re experiencing.', 'Receive a free diagnostic and cost estimate.', 'Schedule a repair appointment.', 'Our technicians diagnose and repair your device.', 'Pick up your fully repaired device.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Ready to Get Your Device Fixed?</h2>
          <p className="text-gray-400 mb-6">
            Our certified technicians nationwide are ready to diagnose and repair any issue — fast, affordable, and reliable.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PcLaptopRepairs;
