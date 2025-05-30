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
                <div className="flex flex-col gap-7.5 md:sticky md:top-1/10 xl:static xl:h-full">
                    <div className="flex flex-col gap-7.5 xl:sticky xl:top-1/10 xl:pb-20">
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
                                <div 
                                className="paragraph-p [&_li]:list-disc [&_li]:ml-4 [&_li]:my-2 [&_li]:pl-2 [&_p]:mb-2 [&_table]:w-full [&_table]:border-collapse [&_table]:border-2 [&_table]:border-grey-300 [&_table]:mb-2 [&_table]:border-r-2 [&_table]:border-grey-300 [&_td]:p-2 [&_td]:border-r-2 [&_td]:border-grey-300 [&_th]:p-2 [&_th]:border-r-2 [&_th]:border-grey-300 [&_th]:border-b-2 [&_th]:border-grey-300 [&_table]:my-4"
                                dangerouslySetInnerHTML={
                                    {
                                        __html: project.description
                                    }
                                }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-fit xl:grow xl:flex xl:flex-col xl:justify-end">
                        {project.url &&
                            <HephagencyButtonLink
                                href={project.url}
                                linkClassName="w-fit"
                                hideLoader={true}
                                target="_blank"
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
                <div className="flex gap-7.5 xl:sticky xl:top-1/10">
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