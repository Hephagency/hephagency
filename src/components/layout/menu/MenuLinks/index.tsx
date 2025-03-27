import translations from "@/libs/translations/translations";
import MenuLink, { MenuLinkProps } from "./MenuLink";
import hephagency_config from "@/libs/hephagency_config";
import { createElement } from "react";
interface MenuLinksProps{
    linkClassName?: string;
    parentElement?: string;
}

/**
 * A collection of links in the Hephagency menu
 */

export default function MenuLinks({linkClassName, parentElement}: MenuLinksProps){
    const links : MenuLinkProps[] = [
        {
            href: "#",
            children: translations.home[hephagency_config.language],
        },
        {
            href: "#",
            children: translations.about[hephagency_config.language],
        },
        {
            href: "#",
            children: translations.blog[hephagency_config.language],
        },
        {
            href: "#",
            children: translations.projects[hephagency_config.language],
        },
        {
            href: "#",
            children: translations.contact[hephagency_config.language],
        }
    ];

    const children = parentElement ?
    links.map((link, index)=>createElement(parentElement, {key: index }, <MenuLink {...link} className={linkClassName}/>)) :
    links.map((link, index)=><MenuLink key={index} {...link} className={linkClassName}/>);

    return (
        <>
            {children}
        </>
    )
}