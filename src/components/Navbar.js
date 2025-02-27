import React,{useState} from 'react';
import { FaBars,FaTimes,FaLinkedin,FaGithub } from 'react-icons/fa';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Logo from "../assets/logo.png";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav,setNav] = useState(false);
    const Resume ='Kodandaramudu_Resume.docx';
    const handleClick=()=>{
        setNav(!nav);
    }
  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" className='w-[60px] bg-[#0a192f]'/>
        </div>
        {/*  menu  */}
            <ul className='hidden md:flex'>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars />:<FaTimes/>}
        </div>
        {/* mobile menu */}
        <div className={!nav?"hidden":"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <ul>
                <li className='py-6 text-4xl'><Link to="home" smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
                <li className='py-6 text-4xl'><Link to="about" smooth={true} duration={500} onClick={handleClick}>About</Link></li>
                <li className='py-6 text-4xl'><Link to="skills" smooth={true} duration={500} onClick={handleClick}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link to="work" smooth={true} duration={500} onClick={handleClick}>Work</Link></li>
                <li className='py-6 text-4xl'><Link to="contact" smooth={true} duration={500} onClick={handleClick}>Contact</Link></li>
            </ul>
        </div>

        {/* social icons */}
        <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
        <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className="flex justify-between items-center w-full text-gray-300"href='https://www.linkedin.com/in/kodandaramudu-jammula-6b39801b5'>LinkdIn <FaLinkedin className='size-8'/>
                    </a>
                    </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className="flex justify-between items-center w-full text-gray-300"href='https://github.com/Kodandaramudu/Namaste-React'>Github <FaGithub className='size-8'/>
                    </a>
                    </li> 
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fbc20]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href={Resume}>Download Resume <RiArrowRightUpLine className='size-8'/>
                    </a>
                    </li>      
            </ul>
        </div>
        </div>
  )
}

export default Navbar