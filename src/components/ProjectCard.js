import Image from 'next/image';
import React, { useState } from 'react';
import { LinkArrow, YoutubeIcon } from './Icon';
import Modal from './Modal';

const ProjectCard = ({ logo, name, techStacks, description, websiteLink, downloadLink, youtubeLink, carouselImages }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#101130] rounded-lg shadow-lg p-6 w-1/3 m-2">
            <div className="flex items-center justify-center">
                <Image src={logo} alt="Project Logo" className="w-500 h-auto"/>
            </div>
            <h3 className="text-xl font-bold mt-4 text-[#f0f8ff]">{name}</h3>
            <div className="flex flex-wrap mt-2">
                {techStacks.map((tech, index) => (
                <span key={index} className="bg-[#28283c] text-[#f0f8ff] rounded-full px-2 py-1 text-sm mr-2 mt-2">
                    {tech}
                </span>
                ))}
            </div>
            <button onClick={openModal} className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 mt-4 rounded">
                Preview
            </button>
            {isModalOpen && (
                <Modal closeModal={closeModal} images={carouselImages}>
                <div className='m-4'>
                    <h2 className="text-4xl font-bold m-4 text-[#101130] text-center">{name}</h2>
                    <p className="text-[#28283c] m-4 text-left">{description}</p>
                    <div className="m-5">
                    {websiteLink ? (
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4 ">
                            <div className="flex items-center">
                                <LinkArrow className="h-4 w-4 mr-2"/>
                                <span className="text-lg">Visit Website</span>
                            </div>
                        </a>
                    ) : downloadLink ? (
                        <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4 ">
                            <div className="flex items-center">
                                <LinkArrow className="mr-2"/>
                                <span className="text-lg">Click to Download</span>
                            </div>
                        </a>
                    ) : (
                        null
                    )}
                    {youtubeLink && (
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                            <YoutubeIcon />
                            View Demo
                        </a>
                    )}
                    </div>
                </div>
                </Modal>
            )}
        </div>
    )
}

export default ProjectCard