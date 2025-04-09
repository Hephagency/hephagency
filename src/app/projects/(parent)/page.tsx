/**
 * A Component to display the projects page
 */

import ProjectsHeadingSection from "@/components/pages/projects/ProjectsHeadingSection";
import ProjectsLayout from "@/components/pages/projects/ProjectsLayout";
import WPUtils from "@/libs/classes/WPUtils";
import hephagency_config from "@/libs/hephagency_config";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import translations from "@/libs/translations/translations";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: translations.projects_meta_title[hephagency_config.language],
  description: translations.projects_meta_description[hephagency_config.language],
}

export default async function Projects(){
    let categories : CategoryInterface[] = [];
    let projects : ProjectInterface[] = [];
    try {
        categories = await WPUtils.getCategories();
        projects = await WPUtils.getProjects(categories.map((category : CategoryInterface) => category.id));
    } catch (error) {
        notFound();
    }
    return (
        <>
        <ProjectsHeadingSection
        projects={projects.slice(0,8)}
        />
        <ProjectsLayout
        text={translations.projects_archive_text[hephagency_config.language]}
        projects={projects}
        categories={categories}
        title={translations.projects_all[hephagency_config.language]}
        />
        </>
    )
}