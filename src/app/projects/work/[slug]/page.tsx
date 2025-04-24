/**
 * A React component that renders a page for a project work.
 */

import { notFound } from "next/navigation";
import WorkHeadingSection from "@/components/pages/work/WorkHeadingSection";
import WorkLargeImageSection from "@/components/pages/work/sections/WorkLargeImageSection";
import WorkGridSection from "@/components/pages/work/sections/WorkGridSection";
import WorkOneThirdSection from "@/components/pages/work/sections/WorkOneThirdSection";
import WorkCenteredTextsSection from "@/components/pages/work/sections/WorkCenteredTextsSection";
import { Fragment } from "react";
import WorkThumbnail from "@/components/pages/work/WorkThumbnail";
import ProjectsLayout from "@/components/pages/projects/ProjectsLayout";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import { Metadata } from "next";
import { ResolvingMetadata } from "next";
import WPUtils from "@/libs/classes/WPUtils";
import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
interface ProjectWorkPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams(){
    try {
        const projects = await WPUtils.getProjects();
        return projects.map((project : ProjectInterface) => ({
            slug: project.slug
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata(
    {params} : ProjectWorkPageProps
) : Promise<Metadata>{
    const {slug} = await params;
    let find;
    try{
        find = await WPUtils.getProjectBySlug(slug);
    } catch(error){
        notFound();
    }
    return {
        title: find.metadata.title,
        description: find.metadata.description,
    }
}   

export default async function ProjectWorkPage({ params }: ProjectWorkPageProps) {
    const { slug } = await params;
    let project;
    try{
        project = await WPUtils.getProjectBySlug(slug);
    }catch(error){
        console.error('Error getting project by slug:', error);
        notFound();
    }

    //The projects which are not in the same categories than the current one
    let similarProjects : ProjectInterface[] = [];
    let otherCategories : CategoryInterface[] = [];
    try {
        similarProjects = (await WPUtils.getProjects(project.categories.map(category => category.id))).filter(categoryProject => categoryProject.id !== project.id);
        otherCategories = (await WPUtils.getCategories()).filter(category => !project.categories.map(cat => cat.id).includes(category.id));
    } catch (error) {
        notFound();
    }
    otherCategories.unshift({
        id: -1,
        label: translations.projects_all[hephagency_config.language],
        slug: "",
        thumbnail: "",
        description: ""
    })

    return (
        <>
        <div className="px-4 md:px-6 xl:px-7.5 gap-18 md:gap-26 flex flex-col">
            <WorkHeadingSection project={project} />
            <div className="flex flex-col gap-51 md:gap-37 xl:gap-42.5">
                {project.sections.map((section,index)=>
                <Fragment key={index}>
                    {section.type === "large-image" && <WorkLargeImageSection section={section} />}
                    {section.type === "grid" && <WorkGridSection section={section} />}
                    {section.type === "one-third" && <WorkOneThirdSection section={section} />}
                    {section.type === "centered-texts" && <WorkCenteredTextsSection section={section} />}
                </Fragment>
                )}
            </div>
            <WorkThumbnail project={project} />
        </div>
        <ProjectsLayout
        text={translations.projects_archive_text[hephagency_config.language]}
        projects={similarProjects}
        categories={otherCategories}
        title={translations.work_same_categories[hephagency_config.language]}
        />
        </>
    )
    
    
}