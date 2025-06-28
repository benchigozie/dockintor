import { useAuth } from '../context/AuthContext';
import Button from './Button';

function PatientDashboard() {

    const { user } = useAuth();

  return (
    <section className='flex flex-col gap-4 py-28'>
        <h1 className='text-4xl text-center'>Welcome Back {user.name}</h1>
        <div className='flex flex-col items-center gap-6'>
            <h2>What would you like to do today?</h2>
            <div className='flex flex-col gap-4'>
                <Button btnText="Book a consultation" className="outline-gray-300 outline-2 px-4 py-3 w-64 hover:bg-mylime/40"/>
                <Button btnText="View our affiliate health centres" className="outline-gray-300 outline-2 px-4 py-3 w-64 hover:bg-mylime/40"/>
                <Button btnText="Download medical Report" className="outline-gray-300 outline-2 px-4 py-3 w-64 hover:bg-mylime/40"/>
            </div>
        </div>
    </section>
  )
}

export default PatientDashboard