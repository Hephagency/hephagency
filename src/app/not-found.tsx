/**
 * A 404 Not Found page for the Hephagency website.
 */

import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import BackArrowIcon from "@/components/global/icons/BackArrowIcon";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";

export default function NotFound(){
    return (
        <section className="flex flex-col h-dvh px-4 md:px-6 xl:px-7.5 py-16 xl:pt-32">
            <div className="grow basis-0 flex flex-col items-center justify-center gap-7.5 md:gap-14">
                <img
                src="/images/404.png"
                alt="404 Not Found"
                className="max-w-110 w-full"
                />
                <HephagencyButtonLink
                className="flex-row-reverse"
                href="/"
                icon={<BackArrowIcon className="-scale-x-100"/>}
                >
                    {translations.home[hephagency_config.language]}
                </HephagencyButtonLink>
            </div>
            <h1 className="h2">
                {translations.not_found_error[hephagency_config.language]}
            </h1>
        </section>
    )
}