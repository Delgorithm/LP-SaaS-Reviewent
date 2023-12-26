import React from 'react'
import Accordion from '../Accordion/Accordion'

const Faq = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='translate-y-24 flex flex-col items-center'>
        <p className='mt-5 text-washed-purple-700'>FAQ</p>
        <h3 className='p-4 text-3xl text-center text-washed-purple-700'>Frequently asked questions</h3>
      </div>
      <div id='faq' className='flex flex-col gap-4 m-32 px-12 pt-4 border-[1px] border-washed-purple-600 rounded-3xl'>
        <Accordion 
          question="What is Reviewent and how can it help me in my professional interviews ?" 
          answer="Reviewent is a platform specialized in interview training. It offers a comprehensive range of resources, including personalized coaching, practical exercises, and specialized advice to help you excel at every stage of your interview process. Whether you are a beginner or an experienced professional, our service accompanies you to enhance your skills and maximize your chances of success" 
          />
        <Accordion 
          question="How does the training process work on Reviewent ?" 
          answer="The training process on Reviewent is simple and effective. Once registered, you have access to a variety of resources tailored to your level and needs. You can take courses, participate in interview simulations, and benefit from personalized feedback from our expert coaches. The entire process is designed to be interactive and engaging, allowing you to strengthen your skills in a practical way." 
          />
        <Accordion 
          question="What types of coaching are included in the different plans ?" 
          answer="Our plans are designed to meet various needs. For junior users, we offer up to 10 individual coaching sessions. Advanced plans for senior users include 50 coaching sessions. Finally, our premium plan provides unlimited access to personalized coaching sessions for all levels." 
          />
        <Accordion 
          question="Is Reviewent suitable for interview beginners ?" 
          answer="Absolutely! Reviewent is specifically designed to support beginners throughout their interview training journey. Our educational resources, interview simulations, and coaching sessions are tailored to help you build confidence and skills, even if it's your first interview experience." 
          />
        <Accordion 
          question="What sets Reviewent apart from other interview training platforms ?" 
          answer="What sets Reviewent apart is our unique personalized approach. We offer coaching tailored to each individual, specialized resources for different skill levels, and a variety of interactive tools to ensure that your interview preparation is as effective as possible. We focus on continuous improvement to help you stand out in your professional interviews." 
          />
        <Accordion 
          question="Is there a free trial period for Reviewent ?" 
          answer="Yes, we offer a free trial period of 7 days. During this period, you will have full access to our premium features, including individual coaching sessions. It's the perfect opportunity to explore our service and discover how it can enhance your interview skills. No credit card is required to start your free trial." 
          />
      </div>
    </div>
  )
}

export default Faq