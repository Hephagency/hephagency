/**
 * A React component that renders a section for the team on the About page.
 */

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import AboutTeamDisplay from "./AboutTeamDisplay";

export default function AboutTeamSection() {
    return (
        <section className="flex flex-col pt-14.5 pb-6 px-4 md:px-6 xl:px-7.5 xl:flex-row xl:pt-21.5 md:pb-9 xl:pb-25">
            <div className="flex flex-col-reverse gap-1 mb-19 md:mb-14 xl:flex-col xl:grow-1 xl:basis-0 xl:justify-between xl:mb-0 xl:gap-6">
                <div className="xl:grow">
                    <p className="paragraph-p md:paragraph-large md:max-w-128 xl:paragraph-x-large xl:sticky xl:top-1/6">
                        {translations.about_team_heading_paragraph[hephagency_config.language]}
                    </p>
                </div>
                <h2 className="paragraph-small xl:paragraph-p">
                    {translations.about_team_title[hephagency_config.language]}
                </h2>
            </div>
            <AboutTeamDisplay/>
        </section>
    )
}