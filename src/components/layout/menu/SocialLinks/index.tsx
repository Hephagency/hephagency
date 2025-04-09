import translations from "@/libs/translations/translations";
import MenuLink, { MenuLinkProps } from "../MenuLinks/MenuLink";
import hephagency_config from "@/libs/hephagency_config";
import { createElement } from "react";

interface SocialLinksProps{
    linkClassName?: string;
    parentElement?: string;
}

/**
 * A collection of social links in the Hephagency menu
 */

export default function SocialLinks({linkClassName, parentElement}: SocialLinksProps){
    const links : MenuLinkProps[] = [
        {
            href: "https://www.instagram.com/hephagency/",
            children: translations.instagram[hephagency_config.language],
        },
        {
            href: "https://www.behance.net/hephagency/",
            children: translations.behance[hephagency_config.language],
        },
        {
            href: "https://www.linkedin.com/company/hephagency/",
            children: translations.linkedin[hephagency_config.language],
        }
    ]
    const children = parentElement ?
    links.map((link, index)=>createElement(parentElement, {key: index }, <MenuLink {...link} className={linkClassName} hideLoader={true} target="_blank"/>)) :
    links.map((link, index)=><MenuLink key={index} {...link} className={linkClassName} hideLoader={true} target="_blank"/>);

    return (
        <>
            {children}
        </>
    )
}