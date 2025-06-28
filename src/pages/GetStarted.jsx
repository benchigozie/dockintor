import { Link } from "react-router-dom";
import Button from "../components/Button";

function GetStarted() {
    return (
        <section className='bg-mylight w-full px-4 py-32'>
            <div className='max-w-[900px] mx-auto text-center grid grid-cols-1 md:grid-cols-2 items-center justify-center shadow-lg'>
                <div className="bg-white flex flex-col items-center gap-6 py-24 px-4 md:px-20">
                    <h1>Are you in need of medical Service?</h1>
                    <Link to='/user-signup'>
                        <Button btnText="Sign up as a user!" className="bg-mygreen text-mylight rounded-full hover:bg-mygreen/80" />
                    </Link>
                </div>
                <div className="bg-mylime flex flex-col items-center gap-6 py-24 px-4 md:px-20">
                    <h2>Are you a medical practicioner?</h2>
                    <Link to='/doctor-signup'>
                    <Button btnText="Sign up as a Doctor!" className="bg-mygreen text-mylight rounded-full hover:bg-mygreen/80" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;