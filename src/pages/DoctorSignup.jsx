import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const SignupSchema = Yup.object({
    fullName: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Please enter your full name'),
    emailAddress: Yup.string().email('Invalid email').required('Email is required'),
    homeAddress: Yup.string().min(5, 'Too short').max(100, 'Too long').required('Your home address is required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    agree: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You have not accepted Terms and Conditions'),
    spokenLanguages: Yup.array()
        .min(1, 'Select at least one language')
        .of(Yup.string()),
    credentials: Yup.mixed()
        .required('Please upload your credentials')
        .test(
            'fileFormat',
            'Only PDF files are accepted',
            value => value && value.type === 'application/pdf'
        ),
});

function DoctorSignup() {

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
        spokenLanguages: [],
        credentials: null,
    };

    return (
        <div className="w-full pt-4">
            <h1 className="text-2xl font-bold text-center mb-6">Sign up as a Doctor</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] p-4 mx-auto'>
                <div>
                    <img src="" alt="" className='bg-amber-700' />
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
                            <label className="font-semibold">Language(s) you speak</label>
                            <div className='flex gap-4'>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="spokenLanguages" value="english" className="accent-mygreen mr-1" />
                                        English
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="spokenLanguages" value="yoruba" className="accent-mygreen mr-1" />
                                        Yoruba
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="spokenLanguages" value="hausa" className="accent-mygreen mr-1" />
                                        Hausa
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="spokenLanguages" value="benin" className="accent-mygreen mr-1" />
                                        Benin
                                    </label>
                                </div>
                            </div>
                            <ErrorMessage name="spokenLanguages" component="div" className="text-orange-600 text-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">By signing up, you agree to our <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowTerms(true)}>Terms of Service</span> and <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowPolicy(true)}>Privacy Policy</span>.</p>
                            <div className='flex gap-1'>
                                <Field type="checkbox" name="agree" className="accent-mygreen" />
                                <label htmlFor="agree">I agree to the Terms and Conditions</label>
                            </div>
                            <ErrorMessage name="agree" component="div" className="text-orange-600 text-sm" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold">Upload Your Credentials</label>
                            <input 
                            name="credentials" 
                            type="file" 
                            accept=".pdf" 
                            className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen max-w-56" 
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                setFieldValue("credentials", file);
                              }}
                            />
                            <ErrorMessage name="credentials" component="div" className="text-orange-600 text-sm" />
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

export default DoctorSignup;