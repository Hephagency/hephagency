'use client'

import hephagency_config from "@/libs/hephagency_config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * A React component that renders a video player.for the home landing section.
 */

export default function HomeLandingVideo(){
    const videoRef = useRef<HTMLVideoElement>(null);

    useGSAP(()=>{
        if(videoRef.current && videoRef.current.parentElement){
            const rect = videoRef.current.getBoundingClientRect();
            const scale = (window.screen.width < window.screen.height) ? window.screen.height / rect.height : window.screen.width / rect.width;
            const delay = hephagency_config.loaderDuration + 1; 
            const duration = 0.5;
            gsap.from(videoRef.current, {
                delay: delay,
                scale: scale * 1.25,
                duration: duration,
                ease: "circ.inOut"
            });
            gsap.from(videoRef.current.parentElement, {
                y: window.innerHeight - rect.bottom + 10,
                delay: delay,
                duration: duration,
                ease: "circ.inOut"
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
        playsInline={true}
        />
    )
}
