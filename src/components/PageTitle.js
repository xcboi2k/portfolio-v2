import React from 'react'
import { motion } from 'framer-motion';

const PageTitle = ({title}) => {
    return (
        <div className="flex items-center justify-center mb-8 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f8ff] text-center"
            >
                {title}
            </motion.h1>
        </div>
    )
}

export default PageTitle