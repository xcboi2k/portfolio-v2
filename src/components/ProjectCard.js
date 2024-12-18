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
        <div className="bg-[#101130] rounded-lg shadow-lg p-6 w-full w-full m-2">
            <div className="flex items-center justify-center">
                <Image src={logo} alt="Project Logo" className="w-full max-w-[200px] h-auto"/>
            </div>
            <h3 className="text-xl font-bold mt-4 text-[#f0f8ff] text-center sm:text-left">{name}</h3>
            <div className="flex flex-wrap mt-2 justify-center sm:justify-start">
                {techStacks.map((tech, index) => (
                    <span key={index} className="bg-[#28283c] text-[#f0f8ff] rounded-full px-2 py-1 text-sm mr-2 mt-2">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex justify-center sm:justify-start mt-4">
                <button onClick={openModal} className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 rounded">
                    Preview
                </button>
            </div>

            {isModalOpen && (
                <Modal closeModal={closeModal} images={carouselImages}>
                    <div className='m-4'>
                        <h2 className="text-2xl sm:text-3xl font-bold m-2 text-[#101130] text-center">{name}</h2>
                        <p className="text-[#28283c] m-2 text-left text-sm sm:text-base">{description}</p>
                        <div className="m-5 flex flex-col items-center sm:flex-row justify-center sm:justify-start">
                            {websiteLink ? (
                                <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                                    <div className="flex items-center">
                                        <button className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 rounded">
                                            Visit Website
                                        </button>
                                    </div>
                                </a>
                            ) : downloadLink ? (
                                <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                                    <div className="flex items-center">
                                        <button className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 rounded">
                                            Download
                                        </button>
                                    </div>
                                </a>
                            ) : null}
                            {youtubeLink && (
                                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                                    <div className="flex items-center">
                                        <button className="bg-[#b54ed7] hover:bg-blue-700 text-[#28283c] font-bold py-2 px-4 rounded">
                                            Watch Demo
                                        </button>
                                    </div>
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