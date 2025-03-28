import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import HephagencyMenu from "./HephagencyMenu";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import ParisTimer from "./ParisTimer";
import HephagencyIcon from "@/components/global/icons/HephagencyIcon";

/**
 * The main header of the Hephagency layout
 */
export default function HephagencyHeader() {
    return (
        <header className="px-4 py-5 md:px-7.5 w-full text-grey-dark flex justify-between sticky z-50">
            <HephagencyMenu />
            <HephagencyIcon
            className="w-8 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden xl:block"
            />
            <div className="flex items-center gap-4">
                <span className="paragraph-large hidden xl:inline-block">
                    <ParisTimer/>
                </span>
                <HephagencyButtonLink
                    href="#"
                >
                    {translations.contact[hephagency_config.language]}
                </HephagencyButtonLink>
            </div>
        </header>
    )
}