import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import doctor6Image from '../assets/images/doctor6.jpg';
import { dataPrivacyPolicy } from '../legal/dataPrivacyPolicy';
import { NDA } from '../legal/NDA';

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

const apiBaseUrl = import.meta.env.VITE_API_SERVER_URL;

function DoctorSignup() {

    const [ showNDA, setShowNDA ] = useState(false);
    const [ showDataPolicy, setShowDataPolicy ] = useState(false);

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.currentTarget.files[0]);
        setFieldValue("credentials", file);
      };

    const registerDoctor = async (values) => {
        console.log('Form submitted:', values);
        const formData = new FormData();
        formData.append('fullName', values.fullName);
        formData.append('emailAddress', values.emailAddress);
        formData.append('role', 'DOCTOR'); //capitalize?
        formData.append('homeAddress', values.homeAddress);
        formData.append('password', values.password);
        formData.append('phoneNumber', values.phoneNumber);
        formData.append('spokenLanguages', values.spokenLanguages);

        if (file) {
            formData.append('credentials', file);
          }

            try {
                const response = await axios.post(`${apiBaseUrl}/api/auth/register/doctor`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  });
              } catch (err) {
                console.error('Error submitting form:', err);
              }
            
        
    }

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
        <div className="w-full bg-mylight py-10">
            <div className='max-w-[900px] flex flex-col mx-auto shadow-lg p-4 bg-white'>
                <h1 className="text-2xl font-bold text-center mb-6">Sign up as a Doctor</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4  p-4 mx-auto place-items-center'>
                    <div className=''>
                        <img src={doctor6Image} alt="" className='bg-amber-700' />
                    </div>
                    <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={(values) => {
                        registerDoctor(values);
                    }}>
                        {({ isSubmitting, setFieldValue }) => (
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
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="spokenLanguages" value="english" className="accent-mygreen mr-1" />
                                                English
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="spokenLanguages" value="pidgin" className="accent-mygreen mr-1" />
                                                Pidgin
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="spokenLanguages" value="edo" className="accent-mygreen mr-1" />
                                                Edo
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
                                                <Field type="checkbox" name="spokenLanguages" value="yoruba" className="accent-mygreen mr-1" />
                                                Yoruba
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="spokenLanguages" value="igbo" className="accent-mygreen mr-1" />
                                                Igbo
                                            </label>
                                            </div>
                                    </div>
                                    <ErrorMessage name="spokenLanguages" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="font-semibold">Upload Your Credentials</label>
                                    <input
                                        name="credentials"
                                        type="file"
                                        accept=".pdf"
                                        className="rounded-md shadow-sm py-2 px-4 outline-gray-300 focus:outline-mygreen outline-1 caret-mygreen text-mygreen max-w-56 bg-mylime"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            setFieldValue("credentials", file);
                                        }}
                                    />
                                    <ErrorMessage name="credentials" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm">By signing up, you agree to our <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowDataPolicy(true)}>Data Privacy Policy</span> and <span className="text-mygreen cursor-pointer font-bold hover:border-b-1" onClick={() => setShowNDA(true)}>Non Disclosure Agreement</span>.</p>
                                    <div className='flex gap-1'>
                                        <Field type="checkbox" name="agree" className="accent-mygreen" />
                                        <label htmlFor="agree">I agree to the Terms and Conditions</label>
                                    </div>
                                    <ErrorMessage name="agree" component="div" className="text-orange-600 text-sm" />
                                </div>
                                <button type="submit" className="text-mylight rounded-lg bg-mygreen py-2 min-w-28 px-4 hover:cursor-pointer hover:bg-mygreen/80" disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create Account'}</button>
                                <Link to="/login">I already have an account</Link>
                            </Form>
                        )}
                    </Formik>
                    
                </div>
            </div>
            {showDataPolicy && <Modal title="Data Policy" terms={dataPrivacyPolicy} onClose={() => setShowDataPolicy(false)} />}
            {showNDA && <Modal title="Non-Disclosure Agreement" onClose={() => setShowNDA(false)} />}
        </div>
    )
}

export default DoctorSignup;