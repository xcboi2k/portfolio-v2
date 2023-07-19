import React from 'react'

const IconText = ({ icon, text }) => {
    return (
        <div className="flex flex-col items-center m-4">
            <div className="mb-4">{icon}</div>
            <p className="text-center font-medium text-[#f0f8ff]">{text}</p>
        </div>
    )
}

export default IconText