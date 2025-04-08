/**
 * A React component that renders the first section of the home page.
 */

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import clsx from "clsx";
import HomeLandingVideo from "./HomeLandingVideo";

export default function HomeLandingFirst(){
    return (
        <section className={clsx(
            "w-dvw h-dvh bg-red-500 px-4 md:px-6 xl:px-7.5 text-grey-dark py-20 xl:flex xl:flex-col xl:justify-center xl:items-center overflow-hidden",
            hephagency_config.negativeRemovalClassName
        )}>
            <div className="h-full flex flex-col-reverse xl:flex-col xl:justify-center xl:items-center relative xl:w-fit xl:h-fit xl:py-24 2xl:py-32">
                <h1 className="grow basis-0 h4 flex flex-col justify-center xl:grow-0 xl:h3 2xl:h2">
                    <span className="xl:absolute xl:top-0 xl:left-0 xl:-translate-x-1/2 2xl:-translate-x-full">
                        {translations.home_landing_title_first[hephagency_config.language]}
                    </span>
                    <span className="xl:absolute xl:bottom-0 xl:right-0 xl:translate-x-1/2 2xl:translate-x-full">
                        {translations.home_landing_title_second[hephagency_config.language]}
                    </span>
                </h1>
                <div className="grow basis-0 flex flex-col justify-center items-center md:grow-2">
                    <HomeLandingVideo/>
                </div>
            </div>

        </section>
    )
}