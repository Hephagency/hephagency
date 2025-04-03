/**
 * A Component to display a card in the home projects slider
 */

import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import clsx from "clsx";
import Link from "next/link";

interface HomeProjectsSliderCardProps {
    project: ProjectInterface;
    className?: string;
}

export default function HomeProjectsSliderCard({ project, className }: HomeProjectsSliderCardProps) {
    return (
        <Link
        href={`/projects/work/${project.slug}`}
        className={clsx(
            "flex flex-col w-62.5 gap-2.5 hover:bg-grey-dark hover:text-grey-light transition-all group xl:p-2",
            className
        )}
        >
            <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full aspect-21/9 object-cover"
            />
            <h3 className="paragraph-large">
                {project.title}
            </h3>
            <ul className="flex items-center flex-wrap gap-2.5">
                {project.categories.map((category, index) => (
                    <li key={index} className="paragraph-smallest px-3 py-1.5 bg-grey-dark w-fit text-grey-light group-hover:bg-grey-light group-hover:text-grey-dark transition-all">
                        {category.label}
                    </li>
                ))}
            </ul>
            <p className="paragraph-small"> 
                {project.excerpt}
            </p>
        </Link>
    )
}