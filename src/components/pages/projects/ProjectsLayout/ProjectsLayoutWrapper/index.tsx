/**
 * A React component that wraps the projects layout
 */

import TopHeading from "@/components/global/texts/TopHeading";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import ProjectsCategories from "../ProjectsCategories";

interface ProjectsLayoutWrapperProps {
    children: React.ReactNode;
    text?: string;
    title: string;
    categories?: CategoryInterface[];
}

export default function ProjectsLayoutWrapper({ children, text, title, categories }: ProjectsLayoutWrapperProps) {
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
                        {categories && <ProjectsCategories categories={categories} />}
                        {text && <p className="paragraph-p md:max-w-127.5">
                            {text}
                        </p>}
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}
