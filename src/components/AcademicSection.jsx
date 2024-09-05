import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const AcademicSection = () => {
  const educationData = [
    {
      level: "B.Tech",
      institution: "RK University",
      passedyear: "-Passed in 2082 B.S",
      address: "Bhavnagar Road,Tramba Rajkot Gujrat PinCode:-360020",
      percentage: "-With 7.5 SGPA "
    },
    {
      level: "12th",
      institution: "Model Multiple College",
      passedyear: "-Passed in 2075 B.S",
      address: "JanakpurDham Road,Madhesh Province,State-02 PinCode:-45600",
      percentage:"-With 8.5 SGPA "
    },
    {
      level: "10th",
      institution: "Siddhartha shishu sadan",
      passedyear: "-Passed in 2072 B.S",
      address: "JanakpurDham Road,Madhesh Province,State-02 PinCode:-45600",
      percentage: "-With 8.4 SGPA "
    }
  ];

  return (
    <div className='bg-gray-300 p-4'>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <SchoolIcon className="mr-2 text-red-500" />
        Academic Details
      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-2">{edu.level}</h3>
            <p className="text-gray-700 font-bold">{edu.institution}</p>
            <p className="text-gray-600 text-sm mb-2">{edu.address}</p>
            <p className="text-gray-700 font-sm">{edu.passedyear}</p>
            <p className="text-gray-600 text-sm mb-2">{edu.percentage}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicSection;
