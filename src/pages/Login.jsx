import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../components/Modal';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object({
    emailAddress: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
});


const apiBaseUrl = import.meta.env.VITE_API_SERVER_URL;

function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();

   


    const loginUser = async (values) => {
        try {
            const response = await axios.post(`${apiBaseUrl}/api/auth/login`, {
                email: values.emailAddress,
                password: values.password,
            });

            const token = response.data.accessToken;
            const userData = (response.data.user);
            login( token, userData );
            navigate('/dashboard');

        } catch (err) {
            console.error('Error submitting form:', err);
        }

    };

    const initialValues = {
        emailAddress: '',
        password: '',
    }
    return (
        <div className="w-full py-16">
            <div className='max-w-[700px] flex flex-col mx-auto shadow-lg px-4 py-20 bg-white'>
                <h1 className="text-2xl font-bold text-center mb-6">Login to your account</h1>
                <div className='grid grid-cols-1 gap-4 max-w-[600px] p-4 mx-auto w-full'>
                    <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={(values) => {
                        loginUser(values);
                    }}>
                        {({ isSubmitting }) => (
                            <Form action="" className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1">
                                    <Field name="emailAddress" type="email" id="email" placeholder="Your Email Address" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="emailAddress" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="password" type="password" id="password" placeholder="Your Password" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="password" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <button type="submit" className="text-mylight rounded-lg bg-mygreen py-2 min-w-28 px-4 hover:cursor-pointer hover:bg-mygreen/80" disabled={isSubmitting}>{isSubmitting ? 'Logging in' : 'Log In'}</button>
                            </Form>
                        )}
                    </Formik>
                    <Link to="/get-started">I do not have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;