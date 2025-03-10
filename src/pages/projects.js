import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SectionTitle from '@/components/SectionTitle'
import PageTitle from '@/components/PageTitle'
import ProjectsGameDev from '@/components/ProjectsGameDev'
import ProjectsMobDev from '@/components/ProjectsMobDev'
import Link from 'next/link'

const projects = () => {
    return (
        <>
            <Head>
                <title>AG Portfolio | Projects Page</title>
            </Head>
            <main className="w-full flex flex-col items-center justify-center">
                <Layout className="pt-6">
                    <PageTitle title="My Projects" />

                    <div className="mb-5 w-full">
                        <SectionTitle title="Mobile App Development" />
                        <div className="w-full">
                            <ProjectsMobDev />
                        </div>
                    </div>
                    
                    {/* <div className="mb-5 w-full">
                        <SectionTitle title="Game Development" />
                        <div className="w-full">
                            <ProjectsGameDev />
                        </div>
                    </div> */}

                    <div className="mb-5 flex items-center justify-center w-full">
                        <Link href="/otherProjects">
                            <button className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 mt-4 rounded w-full sm:w-auto">
                                Other Projects
                            </button>
                        </Link>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects