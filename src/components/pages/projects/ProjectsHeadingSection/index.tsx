/**
 * A Component to display the projects heading section
 */

import ImageTrail from "@/components/global/ImageTrail";
import hephagency_config from "@/libs/hephagency_config";
import ProjectInterface from "@/libs/interfaces/ProjectInterface"
import translations from "@/libs/translations/translations";
import { mapParagraphContent } from "../../about/AboutIntroductionSection";
import ProjectsHeadingTrailing from "./ProjectsHeadingTrailing";

interface ProjectsHeadingSectionProps{
    projects: ProjectInterface[];
}

export default async function ProjectsHeadingSection({projects}: ProjectsHeadingSectionProps){
    const paragraph = translations.projects_heading_text[hephagency_config.language];
    return (
        <section className="bg-white text-grey-dark h-dvh relative z-10 w-full flex flex-col py-15 md:py-21 xl:py-19">
            <ProjectsHeadingTrailing items={projects.map(project => project.thumbnail)} />
            <div className="grow basis-0 px-4 md:px-6 xl:px-7.5 xl:flex xl:justify-end">
                <div className="sticky top-1/6 z-10 flex flex-col gap-1.5 xl:h-fit">
                    <h1 className="paragraph-p">
                        {translations.projects_title[hephagency_config.language]}
                    </h1>
                    <p className="paragraph-x-large underline-offset-6 md:max-w-158">
                        {mapParagraphContent(paragraph.text,paragraph.highlight)}
                    </p>
                </div>
            </div>
        </section>
    )
}