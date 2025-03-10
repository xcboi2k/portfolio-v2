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
        <div className="mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard 
                logo={swccIcon}
                name='Star Wars Collectibles Companion'
                techStacks={['React Native', 'Expo', 'Firebase']}
                description='Unleash the Force with SWCC, the ultimate mobile guide for Star Wars action figure collectors, offering a captivating 
                experience as you explore a vast collection of pictures, uncover fascinating details, and embrace the power of knowledge 
                in the palm of your hand.'
                carouselImages={[swccPreview1, swccPreview2, swccPreview3]}
                youtubeLink="https://youtu.be/cw7Us9c88Zo"
                downloadLink="https://drive.google.com/file/d/1vafzfTJTg1qke7Z0eU_X3O6EFUHQrgrb/view?usp=sharing"
            />
            <ProjectCard 
                logo={collectorPlusIcon}
                name='Collector Plus'
                techStacks={['React Native', 'Expo', 'Firebase']}
                description='Elevate your collecting experience with CollectorPlus, the essential mobile app that allows you to effortlessly 
                track, organize, and explore your collections, while keeping your wishlist in check and unlocking the full potential of your 
                treasures.'
                carouselImages={[collectorPlusPreview1, collectorPlusPreview2, collectorPlusPreview3]}
                youtubeLink="https://youtu.be/100qdb90WeE"
            />
            <ProjectCard 
                logo={fitraIcon}
                name='FiTra'
                techStacks={['React Native', 'Expo', 'Firebase']}
                description='A software that aims to provide a cashflow monitoring system that could potentially improve the financial literacy 
                of the user and enhance financial awareness through habit tracking.'
                carouselImages={[fitraPreview1, fitraPreview2, fitraPreview3]}
                youtubeLink="https://youtu.be/KYF2mFFrB5U"
                downloadLink="https://drive.google.com/file/d/1GGNhb9jVgGuZ2CI3Fwe54V5Tce69D5_Y/view?usp=sharing"
            />
            {/* <ProjectCard 
                logo={lockIcon}
                name='Coming Soon'
                techStacks={['React Native', 'MongoDB']}
            /> */}
        </div>
    )
}

export default ProjectsMobDev