/**
 * A Component to display the projects layout
 */

import TopHeading from "@/components/global/texts/TopHeading";
import hephagency_config from "@/libs/hephagency_config";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import translations from "@/libs/translations/translations";
import ProjectsCategories from "./ProjectsCategories";
import ProjectsSlider from "./ProjectsSlider";
import ProjectsLayoutWrapper from "./ProjectsLayoutWrapper";

interface ProjectsLayoutProps {
    projects: ProjectInterface[];
    categories: CategoryInterface[];
    text: string;
    title: string;
}

export default function ProjectsLayout({ projects, categories, title, text }: ProjectsLayoutProps) {
    return (
        <ProjectsLayoutWrapper
        categories={categories}
        title={title}
        text={text}
        >
            <ProjectsSlider projects={projects} />
        </ProjectsLayoutWrapper>
    )
}