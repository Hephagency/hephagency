'use client'

import { useMediaQuery } from "react-responsive"
import ProjectsHeadingTrailingLoop from "./ProjectsHeadingTrailingLoop";
import ImageTrail from "@/components/global/ImageTrail";
import { useEffect, useState } from "react";

/**
 * A Component to display the projects heading section trailing
 */

interface ProjectsHeadingTrailingProps{
    items: string[];
}

export default function ProjectsHeadingTrailing({items}: ProjectsHeadingTrailingProps){
    // Use a media query to check if the current device is a touch device
    const isTouchDevice = useMediaQuery({
        query: '(hover: none) and (pointer: coarse)',
    });

    const [hydrated,setHydrated] = useState(false);

    useEffect(()=>{
        setHydrated(true);
    },[]);
    
    if(!hydrated){
        return null;
    }

    if(isTouchDevice){
        return (
            <ProjectsHeadingTrailingLoop items={items} />
        ) 
    } else {
        return (
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
             <ImageTrail items={items} variant={7}/>
           </div>
        )
    }
}