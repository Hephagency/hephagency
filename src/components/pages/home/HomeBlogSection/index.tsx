/**
 * A component to display the blog section of the home page
 */

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import HomeBlogArticles from "./HomeBlogArticles";
import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";

export default function HomeBlogSection() {
    return (
        <section className="flex flex-col px-4 py-12 gap-18 xl:gap-0 md:px-6 xl:px-7.5">
            <div className="flex flex-col gap-7.5 xl:flex-row xl:justify-between xl:min-h-80 xl:pb-16">
                <h2 className="h4 xl:sticky xl:top-1/8 h-fit">
                    {translations.home_blog_title[hephagency_config.language]}
                </h2>
                <p className="paragraph-p md:max-w-80 xl:sticky xl:top-1/8 h-fit">
                    {translations.home_blog_intro[hephagency_config.language]}
                </p>
            </div>
            <div className="flex flex-col gap-14.5 items-center">
                <HomeBlogArticles />
                <HephagencyButtonLink
                    href="/blog"
                    linkClassName="w-fit"
                >
                    {translations.view_all[hephagency_config.language]}
                </HephagencyButtonLink>
            </div>
        </section>
    )
}