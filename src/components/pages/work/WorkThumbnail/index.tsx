/**
 * A thumbnail for a work project
 */

import ProjectInterface from "@/libs/interfaces/ProjectInterface";

interface WorkThumbnailProps{
    project: ProjectInterface;
}

export default function WorkThumbnail({project}: WorkThumbnailProps){
    return (
        <section className="h-dvh flex flex-col items-center justify-center md:items-start md:pl-25 xl:pl-0 xl:items-center">
            <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto md:max-w-107.5"
            />
        </section>
    )
}