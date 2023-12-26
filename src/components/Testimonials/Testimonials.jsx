import React from 'react'
import SocialProof from '../../Proof/SocialProof'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center'>
        <p id='testimonials' className='mt-8 mr-5 text-washed-purple-700 text-lg font-light'>Testimonials</p>
        <h3 className='p-4 text-3xl text-center text-washed-purple-700'>Optimize your journey: track, learn and elevate your interview skills 📈</h3>
        <p className='text-center text-washed-purple-400 text-[0.93em] leading-7'>Maximize your potential with personalized interview tracking. Elevate your skills, stand out, and secure your dream job effortlessly.</p>
        <div className='flex w-screen gap-8 mt-16'>
          <SocialProof 
            link="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Christoper Kent" username="@chrdrake" 
            answer="Since using this exceptional personal development tool, I've felt much more confident and prepared during interviews. It has truly enhanced my interview skills and performance." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Daniel Rodgriguez" username="@danrod" 
            answer="Thanks to this extraordinary product, I've experienced a significant improvement in my interview abilities. It has been instrumental in boosting my confidence and competence during various interviews." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Alexander Cohen" username="@alexco" 
            answer="Using this exceptional personal interview coach has completely transformed my approach to interviews. I now feel more confident and proficient, making each interview a more positive and successful experience." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Mason Taylor" username="@mason_t" 
            answer="I can't overstate the impact of this exceptional product on my interview abilities. It has empowered me to navigate interviews with much more confidence and ease, leading to more successful outcomes." 
          />
        </div>
        <div className='flex ml-64 w-screen mt-12 gap-6'>
          <SocialProof 
            link="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Benjamin Parker" username="@benparker" 
            answer="This outstanding personal interview enhancement tool has truly made a difference in my interview readiness. I now feel more poised and capable during interviews, thanks to the valuable skills it has helped me develop." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" 
            name="Lucas Mitchell" username="@lucasmitch" 
            answer="Since integrating this exceptional product into my interview preparation routine, I've experienced a noticeable enhancement in my interview skills. It has significantly contributed to my increased confidence and proficiency during interviews." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Zachary hayes" username="@zachhayes" 
            answer="I can't emphasize enough how much this exceptional interview preparation tool has positively impacted my interview performance. It has empowered me to approach interviews with greater confidence and skill, leading to more successful outcomes." 
          />
          <SocialProof 
            link="https://images.unsplash.com/photo-1520722359162-8ead33ae9ba4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Connor Black" username="@connblack" 
            answer="Using this exceptional product has been a real turning point for me in terms of interview preparation. It has equipped me with the skills and confidence to handle interviews more effectively and successfully, making a tangible difference in my overall performance." 
          />
        </div>
        <div className='blur-3xl bg-neutrals ml-32 h-64 w-screen -translate-y-32'></div>    
    </div>
  )
}

export default Testimonials