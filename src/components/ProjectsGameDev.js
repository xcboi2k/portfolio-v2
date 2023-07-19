import React from 'react'
import ProjectCard from './ProjectCard'

//GAMES
import razorSquadronIcon from '../../public/images/projects/razor-squadron/razor-squadron_icon.png'
import razorSquadronPreview1 from '../../public/images/projects/razor-squadron/preview1.png'
import razorSquadronPreview2 from '../../public/images/projects/razor-squadron/preview2.png'
import razorSquadronPreview3 from '../../public/images/projects/razor-squadron/preview3.png'

import rainingZombiesIcon from '../../public/images/projects/raining-zombies/raining-zombies_icon.png'
import rainingZombiesPreview1 from '../../public/images/projects/raining-zombies/preview1.png'
import rainingZombiesPreview2 from '../../public/images/projects/raining-zombies/preview2.png'
import rainingZombiesPreview3 from '../../public/images/projects/raining-zombies/preview3.png'

import infectomatronIcon from '../../public/images/projects/infectomatron/infectomatron_icon.png'
import infectomatronPreview1 from '../../public/images/projects/infectomatron/preview1.png'
import infectomatronPreview2 from '../../public/images/projects/infectomatron/preview2.png'
import infectomatronPreview3 from '../../public/images/projects/infectomatron/preview3.png'

import cityAdventuresIcon from '../../public/images/projects/city-adventures/city-adventures_icon.png'
import cityAdventuresPreview1 from '../../public/images/projects/city-adventures/preview1.png'
import cityAdventuresPreview2 from '../../public/images/projects/city-adventures/preview2.png'

const ProjectsGameDev = () => {
    return (
        <div className='mb-2 flex flex-wrap justify-center'>
            <ProjectCard 
                logo={razorSquadronIcon}
                name='Razor Squadron'
                techStacks={['Unity']}
                description='Embark on an adrenaline-fueled journey with Razor Squadron, the ultimate 2D shooting game that pushes 
                    your skills to the limit, offering a captivating single level, diverse ship selection, and heart-pounding action to 
                    become a legendary aerial warrior.'
                websiteLink='https://xcboi2k.itch.io/razor-squadron'
                carouselImages={[razorSquadronPreview1, razorSquadronPreview2, razorSquadronPreview3]}
            />
            <ProjectCard 
                logo={rainingZombiesIcon}
                name='Raining Zombies'
                techStacks={['Unity']}
                description='Prepare for a thrilling challenge in Raining Zombies, where you must swiftly eliminate hordes of undead falling 
                from the sky to earn a high score and prove yourself as the ultimate zombie slayer.'
                websiteLink='https://xcboi2k.itch.io/raining-zombies'
                carouselImages={[rainingZombiesPreview1, rainingZombiesPreview2, rainingZombiesPreview3]}
            />
            <ProjectCard 
                logo={infectomatronIcon}
                name='Infectomatron'
                techStacks={['Unity']}
                description='Gear up and conquer the ever-evolving world of Infectomatron, the explosive top-down 2D shooting game 
                    that pushes your skills to the limits with intense battles, precise attacks, thrilling game modes, and a chance to 
                    dominate the leaderboards as the ultimate shooting game champion.'
                websiteLink='https://xcboi2k.itch.io/infectomatron'
                carouselImages={[infectomatronPreview1, infectomatronPreview2, infectomatronPreview3]}
            />
            <ProjectCard 
                logo={cityAdventuresIcon}
                name='City Adventures'
                techStacks={['Unity']}
                description='Embark on an exhilarating journey through City Adventures, the immersive 3D adventure game that blends 
                    excitement with real-world lessons in traffic safety and awareness, challenging players to collect coins while adhering 
                    to traffic rules and regulations, offering various player modes and an opportunity to become a responsible virtual citizen.'
                downloadLink='https://drive.google.com/file/d/1QKxo_KJaKsSaSPsHWqdvsHZeSvHSRKSI/view?usp=sharing'
                carouselImages={[cityAdventuresPreview1, cityAdventuresPreview2]}
            />
        </div>
    )
}

export default ProjectsGameDev