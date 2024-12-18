import React from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const Modal = ({ closeModal, children, images }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg m-4 md:m-20 w-full md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
                <div className='flex items-center justify-between px-6 py-4 bg-[#b54ed7] rounded-t-lg mb-2'>
                    <h1 className='text-2xl font-bold text-[#28283c]'>Project Preview</h1>
                    <button className="text-2xl font-bold text-[#28283c]" onClick={closeModal}>
                        X
                    </button>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className='w-full md:w-1/2 mx-auto px-4'>
                        {images && 
                            <Carousel showStatus={false} className="h-32 w-full">
                                {images.length !== 0 &&
                                images.map((images, idx) => (
                                    <div key={idx} className='border border-[#b54ed7]'>
                                        <Image
                                        src={images}
                                        alt={`${idx}`}
                                        priority={idx === 0}
                                        className="object-cover h-full"
                                        ></Image>
                                    </div>
                                ))}
                            </Carousel>
                        }
                    </div>
                    <div className='w-full md:w-1/2 m-5 md:m-2'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal