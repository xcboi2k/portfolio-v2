import React from 'react'

const WorkExperience = ({ workHistory }) => {
    return (
        <div className="flex items-center justify-center mb-4">
            <ul className="list-disc pl-6">
                {workHistory.map((item, index) => (
                <li key={index} className="text-[#f0f8ff] mb-2">
                    <h4 className="font-bold underline-offset-2 decoration-[#D600FF]">{item.position}</h4>
                    <p>{item.company}</p>
                    <p className="text-sm text-[#f0f8ff]">{item.date}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience