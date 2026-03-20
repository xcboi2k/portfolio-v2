import React from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

import lockIcon from '../../public/images/projects/lock_icon.png'

//MobApps
import collectorPlusIcon from '../../public/images/projects/collector-plus/collector-plus_icon.png'
import collectorPlusPreview1 from '../../public/images/projects/collector-plus/preview1.png'
import collectorPlusPreview2 from '../../public/images/projects/collector-plus/preview2.png'
import collectorPlusPreview3 from '../../public/images/projects/collector-plus/preview3.png'

import fitraIcon from '../../public/images/projects/fitra/fitra_icon.png'
import fitraPreview1 from '../../public/images/projects/fitra/preview1.png'
import fitraPreview2 from '../../public/images/projects/fitra/preview2.png'
import fitraPreview3 from '../../public/images/projects/fitra/preview3.png'

import swccIcon from '../../public/images/projects/swcc/swcc_icon.png'
import swccPreview1 from '../../public/images/projects/swcc/preview1.png'
import swccPreview2 from '../../public/images/projects/swcc/preview2.png'
import swccPreview3 from '../../public/images/projects/swcc/preview3.png'

import nipponAutoIcon from '../../public/images/projects/nippon-auto/nippon-auto-icon.png'

import fitBodyIcon from '../../public/images/projects/fitbody/fitbody-icon.png'
import fitBodyPreview1 from '../../public/images/projects/fitbody/fitbody-1.png'
import fitBodyPreview2 from '../../public/images/projects/fitbody/fitbody-2.png'
import fitBodyPreview3 from '../../public/images/projects/fitbody/fitbody-3.png'
import fitBodyPreview4 from '../../public/images/projects/fitbody/fitbody-4.png'
import fitBodyPreview5 from '../../public/images/projects/fitbody/fitbody-5.png'

import tixGenieIcon from '../../public/images/projects/tixgenie/tixgenie-icon.png'
import tixGeniePreview1 from '../../public/images/projects/tixgenie/tixgenie-1.png'
import tixGeniePreview2 from '../../public/images/projects/tixgenie/tixgenie-2.png'
import tixGeniePreview3 from '../../public/images/projects/tixgenie/tixgenie-3.png'
import tixGeniePreview4 from '../../public/images/projects/tixgenie/tixgenie-4.png'
import tixGeniePreview5 from '../../public/images/projects/tixgenie/tixgenie-5.png'
import tixGeniePreview6 from '../../public/images/projects/tixgenie/tixgenie-6.png'
import tixGeniePreview7 from '../../public/images/projects/tixgenie/tixgenie-7.png'

const chunkArray = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}

const createStripSlides = (images, itemsPerSlide = 2) => {
    const chunks = chunkArray(images, itemsPerSlide)
    return chunks.map((chunk, slideIdx) => (
        <div
            key={slideIdx}
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200 flex gap-2 p-2"
        >
            {chunk.map((image, idx) => (
                <div key={idx} className="flex-1 h-full">
                    <Image
                        src={image}
                        alt={`Preview ${slideIdx + 1}-${idx + 1}`}
                        priority={slideIdx === 0 && idx === 0}
                        className="object-contain h-full w-full"
                    />
                </div>
            ))}
        </div>
    ))
}

const ProjectsMobDev = () => {
    return (
        <div className="mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
                logo={swccIcon}
                name="Star Wars Collectibles Companion"
                techStacks={['React Native', 'Expo', 'Firebase']}
                description="Unleash the Force with SWCC, the ultimate mobile guide for Star Wars action figure collectors, offering a captivating 
                experience as you explore a vast collection of pictures, uncover fascinating details, and embrace the power of knowledge 
                in the palm of your hand."
                carouselImages={[swccPreview1, swccPreview2, swccPreview3]}
                youtubeLink="https://youtu.be/cw7Us9c88Zo"
                downloadLink="https://drive.google.com/file/d/1vafzfTJTg1qke7Z0eU_X3O6EFUHQrgrb/view?usp=sharing"
            />
            <ProjectCard
                logo={collectorPlusIcon}
                name="Collector Plus"
                techStacks={['React Native', 'Expo', 'Firebase']}
                description="Elevate your collecting experience with CollectorPlus, the essential mobile app that allows you to effortlessly 
                track, organize, and explore your collections, while keeping your wishlist in check and unlocking the full potential of your 
                treasures."
                carouselImages={[
                    collectorPlusPreview1,
                    collectorPlusPreview2,
                    collectorPlusPreview3,
                ]}
                youtubeLink="https://youtu.be/100qdb90WeE"
            />
            <ProjectCard
                logo={fitraIcon}
                name="FiTra"
                techStacks={['React Native', 'Expo', 'Firebase']}
                description="A software that aims to provide a cashflow monitoring system that could potentially improve the financial literacy 
                of the user and enhance financial awareness through habit tracking."
                carouselImages={[fitraPreview1, fitraPreview2, fitraPreview3]}
                youtubeLink="https://youtu.be/KYF2mFFrB5U"
                downloadLink="https://drive.google.com/file/d/1GGNhb9jVgGuZ2CI3Fwe54V5Tce69D5_Y/view?usp=sharing"
            />
            <ProjectCard
                logo={nipponAutoIcon}
                name="NipponAuto"
                techStacks={['React Native', 'Expo']}
                description="NipponAuto is a modern marketplace and social
                                platform where users can buy, sell, and feature
                                vehicles from various sellers, discover trending
                                cars, and connect with fellow car enthusiasts."
                // carouselImages={[fitraPreview1, fitraPreview2, fitraPreview3]}
                youtubeLink=""
            />
            <ProjectCard
                logo={fitBodyIcon}
                name="FitBody"
                techStacks={['React Native', 'Expo']}
                description="Converted a Figma wireframe into a fully responsive application UI, focusing on layout accuracy, component structure, and design consistency. This version does not include backend or API integration."
                carouselSlides={createStripSlides(
                    [fitBodyPreview1, fitBodyPreview2, fitBodyPreview3, fitBodyPreview4, fitBodyPreview5],
                    2
                )}
                youtubeLink=""
            />
            <ProjectCard
                logo={tixGenieIcon}
                name="TixGenie"
                techStacks={['React Native', 'Expo']}
                description="Converted a Figma wireframe into a fully responsive application UI, focusing on layout accuracy, component structure, and design consistency. This version does not include backend or API integration."
                carouselSlides={createStripSlides(
                    [
                        tixGeniePreview1,
                        tixGeniePreview2,
                        tixGeniePreview3,
                        tixGeniePreview4,
                        tixGeniePreview5,
                        tixGeniePreview6,
                        tixGeniePreview7,
                    ],
                    2
                )}
                youtubeLink=""
            />
        </div>
    )
}

export default ProjectsMobDev
