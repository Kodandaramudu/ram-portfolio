import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/ajjmmqla' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</p>
                <p className='text-gray-400 py-4'>Send me an email to ramjammula9671@gmail.com!</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' required type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|in|us)" type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='5' placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center ' >Let's Collaborate</button>

        </form>
    </div>
  )
}

export default Contact