'use client'

import HephagencyButton from "@/components/global/buttons/HephagencyButton"
import BurgerIcon from "@/components/global/icons/BurgerIcon";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import MenuLinks from "../../menu/MenuLinks";
import HephagencyMenuSlider from "./HephagencyMenuSlider";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import ProjectInterface from "@/libs/interfaces/ProjectInterface";
/**
 * The main menu component in the Hephagency design system
 */

interface HephagencyMenuProps{
    projects : ProjectInterface[];
}

export default function HephagencyMenu({projects} : HephagencyMenuProps){
    // State for the menu
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNegative, setIsNegative] = useState(true);

    const menuRef = useRef<HTMLDivElement>(null);


    function updateHeader(){
        if(menuRef.current){
            const header = menuRef.current.closest("header");
            if(header){
                header!.style.mixBlendMode = (!menuOpen && isNegative) ? "difference" : "normal";
                header!.style.filter = (!menuOpen && isNegative) ? "invert(1)" : "none";
            }
        }
    }

    function handleScroll(){
        if(menuRef.current){
            const header = menuRef.current.closest("header");
            if(header){
                const headerHeight = header.getBoundingClientRect().height/2;
                const negativeRemovalsElements = document.querySelectorAll(`.${hephagency_config.negativeRemovalClassName}`);
                const negativeAdditionsElements = document.querySelectorAll(`.${hephagency_config.negativeAdditionClassName}`);
                const elements = [...negativeRemovalsElements, ...negativeAdditionsElements];
                let inWindow = isNegative;
                let find = false;
                Array.from(elements).forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    if(rect.top <= headerHeight && rect.bottom >= headerHeight && rect.right > window.screen.availWidth/2 && (rect.left - window.screen.availWidth/2) <= 0){
                        if(element.classList.contains(hephagency_config.negativeRemovalClassName)){
                            inWindow = false;
                        } else {
                            inWindow = true;
                        }
                        find = true;
                    }
                });
                if(!find){
                    inWindow = true;
                }
                setIsNegative(inWindow);
            }
        }
    }

    useEffect(()=>{
        if(menuRef.current){
            if(!menuOpen){
                setTimeout(updateHeader, 500);
            } else {
                updateHeader();
            }
        }
    },[menuRef, menuOpen, isNegative]);

    const pathname = usePathname();

    useEffect(()=>{
        setMenuOpen(false);
        handleScroll();
    },[pathname]);

    useLenis(handleScroll,[isNegative]);

    useEffect(()=>{
        const negativeRemovalClassNames = document.querySelectorAll(`.${hephagency_config.negativeRemovalClassName}`);
        const negativeAdditionClassNames = document.querySelectorAll(`.${hephagency_config.negativeAdditionClassName}`);
        const observerElements = [...negativeRemovalClassNames, ...negativeAdditionClassNames];
        // Listen the class change on the negative removal elements
        // If the class is removed or added, we need to call the handleScroll function
        observerElements.forEach((element) => {
            const observer = new MutationObserver(handleScroll);
            observer.observe(element, {
                attributes: true,
                attributeFilter: ["class"],
            });
        });
        // Cleanup the observer when the component is unmounted
        return () => {
            observerElements.forEach((element) => {
                const observer = new MutationObserver(handleScroll);
                observer.disconnect();
            });
        }
    },[]);

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
        <div ref={menuRef} className={clsx(
            "absolute top-0 left-0 w-full h-dvh bg-orange-500 transition-transform duration-500 origin-[1rem_1.25rem] md:origin-[1.825rem_1.25rem] px-4 md:px-6 xl:px-7.5 pb-8 flex flex-col pt-16 justify-end -z-10",
            menuOpen ? "scale-100" : "scale-0"
        )}>
            <div className="grow basis-0 flex flex-col justify-center items-end">
                <ul className="grid grid-cols-2 md:absolute md:top-1/4 md:right-6 gap-y-4.5 gap-x-10 md:gap-x-32 xl:-translate-y-3/4 xl:-translate-x-full">
                    <MenuLinks
                    parentElement="li" 
                    linkClassName="paragraph-large underline underline-offset-6 transition-all hover:opacity-50 active:opacity-25"
                    />
                </ul>
            </div>
            <div>
                <h2 className="h6 mb-3 md:h5">
                    {translations.last_projects[hephagency_config.language]}
                </h2>
                <HephagencyMenuSlider projects={projects}/>
            </div>
        </div>
        </>
    )
}