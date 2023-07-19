import React from 'react'
import { motion } from 'framer-motion';

const PageTitle = ({title}) => {
    return (
        <div className="flex items-center justify-center mb-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-[#f0f8ff]"
            >
                {title}
            </motion.h1>
        </div>
    )
}

export default PageTitle