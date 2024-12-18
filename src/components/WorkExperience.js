import React from 'react'

const WorkExperience = ({ workHistory }) => {
    return (
        <div className="flex items-center justify-center mb-4 px-4 sm:px-6">
            <ul className="list-disc pl-6 space-y-2">
                {workHistory.map((item, index) => (
                    <li key={index} className="text-[#f0f8ff]">
                        <h4 className="font-bold underline-offset-2 decoration-[#D600FF] text-lg sm:text-xl">{item.position}</h4>
                        <p className="text-sm sm:text-base">{item.company}</p>
                        <p className="text-xs sm:text-sm text-[#f0f8ff]">{item.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience