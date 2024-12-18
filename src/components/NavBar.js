import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react';

import { LinkedInIcon, GithubIcon, ItchIoIcon } from './Icon'
import Logo from './Logo'

const CustomLink = ({href, title, className="", onClick}) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) onClick(); // Call the onClick prop if it exists
    };

    return(
        <Link href={href} className={`${className} relative group text-base sm:text-lg`} onClick={handleClick}>
            {title}
            <span
                className={`h-[2px] inline-block bg-[#b54ed7] absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease-in-out duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log('modal:',isModalOpen)

    const toggleModalOpen = () => {
        setIsModalOpen(true);
    };

    const toggleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <header className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 md:py-8 font-medium flex items-center justify-between bg-[#101130] relative">
            {/* Hamburger Button */}
            <button
                onClick={toggleModalOpen}
                className="sm:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
            >
                <Menu className="text-white animate-pulse" />
            </button>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 sm:top-2 flex justify-center w-full">
                <Logo />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#101130] bg-opacity-95 z-50 flex flex-col items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={toggleModalClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center focus:outline-none text-[#f0f8ff] text-2xl"
                    >
                        &times;
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col items-center mb-8">
                        <CustomLink href="/" title="HOME" className="mb-4 text-[#f0f8ff] text-2xl" onClick={toggleModalClose}/>
                        <CustomLink href="/about" title="ABOUT" className="mb-4 text-[#f0f8ff] text-2xl" onClick={toggleModalClose}/>
                        <CustomLink href="/projects" title="PROJECTS" className="text-[#f0f8ff] text-2xl" onClick={toggleModalClose}/>
                    </nav>

                    {/* Social Links */}
                    <nav className="flex items-center justify-center">
                        <motion.a
                            href="https://www.linkedin.com/in/jose-alexei-garcia-065a86244/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 mx-4"
                            onClick={toggleModalClose}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://github.com/xcboi2k"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 mx-4"
                            onClick={toggleModalClose}
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://xcboi2k.itch.io/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 mx-4"
                            onClick={toggleModalClose}
                        >
                            <ItchIoIcon />
                        </motion.a>
                    </nav>
                </div>
            )}

            {/* Navigation for Larger Screens */}
            <nav className="hidden sm:flex">
                <CustomLink href="/" title="HOME" className="mr-4 text-[#f0f8ff] text-base" />
                <CustomLink href="/about" title="ABOUT" className="mx-4 text-[#f0f8ff] text-base" />
                <CustomLink href="/projects" title="PROJECTS" className="ml-4 text-[#f0f8ff] text-base" />
            </nav>

            <nav className="hidden sm:flex items-center">
                <motion.a
                    href="https://www.linkedin.com/in/jose-alexei-garcia-065a86244/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 mr-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="https://github.com/xcboi2k"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="https://xcboi2k.itch.io/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 ml-3"
                >
                    <ItchIoIcon />
                </motion.a>
            </nav>
        </header>
    )
}

export default NavBar