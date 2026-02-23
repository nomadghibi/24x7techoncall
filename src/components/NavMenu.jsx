
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavMenu = ({ handleMouseEnter, handleMouseLeave }) => {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    closeSubmenus();
    setMobileMenuOpen(false);
  }, [location]);

  const handleSubmenuToggle = (menu) => {
    if (menu === 'residential') {
      setResidentialOpen(!residentialOpen);
      setBusinessOpen(false);
    } else if (menu === 'business') {
      setBusinessOpen(!businessOpen);
      setResidentialOpen(false);
    }
  };

  const closeSubmenus = () => {
    setResidentialOpen(false);
    setBusinessOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmenuItemClick = () => {
    closeSubmenus();
    setMobileMenuOpen(false);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    closeSubmenus();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <nav className="fixed z-10 w-full p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center hover:underline">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <span className="ml-2 text-lg font-bold">Best Computer Tech LLC</span>
        </Link>
        <div className="hidden space-x-4 md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/about-us"
                className="hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMenuClick('/about-us')}
              >
                About Us
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setResidentialOpen(true)}
              onMouseLeave={closeSubmenus}
            >
              <button
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('/residential-services');
                }}
              >
                Residential Services
              </button>
              <div
                className={`absolute left-0 top-full bg-white shadow-lg z-10 w-max ${
                  residentialOpen ? 'block' : 'hidden'
                }`}
              >
                <Link to="/residential-support/pc-laptop-repairs" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>PC and Laptop Repairs</Link>
                <Link to="/residential-support/virus-malware-removal" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Virus and Malware Removal</Link>
                <Link to="/residential-support/software-troubleshooting" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Software Troubleshooting</Link>
                <Link to="/residential-support/data-recovery" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Data Recovery</Link>
                <Link to="/residential-support/network-setup-support" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Network Setup and Support</Link>
                <Link to="/residential-support/remote-support" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Remote Support</Link>
                <Link to="/residential-support/tech-consultation" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Personalized Tech Consultation</Link>
                <Link to="/residential-support/computer-training" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Computer Training</Link>
                <Link to="/residential-support/home-office-setup" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Home Office Setup</Link>
                <Link to="/residential-support/backup-data-protection" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Backup and Data Protection</Link>
                <Link to="/residential-support/cybersecurity-home" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Cybersecurity for Home Users</Link>
              </div>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={closeSubmenus}
            >
              <button
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('/business-services');
                }}
              >
                Business Solutions
              </button>
              <div
                className={`absolute left-0 top-full bg-white shadow-lg z-10 w-max ${
                  businessOpen ? 'block' : 'hidden'
                }`}
              >
                <Link to="/business-solutions/it-consulting" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>IT Consulting</Link>
                <Link to="/business-solutions/network-setup" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Network Setup</Link>
                <Link to="/business-solutions/managed-it-services" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Managed IT Services</Link>
                <Link to="/business-solutions/data-recovery" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Data Recovery</Link>
                <Link to="/business-solutions/cloud-solutions" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Cloud Solutions</Link>
                <Link to="/business-solutions/cybersecurity" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Cybersecurity</Link>
                <Link to="/business-solutions/it-support" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>IT Support</Link>
                <Link to="/business-solutions/business-continuity" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Business Continuity</Link>
                <Link to="/business-solutions/computer-training" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Computer Training</Link>
                <Link to="/business-solutions/digital-transformation" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSubmenuItemClick}>Digital Transformation</Link>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMenuClick('/contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/how-to"
                className="hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMenuClick('/how-to')}
              >
                How To
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:underline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMenuClick('/blog')}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <span>
            Call Us: <a href="tel:3219535199" className="text-blue-500 hover:underline">(321) 953-5199</a>
          </span>
        </div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="flex flex-col space-y-2 md:hidden">
          <Link to="/" className="px-4 py-2 hover:underline" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about-us" className="px-4 py-2 hover:underline" onClick={toggleMobileMenu}>About Us</Link>
          <button className="px-4 py-2 text-left hover:underline" onClick={() => handleSubmenuToggle('residential')}>Residential Services</button>
          {residentialOpen && (
            <div className="flex flex-col pl-4">
              <Link to="/residential-support/pc-laptop-repairs" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>PC and Laptop Repairs</Link>
              <Link to="/residential-support/virus-malware-removal" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Virus and Malware Removal</Link>
              <Link to="/residential-support/software-troubleshooting" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Software Troubleshooting</Link>
              <Link to="/residential-support/data-recovery" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Data Recovery</Link>
              <Link to="/residential-support/network-setup-support" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Network Setup and Support</Link>
              <Link to="/residential-support/remote-support" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Remote Support</Link>
              <Link to="/residential-support/tech-consultation" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Personalized Tech Consultation</Link>
              <Link to="/residential-support/computer-training" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Computer Training</Link>
              <Link to="/residential-support/home-office-setup" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Home Office Setup</Link>
              <Link to="/residential-support/backup-data-protection" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Backup and Data Protection</Link>
              <Link to="/residential-support/cybersecurity-home" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Cybersecurity for Home Users</Link>
            </div>
          )}
          <button className="px-4 py-2 text-left hover:underline" onClick={() => handleSubmenuToggle('business')}>Business Solutions</button>
          {businessOpen && (
            <div className="flex flex-col pl-4">
              <Link to="/business-solutions/it-consulting" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>IT Consulting</Link>
              <Link to="/business-solutions/network-setup" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Network Setup</Link>
              <Link to="/business-solutions/managed-it-services" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Managed IT Services</Link>
              <Link to="/business-solutions/data-recovery" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Data Recovery</Link>
              <Link to="/business-solutions/cloud-solutions" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Cloud Solutions</Link>
              <Link to="/business-solutions/cybersecurity" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Cybersecurity</Link>
              <Link to="/business-solutions/it-support" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>IT Support</Link>
              <Link to="/business-solutions/business-continuity" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Business Continuity</Link>
              <Link to="/business-solutions/computer-training" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Computer Training</Link>
              <Link to="/business-solutions/digital-transformation" className="px-4 py-2 hover:underline" onClick={handleSubmenuItemClick}>Digital Transformation</Link>
            </div>
          )}
          <Link to="/contact" className="px-4 py-2 hover:underline" onClick={toggleMobileMenu}>Contact</Link>
          <Link to="/how-to" className="px-4 py-2 hover:underline" onClick={toggleMobileMenu}>How To</Link>
          <Link to="/blog" className="px-4 py-2 hover:underline" onClick={toggleMobileMenu}>Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
