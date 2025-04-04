'use client'
import { useRef } from "react";
/**
 * A React component that renders the landing section of the home page.
 */

import HomeSplinePlayground from "../HomeSplinePlayground";
import HomeLandingFirst from "./HomeLandingFirst";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useLenis } from "lenis/react";

export default function HomeLandingSection() {
    const scrollHeight = 3000;
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<GSAPTimeline>(null);

    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});

    function handleLenisScroll(){
        if(parentRef.current && timelineRef.current){
            const rect = parentRef.current.getBoundingClientRect();
            if(rect.top <= 0){
                const proportion = -rect.top / (scrollHeight * 0.6);
                const progress = Math.max(0, Math.min(1, proportion));
                timelineRef.current.progress(progress);
            }
        }
    }

    useLenis(handleLenisScroll)

    useGSAP(()=>{
        if(containerRef.current && parentRef.current){
            if(timelineRef.current){
                timelineRef.current.kill();
            }
            const timeline = gsap.timeline({paused: true});
            if(isTablet){
                timeline.to(containerRef.current, {
                    yPercent: -100
                });
            } else {
                timeline.to(containerRef.current, {
                    xPercent: -50
                });
            }
            timelineRef.current = timeline;
        }
    },[containerRef, parentRef, isTablet]);


    return (
        <div
        ref={parentRef}
        style={
            {
                height: `${scrollHeight}px`
            }
        }
        >
            <div 
            className="max-w-dvw max-h-dvh overflow-hidden sticky top-0"
            >
                <div className="min-w-fit max-w-fit flex flex-col xl:flex-row" ref={containerRef}>
                    <HomeLandingFirst />
                    <HomeSplinePlayground />
                </div>
            </div>
        </div>
    )
}