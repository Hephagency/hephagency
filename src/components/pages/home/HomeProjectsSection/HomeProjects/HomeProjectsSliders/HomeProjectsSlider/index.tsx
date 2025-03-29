'use client'

import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import HomeProjectsSliderCard from "./HomeProjectsSliderCard";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * A component which implements a slider for the projects section in the home page
 */

interface HomeProjectsSliderProps {
    projects: ProjectInterface[];
    horizontal?: boolean;
    reverse?: boolean;
}

export default function HomeProjectsSlider({ projects, horizontal, reverse }: HomeProjectsSliderProps) {
    //Multiply the projects array by 3 to create a slider effect
    const [projectsToDisplay, setProjectsToDisplay] = useState<ProjectInterface[]>([...projects]);
    const [animationReady,setAnimationReady] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    function duplicateProjects() {
        const duplicateTimes =1;
        const duplicatedProjects = [...projects];
        for (let i = 0; i < duplicateTimes; i++) {
            duplicatedProjects.push(...projects);
        }
        return duplicatedProjects;
    }

    useEffect(()=>{
        if(!animationReady){
            setProjectsToDisplay(duplicateProjects());
            setAnimationReady(true);
        }
    },[animationReady]);

    useGSAP(()=>{
        if(animationReady && containerRef.current){
            const timeline = gsap.timeline({
                repeat: -1
            });
            const gsapTweenObject : GSAPTweenVars = {
                duration: 60,
                ease: 'none',
            };
            if(horizontal){
                timeline.set(containerRef.current, {
                    xPercent: reverse ? -50 : 0,
                });
                gsapTweenObject.xPercent = reverse ? 0 : -50;
            } else {
                timeline.set(containerRef.current, {
                    yPercent: reverse ? -50 : 0,
                });
                gsapTweenObject.yPercent = reverse ? 0 : -50;
            }

            timeline.to(containerRef.current, gsapTweenObject);

            function handleMouseEnter() {
                timeline.pause();
            }

            function handleMouseLeave() {
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
        <div className={clsx(
            "flex w-fit h-fit",
            horizontal ? "flex-row" : "flex-col",
        )}
        ref={containerRef}
        >
            {projectsToDisplay.map((project, index) => (
                <HomeProjectsSliderCard key={index} project={project} className="mr-8 md:mr-0 md:mb-8 xl:mb-0 xl:py-4" />
            ))}
        </div>
    )
}