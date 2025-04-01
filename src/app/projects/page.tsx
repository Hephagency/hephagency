/**
 * A Component to display the projects page
 */

import ProjectsHeadingSection from "@/components/pages/projects/ProjectsHeadingSection";
import ProjectsLayout from "@/components/pages/projects/ProjectsLayout";
import hephagency_config from "@/libs/hephagency_config";
import sampleCategories from "@/libs/static/sampleCategories";
import sampleProjects from "@/libs/static/sampleProjects"
import translations from "@/libs/translations/translations";

export default async function Projects(){
    const projects = sampleProjects;
    const categories = sampleCategories;
    return (
        <>
        <ProjectsHeadingSection
        projects={projects.slice(0,8)}
        />
        <ProjectsLayout
        projects={projects}
        categories={categories}
        title={translations.projects_all[hephagency_config.language]}
        />
        </>
    )
}