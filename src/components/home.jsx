import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Profilepic from '../img/interview-image.jpg'
import Nav from '../components/nav'
import Html from '../img/HTML.png'
import Css from '../img/CSS.png'
import Js from '../img/JS.png'
import ReactLogo from '../img/React.png'
import Flutter from '../img/Flutter.png'
import Footer from './footer';
import Resume from '../resume/Shiv_CV-Resume.pdf'
const Home = () => {
    return (
        <div className='bg-myColor-navcolor'>
            <Nav />
            <div className=' h-screen md:w-[80%] sm:w-95%  mx-auto md:flex flex md:flex-row flex-col'>
                <div className=' md:w-[60%] w-100% h-screen md:pt-24 pt-8' >
                    <div className='absolute mx-2 mt-2 '>
                        <ul className='gap-4 flex flex-col'>
                            <li className='cursor-pointer hover:text-blue-600'><FacebookIcon /></li>
                            <li className='cursor-pointer hover:text-blue-600'><LinkedInIcon /></li>
                            <li className='cursor-pointer hover:text-purple-600'><InstagramIcon /></li>
                            <li className='cursor-pointer hover:text-red-600'><EmailIcon /></li>
                        </ul>
                    </div>
                    <div className='ml-16'>
                        <h1 className='md:text-[3rem] text-[1rem] font-serif font-extrabold text-blue-900 '> I'M Web Developer </h1>
                        <h1 className='md:text-[3rem] text-[1rem] font-serif font-extrabold text-blue-900 '>Shiv Raj Raut</h1>
                        <p className='md:text-lg text-sm text-justify font-sans my-5 font-thin w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique accusantium nam illo ab pariatur excepturi molestias, quos recusandae nulla!</p>
                    </div>
                    <div><a href={Resume} type="submit" className='ml-16  bg-myColor-primary md:py-2 md:px-6 px-2 py-1 text-white rounded-md hover:bg-red-700'>DownloadCV</a></div>

                </div>
                <div className=' md:w-[40%] md:h-[90%] w-full  flex justify-center items-center'>
                    <div className=' h-[90%] w-[85%] bg-blue-800 rounded-2xl py-8 pr-8'>
                        <img className='w-full h-[100%] object-cover object-center rounded-r-2xl' src={Profilepic} alt="" />
                    </div>
                </div>
            </div>
            {/* My Experties */}
            <section className=' mt-32 md:mt-2 h-44 w-full'>
                <h1 className='text-center font-extrabold text-2xl text-blue-600'>My Experties</h1>
                <div className=' py-4 flex flex-wrap md:gap-10  gap-2 justify-center items-center'>
                    {/* card-one  */}
                    <div className='bg-blue-900 md:h-28 md:w-28 w-20 h-20 rounded-lg p-2 flex flex-col justify-center items-center'>
                        <img src={Html} alt="" className='md:h-12 md:w-12 h-6 w-6  rounded-full ' />
                        <p className='md:md:text-xl text-sm  text-white font-bold '>HTML</p>
                        <span className='md:md:text-xl text-sm text-white font-bold '>85%</span>
                    </div>

                    {/* card-two  */}
                    <div className='bg-blue-900 md:h-28 md:w-28 w-20 h-20 rounded-lg p-2 flex flex-col justify-center items-center'>
                        <img src={Css} alt="" className='md:h-12 md:w-12 h-6 w-6  rounded-full  ' />
                        <p className='md:md:text-xl text-sm  text-white font-bold '>CSS</p>
                        <span className='md:md:text-xl text-sm text-white font-bold '>75%</span>
                    </div>


                    {/* card-three  */}
                    <div className='bg-blue-900 md:h-28 md:w-28 w-20 h-20 rounded-lg p-2 flex flex-col justify-center items-center'>
                        <img src={Js} alt="" className='md:h-12 md:w-12 h-6 w-6  rounded-full  ' />
                        <p className='md:text-xl text-sm text-white font-bold '>Javascript</p>
                        <span className='md:text-xl text-sm text-white font-bold '>70%</span>
                    </div>
                    {/* card-four  */}
                    <div className='bg-blue-900 md:h-28 md:w-28 w-20 h-20 rounded-lg p-2 flex flex-col justify-center items-center'>
                        <img src={Flutter} alt="" className='md:h-12 md:w-12 h-6 w-6  rounded-full  ' />
                        <p className='md:text-xl text-sm text-white font-bold '>Flutter</p>
                        <span className='md:text-xl text-sm text-white font-bold '>80%</span>
                    </div>
                    {/* card-Five  */}
                    <div className='bg-blue-900 md:h-28 md:w-28 w-20 h-20 rounded-lg p-2 flex flex-col justify-center items-center'>
                        <img src={ReactLogo} alt="" className='md:h-12 md:w-12 h-6 w-6  rounded-full  ' />
                        <p className='md:text-xl text-sm text-white font-bold '>React</p>
                        <span className='md:text-xl text-sm text-white font-bold '>68%</span>
                    </div>
                </div>
            </section>
            {/* My Projects  */}
  
            <section className='md:p-8 p-3 flex md:flex-row flex-col gap-10 justify-center md:mt-0 mt-12'>
                           {/* Card-1 */}
                <div className='h-auto md:w-72 w-full  p-4 rounded-md text-center mb-4 border-2 border-gray-700'>
                    <div className='pb-3'><img className='w-full md:h-40 h-24' src="" alt="" /></div>
                    <div>
                        <h1 className='mb-4'>Av_Network</h1>
                        <p className='md:text-xl text-sm'>A hotspot company provide local area network through EAP and routers by providing LAN or WLAN Network to the client.</p>
                        <button className='cursor-pointer mt-4  bg-myColor-primary py-2 px-6 text-white rounded-md hover:bg-red-700'>Preview</button>
                    </div>
                </div>
 {/* Card-2 */}
                <div className='h-auto md:w-72 w-full  p-4 rounded-md text-center mb-4 border-2 border-gray-700'>
                    <div className='pb-3'><img className='w-full md:h-40 h-24' src="" alt="" /></div>
                    <div>
                        <h1 className='mb-4'>Goverenment Pro</h1>
                        <p className='md:text-xl text-sm'>A Goverenment app which used to help all the person to fill there online form of nepal.</p>
                        <button className='cursor-pointer mt-4  bg-myColor-primary py-2 px-6 text-white rounded-md hover:bg-red-700'>Preview</button>
                    </div>
                </div>
                
            </section>

        
           



            <Footer />
        </div>
    )
}


export default Home