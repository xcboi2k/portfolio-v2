import AnimatedText from '@/components/AnimatedText'
import { CollaboratorIllustration, CriticalThinkerIllustration, FirebaseIcon, GoalIllustration, MongoDBIcon, ReactIcon, SQLiteIcon, TeamPlayerIllustration, UnityIcon } from '@/components/Icon'
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
            position: "Junior Mobile App Developer / Junior Web App Developer",
            company: "Vashcorp",
            date: "October 2023 - Present",
        },
        {
            position: "Junior Unity Programmer",
            company: "NTEK Systems Inc.",
            date: "August 2022 - October 2022",
        },
        {
            position: "Game Development Intern",
            company: "Metamedia Information Systems",
            date: "September 2021 - October 2021",
        },
    ];

    return (
        <>
            <Head>
                <title>AG Portfolio | About Page</title>
            </Head>
            <main className="w-full flex flex-col items-center justify-center px-4 sm:px-6">
                <Layout className="pt-6">
                    <PageTitle title="About Me" />
                    <div className="mt-5">
                        <div className="flex items-center justify-center mb-10 overflow-hidden">
                            <Image
                                src={profileImage}
                                alt="about_picture"
                                className="w-56 h-56 rounded-full"
                            />
                        </div>
                        <div className="mb-6">
                            <SectionTitle title="Biography" />
                            <p className="text-[#f0f8ff] text-center text-sm sm:text-base">
                                My name is Jose Alexei C. Garcia, I am currently a mobile app developer and web app developer with expertise in JavaScript (React and React Native).
                                With experience in the industry, I have honed my skills in mobile application development and web application development.
                                <br />
                                As a lifelong learner, I am committed to staying at the forefront of technology and constantly upgrading my skills.
                                <br />
                                I stay up to date with the latest trends, tools, and frameworks in the industry, ensuring that I can leverage the most effective solutions to tackle complex problems.
                                <br />
                                <br />
                                In conclusion, I am a passionate, dedicated, and experienced developer. With a focus on delivering exceptional solutions, I will continue to push boundaries and create meaningful impact through my work.
                                <br />
                                Whether it&apos;s projects or refreshers, I am always ready to take on new challenges and contribute to the ever-evolving field of software development.
                            </p>
                        </div>
                        <div className="mb-6">
                            <SectionTitle title="Soft Skills" />
                            <div className="flex flex-wrap justify-center gap-6">
                                <IconText 
                                    icon={<CriticalThinkerIllustration />} 
                                    text="Critical Thinker" 
                                />
                                <IconText 
                                    icon={<CollaboratorIllustration />} 
                                    text="Collaborator" 
                                />
                                <IconText 
                                    icon={<GoalIllustration />} 
                                    text="Goal-oriented" 
                                />
                                <IconText 
                                    icon={<TeamPlayerIllustration />} 
                                    text="Team Player" 
                                />
                            </div>
                        </div>
                        {/* <div className="mb-6">
                            <SectionTitle title="Technical Skills" />
                            <div className="mb-2">
                                <div className="mb-2">
                                    <p className="font-bold text-[#f0f8ff] mb-2 text-center">Game Development</p>
                                    <div className="flex flex-wrap justify-center gap-6">
                                        <IconText icon={<UnityIcon className="w-30 h-30 sm:w-20 sm:h-20" />} text="Unity C#" />
                                        <IconText icon={<SQLiteIcon className="w-24 h-24 sm:w-16 sm:h-16" />} text="SQLite" />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <p className="font-bold text-[#f0f8ff] mb-2 text-center">Mobile App Development</p>
                                    <div className="flex flex-wrap justify-center gap-6">
                                        <IconText icon={<ReactIcon className="w-24 h-24 sm:w-16 sm:h-16" />} text="React Native" />
                                        <IconText icon={<FirebaseIcon className="w-24 h-24 sm:w-16 sm:h-16" />} text="Firebase" />
                                        <IconText icon={<MongoDBIcon className="w-24 h-24 sm:w-16 sm:h-16" />} text="MongoDB" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
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