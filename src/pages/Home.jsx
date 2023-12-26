import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Price from '../components/Price/Price'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Feature from '../components/Feature/Feature'
import Testimonials from '../components/Testimonials/Testimonials'


const Home = () => {
  return (
    <div className='flex flex-col justify-center bg-neutrals h-full bg-black-1 text-white overflow-hidden'>
        <Navbar />
        <Feature />
        <Testimonials />
        <Price />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home