import React from 'react'

const IconText = ({ icon, text }) => {
    return (
        <div className="flex flex-col items-center m-4 w-full md:w-1/2 lg:w-1/4">
            <div className="mb-2 flex items-center justify-center">
                {icon}
            </div>
            <p className="text-center font-medium text-[#f0f8ff] text-sm sm:text-base">{text}</p>
        </div>
    )
}

export default IconText