'use client'

/**
 * A, React component that renders a list of team member information cards for the About page.
 */

import hephagency_config from "@/libs/hephagency_config";
import LanguageType from "@/libs/types/LanguageType";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export interface TeamMember{
    first_name: string;
    last_name: string;
    role: {
        [key in LanguageType]: string;
    };
    photo: string;
    description: {
        [key in LanguageType]: string;
    };
}

interface AboutTeamInfosProps {
    teamMember: TeamMember;
}


export default function AboutTeamInfos({ teamMember }: AboutTeamInfosProps) {
    const [currentTeamMember,setCurrentTeamMember] = useState(teamMember);
    const [animated,setAnimated] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(()=>{
        if(containerRef.current){
            gsap.to(containerRef.current,{
                opacity: 1,
                onComplete: () => {
                    setAnimated(true);
                }
            });
        }
    },[currentTeamMember,containerRef]);

    useGSAP(()=>{
        if(animated && containerRef.current){
            gsap.to(containerRef.current,{
                opacity: 0,
                onComplete: () => {
                    setCurrentTeamMember(teamMember);
                }
            });
        }
    },[teamMember,containerRef]);

    return (
        <div
        ref={containerRef}
        className="opacity-0 md:flex md:justify-between xl:basis-0 xl:flex-col"
        >
            <div className="absolute top-0 left-0 md:static">
                <h3 className="paragraph-large flex flex-col">
                    <span>
                        {currentTeamMember.first_name}
                    </span>
                    <span>
                        {currentTeamMember.last_name}
                    </span>
                </h3>
                <h4 className="paragraph-small">
                    {currentTeamMember.role[hephagency_config.language]}
                </h4>
            </div>
            <div className="xl:grow xl:basis-0 xl:flex xl:flex-col xl:justify-center">
                <p className="paragraph-p max-w-60.5 xl:w-41.5">
                    {currentTeamMember.description[hephagency_config.language]}
                </p>
            </div>
        </div>
    )
}