import 'react-responsive-carousel/lib/styles/carousel.min.css'

import OngoingProjectCard from './OngoingProjectCard'

// Assembli Mobile Preview Images
import { collectorPlusImages, nipponAutoImages } from '@/constants/images'
import assembliMobile1 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-1.png'
import assembliMobile2 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-2.png'
import assembliMobile3 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-3.png'
import assembliMobile4 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-4.png'
import assembliMobile5 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-5.png'
import assembliMobile6 from '../../../public/images/projects/assembli/home-mobile-previews/Assembli-Mobile-6.png'

export default function OngoingProjects() {
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
