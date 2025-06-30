import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Modal from '../components/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import doctor5Image from '../assets/images/doctor5.jpg';
import { termsOfService } from '../legal/termsContent';

const SignupSchema = Yup.object({
    fullName: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
    emailAddress: Yup.string().email('Invalid email').required('Required'),
    homeAddress: Yup.string().min(5, 'Too short').max(100, 'Too long').required('Required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
    languageChoice: Yup.string().required('Please select a language'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    agree: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required'),
});


const apiBaseUrl = import.meta.env.VITE_API_SERVER_URL;

function UserSignup() {
    const registerUser = async (values) => {
        try {
            const response = await axios.post(`${apiBaseUrl}/api/auth/register/user`, {
                fullName: values.fullName,
                email: values.emailAddress,
                password: values.password,
                phoneNumber: values.phoneNumber,
                homeAddress: values.homeAddress,
                preferredLanguage: values.languageChoice,
              });
          } catch (err) {
            console.error('Error submitting form:', err);
          } 
        
    };


    const [showTerms, setShowTerms] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const initialValues = {
        fullName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        homeAddress: '',
        agree: false,
        languageChoice: '',
    }
    return (
        <div className="w-full bg-mylight py-10">
            <div className='max-w-[900px] flex flex-col mx-auto shadow-lg p-4 bg-white'>
                <h1 className="text-2xl font-bold text-center mb-6">Sign up as a User</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] p-4 mx-auto place-items-center'>
                    <div>
                        <img src={doctor5Image} alt="" className='bg-mygreen' />
                    </div>
                    <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={registerUser}>
                        {({ isSubmitting }) => (
                            <Form action="" className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1">
                                    <Field name="fullName" type="text" id="first-name" placeholder="Your Full Name" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="fullName" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="emailAddress" type="email" id="email" placeholder="Your Email Address" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="emailAddress" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="phoneNumber" type="tel" id="phone-number" placeholder="e.g. +234 812 345 6789" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="homeAddress" as="textarea" rows="4" type="text" id="home-address" placeholder="Your Home Address" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen resize-none" />
                                    <ErrorMessage name="homeAddress" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="password" type="password" id="password" placeholder="Your Password" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="password" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Field name="confirmPassword" type="password" id="confirm-password" placeholder="Confirm Password" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div>
                                    <label className="font-semibold">Your Preferred Language</label>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="english" className="mr-1 accent-mygreen" />
                                                English
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="pidgin" className="mr-1 accent-mygreen" />
                                                Pidgin
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="edo" className="mr-1 accent-mygreen" />
                                                Edo
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="yoruba" className="mr-1 accent-mygreen" />
                                                Yoruba
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="hausa" className="mr-1 accent-mygreen" />
                                                Hausa
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="radio" name="languageChoice" value="igbo" className="mr-1 accent-mygreen" />
                                                Igbo
                                            </label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="languageChoice" component="div" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm">By signing up, you agree to our <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowTerms(true)}>Terms of Service</span> and <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowPolicy(true)}>Privacy Policy</span>.</p>
                                    <div className='flex gap-1'>
                                        <Field type="checkbox" name="agree" className="accent-mygreen" />
                                        <label htmlFor="agree">I agree to the Terms and Conditions</label>
                                    </div>
                                    <ErrorMessage name="agree" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <button type="submit" className="text-mylight rounded-lg bg-mygreen py-2 min-w-28 px-4 hover:cursor-pointer hover:bg-mygreen/80" disabled={isSubmitting} >{isSubmitting ? 'Creating...' : 'Create Account'}</button>
                            </Form>
                        )}
                    </Formik>
                    <Link to="/login">I already have an account</Link>
                </div>
            </div>
            {showTerms && <Modal title="Terms and Conditions" terms={termsOfService} onClose={() => setShowTerms(false)} />}
            {showPolicy && <Modal title="Privacy Policy" onClose={() => setShowPolicy(false)} />}
        </div>
    )
}

export default UserSignup;