'use client'
import { useRef } from "react";
/**
 * A React component that renders an icon animation.
 */

import HephagencyIcon from "../../icons/HephagencyIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface LoaderIconAnimationProps{
    duration: number;
}

export default function LoaderIconAnimation({duration}: LoaderIconAnimationProps){
    const logoContainerRef = useRef<HTMLDivElement>(null);
    
    useGSAP(()=>{
        if(logoContainerRef.current){
            gsap.to(logoContainerRef.current, {
                y: 0,
                duration: duration,
                ease: "power2.inOut"
            });
        }
    },[logoContainerRef]);

    return (
        <div className="w-fit h-fit overflow-hidden">
            <div 
            className="w-40 translate-y-full md:w-52"
            ref={logoContainerRef}>
                <HephagencyIcon className="w-full h-auto"/>
            </div>
        </div>
    )
}
