import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { vashcorpWorkData } from '@/data/VashcorpWorkData'

const WorkExperience = ({ workHistory }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center justify-center mb-4 px-4 sm:px-6">
            <ul className="list-disc pl-6 space-y-2 w-full">
                {workHistory.map((item, index) => (
                    <li key={index} className="text-[#f0f8ff] relative">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold underline-offset-2 decoration-[#D600FF] text-lg sm:text-xl">
                                    {item.position}
                                </h4>
                                <p className="text-sm sm:text-base">
                                    {item.company}
                                </p>
                                <p className="text-xs sm:text-sm text-[#f0f8ff]">
                                    {item.date}
                                </p>
                            </div>
                            {index === 0 && (
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-[#f0f8ff] text-md"
                                >
                                    {isOpen ? 'See Less' : 'See More'}
                                </button>
                            )}
                        </div>
                        {index === 0 && isOpen && (
                            <>
                                <div className="mt-[15px] mb-[15px] rounded-lg p-[20px] bg-[#f0f8ff]">
                                    <h4 className="font-bold text-dark text-lg sm:text-xl mb-[5px]">
                                        Positions:
                                    </h4>
                                    <p className="text-sm sm:text-base text-dark">
                                        - Frontend Developer (November 2024 -
                                        Present)
                                    </p>
                                    <p className="text-sm sm:text-base text-dark">
                                        - Mobile Application Developer (October
                                        2023 - November 2024)
                                    </p>
                                </div>
                                <div className="mb-[15px] rounded-lg p-[20px] bg-[#f0f8ff]">
                                    <h4 className="font-bold text-dark text-lg sm:text-xl mb-[5px]">
                                        Projects Developed:
                                    </h4>
                                    <div className="space-y-8">
                                        {vashcorpWorkData?.map(
                                            (project, index) => (
                                                <div
                                                    key={index}
                                                    className="text-dark"
                                                >
                                                    {/* Project Name */}
                                                    <p className="text-lg font-semibold">
                                                        {index + 1}.{' '}
                                                        <span>
                                                            {
                                                                project.projectName
                                                            }
                                                        </span>
                                                    </p>

                                                    {/* Roles */}
                                                    <div className="ml-5 mt-2 text-sm sm:text-base space-y-3">
                                                        <p className="font-medium mb-1">
                                                            Roles:
                                                        </p>
                                                        {project.projectRoles.map(
                                                            (role, i) => (
                                                                <div key={i}>
                                                                    <p className="font-medium ml-4">
                                                                        -{' '}
                                                                        {
                                                                            role.role
                                                                        }
                                                                    </p>
                                                                    <p className="text-sm ml-8">
                                                                        {
                                                                            role.details
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>

                                                    {/* Project Link (conditionally shown) */}
                                                    {project.projectLinks && (
                                                        <div className="ml-5 mt-2 text-sm sm:text-base space-y-1">
                                                            <p className="font-medium mb-1">
                                                                Links:
                                                            </p>
                                                            {project.projectLinks.map(
                                                                (
                                                                    link,
                                                                    linkIndex
                                                                ) => (
                                                                    <a
                                                                        key={
                                                                            linkIndex
                                                                        }
                                                                        href={
                                                                            link.linkUrl
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-600 underline text-sm block ml-4"
                                                                    >
                                                                        {
                                                                            link.linkName
                                                                        }
                                                                    </a>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience
