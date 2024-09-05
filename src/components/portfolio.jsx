import React, { useState, useEffect, useRef } from 'react';
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
import Experience from './experience';
import Skill from './skill';
import Certification from './certification';
import Resume from '../resume/Shiv_CV-Resume.pdf'





const Portfolio = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef(null);
  const academicRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const certificationRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'academic', ref: academicRef },
        { id: 'experience', ref: experienceRef },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
    }
  };

  return (
    <div className='bg-myColor-navcolor'>
      <Nav />
      <div className='h-screen w-[80%] mx-auto flex justify-between'>
        {/* Left sidebar */}
        <aside className='h-screen w-[30%]'>
          <div className='fixed bg-black h-[100%] w-[250px]'>
            <div>
              <img src={Interview} alt="" className='h-52 w-[100%] object-cover object-top' />
            </div>
            <div>
              <ul className='text-white text-md flex flex-col gap-1'>
                <li className={`w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500 ${activeSection === 'home' ? 'text-yellow-400' : ''}`}>
                  <a onClick={() => scrollToSection('home')} className='w-full h-[100%] cursor-pointer'>Home</a>
                  <HomeIcon className={`absolute right-0 ${activeSection === 'home' ? 'text-yellow-400' : 'text-red-500'}`} />
                </li> <hr />

                <li className={`w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500 ${activeSection === 'academic' ? 'text-yellow-400' : ''}`}>
                  <a onClick={() => scrollToSection('academic')} className='w-full h-[100%] cursor-pointer'>Academic</a>
                  <SchoolIcon className={`absolute right-0 ${activeSection === 'academic' ? 'text-yellow-400' : 'text-red-500'}`} />
                </li> <hr />


                <li className={`w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500 ${activeSection === 'experience' ? 'text-yellow-400' : ''}`}>
                  <a onClick={() => scrollToSection('experience')} className='w-full h-[100%] cursor-pointer'>Experience</a>
                  <StarIcon className={`absolute right-0 ${activeSection === 'experience' ? 'text-yellow-400' : 'text-red-500'}`} />
                </li> <hr />

                <li className={`w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500 ${activeSection === 'skill' ? 'text-yellow-400' : ''}`}>
                  <a onClick={() => scrollToSection('skill')} className='w-full h-[100%] cursor-pointer'>Skill</a>
                  <WorkspacePremiumIcon className={`absolute right-0 ${activeSection === 'skill' ? 'text-yellow-400' : 'text-red-500'}`} />
                </li> <hr />
                <li className={`w-[80%] h-8 mx-auto py-1 flex justify-between items-center relative hover:text-red-500 ${activeSection === 'certification' ? 'text-yellow-400' : ''}`}>
                  <a onClick={() => scrollToSection('certification')} className='w-full h-[100%] cursor-pointer'>Certification</a>
                  <DescriptionIcon className={`absolute right-0 ${activeSection === 'certification' ? 'text-yellow-400' : 'text-red-500'}`} />
                </li> <hr />

                {/* Add more list items for other sections */}
              </ul>
            </div>
          </div>
        </aside>

        {/* main home content */}
        <aside className='h-screen w-[75%] py-8 flex flex-col gap-8 overflow-y-auto custom-scrollbar'>
          <div id="home" ref={homeRef} className='bg-gray-300 h-auto w-full'>
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
              <a href={Resume} className='bg-black hover:bg-gray-800 text-red-500 w-1/2 py-2 text-center text-xl flex justify-center items-center'>
                <CloudDownloadIcon className="mr-2" /> Resume
              </a>
              <button className='bg-red-500 hover:bg-red-600 text-black w-1/2 py-2 text-center text-xl flex justify-center items-center'>
                <HandshakeIcon className="mr-2" /> Hire me
              </button>
            </div>
          </div>

          <div id="academic" ref={academicRef}>
            <AcademicSection />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>

          <div id="skill" ref={skillRef}>
            <Skill />
          </div>

          <div id="certification" ref={certificationRef}>
            <Certification />
          </div>

          {/* Add more sections with unique IDs */}
        </aside>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;