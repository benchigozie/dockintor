import doctor1Image from '../assets/images/doctor1.jpg';
import doctor2Image from '../assets/images/doctor2.jpg';
import doctor3Image from '../assets/images/doctor3.jpg';
import doctor4Image from '../assets/images/doctor4.jpg';

function Doctors() {
    return (
        <section>
            <div className="max-w-[1300px] mx-auto py-14 md:px-3 flex flex-col gap-12" id="our-doctors">
                <h2 className="text-5xl font-bold text-center font-Rozha">Meet Our Healthcare Professionals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-1 border-mygreen divide-x divide-y divide-mygreen">
                    <div className="bg-mylighty flex flex-col text-center">
                        <img src={doctor1Image} alt="" className='bg-myblack h-56 w-full object-cover' />
                        <div className="px-8 py-12 flex flex-col gap-4">
                            <h3 className="font-bold text-lg">DR. UYI OSAREMEN</h3>
                            <p className="font-light">Dr. John Smith is a specialist in internal medicine with over 15 years of experience. With his expertise and compassionate approach, he can provide you with reliable and accurate health information.</p>
                        </div>
                    </div>
                    <div className="bg-mylighty flex flex-col text-center">
                        <img src={doctor2Image} alt="" className='bg-myblack h-56 w-full object-cover' />
                        <div className="px-8 py-12 flex flex-col gap-4">
                            <h3 className="font-bold text-lg">DR. OSASU OSAIGBOVO</h3>
                            <p className="font-light">Dr. Sarah Lee is a board-certified pediatrician with a passion for helping children and families. She can help with any questions or concerns you may have about your child's health.</p>
                        </div>
                    </div>
                    <div className="bg-mylighty flex flex-col text-center">
                        <img src={doctor3Image} alt="" className='bg-myblack h-56 w-full object-cover' />
                        <div className="px-8 py-12 flex flex-col gap-4">
                            <h3 className="font-bold text-lg">DR. JANE IMAFIDON</h3>
                            <p className="font-light">Dr. Michael Chen is an experienced dermatologist who can provide you with the information you need to take care of your skin. From acne to skin cancer, he can help you with any skin-related questions.</p>
                        </div>
                    </div>
                    <div className="bg-mylighty flex flex-col text-center">
                        <img src={doctor4Image} alt="" className='bg-myblack h-56 w-full object-cover' />
                        <div className="px-8 py-12 flex flex-col gap-4">
                        <h3 className="font-bold text-lg">DR. SAMUEL MUSA</h3>
                            <p className="font-light">Dr. Jane Park is a licensed clinical psychologist who can help you manage your mental health. Whether you need help coping with stress or dealing with depression and anxiety, she is here to support you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doctors;