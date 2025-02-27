import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TailwindCSS from '../assets/tailwind.png'
import ReactJs from '../assets/react.png'
import Github from '../assets/github.png'
import AWS from '../assets/aws.png'
import NodeJs from '../assets/node.png'
import Express from '../assets/express.png'
import Mongoose from '../assets/mongoose.png'
import MongoDb from '../assets/MongoDb.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-1 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img  className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={CSS} alt="HTML Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={TailwindCSS} alt="HTML Logo" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={ReactJs} alt="HTML Logo" />
                    <p className='my-4'>React Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={NodeJs} alt="HTML Logo" />
                    <p className='my-4'>Node Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Express} alt="HTML Logo" />
                    <p className='my-4'>Express Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Mongoose} alt="HTML Logo" />
                    <p className='my-4'>Mongoose</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={MongoDb} alt="HTML Logo" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={AWS} alt="HTML Logo" />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Github} alt="HTML Logo" />
                <p className='my-4'>Github</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills