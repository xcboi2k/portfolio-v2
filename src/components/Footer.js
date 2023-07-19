import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-[#101130] font-medium text-lg bg-[#101130]'>
            <Layout className='py-6 flex items-center justify-between text-[#f0f8ff] p-32'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <Link href='/'>Jose Alexei C. Garcia</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer