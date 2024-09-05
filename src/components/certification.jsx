import React, { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import Java1 from '../img/certificate/Java1.jpg';
import Java2 from '../img/certificate/Java2.jpg';
import Java3 from '../img/certificate/Java3.jpg';
import Javascript from '../img/certificate/Javascript.jpg';
import Html from '../img/certificate/Html.jpg';
import Css from '../img/certificate/Css.jpg';
import Datac from '../img/certificate/Data-c.jpg';
import Cricket from '../img/certificate/Cricket.jpg';
import Integra from '../img/certificate/Integra.jpg';
import Reskill from '../img/certificate/reskill.jpg';

const Certification = () => {
  // State to manage the selected filter
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  // Sample data for certificates
  const certificates = [
    { id: 1, img: Java1, category: 'JAVA' },
    { id: 2, img: Java2, category: 'JAVA' },
    { id: 3, img: Java3, category: 'JAVA' },
    { id: 4, img: Javascript, category: 'JAVASCRIPT' },
    { id: 5, img: Html, category: 'HTML' },
    { id: 6, img: Css, category: 'CSS' },
    { id: 7, img: Datac, category: 'NETWORKING' },
    { id: 8, img: Cricket, category: 'SPORTS' },
    { id: 9, img: Integra, category: 'INTEGRATION' },
    { id: 10, img: Reskill, category: 'PYTHON' },
  ];

  // Function to handle filter selection
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  // Function to get filtered certificates
  const getFilteredCertificates = () => {
    if (selectedFilter === 'ALL') {
      return certificates;
    } else {
      return certificates.filter(cert => cert.category.toUpperCase() === selectedFilter);
    }
  };

  return (
    <div className='bg-gray-300 p-4 h-fit py-2'>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <DescriptionIcon className=" text-red-500 mr-2"/> Certification Details
      </h2>
      <div>
        <div className='ml-4'>
          <ul>
            <li>Cisco Networking (11/2022 - 11/2022)</li>
            <li>Arch-A-Thon (03/2022)</li>
            <li>IoT HackFest (04/2022)</li>
            <li>Integra (07/2023 - 07/2023)</li>
            <li>Gallore RunnerUp of Cricket (02/02/2022)</li>
            <li>Gallore Champion of Cricket (02/02/2023)</li>
            <li>Gallore Champion of Volleyball (02/02/2023)</li>
            <li>Integra Certificate (08/07/2023)</li>
          </ul>
        </div>
        <div className='py-4 flex justify-center flex-col items-center'>
          <h2 className='py-4 font-extrabold'>Certificate Gallery</h2>
          <div className='flex gap-4 font-bold bg-white rounded-md py-1 px-4'>
            {['ALL', 'NETWORKING', 'HTML', 'CSS', 'JAVA', 'JAVASCRIPT', 'PYTHON'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter.toUpperCase())}
                className={`py-1 px-2 rounded-sm cursor-pointer hover:bg-blue-600 hover:text-white ${
                  selectedFilter === filter.toUpperCase() ? 'bg-blue-600 text-white' : ''
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Certificate Display Section */}
          <div className='mt-4 grid grid-cols-2 gap-4'>
            {getFilteredCertificates().map((cert) => (
              <div
                key={cert.id}
                className='bg-white p-2 rounded-md shadow-sm mb-2 transition-transform transform hover:scale-105'
              >
                <img src={cert.img} alt="" className='w-full h-auto rounded-md' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
