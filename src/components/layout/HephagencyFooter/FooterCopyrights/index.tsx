import translations from "@/libs/translations/translations";
import MenuLink, { MenuLinkProps } from "../../menu/MenuLinks/MenuLink";
import hephagency_config from "@/libs/hephagency_config";
import MenuLinks from "../../menu/MenuLinks";

export default function FooterCopyrights(){
    const links : MenuLinkProps[] = [
        {
            href: "#",
            children: translations.copyrights[hephagency_config.language]
        },
        {
            href: "#",
            children: translations.legal_mentions[hephagency_config.language]
        },
        {
            href: "#",
            children: translations.privacy_policy[hephagency_config.language]
        }
    ];

    return (
        <ul className="flex flex-wrap gap-2 md:gap-5">
            {links.map((link,index)=>
            <li key={index}>
                <MenuLink
                {...link}
                className="paragraph-small"
                />
            </li>
            )}
            
        </ul>
    )
}