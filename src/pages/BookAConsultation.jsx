import { useState, useEffect } from "react";
import Button from "../components/Button";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const apiBaseUrl = import.meta.env.VITE_API_SERVER_URL;

function BookAConsultation() {

     const { userToken } = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/doctors/all`);
                console.log(response.data);
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    if (!userToken) {
        navigate('/login');
      }

    return (
    
        <section className='flex flex-col gap-4 py-32 items-center w-full'>
            {isLoading ?
                <>
                    <ClipLoader size={30} color="#09371F" />
                </>
                :
                <div className="flex flex-col gap-4 w-full px-2">
                    <h1 className='text-4xl text-center'>Available Doctors</h1>
                    <div className='place-items-center items-center gap-6 w-full max-w-[750px] mx-auto'>
                        <div className='flex flex-col gap-4 border-mygreen border-2 rounded-xl p-5 md:p-16 w-full'>
                            {doctors.length > 0 ? (
                                doctors.map((doctor) => (
                                    <div key={doctor.id} className="p-4 border rounded shadow-sm flex justify-between items-center gap-2">
                                        <h2 className="font-semibold">Dr. bbbbbbbbnnnnn {doctor.fullName}</h2>
                                        <Button btnText="Book Now" className="outline-gray-300 outline-2 px-4 py-3 hover:bg-mylime/60 rounded-full"/>
                                    </div>
                                ))
                            ) : (
                                <p>No doctors available right now.</p>
                            )}
                        </div>
                    </div>
                </div>
            }

        </section>
    )
}

export default BookAConsultation