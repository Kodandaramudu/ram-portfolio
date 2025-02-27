import React from 'react'
import FoodApplication from '../assets/foodApplication.jpg'
import Idepot from '../assets/I-Depot.png'
import DevTinder from '../assets/devTinder.png'

const Work = () => {
  return (
    <div name="work" className='w-fill md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Projects</p>
            </div>
           {/* grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
                {/* grid item */}
                <div style={{backgroundImage:`url(${FoodApplication})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-2 font-bold text-white tracking-wider'>
                            Food Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Kodandaramudu/Namaste-React'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Idepot})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-2 font-bold text-white tracking-wider'>
                            Depot Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${DevTinder})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-2 font-bold text-white tracking-wider'>
                            devTinder Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Kodandaramudu/devTinder'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                <span className='text-2xl px-2 font-bold text-white tracking-wider'>
                            Still Working
                        </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work