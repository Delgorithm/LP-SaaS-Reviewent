import React from 'react'

const Feature = () => {
  return (
    <div className='bg-neutrals h-full px-96 bg-black-1 text-white overflow-hidden md:px-24'>
      <section className='flex flex-col justify-center items-center w-full'>

        {/* Presentation */}
        <p className='mt-5 text-washed-purple-700'>✨ Your special interviewer</p>
        <h1 className='text-8xl p-12 my-12 w-[150%] text-washed-purple-500 border-[1px] text-center tracking-tighter rounded-3xl border-washed-purple-800 md:text-7xl md:w-[120%]'>Master your interviews, from beginner to expert</h1>
        <h2 className='text-3xl text-center text-washed-purple-700 mb-8'>Prepare to shine in every job interview 🚀</h2>
        <a href="#" className='inline-block p-2 px-6 mr-5 hover:scale-95 transform transition duration-150 border border-neutrals-8 rounded-lg bg-gradient-to-b from-neutrals to-purple-900'>Try for Free</a>
        <picture className='mt-8 flex flex-col justify-center items-center'>
          <img src="/img/socialproof01.svg" alt="Social proof" />
        </picture>

        {/* Features */}
        <p id='features' className='mt-8 mr-5 text-washed-purple-700 text-lg font-light'>Features</p>
        <h3 className='p-4 text-3xl text-center text-washed-purple-700'>Maximize your interview success with our specialized interview resources</h3>
        <p className='text-center text-washed-purple-400 text-[0.93em] leading-7'>Access a tailored suite of tools and expert guidance to elevate your interview performance. 
          <br /> 
          Our specialized resources are designed to help you build confidence, master technical questions, and stand out in every interview.
        </p>
        <span className='w-96 h-96 m-8 bg-washed-purple-700'></span>    
      </section>
    </div>
  )
}

export default Feature