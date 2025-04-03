/**
 * A React component that renders a heading section for a project work.
 */

import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import BlogCategories from "../../blog/BlogLayout/BlogCategories";
import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import ArticleHeadingInformation from "../../article/ArticleHeadingSection/ArticleHeadingInformation";
import Article from "@/app/blog/article/[slug]/page";

interface WorkHeadingSectionProps {
    project: ProjectInterface;
}

export default function WorkHeadingSection({ project }: WorkHeadingSectionProps) {
    return (
        <section className="flex flex-col gap-18 pt-37 md:h-dvh md:flex-row md:pb-6 md:gap-6 md:relative md:pt-32 xl:pt-30">
            <div className="md:pb-20 xl:grow xl:basis-0 xl:min-h-full xl:pb-0">
                <div className="flex flex-col gap-7.5 md:sticky md:top-1/7 xl:static xl:h-full">
                    <div className="flex flex-col gap-7.5 xl:sticky xl:top-1/7 xl:pb-20">
                        <div className="flex flex-col gap-4">
                            <h1 className="h5">
                                {project.title}
                            </h1>
                            <BlogCategories categories={project.categories} isProjects={true} />
                        </div>
                        <div>
                            <div className="flex flex-col gap-7">
                                <img
                                    src={project.heading_image}
                                    alt={project.title}
                                    className="w-full aspect-36/55 object-cover md:hidden" />
                                <p className="paragraph-p">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit xl:grow xl:flex xl:flex-col xl:justify-end">
                        {project.url &&
                            <HephagencyButtonLink
                                href={project.url}
                                linkClassName="w-fit"
                            >
                                {translations.work_see_project[hephagency_config.language]}
                            </HephagencyButtonLink>}
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:min-h-full xl:grow xl:basis-0">
                <img
                    src={project.heading_image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="md:absolute md:bottom-6 md:left-0 xl:static xl:grow xl:basis-0">
                <div className="flex gap-7.5 xl:sticky xl:top-1/7">
                    <ArticleHeadingInformation
                        title={translations.work_release_date[hephagency_config.language]}
                        content={new Date(project.created_at).toLocaleDateString(hephagency_config.language)}
                    />
                    {project.customer &&
                        <ArticleHeadingInformation
                            title={translations.work_customer[hephagency_config.language]}
                            content={project.customer}
                        />
                    }
                </div>
            </div>
        </section>
    )
}