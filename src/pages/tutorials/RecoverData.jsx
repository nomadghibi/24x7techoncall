// import React from 'react';
// import HeroSection from '../../components/HeroSection';
// import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
// import heroImage from '../../assets/datarecovery.webp'; // Adjust the path according to your file structure

// function RecoverData() {
//   return (
//     <div>
//       <HeroSection title="How to Recover Lost Data" image={heroImage} />
//       <div className="container p-8 mx-auto">
//         <GoBackButtonWithArrow />
//         <h1 className="mb-4 text-4xl font-bold">How to Recover Lost Data</h1>
//         <p className="mb-4">Losing important data can be a stressful experience, but with the right tools and steps, you can often recover lost files. Follow these steps to recover lost data:</p>

//         <h2 className="mb-4 text-3xl font-semibold">Step 1: Stop Using the Affected Device</h2>
//         <p className="mb-4">To prevent overwriting the lost data, stop using the device immediately until you begin the recovery process.</p>

//         <h2 className="mb-4 text-3xl font-semibold">Step 2: Use Data Recovery Software</h2>
//         <ol className="mb-4 list-decimal list-inside">
//           <li>Download and install reputable data recovery software such as Recuva, EaseUS Data Recovery, or Disk Drill.</li>
//           <li>Run the software and follow the on-screen instructions to scan for recoverable files.</li>
//           <li>Preview the files found by the software to ensure they are intact and can be recovered.</li>
//         </ol>

//         <h2 className="mb-4 text-3xl font-semibold">Step 3: Recover the Data</h2>
//         <ol className="mb-4 list-decimal list-inside">
//           <li>Select the files you want to recover and choose a different location to save them (e.g., an external drive).</li>
//           <li>Complete the recovery process and verify that the files are accessible and not corrupted.</li>
//         </ol>

//         <h2 className="mb-4 text-3xl font-semibold">Step 4: Backup Your Data</h2>
//         <p className="mb-4">To avoid future data loss, regularly back up your important files to an external drive or cloud storage service.</p>

//         <h2 className="mb-4 text-3xl font-semibold">Tips for Successful Data Recovery</h2>
//         <ul className="mb-4 list-disc list-inside">
//           <li>Act quickly to increase the chances of successful recovery.</li>
//           <li>Use reliable and reputable data recovery software.</li>
//           <li>Avoid saving recovered files to the same drive where data loss occurred.</li>
//         </ul>

//         <p className="mb-4">By following these steps and tips, you can increase the likelihood of recovering lost data and safeguarding your important files in the future.</p>

  
//       </div>
//     </div>
//   );
// }

// export default RecoverData;
import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/datarecovery.webp'; // Adjust the path according to your file structure

function RecoverData() {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <HeroSection title="How to Recover Lost Data" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Recover Lost Data</h1>
        <p className="mb-4">Losing important data can be a stressful experience, but with the right tools and steps, you can often recover lost files. Follow these steps to recover lost data:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Stop Using the Affected Device</h2>
        <p className="mb-4">To prevent overwriting the lost data, stop using the device immediately until you begin the recovery process.</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Use Data Recovery Software</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Download and install reputable data recovery software such as Recuva, EaseUS Data Recovery, or Disk Drill.</li>
          <li>Run the software and follow the on-screen instructions to scan for recoverable files.</li>
          <li>Preview the files found by the software to ensure they are intact and can be recovered.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Recover the Data</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Select the files you want to recover and choose a different location to save them (e.g., an external drive).</li>
          <li>Complete the recovery process and verify that the files are accessible and not corrupted.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Backup Your Data</h2>
        <p className="mb-4">To avoid future data loss, regularly back up your important files to an external drive or cloud storage service.</p>

        <h2 className="mb-4 text-3xl font-semibold">Tips for Successful Data Recovery</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Act quickly to increase the chances of successful recovery.</li>
          <li>Use reliable and reputable data recovery software.</li>
          <li>Avoid saving recovered files to the same drive where data loss occurred.</li>
        </ul>

        <p className="mb-4">By following these steps and tips, you can increase the likelihood of recovering lost data and safeguarding your important files in the future.</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with data recovery, we're here to help!</p>
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

export default RecoverData;
