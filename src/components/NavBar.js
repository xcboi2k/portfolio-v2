import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'

import { LinkedInIcon, GithubIcon, ItchIoIcon } from './Icon'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-[#b54ed7] absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-[#101130]'>
            <nav>
                <CustomLink href='/' title='HOME' className='mr-4 text-[#f0f8ff]'/>
                <CustomLink href='/about' title='ABOUT' className='mx-4 text-[#f0f8ff]'/>
                <CustomLink href='/projects' title='PROJECTS' className='ml-4 text-[#f0f8ff]'/>
            </nav>
            
            <nav className='flex items-center justify-between flex-wrap'>
                <motion.a href='https://www.linkedin.com/in/jose-alexei-garcia-065a86244/' target={'_blank'} 
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-7 mr-3'>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href='https://github.com/xcboi2k' target={'_blank'} 
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-7 mx-3'>
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://xcboi2k.itch.io/' target={'_blank'} 
                whileHover={{y:-2}}
                whileTap={{scale: 0.9}}
                className='w-7 ml-3'>
                    <ItchIoIcon />
                </motion.a>
            </nav>
            <div className='absolute left-[50%] top-1 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar