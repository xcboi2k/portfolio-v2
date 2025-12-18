'use client'

import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

import AGLogo from '../../public/images/AG-Logo.png'
import { LinkedInIcon, GithubIcon, ItchIoIcon } from './Icon'
import { EMAIL_NEWSLETTER_API_URL } from '@/constants/api'
import Loader from '@/components/Loader'
import useLoaderStore from '@/stores/useLoaderStore'

export default function Footer() {
    const router = useRouter()

    const { showLoader, hideLoader } = useLoaderStore()
    const initialValues = {
        email: '',
    }

    const handleSubmit = async (values, { resetForm }) => {
        showLoader()
        console.log('submitted data:', values)

        const scriptURL = EMAIL_NEWSLETTER_API_URL
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify({
                    email: values.email,
                    date: new Date().toLocaleDateString(),
                }),
            })

            if (response.ok) {
                const result = await response.json()
                console.log('Success:', result)
                toast.success('Email submitted successfully!')
                // Reset form data
                resetForm()
                hideLoader()
            } else {
                toast.error('Email submission failed. Please try again.')
                console.error(
                    'Error:',
                    'Email submission failed. Please try again.'
                )
                hideLoader()
            }
        } catch (error) {
            toast.error(
                'Service not available right now. Please try again later.'
            )
            hideLoader()
            console.error('Error:', error)
        } finally {
            hideLoader()
        }
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        message: Yup.string().required('Message is required'),
    })

    return (
        <div className="flex flex-col px-6 md:px-20 py-10 bg-[#101130]">
            {/* Left Side - Logo + Newsletter */}
            <div className="w-full max-w-none flex flex-col md:flex-row mb-6">
                <div className="flex-1 mb-6">
                    <button onClick={() => router.push('/')}>
                        <Image
                            src={AGLogo}
                            alt="Logo"
                            width={70}
                            height={70}
                            className="mb-6"
                        />
                    </button>

                    <p className="text-white text-sm mb-4">
                        Message me your thoughts and ideas.
                    </p>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form>
                                <div className="flex flex-col gap-3 mb-2">
                                    <div>
                                        <input
                                            type="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="w-full sm:w-[300px] px-4 py-2 border border-white bg-transparent rounded-lg text-white placeholder-white/70 focus:outline-none"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        {touched.name && errors.name && (
                                            <p className="text-white text-sm">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <textarea
                                            type="message"
                                            name="message"
                                            placeholder="Enter your message"
                                            className="w-full sm:w-[300px] h-[150px] p-4 border border-white bg-transparent outline-none rounded-lg text-white placeholder-white/70 "
                                            value={values.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        {touched.message && errors.message && (
                                            <p className="text-white text-sm">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="lg:w-[22%] w-[50%] bg-white px-4 py-2 rounded-lg text-[#101130] font-semibold hover:opacity-90 transition"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="flex-1 mt-[20px]">
                        <div className="flex items-start gap-4">
                            <motion.a
                                href="https://www.linkedin.com/in/jose-alexei-garcia-065a86244/"
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 mx-4"
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a
                                href="https://github.com/xcboi2k"
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 mx-4"
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a
                                href="https://xcboi2k.itch.io/"
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 mx-4"
                            >
                                <ItchIoIcon />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-center sm:text-left">
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <p className="mt-2 text-sm text-white text-center sm:text-left">
                    Jose Alexei Garcia
                </p>
            </div>
            <Loader />
        </div>
    )
}
