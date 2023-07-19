import React from 'react'
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

const ProjectsMobDev = () => {
    return (
        <div className='mb-2 flex flex-wrap justify-center'>
            <ProjectCard 
                logo={swccIcon}
                name='Star Wars Collectibles Companion'
                techStacks={['React Native', 'Firebase']}
                description='
                Unleash the Force with SWCC, the ultimate mobile guide for Star Wars action figure collectors, offering a captivating 
                experience as you explore a vast collection of pictures, uncover fascinating details, and embrace the power of knowledge 
                in the palm of your hand.'
                carouselImages={[swccPreview1, swccPreview2, swccPreview3]}
            />
            <ProjectCard 
                logo={collectorPlusIcon}
                name='Collector Plus'
                techStacks={['React Native', 'Firebase']}
                description='Elevate your collecting experience with CollectorPlus, the essential mobile app that allows you to effortlessly 
                track, organize, and explore your collections, while keeping your wishlist in check and unlocking the full potential of your 
                treasures.'
                carouselImages={[collectorPlusPreview1, collectorPlusPreview2, collectorPlusPreview3]}
            />
            <ProjectCard 
                logo={fitraIcon}
                name='FiTra'
                techStacks={['React Native', 'Firebase']}
                description='A software that aims to provide a cashflow monitoring system that could potentially improve the financial literacy 
                of the user and enhance financial awareness through habit tracking. '
                carouselImages={[fitraPreview1, fitraPreview2, fitraPreview3]}
            />
            <ProjectCard 
                logo={lockIcon}
                name='Coming Soon'
                techStacks={['React Native', 'MongoDB']}
                // description='Embark on an exhilarating journey through City Adventures, the immersive 3D adventure game that blends 
                //     excitement with real-world lessons in traffic safety and awareness, challenging players to collect coins while adhering 
                //     to traffic rules and regulations, offering various player modes and an opportunity to become a responsible virtual citizen.'
                // websiteLink='https://drive.google.com/file/d/1QKxo_KJaKsSaSPsHWqdvsHZeSvHSRKSI/view?usp=sharing'
                // carouselImages={[cityAdventuresPreview1, cityAdventuresPreview2]}
            />
        </div>
    )
}

export default ProjectsMobDev