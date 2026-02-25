import AnimatedText from '@/components/AnimatedText'
import {
    CollaboratorIllustration,
    CriticalThinkerIllustration,
    FirebaseIcon,
    GoalIllustration,
    MongoDBIcon,
    ReactIcon,
    SQLiteIcon,
    TeamPlayerIllustration,
    UnityIcon,
} from '@/components/Icon'
import IconText from '@/components/IconText'
import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import SectionTitle from '@/components/SectionTitle'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import profileImage from '../../public/images/profile_pic.jpg'

const about = () => {
    const workHistory = [
        {
            position: 'Frontend Developer',
            company: 'Vashcorp',
            date: 'October 2023 - Present',
        },
        {
            position: 'Junior Unity Programmer',
            company: 'NTEK Systems Inc.',
            date: 'August 2022 - October 2022',
        },
        {
            position: 'Game Development Intern',
            company: 'Metamedia Information Systems',
            date: 'September 2021 - October 2021',
        },
    ]

    return (
        <>
            <Head>
                <title>AG Portfolio | About Page</title>
            </Head>
            <main className="w-full flex flex-col items-center justify-center px-4 sm:px-6">
                <Layout className="pt-6">
                    <PageTitle title="About Me" />
                    <div className="mt-5">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left mb-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src={profileImage}
                                    alt="about_picture"
                                    className="w-56 h-56 rounded-full"
                                />
                            </div>

                            <div className="max-w-xl">
                                <p className="text-[#f0f8ff] text-sm sm:text-base mb-4">
                                    I am Jose Alexei C. Garcia, a Frontend
                                    Developer from the Philippines with 3+ years
                                    of experience developing web and mobile
                                    applications. I specialize in
                                    Javascript/Typescript ecosystems.
                                </p>

                                <p className="text-[#f0f8ff] text-sm sm:text-base">
                                    I am also familiar with Backend Development
                                    (Node.js, Express.js, MongoDB, and Django)
                                    and Game Development (Unity, Python), which
                                    I have done in my free time.
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <SectionTitle title="Work Experience" />
                            <WorkExperience workHistory={workHistory} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about
