import React, { useState } from 'react'

const Accordion = (props) => {

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (  
    <div className='py-2'>
        <button 
            onClick={() => setAccordionOpen(!accordionOpen)}
            className='flex justify-between w-full'
        >
            <span className='text-washed-blue-300 text-left'>{props.question}</span>
            {accordionOpen 
                ? <span className='text-3xl text-washed-purple-300'>-</span> 
                : <span className='text-3xl text-washed-purple-300'>+</span> }
            
        </button>
        <div className={`text-neutrals-2  grid overflow-hidden transition-all duration-300 ease-in-out ${
            accordionOpen 
                ? 'grid-rows-[1fr] opacity-100' 
                : 'grid-rows-[0fr] opacity-0'
        }`}>
            <div className='overflow-hidden'>{props.answer}</div>
        </div>
    </div>
  )
}

export default Accordion