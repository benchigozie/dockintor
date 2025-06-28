import React from 'react'
import Button from './Button';

import iyeImage from '../assets/images/iye.jpeg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section>
      <div className='max-w-[1600px] grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='bg-mylighty p-8 flex flex-col gap-8 relative z-10 md:left-16'>
          <h1 className='text-4xl md:text-6xl font-Rozha'>Get Reliable Medical Information and Referrals When You Need Them Most</h1>
          <p>For Anyone, Anywhere, at Anytime.</p>
          <Link to='/get-started'>
            <Button btnText="join now" className="bg-mygreen text-mylight rounded-full hover:bg-mygreen/80 w-[180px]" />
          </Link>
        </div>
        <div>
          <img src={iyeImage} alt="" className='md:max-h-[110vh]' />
        </div>
      </div>
    </section>
  )
}

export default Hero;