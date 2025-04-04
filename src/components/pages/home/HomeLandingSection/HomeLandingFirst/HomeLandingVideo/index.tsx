'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive"

/**
 * A React component that renders a video player.for the home landing section.
 */

export default function HomeLandingVideo(){
    const videoRef = useRef<HTMLVideoElement>(null);

    useGSAP(()=>{
        if(videoRef.current && videoRef.current.parentElement){
            const rect = videoRef.current.getBoundingClientRect();
            const scale = (window.screen.availWidth < window.screen.availHeight) ? window.screen.availHeight / rect.height : window.screen.availWidth / rect.width;
            gsap.from(videoRef.current, {
                delay: 1,
                scale: scale * 1.5,
            });
            gsap.from(videoRef.current.parentElement, {
                y: window.screen.height - rect.bottom,
                delay: 0.75
            });
        }
    },[videoRef]);
    return (
        <video
        ref={videoRef}
        src="/videos/landing.mp4"
        autoPlay
        muted
        loop
        className="max-w-75 origin-bottom md:max-w-160 h-auto w-full xl:max-w-168.5"
        />
    )
}
