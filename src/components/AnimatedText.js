import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay: 0.5
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            delay: 1
        }
    }
}

const AnimatedText = ({text, className=''}) => {
    return (
        <div className='w-full mx-auto py-2 px-10 flex items-center justify text-center
        overflow-hidden'>
            <motion.h1 className={`${className} inline-block w-full text-[#f0f8ff] font-bold capitalize text-6xl text-right 
            text-shadow-lg`}
            variants={quote} initial='initial' animate='animate'>
                {text.split(" ").map((word, index) => 
                <motion.span key={word + '-' + index} className='inline-block'
                variants={singleWord} initial='initial' animate='animate'>
                    {word}&nbsp;
                </motion.span>)
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText