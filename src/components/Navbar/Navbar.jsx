import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-neutrals flex justify-between items-center bg-black-2 p-6 pt-10 md:pt-4'>
      <h1 id='accueil' className='text-2xl text-white md:text-xl xxxsm:text-xl'>Reviewent</h1>
      <div>
        <ul className='text-white md:text-sm xxxsm:hidden'>
          <li className='font-light flex gap-10 border-[1px] border-neutrals-11 p-2 px-10 ml-16 rounded-xl md:ml-0 md:px-3 md:gap-4'>
            <a href="#features" className='p-2 hover:text-washed-purple-600 hover:-translate-y-1 transform transition duration-150'>Features</a>
            <a href="#testimonials" className='p-2 hover:text-washed-purple-600 hover:-translate-y-1 transform transition duration-150'>Testimonials</a>
            <a href="#pricing" className='p-2 hover:text-washed-purple-600 hover:-translate-y-1 transform transition duration-150'>Pricing</a>
            <a href="#faq" className='p-2 hover:text-washed-purple-600 hover:-translate-y-1 transform transition duration-150'>FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className='text-white md:text-md xxxsm:hidden'>
          <li className='font-light flex justify-center align-items gap-8'>
            <a href="#" className='p-2 hover:text-washed-purple-600 hover:-translate-y-1 transform transition duration-150'>Log in</a>
            <a href="#" className='inline-block p-2 px-6 hover:scale-95 transform transition duration-150 border border-neutrals-8 rounded-lg bg-gradient-to-b from-neutrals to-purple-900'>Try for Free</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar