/**
 * A React component that renders a grid section for the About page.
 */

import translations from "@/libs/translations/translations";
import AboutGridPart from "./AboutGridPart";
import AboutGridScrollingText from "./AboutGridScrollingText";
import hephagency_config from "@/libs/hephagency_config";
import AboutGridTexts from "./AboutGridTexts";
import TopHeading from "@/components/global/texts/TopHeading";

export default function AboutGridSection() {
    const parts = (translations.about_grid_parts[hephagency_config.language] as {
        title: string,
        texts: string[]
    }[]);
    return (
        <section className="relative flex flex-col gap-22.5 md:gap-14 xl:gap-22.5 px-4 md:px-6 xl:px-7.5 pb-14 md:pb-50 xl:pb-17">
            <TopHeading>
                {translations.work_with_us[hephagency_config.language]}
            </TopHeading>
            <AboutGridPart>
                <AboutGridScrollingText/>
            </AboutGridPart>
            <div className="flex flex-col gap-22.5 md:gap-14">
                {parts.map((part, index) => 
                <AboutGridPart
                key={index}
                title={part.title}
                >
                    <AboutGridTexts texts={part.texts}/>
                </AboutGridPart>
                )}
            </div>
        </section>
    )
}