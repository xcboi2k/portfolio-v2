import React from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const Modal = ({ closeModal, children, images }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg m-20">
                <div className='flex items-center justify-between px-6 py-4 bg-[#b54ed7] rounded-t-lg mb-2'>
                    <h1 className='text-2xl font-bold text-[#28283c]'>Project Preview</h1>
                    <button className="text-2xl font-bold text-[#28283c]" onClick={closeModal}>
                        X
                    </button>
                </div>
                <div className='flex justify-center'>
                    <div className='w-50% mx-auto px-8 my-3'>
                        {images && 
                            <Carousel showStatus={false} width={700}>
                                {images.length !== 0 &&
                                images.map((images, idx) => (
                                    <div key={idx} className='border border-[#b54ed7]'>
                                        <Image
                                        src={images}
                                        alt={`${idx}`}
                                        priority={idx === 0}
                                        ></Image>
                                    </div>
                                ))}
                            </Carousel>
                        }
                    </div>
                    <div className='w-50% m-5'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal