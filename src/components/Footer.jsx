import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 text-center text-white bg-gray-800">
      <p>&copy; 2009-{currentYear} Best Computer Tech. All rights reserved.</p>
      <p>Follow us on <a href="#" className="text-blue-500 hover:underline">Facebook</a>, <a href="#" className="text-blue-500 hover:underline">Twitter</a>, and <a href="#" className="text-blue-500 hover:underline">Instagram</a></p>
    </footer>
  );
}

export default Footer;
