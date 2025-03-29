/**
 * A Component to display the projects section of the home page
 */

import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import HephagencyIcon from "@/components/global/icons/HephagencyIcon";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import HomeProjects from "./HomeProjects";

export default function HomeProjectsSection() {
    return (
        <section className="bg-white text-grey-dark pt-6 pb-16 min-h-dvh flex flex-col gap-8 md:flex-row md:gap-4 md:justify-between md:max-h-dvh md:py-0 md:px-6 xl:px-7.5">
            <div className="px-4 flex flex-col items-end gap-32 grow basis-0 justify-between md:px-0 md:pt-4 md:pb-14 md:items-start xl:pt-6 xl:pb-24">
                <div className="flex flex-col items-end gap-12 sticky top-1/6 pb-16 md:gap-6 md:items-start">
                    <p className="paragraph-large max-w-110">
                        {translations.home_projects[hephagency_config.language]}
                    </p>
                    <HephagencyButtonLink
                    href="#"
                    className="w-fit"
                    >
                        {translations.home_projects_cta[hephagency_config.language]}
                    </HephagencyButtonLink>
                </div>
                <HephagencyIcon className="w-8 h-auto"/>
            </div>
            <HomeProjects/>
        </section>
    )
}