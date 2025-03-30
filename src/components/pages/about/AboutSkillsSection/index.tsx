/**
 * A React component that renders a skills section for the About page.
 */

import TopHeading from "@/components/global/texts/TopHeading";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import clsx from "clsx";
import AboutSkillsSlider from "./AboutSkillsSlider";

export default function AboutSkillsSection() {
    return (
        <section className={clsx(
            "relative bg-red-500 w-full h-dvh relative text-grey-dark flex flex-col py-14",
            hephagency_config.negativeRemovalClassName
        )}>
            <TopHeading>
                {translations.about_skills_top_heading[hephagency_config.language]}
            </TopHeading>
            <div className="px-4 md:px-6 xl:px-7.5 grow basis-0 flex flex-col justify-center items-end">
                <p className="paragraph-large text-end md:max-w-150 xl:max-w-225">
                    {translations.about_skills_heading_paragraph[hephagency_config.language]}
                </p>
            </div>
            <div>
                <AboutSkillsSlider/>
            </div>
        </section>
    )
}