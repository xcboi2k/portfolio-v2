import React from 'react'

const SectionTitle = ({title}) => {
    return (
        <div className="flex items-center mb-4">
            <div className="flex-grow rounded border-[1px] border-[#b54ed7]"></div>
            <h2 className="mx-4 text-2xl font-bold text-[#f0f8ff]">{title}</h2>
            <div className="flex-grow rounded border-[1px] border-[#b54ed7]"></div>
        </div>
    )
}

export default SectionTitle