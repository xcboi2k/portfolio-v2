import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import Layout from './Layout'
import { LinkedInIcon, GithubIcon, ItchIoIcon } from './Icon'

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-[#101130] font-medium text-base bg-gradient-to-r from-[#101130] to-[#1a1a2e] shadow-lg">
            <Layout className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between text-[#f0f8ff] px-4 sm:px-6 md:px-8" footer={true}>
                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-center sm:text-left">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <p className="mt-2 text-sm text-[#d1d1d1] text-center sm:text-left">Jose Alexei Garcia</p>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center mb-4">
                    <Link href="/" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105 mx-2">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105 mx-2">
                        About
                    </Link>
                </div>
                <nav className="flex items-center justify-center">
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
                </nav>
            </Layout>
        </footer>
    )
}

export default Footer