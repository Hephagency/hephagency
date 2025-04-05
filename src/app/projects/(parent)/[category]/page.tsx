/**
 * A Component to display the projects page of a specific category
 */

import ProjectsHeadingSection from "@/components/pages/projects/ProjectsHeadingSection";
import ProjectsLayout from "@/components/pages/projects/ProjectsLayout";
import WPUtils from "@/libs/classes/WPUtils";
import hephagency_config from "@/libs/hephagency_config";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import translations from "@/libs/translations/translations";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface ProjectsCategoryProps{
    params : Promise<{
        category: string;
    }>
}

export async function generateStaticParams(){
    try {
        const categories = await WPUtils.getCategories();
        return categories.map((category : CategoryInterface) => ({
            category: category.slug
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata(
    {params} : ProjectsCategoryProps,
    parent: ResolvingMetadata
) : Promise<Metadata>{
    const {category} = await params;
    let find;
    try{
        find = await WPUtils.getCategoryBySlug(category);
    } catch(error){
        notFound();
    }
    return {
        title: find.label,
        description: find.description
    }
}

export default async function ProjectsCategory({params}: ProjectsCategoryProps){
    const {category} = await params;
    let find;
    try{
        find = await WPUtils.getCategoryBySlug(category);
    } catch(error){
        notFound();
    }
    let projects = [];
    let categories : CategoryInterface[] = [];
    try {
        projects = await WPUtils.getProjects([find.id]);
        categories = [
            {
                id: -1,
                label: translations.projects_all[hephagency_config.language],
                slug:"",
                thumbnail: "",
                description: ""
            },
            ...(await WPUtils.getCategories()).filter(cat=>cat.slug !== category)
        ];
    } catch (error) {
        notFound();
    }
    return (
        <>
        <ProjectsHeadingSection
        projects={projects.slice(0,8)}
        />
        <ProjectsLayout
        text={find.description}
        projects={projects}
        categories={categories}
        title={find.label}
        />
        </>
    )
}