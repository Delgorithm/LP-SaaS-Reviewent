import React from 'react'

const SocialProof = (props) => {
  return (
    <div className='flex flex-col p-2'>
        <div className='flex m-2'>
            <img src={props.link} alt="Social proof"  className='rounded-full w-14 h-12 object-cover'/>
            <div className='pl-2'>
                <p className='text-washed-purple-500'>{props.name}</p>
                <p className='text-washed-purple-800'>{props.username}</p>
            </div>
        </div>
        <p className='text-neutrals-6'>{props.answer}</p>
  </div>
  )
}

export default SocialProof