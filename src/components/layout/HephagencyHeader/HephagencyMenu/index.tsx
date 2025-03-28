'use client'

import HephagencyButton from "@/components/global/buttons/HephagencyButton"
import BurgerIcon from "@/components/global/icons/BurgerIcon";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import clsx from "clsx";
import { useState } from "react";
import MenuLinks from "../../menu/MenuLinks";
import HephagencyMenuSlider from "./HephagencyMenuSlider";

/**
 * The main menu component in the Hephagency design system
 */

export default function HephagencyMenu(){
    // State for the menu
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(hephagency_config.language);
    return (
        <>
        <HephagencyButton 
        icon={!menuOpen ? <BurgerIcon/> : null}
        onClick={()=>setMenuOpen(!menuOpen)}
        className={clsx(
            !menuOpen && "!pl-6",
            "uppercase"
        )}
        buttonClassName="relative"
        >
            {menuOpen ? translations.close_menu[hephagency_config.language] : translations.menu[hephagency_config.language]}
        </HephagencyButton>
        <div className={clsx(
            "fixed top-0 left-0 w-full h-full bg-orange-500 transition-transform duration-500 origin-[1rem_1.25rem] px-4 pb-8 flex flex-col justify-end -z-10",
            menuOpen ? "scale-100" : "scale-0"
        )}>
            <ul className="absolute top-1/4 right-4 grid grid-cols-2 gap-y-4.5 gap-x-10 md:gap-x-32 xl:-translate-y-3/4 xl:-translate-x-full">
                <MenuLinks
                parentElement="li" 
                linkClassName="paragraph-large underline underline-offset-6"
                />
            </ul>
            <div>
                <h2 className="h6 mb-3 md:h5">
                    {translations.last_projects[hephagency_config.language]}
                </h2>
                <HephagencyMenuSlider/>
            </div>
        </div>
        </>
    )
}