import React from 'react'
import Ram from '../assets/clgdays.JPG'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen px-4 bg-[#0a192f]'>
     {/* container */}
     <div className='max-w-[1000px] grid sm:grid-cols-2 gap-[50px] mx-auto '>
       <div className='w-full mt-[200px]'>
       <p className='text-pink-500'>Hi, my name is</p>
       <h1 className='text-6xl sm:text-4xl font-bold text-[#ccd6f6]'>Kodanda Ramudu Jammula</h1>
       <h2 className='text-4xl sm:text-2xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
       <p className='text-[#8892b0] text-xl py-4 max-w-[750px]'>I'm a MERN stack developer specializes in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I'll handle both frontend
         (React.js) and backend (Node.js + Express) while using MongoDB as a NoSQL database for scalable data management. 🚀</p>
       </div>
       <div className='w-full mt-[200px] text-[#8892b0]'>
       <img className='p-5 w-full h-[350px] rounded-[50px]' src={Ram} alt='Ram'/>
       </div>
     </div>
    </div>
  )
}

export default Home