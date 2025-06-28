import React from 'react'
import Doctors from '../components/Doctors'
import HowItWorks from '../components/HowItWorks';
import Motto from '../components/Motto';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
        <Hero />
        <Doctors />
        <HowItWorks />
        <Motto />
        <Testimonials />
    </div>
  )
}

export default Home;