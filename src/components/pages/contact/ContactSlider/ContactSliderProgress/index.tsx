'use client'

import HephagencyParticles from "@/components/global/lotties/HephagencyParticles";
import clsx from "clsx";

/**
 * A progress bar for the contact slider
 */

interface ContactSliderProgressProps{
    currentSlide: number;
    totalSlides: number;
    className?: string;
}

export default function ContactSliderProgress({currentSlide, totalSlides, className}: ContactSliderProgressProps){
    return (
        <div className={clsx(
            "h-[3px] w-full bg-grey-dark/25 transition-all relative translate-y-8",
            className
        )}>
            <div
            className="absolute top-0 left-0 bg-grey-dark h-full transition-all w-full"
            style={{
                maxWidth: `${((currentSlide + 1) / totalSlides) * 100}%`
            }}
            >
                <div className="w-[3px] h-[3px] bg-orange-600 absolute right-0 top-0 absolute"/>
                <div className="absolute left-full top-1/2 -translate-y-1/2 -translate--[3px] w-30">
                    <HephagencyParticles/>
                </div>
            </div>
        </div>
    )
}
