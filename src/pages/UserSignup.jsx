import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Modal from '../components/Modal';

const SignupSchema = Yup.object({
    fullName: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
    emailAddress: Yup.string().email('Invalid email').required('Required'),
    homeAddress: Yup.string().min(5, 'Too short').max(100, 'Too long').required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    agree: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required'),
});

function UserSignup() {

    const [showTerms, setShowTerms] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const initialValues = {
        fullName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        homeAddress: '',
        agree: '',
    }
    return (
        <div className="w-full pt-4">
            <h1 className="text-2xl font-bold text-center mb-6">Sign up as a User</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] p-4 mx-auto'>
                <div>
                    <img src="" alt="" className='bg-amber-700'/>
                </div>
                <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={(values) => {
                    registerUser(values);
                }}>
                    <Form action="" className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-1">
                            <Field name="fullName" type="text" id="first-name" placeholder="Your Full Name" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
                            <ErrorMessage name="fullName" component="div" className="text-orange-600 text-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Field name="email" type="email" id="email" placeholder="Your Email Address" className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen" />
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
                            <label htmlFor='language' className="font-semibold">Your Preferred Language</label>
                            <div className='flex gap-4'>
                                <div>
                                    <label>
                                        <Field type="radio" name="languageChoice" value="english" className="mr-1 accent-mygreen" />
                                        English
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
                                        <Field type="radio" name="languageChoice" value="benin" className="mr-1 accent-mygreen" />
                                        Benin
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
                        <button type="submit" className="text-mylight rounded-lg bg-mygreen py-2 min-w-28 px-4 hover:cursor-pointer hover:bg-mygreen/80">Create Account</button>
                    </Form>
                </Formik>
            </div>
            {showTerms && <Modal title="Terms and Conditions" onClose={() => setShowTerms(false)} />}
            {showPolicy && <Modal title="Privacy Policy" onClose={() => setShowPolicy(false)} />}
        </div>
    )
}

export default UserSignup;