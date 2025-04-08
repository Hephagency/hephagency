/**
 * A collection of contact links in the Hephagency menu
 */

import translations from "@/libs/translations/translations";
import MenuLink, { MenuLinkProps } from "../MenuLinks/MenuLink";
import { createElement } from "react";
import hephagency_config from "@/libs/hephagency_config";

interface ContactLinksProps{
    linkClassName?: string;
    parentElement?: string;
}

/**
 * A collection of social links in the Hephagency menu
 */

export default function ContactLinks({linkClassName, parentElement}: ContactLinksProps){
    const links : MenuLinkProps[] = [
        {
            href: `tel:${hephagency_config.normalizedPhoneNumber}`,
            children: hephagency_config.phoneNumber!,
        },
        {
            href: `mailto:${hephagency_config.email}`,
            children: hephagency_config.email!,
        }
    ]
    const children = parentElement ?
    links.map((link, index)=>createElement(parentElement, {key: index }, <MenuLink {...link} className={linkClassName} hideLoader={true}/>)) :
    links.map((link, index)=><MenuLink key={index} {...link} className={linkClassName} hideLoader={true}/>);

    return (
        <>
            {children}
        </>
    )
}