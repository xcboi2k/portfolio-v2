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
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            Developed and deployed multiple web
                                            and mobile applications across
                                            various domains, including
                                            <span className="font-semibold">
                                                {' '}
                                                4Gives, BetterCrew, Vashcorp
                                                Website
                                            </span>
                                            , as well as internal projects like
                                            a lending app and an early wage
                                            access system for organizational use
                                        </li>
                                        <li>
                                            Built cross-platform mobile
                                            applications (Android & iOS) using{' '}
                                            <span className="font-semibold">
                                                React Native
                                            </span>
                                            , ensuring consistent performance
                                            and user experience across devices
                                        </li>
                                        <li>
                                            Designed and implemented scalable,
                                            reusable UI components for web
                                            applications using{' '}
                                            <span className="font-semibold">
                                                React
                                            </span>{' '}
                                            and modern frontend technologies
                                        </li>
                                        <li>
                                            Translated{' '}
                                            <span className="font-semibold">
                                                Figma
                                            </span>{' '}
                                            designs into responsive,
                                            production-ready interfaces with
                                            strong attention to UX and
                                            performance
                                        </li>
                                        <li>
                                            Owned and managed the full
                                            deployment lifecycle, including:
                                            <ul className="list-disc list-inside ml-5 space-y-1">
                                                <li>
                                                    Publishing mobile apps to
                                                    Google Play Store and Apple
                                                    App Store
                                                </li>
                                                <li>
                                                    Deploying web applications
                                                    via AWS and Vercel
                                                </li>
                                                <li>
                                                    Monitoring builds, releases,
                                                    and production issues
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Led ongoing maintenance across web
                                            and mobile platforms, delivering
                                            regular updates, bug fixes, and
                                            performance optimizations to ensure
                                            application stability
                                        </li>
                                        <li>
                                            Conducted comprehensive QA testing
                                            cycles before each release,
                                            identifying and resolving UI/UX and
                                            functional issues to maintain
                                            high-quality standards
                                        </li>
                                        <li>
                                            Created app store assets and preview
                                            media, contributing to improved
                                            presentation and user acquisition
                                        </li>
                                        <li>
                                            Collaborated with cross-functional
                                            teams including designers and
                                            backend developers to deliver
                                            features efficiently in a fast-paced
                                            environment
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="mb-[15px] rounded-lg p-[20px] bg-[#f0f8ff]">
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
                                                    <p className="text-lg font-semibold">
                                                        {index + 1}.{' '}
                                                        <span>
                                                            {
                                                                project.projectName
                                                            }
                                                        </span>
                                                    </p>
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
                                </div> */}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience
