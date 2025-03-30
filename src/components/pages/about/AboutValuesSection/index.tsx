/**
 * A React component that renders a values section for the About page.
 */

import SectionHeading from "@/components/global/texts/SectionHeading";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import AboutValuesDisplay from "./AboutValuesDisplay";

export default function AboutValuesSection(){
    return (
        <section className="bg-white text-grey-dark px-4 md:px-6 xl:px-7.5 pt-7 md:pt-14.5 pb-12 md:pb-26 flex flex-col gap-12.5">
            <SectionHeading>
                {translations.about_values_title[hephagency_config.language]}
            </SectionHeading>
            <AboutValuesDisplay/>
        </section>
    )
}