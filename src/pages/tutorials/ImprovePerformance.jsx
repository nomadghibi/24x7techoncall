import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/howtoimprove.webp'; // Adjust the path according to your file structure

function ImprovePerformance() {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <HeroSection title="How to Improve Computer Performance" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Improve Computer Performance</h1>
        <p className="mb-4">Improving computer performance can help you work more efficiently and enjoy a smoother user experience. Follow these steps to optimize your computer's performance:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Clean Up Your Hard Drive</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Remove unnecessary files and programs.</li>
          <li>Empty the Recycle Bin regularly.</li>
          <li>Use disk cleanup tools to remove temporary files and system cache.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Manage Startup Programs</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Open Task Manager (Ctrl+Shift+Esc) and go to the Startup tab.</li>
          <li>Disable programs that you don't need to start automatically when your computer boots up.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Update Your Software</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Ensure your operating system and all software are up to date.</li>
          <li>Install updates and patches regularly to improve performance and security.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Upgrade Your Hardware</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Consider adding more RAM to your computer.</li>
          <li>Upgrade to a solid-state drive (SSD) for faster data access and boot times.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 5: Run Regular Maintenance</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Run antivirus scans to remove malware and viruses.</li>
          <li>Defragment your hard drive if you're using a traditional HDD.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Additional Tips</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Keep your computer's cooling system clean and dust-free to prevent overheating.</li>
          <li>Restart your computer regularly to clear memory and close unnecessary processes.</li>
        </ul>

        <p className="mb-4">By following these steps, you can significantly improve your computer's performance and ensure it runs smoothly.</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with improving your computer's performance, we're here to help!</p>
          <button 
            onClick={handleContactUs} 
            className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImprovePerformance;

