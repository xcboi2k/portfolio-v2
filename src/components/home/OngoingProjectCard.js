import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function OngoingProjectCard({
    appName,
    appDescription,
    techStack,
    platforms,
    imageData,
    dateLastUpdated,
    updateStatus,
}) {
    return (
        <div className="border border-cyan-500/20 bg-[#0B1120] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* PREVIEW SECTION */}
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A0F1F] border border-white/10 p-3">
                        <Carousel
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            interval={4000}
                            showArrows
                            swipeable
                            emulateTouch
                        >
                            {imageData?.map((slide, idx) => (
                                <div key={idx}>
                                    {/* MOBILE LAYOUT */}
                                    {slide.type === 'mobile' && (
                                        <div className="flex gap-3 h-[500px] bg-[#050816] p-4">
                                            {slide.images.map(
                                                (image, imageIdx) => (
                                                    <div
                                                        key={imageIdx}
                                                        className="flex-1 rounded-xl overflow-hidden bg-black/30"
                                                    >
                                                        <Image
                                                            src={image}
                                                            alt={`Mobile Preview ${imageIdx + 1}`}
                                                            className="object-contain h-full w-full"
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {/* WEB LAYOUT */}
                                    {slide.type === 'web' && (
                                        <div
                                            key={idx}
                                            className="h-[500px] overflow-y-auto border rounded-lg items-center justify-center"
                                        >
                                            <Image
                                                src={slide.images[0]}
                                                alt={`NipponAuto Web App Preview ${idx + 1}`}
                                                priority={idx === 0}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-8 flex flex-col justify-between">
                    <div>
                        {/* STATUS */}
                        {/* <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                                            <span className="text-xs tracking-[0.2em] text-green-400">
                                                UNDER DEVELOPMENT
                                            </span>
                                        </div>

                                        <span className="text-sm text-zinc-500">
                                            2026
                                        </span>
                                    </div> */}

                        {/* TITLE */}
                        <h2 className="text-4xl font-bold text-white mb-4">
                            {appName}
                        </h2>

                        {/* PLATFORM TAGS */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {platforms?.map((platform) => (
                                <span
                                    key={platform}
                                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs tracking-[0.15em]"
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>

                        {/* STACK */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {techStack?.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-zinc-400 leading-relaxed text-base">
                            {appDescription}
                        </p>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div>
                            <p className="text-xs tracking-[0.2em] text-zinc-500 mb-1">
                                LAST UPDATED
                            </p>

                            <p className="text-sm text-zinc-300">
                                {dateLastUpdated}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                            <span className="text-sm text-green-400">
                                {updateStatus}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
