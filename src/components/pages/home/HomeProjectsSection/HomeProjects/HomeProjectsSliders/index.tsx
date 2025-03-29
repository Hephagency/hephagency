'use client'

import ProjectInterface from "@/libs/interfaces/ProjectInterface"
import { useMediaQuery } from "react-responsive";
import HomeProjectsSlider from "./HomeProjectsSlider";
import { useEffect, useState } from "react";

/**
 * A component which implements sliders for the projects section in the home page
 */

interface HomeProjectsSlidersProps {
    projects: ProjectInterface[];
}

export default function HomeProjectsSliders({ projects }: HomeProjectsSlidersProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1279px)' });
    const [groupedProjects, setGroupedProjects] = useState<ProjectInterface[][]>([]);

    const [isHydrated, setIsHydrated] = useState(false);

    //Group the projects by 3 to create a slider effect
    function groupProjects() {
        const newGroupedProjects = projects.reduce((acc: ProjectInterface[][], project, index) => {
            //Get the index of tge subarray with the lesst number of elements
            const lessElementsSubarrayIndex = acc.reduce((prevIndex, currArray, currIndex) => {
                return currArray.length < acc[prevIndex].length ? currIndex : prevIndex;
            }, 0);

            //Push the project in the subarray with the less number of elements
            acc[lessElementsSubarrayIndex].push(project);
            return acc;
        }, Array.from({ length: isTablet ? 1 : 3 }, () => [] as ProjectInterface[]));
        setGroupedProjects(newGroupedProjects);
    }

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(()=>{
        groupProjects();
    },[isTablet]);

    if (!isHydrated) return null;

    return (
        <div
            className="overflow-hidden flex gap-6"
            key={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
        >
            {groupedProjects.map((projectsRow, index) => (
                <HomeProjectsSlider
                    key={index}
                    projects={projectsRow}
                    reverse={index % 2 === 1}
                    horizontal={isMobile}
                />
            ))}
        </div>
    )


}