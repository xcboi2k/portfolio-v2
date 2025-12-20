import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Settings } from 'lucide-react'
import SectionTitle from '../SectionTitle'

// NipponAuto Mobile Preview Images
import nipponAutoMobile1 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-1.png'
import nipponAutoMobile2 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-2.png'
import nipponAutoMobile3 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-3.png'

export default function OngoingProjects() {
    return (
        <div className="flex flex-col px-6 md:px-20 py-10 bg-white">
            <div className="flex items-center justify-center mb-8 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101130] text-center"
                >
                    Ongoing Projects
                </motion.h1>
            </div>
            <div className="mb-5 w-full">
                <div className="flex items-center mb-4 px-2 sm:px-0">
                    <div className="block sm:hidden flex-grow rounded border-[1px] border-[#b54ed7] mr-2"></div>
                    <div className="hidden sm:block flex-grow rounded border-[1px] border-[#b54ed7]"></div>
                    <h2 className="mx-2 sm:mx-4 text-lg sm:text-xl md:text-2xl font-bold text-[#101130] text-center sm:text-center">
                        Mobile App Development
                    </h2>
                    <div className="hidden sm:block flex-grow rounded border-[1px] border-[#b54ed7]"></div>
                </div>
                <div className="w-full bg-gray-50 py-10 px-4 mb-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Text Section */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                NipponAuto
                            </h1>
                            <p className="mt-3 text-gray-600 max-w-2xl">
                                NipponAuto is a modern marketplace and social
                                platform where users can buy, sell, and feature
                                vehicles from various sellers, discover trending
                                cars, and connect with fellow car enthusiasts.
                            </p>
                        </div>

                        {/* Preview Section */}
                        <div className="md:w-1/2 w-full">
                            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200 flex gap-2 p-2">
                                <div className="flex-1 h-full">
                                    <Image
                                        src={nipponAutoMobile1}
                                        alt="NipponAuto Mobile Preview 1"
                                        className="object-contain h-full w-full"
                                        priority
                                    />
                                </div>
                                <div className="flex-1 h-full">
                                    <Image
                                        src={nipponAutoMobile2}
                                        alt="NipponAuto Mobile Preview 2"
                                        className="object-contain h-full w-full"
                                    />
                                </div>
                                <div className="flex-1 h-full">
                                    <Image
                                        src={nipponAutoMobile3}
                                        alt="NipponAuto Mobile Preview 3"
                                        className="object-contain h-full w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-4 px-2 sm:px-0">
                    <div className="block sm:hidden w-12 rounded border-[1px] border-[#b54ed7] mr-2"></div>
                    <div className="hidden sm:block flex-grow rounded border-[1px] border-[#b54ed7]"></div>
                    <h2 className="mx-2 sm:mx-4 text-lg sm:text-xl md:text-2xl font-bold text-[#101130] text-center sm:text-center">
                        Web App Development
                    </h2>
                    <div className="hidden sm:block flex-grow rounded border-[1px] border-[#b54ed7]"></div>
                </div>
                <div className="w-full bg-gray-50 py-10 px-4 mb-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Text Section */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                NipponAuto
                            </h1>
                            <p className="mt-3 text-gray-600 max-w-2xl">
                                NipponAuto is a modern marketplace and social
                                platform where users can buy, sell, and feature
                                vehicles from various sellers, discover trending
                                cars, and connect with fellow car enthusiasts.
                            </p>
                        </div>

                        {/* Building Section */}
                        <div className="md:w-1/2 w-full">
                            <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden flex flex-col items-center justify-center text-gray-500">
                                {/* Cog Icon */}
                                <Settings className="w-16 h-16 md:w-20 md:h-20 mb-4 animate-spin" />
                                <p className="text-lg md:text-xl font-semibold">
                                    Currently Building
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
