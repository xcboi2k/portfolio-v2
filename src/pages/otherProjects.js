import React from 'react'
import Head from 'next/head'

import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import OtherProjectsCard from '@/components/OtherProjectsCard'

import { otherWebDevProjects, otherGameDevProjects } from '../data/OtherProjectsData'
import SectionTitle from '@/components/SectionTitle'

const otherProjects = () => {
    return (
        <>
            <Head>
                <title>AG Portfolio | Other Projects Page</title>
            </Head>
            <main className='w-full flex flex-col items-center justify-center'>
                <Layout className='pt-6'>
                    <PageTitle title='My Other Projects'/>
                    <div className='mt-4'>
                        <SectionTitle title='Web Development'/>
                            {otherWebDevProjects.map((projects, index) => (
                                <OtherProjectsCard 
                                    key={index}
                                    projectName={projects.projectName}
                                    projectDescription={projects.projectDescription}
                                    techStack={projects.techStack}
                                    viewLink={projects.viewLink}
                                />
                            ))}
                    </div>
                    <div className='mt-4'>
                        <SectionTitle title='Game Development'/>
                            {otherGameDevProjects.map((projects, index) => (
                                <OtherProjectsCard 
                                    key={index}
                                    projectName={projects.projectName}
                                    projectDescription={projects.projectDescription}
                                    techStack={projects.techStack}
                                    viewLink={projects.viewLink}
                                />
                            ))}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default otherProjects