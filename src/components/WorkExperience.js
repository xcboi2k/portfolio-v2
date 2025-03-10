import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';

const WorkExperience = ({ workHistory }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center mb-4 px-4 sm:px-6">
            <ul className="list-disc pl-6 space-y-2 w-full">
                {workHistory.map((item, index) => (
                    <li key={index} className="text-[#f0f8ff] relative">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold underline-offset-2 decoration-[#D600FF] text-lg sm:text-xl">{item.position}</h4>
                                <p className="text-sm sm:text-base">{item.company}</p>
                                <p className="text-xs sm:text-sm text-[#f0f8ff]">{item.date}</p>
                            </div>
                            {index === 0 && (
                                <button 
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-[#f0f8ff] text-xl"
                                >
                                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                                </button>
                            )}
                        </div>
                        {index === 0 && isOpen && (
                            <div className="mt-[15px] mb-[15px] rounded-lg p-[20px] bg-[#f0f8ff]">
                                <h4 className="font-bold text-dark text-lg sm:text-xl mb-[5px]">Experience</h4>
                                <p className="text-sm sm:text-base text-dark">- Mobile Application Development</p>
                                <div className="text-sm sm:text-base text-dark ml-[10px] mb-[10px]">
                                    {[
                                        "• I developed our mobile application called 4Gives in Android and IOS. Currently deployed in Google Play Store and App Store.",
                                        "• I handled deployments in Google Play Store and App Store for our mobile application.",
                                        "• I made the application previews for Google Play Store and App Store.",
                                        "• I am the main QA Tester for our mobile application."
                                    ].map((text, i) => (
                                        <p key={i} className="mb-1">{text}</p>
                                    ))}
                                </div>

                                <div className="w-full flex-col mb-[30px] ml-[10px]">
                                    <p className="text-sm sm:text-base text-dark">Links:</p>
                                    <p className="text-sm sm:text-base text-dark ml-[10px]">
                                        • Google Play Store:{' '}
                                        <a 
                                            href="https://play.google.com/store/apps/details?id=com.vashcorp4Gives.me&pcampaignid=web_share" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            4Gives
                                        </a>
                                    </p>
                                    <p className="text-sm sm:text-base text-dark ml-[10px]">
                                        • App Store:{' '}
                                        <a 
                                            href="https://apps.apple.com/ph/app/4gives/id6475159043" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            4Gives
                                        </a>
                                    </p>
                                </div>
                                

                                <p className="text-sm sm:text-base text-dark">- Web Application Development</p>
                                <div className="text-sm sm:text-base text-dark ml-[10px] mb-[20px]">
                                    {[
                                        "• I developed some pages in the 4Gives web application.",
                                        "• I handle the maintenance and further improvements of 4Gives and its Admin Dashboard.",
                                        "• I developed our company website and stand-alone eKYC platform. (Both are not yet deployed publicly)",
                                        "• I handled deployments of our web application in AWS and Vercel.",
                                        "• I am the main QA Tester for our web applications."
                                    ].map((text, i) => (
                                        <p key={i} className="mb-1">{text}</p>
                                    ))}
                                </div>

                                <div className="w-full flex-col mb-[30px] ml-[10px]">
                                    <p className="text-sm sm:text-base text-dark">
                                        • Link of 4Gives:{' '}
                                        <a 
                                            href="https://www.4gives.me" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            4Gives
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience