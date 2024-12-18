import React from 'react'

const OtherProjectsCard = ({ projectName, projectDescription, techStack, viewLink }) => {
    return (
        <div className="bg-[#101130] p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-[#f0f8ff] text-xl font-semibold">{projectName}</h2>
                    <p className="text-[#b54ed7] italic">{projectDescription}</p>
                    <div className="mt-2">
                        {viewLink && (
                            <a
                                href={viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#b54ed7] text-[#28283c] font-semibold py-2 px-4 mt-4 rounded"
                            >
                                View
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-[#28283c] text-[#f0f8ff] rounded-lg text-sm font-semibold mb-2 sm:mb-0"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OtherProjectsCard