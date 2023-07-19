import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/' className='w-20 h-20 justify-center' whileHover={{scale: 1.5}}>
                <img src='images/AG-Logo.png'/>
            </MotionLink>
        </div>
    )
}

export default Logo