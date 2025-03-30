'use client'
/**
 * A React component that renders a display for the team section on the About page.
 */

import translations from "@/libs/translations/translations"
import AboutTeamInfos, { TeamMember } from "./AboutTeamInfos";
import { useState } from "react";
import Caroussel from "@/components/global/Caroussel";
import Image from "next/image";

export default function AboutTeamDisplay() {
    const teamMembers = translations.about_team as TeamMember[];
    const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = useState(0);
    const currentTeamMember = teamMembers[currentTeamMemberIndex];
    return (
        <div className="relative flex flex-col gap-10.5 pt-24 md:max-w-128 md:pt-0 xl:max-w-none xl:grow-2 xl:basis-0 xl:flex-row xl:justify-center xl:gap-6">
            <div className="relative w-full xl:max-w-140">
                <div 
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none xl:grow xl:basis-0"
                style={
                    {
                        background: `linear-gradient(to bottom, var(--color-grey-dark) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, var(--color-grey-dark) 100%), linear-gradient(to right, var(--color-grey-dark) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 75%, var(--color-grey-dark) 100%)`
                    }
                }
                />
                <Caroussel
                    onSlideChange={(index)=>setCurrentTeamMemberIndex(index)}
                    items={teamMembers.map((teamMember, index) =>
                        <div className="w-full aspect-3/6 md:aspect-5/6">
                            <Image
                                src={teamMember.photo}
                                priority={true}
                                fill
                                className="object-cover"
                                alt={`${teamMember.first_name} ${teamMember.last_name}`}
                            />
                        </div>
                    )} />
            </div>
            <AboutTeamInfos teamMember={currentTeamMember} />
        </div>
    )
}