import React from 'react'
import CircularProgressBar from './CircularProgressBar';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
 const Skill = () => {  
  const skills = [
  { name: 'Photoshop', level: 80 },
  { name: 'Flutter', level: 70 },
  { name: 'UI/UX Design', level: 60 },
  { name: 'Javascript', level: 50 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Laravel', level: 70 },
  { name: 'Php', level: 85 },
  { name: 'React', level: 100 },
];
  return (
    <div className='bg-gray-300 p-4 '>
    <h2 className="text-3xl font-bold text-gray-800 flex items-center">
      <WorkspacePremiumIcon className='text-red-500 mr-2'/> Skill Details
    </h2>
    <div className="flex flex-col items-center justify-center min-h-screen -mt-20  ">
      <p className="text-center mb-2 ">
        Although highly skilled in numerous design disciplines I'm a dynamic and multi-skilled Web Developer with a passion for creating innovative designs, regardless of the brief!
      </p>
      <div className="flex justify-center space-x-2 mb-8 font-bold">
        <span className="text-center">Web Developer with</span>
        <span className="text-center">UI/UX Design Skill</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 bg-red-200 rounded-lg p-4">
        {skills.map((skill, index) => (
          <CircularProgressBar key={index} percentage={skill.level} label={skill.name} />
        ))}
      </div>
      </div>
  </div>
  )
}
export default Skill

