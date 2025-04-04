/**
 * A React component that renders a page for a project work.
 */

import sampleProjects from "@/libs/static/sampleProjects";
import { notFound } from "next/navigation";
import WorkHeadingSection from "@/components/pages/work/WorkHeadingSection";
import WorkLargeImageSection from "@/components/pages/work/sections/WorkLargeImageSection";
import WorkGridSection from "@/components/pages/work/sections/WorkGridSection";
import WorkOneThirdSection from "@/components/pages/work/sections/WorkOneThirdSection";
import WorkCenteredTextsSection from "@/components/pages/work/sections/WorkCenteredTextsSection";
import { Fragment } from "react";

interface ProjectWorkPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectWorkPage({ params }: ProjectWorkPageProps) {
    const { slug } = await params;
    const project = sampleProjects.find(project => project.slug === slug);

    if(!project){
        notFound();
    }

    return (
        <div className="px-4 md:px-6 xl:px-7.5 gap-18 md:gap-26 flex flex-col">
            <WorkHeadingSection project={project} />
            <div className="flex flex-col gap-51 md:gap-37">
                {project.sections.map((section,index)=>
                <Fragment key={index}>
                    {section.type === "large-image" && <WorkLargeImageSection section={section} />}
                    {section.type === "grid" && <WorkGridSection section={section} />}
                    {section.type === "one-third" && <WorkOneThirdSection section={section} />}
                    {section.type === "centered-texts" && <WorkCenteredTextsSection section={section} />}
                </Fragment>
                )}
            </div>
        </div>
    )
    
    
}