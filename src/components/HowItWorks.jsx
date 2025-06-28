import React from 'react';
import chatIcon from '../assets/images/chat.png';
import referralIcon from '../assets/images/referral.png';
import firstAidIcon from '../assets/images/firstaid.png';

function HowItWorks() {
    return (
        <section>
            <div className='max-w-[1300px] mx-auto py-10 flex flex-col gap-10' id='how-it-works'>
                <div className='flex flex-col gap-10 text-center px-8'>
                    <h2 className='text-5xl font-bold font-Rozha'>How It Works</h2>
                    <p className='max-w-[500px] mx-auto font-light'>At Dockintor.com, we make getting reliable health information and referrals easy. Just follow these simple steps:</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] border-1 border-mygreen'>
                    <div className='w-full bg-amber-800'>
                        <img src="" alt="" className='w-full bg-red-800'/>
                    </div>
                    <div className='py-16 flex flex-col px-16 gap-12 font-light'>
                        <div className='grid grid-cols-[1fr_10fr] gap-6'>
                            <img src={chatIcon} alt="" className='w-14 h-auto'/>
                            <div>
                                <h3 className='text-2xl font-bold'>Find Answers to Your Questions</h3>
                                <p>Start a chat with one of our healthcare professionals and get the answers you need.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr_10fr] gap-6'>
                            <img src={referralIcon} alt="" className='w-14 h-auto'/>
                            <div>
                                <h3 className='text-2xl font-bold'>Get Referrals to Specialists</h3>
                                <p>If you need to see a specialist, we can help you find the right one for your needs.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr_10fr] gap-6'>
                            <img src={firstAidIcon} alt="" className='h-auto'/>
                            <div>
                                <h3 className='text-2xl font-bold'>Learn How to Administer First Aid</h3>
                                <p>In case of emergency, we can guide you on how to administer first aid until professional help arrives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;