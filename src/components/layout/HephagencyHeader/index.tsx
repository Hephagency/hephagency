import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import HephagencyMenu from "./HephagencyMenu";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import ParisTimer from "./ParisTimer";
import HephagencyIcon from "@/components/global/icons/HephagencyIcon";
import Link from "next/link";
import LoaderLink from "@/components/global/Loader/LoaderLink";
import WPUtils from "@/libs/classes/WPUtils";

/**
 * The main header of the Hephagency layout
 */
export default async function HephagencyHeader() {
    const projects = await WPUtils.getProjects(undefined, 3);
    return (
        <header className="px-4 py-5 md:px-6 xl:px-7.5 w-full text-grey-dark flex justify-between fixed top-0 w-full z-50">
            <HephagencyMenu projects={projects}/>
            <LoaderLink
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden xl:block"
            href="/"
            >
                <HephagencyIcon
                className="w-8 h-auto"
                />
            </LoaderLink>
            <div className="flex items-center gap-4">
                <span className="paragraph-large hidden xl:inline-block">
                    <ParisTimer/>
                </span>
                <HephagencyButtonLink
                    href="/contact"
                    linkClassName="hidden md:block"
                >
                    {translations.contact[hephagency_config.language]}
                </HephagencyButtonLink>
            </div>
        </header>
    )
}