'use client'

import hephagency_config from "@/libs/hephagency_config"
import translations from "@/libs/translations/translations"
import { useGSAP } from "@gsap/react";
import { time } from "console";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

/**
 * A component which implements an infinite horizontal text scroll in the footer
 */

export default function FooterInfiniteScroll(){
    const text = translations.footer_contact_title[hephagency_config.language];
    const [animationReady, setAnimationReady] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(containerRef.current){
            const children = Array.from(containerRef.current.children);
            Array.from({length: 3}).forEach(()=>{
                children.forEach((child)=>{
                    const clone = child.cloneNode(true);
                    containerRef.current?.appendChild(clone);
                });
            });
            setAnimationReady(true);
        }
    },[containerRef]);

    useGSAP(()=>{
        if(containerRef.current && animationReady){
            const timeline = gsap.timeline({
                repeat: -1
            });
            timeline.to(containerRef.current,{
                xPercent: -50,
                duration: 10,
                ease: 'none'
            });
            function handleMouseEnter(){
                timeline.pause();
            }

            function handleMouseLeave(){
                timeline.resume();
            }
            containerRef.current.addEventListener("mouseenter", handleMouseEnter);
            containerRef.current.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
                containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
            }
        }
    },[animationReady, containerRef]);

    return (
        <div 
        className="flex h2 md:h0 whitespace-nowrap items-center min-w-fit my-24 md:my-48 xl:my-56"
        ref={containerRef}
        >
            <h2>
                {text}
            </h2>
            <span className="inline-block mx-10">
                -
            </span>
        </div>
    )
}