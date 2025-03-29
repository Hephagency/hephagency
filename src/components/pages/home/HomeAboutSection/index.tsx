import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import HomeAboutMatchCut from "./HomeAboutMatchCut";
import EntitledParagraph from "@/components/global/texts/EntitledParagraph";
import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";

/**
 * A Component to display the about section of the home page
 */
export default function HomeAboutSection() {
    return (
        <section className="bg-grey-dark w-full flex flex-col gap-6 md:gap-16 text-grey-light py-15 px-4 md:px-7.5">
            <p className="max-w-257">
                <span className="h6 leading-6 md:h5 md:leading-5">
                    {translations.hephagency[hephagency_config.language]}
                </span>
                <span className="paragraph-p md:paragraph-large">
                    &nbsp;{translations.home_about_intro[hephagency_config.language]}
                </span>
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:items-end">
                <HomeAboutMatchCut />
                <div className="flex flex-col items-start gap-6 md:relative md:pb-20 md:basis-0 xl:pb-0 md:grow md:h-131 xl:h-160 xl:flex-row xl:justify-between xl:grow-2">
                    <EntitledParagraph
                        title={translations.home_about_vision_title[hephagency_config.language]}
                        className="md:sticky md:top-1/6 h-fit xl:max-w-80"
                    >
                        {translations.home_about_vision_text[hephagency_config.language]}
                    </EntitledParagraph>
                    <HephagencyButtonLink
                        className="w-fit"
                        linkClassName="md:absolute md:bottom-0 md:left-0 xl:static h-fit xl:self-end"
                        href="#"
                    >
                        {translations.about[hephagency_config.language]}
                    </HephagencyButtonLink>
                </div>
            </div>
        </section>
    )
}