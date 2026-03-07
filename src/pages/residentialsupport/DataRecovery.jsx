import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHdd, FaCompactDisc, FaServer, FaFileAlt, FaExclamationTriangle, FaBug, FaRedo, FaDatabase, FaTools, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/datarecovery2-1152.jpg';

const DataRecovery = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'hard-drive-recovery', title: 'Hard Drive Recovery', description: 'Recovering data from damaged or failing hard drives.', details: 'Our Hard Drive Recovery services include physical damage recovery, logical damage recovery, data extraction, file system repair, and bad sector recovery.', icon: FaHdd },
    { id: 'ssd-recovery', title: 'SSD Recovery', description: 'Retrieving data from solid-state drives.', details: 'Our SSD Recovery services cover flash memory recovery, firmware repair, data extraction, controller repair, and bad block management.', icon: FaCompactDisc },
    { id: 'raid-recovery', title: 'RAID Recovery', description: 'Specialized recovery for RAID arrays.', details: 'Our RAID Recovery services include RAID 0, 1, 5, 6, 10 recovery, RAID controller repair, data reconstruction, parity reconstruction, and logical damage repair.', icon: FaServer },
    { id: 'deleted-file-recovery', title: 'Deleted File Recovery', description: 'Restoring files that have been accidentally deleted.', details: 'Our Deleted File Recovery services offer recycle bin recovery, shift+delete recovery, formatted drive recovery, partition recovery, and file signature search.', icon: FaFileAlt },
    { id: 'formatted-drive-recovery', title: 'Formatted Drive Recovery', description: 'Recovering data from formatted drives.', details: 'Our Formatted Drive Recovery services provide quick format recovery, full format recovery, file system reconstruction, data extraction, and partition table repair.', icon: FaExclamationTriangle },
    { id: 'virus-attack-recovery', title: 'Virus Attack Recovery', description: 'Retrieving data lost due to virus attacks.', details: 'Our Virus Attack Recovery services include virus removal, malware removal, data decryption, file repair, and system cleanup.', icon: FaBug },
    { id: 'os-failure-recovery', title: 'Operating System Failure Recovery', description: "Recovering data from systems that won't boot.", details: 'Our Operating System Failure Recovery services offer boot sector repair, system file repair, data extraction, OS reinstallation, and boot loader repair.', icon: FaRedo },
    { id: 'data-corruption-recovery', title: 'Data Corruption Recovery', description: 'Fixing and retrieving corrupted data.', details: 'Our Data Corruption Recovery services cover file system repair, database recovery, file repair, data integrity checks, and data extraction.', icon: FaDatabase },
    { id: 'backup-solutions', title: 'Backup Solutions', description: 'Implementing backup solutions to prevent future data loss.', details: 'Our Backup Solutions services include full system backup, incremental backup, cloud backup solutions, data restoration, and disaster recovery planning.', icon: FaDatabase },
    { id: 'consultation-support', title: 'Consultation and Support', description: 'Providing expert advice and ongoing support.', details: 'Our Consultation and Support services offer technical support, data recovery consultation, recovery planning, system analysis, and preventative measures.', icon: FaTools }
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
    console.log(formData);
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Data Recovery Services | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Expert data recovery services in Nationwide. We specialize in recovering lost data from hard drives, SSDs, RAID arrays, and more. Trust our certified technicians to restore your important files securely and efficiently." />
        <meta name="keywords" content="data recovery near me, hard drive recovery Palm Bay, SSD recovery Melbourne FL, RAID recovery, virus recovery, data restoration, lost data recovery, 24x7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/data-recovery" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Data Recovery Services | 24x7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Recover your lost data with 24x7 Tech On Call. Serving Nationwide, we specialize in data recovery from hard drives, SSDs, RAID arrays, and more." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/data-recovery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Recovery Services | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Expert data recovery services in Nationwide. We recover lost data from hard drives, SSDs, RAID arrays, and more." />
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
            <span className="text-gray-300">Data Recovery</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Data Recovery</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Recover lost or damaged data from hard drives, SSDs, RAID arrays, and more.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Data Recovery Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24x7 Tech On Call, we specialize in comprehensive data recovery services to retrieve your valuable data from damaged or corrupted storage devices. Our certified technicians are experienced in handling a wide range of data loss scenarios, ensuring your important files are recovered and secured.
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
              <p className="text-gray-400 mb-8">Data recovery pricing depends on the type of storage and severity of damage. Contact us today for an accurate assessment and quote.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Data Recovery Needs</h3>
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
                  <label className={labelClass}>Type of Service</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass} required>
                    <option value="" disabled>Select a service type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of Your Data Recovery Needs</label>
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
                24x7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient data recovery services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote services locally, and remote services across the USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the data loss issue you\'re experiencing.', 'Receive a free diagnostic and cost estimate.', 'Schedule a service appointment.', 'Our technicians diagnose and recover your data.', 'Pick up your device with your data safely restored.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Lost Important Data?</h2>
          <p className="text-gray-400 mb-6">
            Our data recovery specialists nationwide can help retrieve your valuable files from any storage device.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataRecovery;
