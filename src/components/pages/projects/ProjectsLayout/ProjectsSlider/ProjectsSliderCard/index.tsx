/**
 * A Component to display a card with a project in the slider
 */

import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import clsx from "clsx";
import Link from "next/link";

interface ProjectsSliderCardProps {
    project: ProjectInterface;
    className?: string;
}

export default function ProjectsSliderCard({ project, className }: ProjectsSliderCardProps) {
    return (
        <Link
            href={`/projects/work/${project.slug}`}
            className={clsx(
                "flex flex-col w-full gap-3.5 xl:gap-5 transition-all duration-500 group",
                className
            )}
        >
            <div className="overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full aspect-3/4 md:aspect-36/38 object-cover xl:aspect-44/57 transition-all group-hover:scale-110 duration-500"
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="paragraph-small">
                    {project.categories.map(category => category.label).join(" - ")}
                </span>
                <h3 className="paragraph-x-large">
                    {project.title}
                </h3>
            </div>
            <p className="paragraph-small">
                {project.excerpt}
            </p>
        </Link>
    )
}