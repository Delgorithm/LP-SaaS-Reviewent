import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Entreprises from '../components/Assets/Entreprises'
import Process from '../components/Process/Process'
import Price from '../components/Price/Price'
import Faq from '../components/FAQ/Faq'
import Join from '../components/Join/Join'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='flex flex-col justify-center'>
        <Navbar />
        <div className='h-1 bg-neutrals-13'></div>
        <Hero />
        <Entreprises />
        <Process />
        <Price />
        <Faq />
        <Join />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home