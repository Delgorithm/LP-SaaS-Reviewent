import React from 'react'
import PricingProps from './PricingProps'

const Price = () => {
  return (
    <div className='flex flex-col items-center md:-translate-y-24'>
      <p id='pricing' className='mt-8 mr-5 text-washed-purple-700 text-lg font-light -translate-y-32'>Pricing</p>
        <h3 className='p-4 text-3xl text-center text-washed-purple-700 -translate-y-32'>Choose the plan that catapults your interview success</h3>
        <p className='text-center text-washed-purple-400 text-lg leading-7 -translate-y-32'>Unlock premium features and elevate your interview performance with our <br /> flexible pricing plans tailored to your career goals</p>
        <div className='flex w-screen justify-center gap-10'>
          <PricingProps 
            title="💎 Basic"
            price="9.99"
            li1="Full access to interview preparation resources"
            li2="Unlimited use of coding practice platforms"
            li3="Expert guidance and feedback on your performance"
            li4="Monthly newsletter with the latest interview tips"
            li5="10 junior coaching sessions"
          />
          <div className='-translate-y-10'>
            <PricingProps 
              title="💎 Premium"
              price="39.99"
              li1="Priority access to new features and updates"
              li2="Unlimited use of coding practice platforms"
              li3="Expert guidance and feedback on your performance"
              li4="Monthly newsletter with the latest interview tips"
              li5="10 junior coaching sessions"
            />
          </div>
          <PricingProps
            title="💎 Advanced"
            price="149.99"
            li1="All advanced Plan features"
            li2="One-on-one coaching sessions with a professional mentor"
            li3="Customized interview strategy and career roadmap"
            li4="Access to premium job matching services"
            li5="Accelerated response time for support inquirires"
          />
        </div>
    </div>
  )
}

export default Price