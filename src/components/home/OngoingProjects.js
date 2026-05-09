import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Settings } from 'lucide-react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import SectionTitle from '../SectionTitle'

// NipponAuto Mobile Preview Images
import nipponAutoMobile1 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-1.png'
import nipponAutoMobile2 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-2.png'
import nipponAutoMobile3 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-3.png'
import nipponAutoMobile4 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-4.png'
import nipponAutoMobile5 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-5.png'
import nipponAutoMobile6 from '../../../public/images/projects/nippon-auto/home-mobile-previews/NipponAuto-Mobile-6.png'

// NipponAuto Web App Preview Images
import nipponAutoWebApp1 from '../../../public/images/projects/nippon-auto/home-web-previews/landing-page.png'
import nipponAutoWebApp2 from '../../../public/images/projects/nippon-auto/home-web-previews/marketplace-1.png'
import nipponAutoWebApp3 from '../../../public/images/projects/nippon-auto/home-web-previews/community.png'
import nipponAutoWebApp4 from '../../../public/images/projects/nippon-auto/home-web-previews/feed.png'
import nipponAutoWebApp5 from '../../../public/images/projects/nippon-auto/home-web-previews/marketplace-2.png'
import OngoingProjectCard from './OngoingProjectCard'

// CollectorPlus Mobile Preview Images
import collectorPlusMobile1 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-1.png'
import collectorPlusMobile2 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-2.png'
import collectorPlusMobile3 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-3.png'
import collectorPlusMobile4 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-4.png'
import collectorPlusMobile5 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-5.png'
import collectorPlusMobile6 from '../../../public/images/projects/collector-plus/home-mobile-previews/CollectorPlus-Mobile-6.png'

// Assembli Mobile Preview Images
import assembliMobile1 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-1.png'
import assembliMobile2 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-2.png'
import assembliMobile3 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-3.png'
import assembliMobile4 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-4.png'
import assembliMobile5 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-5.png'
import assembliMobile6 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-6.png'

export default function OngoingProjects() {
    const nipponAutoImages = [
        {
            type: 'mobile',
            images: [nipponAutoMobile1, nipponAutoMobile2, nipponAutoMobile3],
        },
        {
            type: 'mobile',
            images: [nipponAutoMobile4, nipponAutoMobile5, nipponAutoMobile6],
        },
        {
            type: 'web',
            images: [nipponAutoWebApp1],
        },
        {
            type: 'web',
            images: [nipponAutoWebApp2],
        },
        {
            type: 'web',
            images: [nipponAutoWebApp3],
        },
        {
            type: 'web',
            images: [nipponAutoWebApp4],
        },
        {
            type: 'web',
            images: [nipponAutoWebApp5],
        },
    ]

    const collectorPlusImages = [
        {
            type: 'mobile',
            images: [
                collectorPlusMobile1,
                collectorPlusMobile2,
                collectorPlusMobile3,
            ],
        },
        {
            type: 'mobile',
            images: [
                collectorPlusMobile4,
                collectorPlusMobile5,
                collectorPlusMobile6,
            ],
        },
    ]

    const assembliImages = [
        {
            type: 'mobile',
            images: [assembliMobile1, assembliMobile2, assembliMobile3],
        },
        {
            type: 'mobile',
            images: [assembliMobile4, assembliMobile5, assembliMobile6],
        },
    ]
    return (
        <div className="flex flex-col px-6 md:px-20 py-10 [#060816]">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="mb-14">
                    {/* <p className="text-cyan-400 tracking-[0.3em] text-sm mb-4">
                        OPERATIONS LOG
                    </p> */}

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        Active & Archived Deployments
                    </h1>

                    <p className="text-zinc-400 max-w-2xl leading-relaxed">
                        Ongoing systems, deployed platforms, and experimental
                        applications currently within development and production
                        environments.
                    </p>
                </div>

                {/* PROJECTS */}
                <div className="flex flex-col gap-12">
                    {/* PROJECT CARD */}
                    <OngoingProjectCard
                        appName="Assembli"
                        appDescription="Current UI and displayed information are placeholders and may change during development. This is an initial version."
                        techStack={['React Native', 'Expo']}
                        platforms={['Mobile Application']}
                        imageData={assembliImages}
                        dateLastUpdated="MAY 2026"
                        updateStatus="In Development"
                    />
                    <OngoingProjectCard
                        appName="CollectorPlus"
                        appDescription="Elevate your collecting experience with CollectorPlus, the essential mobile app that allows you to effortlessly 
                track, organize, and explore your collections, while keeping your wishlist in check and unlocking the full potential of your 
                treasures."
                        techStack={['React Native', 'Expo', 'Supabase']}
                        platforms={['Mobile Application']}
                        imageData={collectorPlusImages}
                        dateLastUpdated="MAY 2026"
                        updateStatus="Archived"
                    />
                    <OngoingProjectCard
                        appName="NipponAuto"
                        appDescription="NipponAuto is a modern marketplace and social
                                platform where users can buy, sell, and feature
                                vehicles from various sellers, discover trending
                                cars, and connect with fellow car enthusiasts."
                        techStack={[
                            'React',
                            'Next.JS',
                            'React Native',
                            'Expo',
                            'Python',
                            'DJango',
                        ]}
                        platforms={[
                            'Web Application',
                            'Mobile Application',
                            'Backend',
                        ]}
                        imageData={nipponAutoImages}
                        dateLastUpdated="APR 2026"
                        updateStatus="In Development"
                    />
                </div>
            </div>
        </div>
    )
}
