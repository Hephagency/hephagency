/**
 * A React component that displays a loading state for the projects page
 */

import CircleLoader from "@/components/global/CircleLoader";
import ProjectsHeadingSection from "@/components/pages/projects/ProjectsHeadingSection";
import ProjectsLayoutWrapper from "@/components/pages/projects/ProjectsLayout/ProjectsLayoutWrapper";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";

export default function Loading(){
    return (
        <>
        <ProjectsHeadingSection
        projects={[]}
        />
        <ProjectsLayoutWrapper
        title={translations.loading[hephagency_config.language]}
        >
            <div className="xl:min-h-215 grow basis-0 flex justify-start xl:justify-center items-center xl:max-w-2/3">
                <CircleLoader />
            </div>
        </ProjectsLayoutWrapper>
        </>
    )
}
