import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2 sm:mt-4">
            <MotionLink
                href="/"
                className="w-16 h-16 sm:w-20 sm:h-20 justify-center"
                whileHover={{ scale: 1.5 }}
            >
                <img
                    src="images/AG-Logo.png"
                    className="object-contain w-full h-full"
                    alt="AG Logo"
                />
            </MotionLink>
        </div>
    )
}

export default Logo