

import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import Interview from '../img/interview-image.jpg';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AcademicSection from './AcademicSection';

const Portfolio = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const designations = [
    "Web Developer",
    "Ui/Ux Designer",
    "App Developer",
    "Photographer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % designations.length;
      const fullText = designations[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 300);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className='bg-myColor-navcolor'>
      <Nav />
      <div className='h-screen w-[80%] mx-auto  flex justify-between'>
        {/* Left sidebar */}
        <aside className=' h-screen w-[30%] '>
          <div className='fixed bg-black h-screen  w-[300px]'>
          <div >
            <img src={Interview} alt="" className='h-72 w-[100%] object-cover object-top' />
            </div>
          <div>
            <ul className='text-white text-md flex flex-col gap-1'>
              <li className='w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500'>
                <a href="" className='w-full h-[100%]'>Home</a>
                <HomeIcon className='text-red-500 absolute right-0' />
              </li> <hr />

              <li className='w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500'>
                <a href="" className='w-full h-[100%]'>Academic</a>
                <SchoolIcon className='text-red-500 absolute right-0' />
              </li> <hr />

              <li className='w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500'>
                <a href="" className='w-full h-[100%]'>Experience</a>
                <StarIcon className='text-red-500 absolute right-0' />
              </li> <hr />

              <li className='w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500'>
                <a href="" className='w-full h-[100%]'>Skill</a>
                <WorkspacePremiumIcon className='text-red-500 absolute right-0' />
              </li> <hr />

              <li className='w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500'>
                <a href="" className='w-full h-[100%]'>Certification</a>
                <DescriptionIcon className='text-red-500 absolute right-0' />
              </li> <hr />

            </ul>
          </div>
          </div>

        </aside>

        {/* main home content */}
        <aside className=' h-screen w-[67%] py-8 flex flex-col gap-8'>
          <div className='bg-gray-300 h-auto w-full'>
            <div className='px-4 py-24'>
              <p className='text-red-500 text-2xl'>I'm</p>
              <h1 className='text-black text-4xl font-extrabold'>SHIV RAJ RAUT</h1>
              <div className='h-8 overflow-hidden'>
                <p className='text-2xl text-gray-600'>
                  {text}
                  <span className='animate-blink'>|</span>
                </p>
              </div>
            </div>
            <div className='w-full flex justify-center items-center'>
              <button className='bg-black hover:bg-gray-800  text-red-500 w-1/2 py-2 text-center text-xl flex justify-center items-center'>
                <CloudDownloadIcon className="mr-2  " /> Resume
              </button>
              <button className='bg-red-500 hover:bg-red-600  text-black w-1/2 py-2 text-center text-xl flex justify-center items-center'>
                <HandshakeIcon className="mr-2" /> Hire me
              </button>
            </div>
          </div>


          <div>
            <AcademicSection />
          </div>
        </aside>




      </div>
    </div>
  );
}

export default Portfolio;