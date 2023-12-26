import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen px-32 xxxsm:flex xxxsm:flex-col xxxsm:px-0 xxxsm:-translate-y-8'>
      <div className='flex justify-between xxxsm:flex-col'>
        <a href='#accueil' className='text-neutrals-6 xxxsm:text-center'>Reviewent</a>
        <div className='flex gap-10 xxxsm:flex-col xxxsm:mt-12 xxxsm:p-4'>
          <ul>
            <li className='flex flex-col gap-3'>
              <p className='font-light text-washed-blue-500'>Navigation</p>
              <a href='#features' className='font-thin text-washed-purple-300'>Features</a>
              <a href='#testimonials' className='font-thin text-washed-purple-300'>Testimonials</a>
              <a href='#pricing' className='font-thin text-washed-purple-300'>Pricing</a>
              <a href='#faq' className='font-thin text-washed-purple-300'>FAQ</a>
            </li>
          </ul>
          <ul>
            <li className='flex flex-col gap-3'>
              <p className='font-light text-washed-blue-500'>Informations</p>
              <a className='font-thin text-washed-purple-300'>Privacy Policy</a>
              <a className='font-thin text-washed-purple-300'>Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='h-[0.25px] bg-washed-blue-800 mt-24 mb-6 '></div>
      <div className='flex justify-between mb-12 xxxsm:flex-col xxxsm:p-4 xxxsm:mb-0'>
        <p className='font-thin text-neutrals-6'>Copyright © Reviewent 2023 🇫🇷</p>
        <p className='font-thin text-neutrals-6'>Made by
          <span className='text-blue-400'>
            <a href="https://www.linkedin.com/in/adrien-douville-243b75214/" target='_blank'> Adrien Douville</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer