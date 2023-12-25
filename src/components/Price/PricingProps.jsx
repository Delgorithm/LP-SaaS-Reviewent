import React from 'react'

const Pricing = (props) => {
  return (
    <div className='flex w-80'>
      <div className='border-[1px] px-6 py-4 rounded-3xl border-washed-purple-500 bg-gradient-to-b from-neutrals to-washed-blue-900'>
        <p className='text-4xl text-center pb-4 pt-6'>{props.title}</p>
        <div>
          <p className='text-3xl flex items-center'>${props.price} <span className='text-lg text-neutrals-8'>/month</span></p>
          <p className='text-neutrals-8'>billed monthly</p>
        </div>
        <div className='py-4'>
          <a href="#" className='inline-block p-2 w-full text-center hover:scale-95 transform transition duration-150 border border-neutrals-8 rounded-lg bg-gradient-to-b from-neutrals to-purple-900 mb-4'>Get Started</a>
          <ul className='flex flex-col gap-2 list-disc ml-5 text-washed-purple-600'>
            <li>{props.li1}</li>
            <li>{props.li2}</li>
            <li>{props.li3}</li>
            <li>{props.li4}</li>
            <li>{props.li5}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing