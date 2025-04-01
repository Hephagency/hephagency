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

interface ProjectsLayoutProps {
    projects: ProjectInterface[];
    categories: CategoryInterface[];
    title: string;
}

export default function ProjectsLayout({ projects, categories, title }: ProjectsLayoutProps) {
    return (
        <section className="relative pt-20 md:pt-24 min-h-dvh flex flex-col justify-center">
            <TopHeading>
                {title}
            </TopHeading>
            <div className="flex flex-col xl:flex-row xl:justify-between gap-6.5">
                <div className="px-4 md:px-6 flex flex-col gap-3">
                    <div className="xl:grow xl:basis-0">
                        <h2 className="h5 xl:h-fit xl:sticky xl:top-1/6">
                            {title}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-5 xl:w-fit">
                        <ProjectsCategories categories={categories} />
                        <p className="paragraph-p md:max-w-127.5">
                            {translations.projects_archive_text[hephagency_config.language]}
                        </p>
                    </div>
                </div>
                <ProjectsSlider projects={projects} />
            </div>
        </section>
    )
}