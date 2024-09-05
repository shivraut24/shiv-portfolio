import React from 'react'
import StarIcon from '@mui/icons-material/Star';


const Experience = () => {
  const experienceData = [
    {
      company: "Avatar ",
      address: "janakpurdham, nepal",
      designation: "As product manager",
      work: "-From 2012-2016 ",
    },

    {
      company: "Jeevan Jyoti Clinic ",
      address: "janakpurdham, nepal",
      designation: "As clinic manager",
      work: "-From 2017-2020 ",
    },


  ];
  return (
    <div className='bg-gray-300 p-4 '>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
      <StarIcon className="mr-2 text-red-500" />
      Experience Details
      </h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow transition-all duration-300 hover:shadow-lg">
            <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">

                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Company Name</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><h3 className="text-xl font-semibold text-red-500 mb-2">{exp.company}</h3></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">            <p className="text-gray-700 font-bold">{exp.address}</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Designation</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">            <p className="text-gray-600 text-sm mb-2">{exp.designation}</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Work</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">   <p className="text-gray-600 text-sm mb-2">{exp.work}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>



          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
