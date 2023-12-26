import React from 'react'

const SocialProof = (props) => {
  return (
    <div className='flex flex-col p-4 bg-gradient-to-b from-neutral-900 to-washed-blue-900 border-[1px] border-washed-purple-800 rounded-xl xxxsm:24 xxxsm:-translate-x-32'>
        <div className='flex m-2 md:w-52 xxxsm:w-24'>
            <img src={props.link} alt="Social proof"  className='rounded-full w-14 h-12 object-cover'/>
            <div className='pl-2'>
                <p className='text-washed-purple-500 xxxsm:text-xs'>{props.name}</p>
                <p className='text-washed-purple-800 xxxsm:text-xs'>{props.username}</p>
            </div>
        </div>
        <p className='text-neutrals-6 md:line-clamp-6 xxxsm:line-clamp-4 xxxsm:text-xs'>{props.answer}</p>
  </div>
  )
}

export default SocialProof