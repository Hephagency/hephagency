/**
 * A Component to display the projects page of a specific category
 */

import ProjectsHeadingSection from "@/components/pages/projects/ProjectsHeadingSection";
import ProjectsLayout from "@/components/pages/projects/ProjectsLayout";
import hephagency_config from "@/libs/hephagency_config";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import sampleCategories from "@/libs/static/sampleCategories";
import sampleProjects from "@/libs/static/sampleProjects";
import translations from "@/libs/translations/translations";
import { notFound } from "next/navigation";

interface ProjectsCategoryProps{
    params : Promise<{
        category: string;
    }>
}

export default async function ProjectsCategory({params}: ProjectsCategoryProps){
    const {category} = await params;
    const find = sampleCategories.find(cat=>cat.slug === category);
    if(!find){
        notFound();
    }
    const projects = sampleProjects.filter(project=>project.categories.some(cat=>cat.slug === category));
    const categories : CategoryInterface[] = [
        {
            id: -1,
            label: translations.projects_all[hephagency_config.language],
            slug:"",
            thumbnail: "https://picsum.photos/1920/1080?random=1",
        },
        ...sampleCategories.filter(cat=>cat.slug !== category)
    ]
    return (
        <>
        <ProjectsHeadingSection
        projects={projects.slice(0,8)}
        />
        <ProjectsLayout
        projects={projects}
        categories={categories}
        title={find.label}
        />
        </>
    )
}