import React from 'react';
import doctorImage from '../assets/images/doctor.webp';

const reviews = [
    {
        id: 1,
        name: 'Funke',
        age: 48,
        review: '“Dockintor.com helped me administer first aid to my son when he had an accident at home. Their guidance was clear and easy to follow. I am grateful for their support!”',
    },
    {
        id: 2,
        name: 'Amaka',
        age: 27,
        review: '“Dockintor.com provided me with the information I needed to make informed decisions about my health. The healthcare professionals were knowledgeable and compassionate. I highly recommend this service!”',
    },
    {
        id: 3,
        name: 'Osahon',
        age: 32,
        review: '“I was able to get referrals to the right specialists for my condition, thanks to Dockintor.com. The process was easy and stress-free. I am very satisfied with the service!”',
    }
];

function Testimonials() {

    const [currentReview, setCurrentReview] = React.useState(0);
    const handleNextReview = (index) => {
        setCurrentReview(index);
        //very inefficient way of handling the next review, but it works for now
    }

    return (
        <section className='h-[700px] md:h-[90vh] flex items-center relative' style={{ backgroundImage:`url(${doctorImage})`}}>
            <div className=''>
                {reviews.map((review, i) => (
                    <div 
                    key={review.id}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-800 w-full max-w-[700px] mx-auto bg-mylight ${
                      i === currentReview ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                        <div className='flex flex-col gap-12 mx-auto py-6 md:py-18 px-8 md:px-14 lg:px-24 text-center'>
                            <h2 className='text-4xl font-bold text-center pt-10 font-Rozha'>Patient Stories</h2>
                            <p className='text-xl font-light'>{review.review}</p>
                        </div>
                        <div className='flex justify-center gap-3 mb-4'>
                            <button className='w-3 h-3 bg-mygreen rounded-full focus:outline-3 focus:outline-mygreen focus:bg-mylight cursor-pointer' onClick={() => handleNextReview(0)}></button>
                            <button className='w-3 h-3 bg-mygreen rounded-full focus:outline-3 focus:outline-mygreen focus:bg-mylight cursor-pointer' onClick={() => handleNextReview(1)}></button>
                            <button className='w-3 h-3 bg-mygreen rounded-full focus:outline-3 focus:outline-mygreen focus:bg-mylight cursor-pointer' onClick={() => handleNextReview(2)}></button>
                        </div>
                        <div className='bg-mylime px-10 py-7 text-center'>
                            <p className='font-bold text-lg'>{review.name}, {review.age}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Testimonials