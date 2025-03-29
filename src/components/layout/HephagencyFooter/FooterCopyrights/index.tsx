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
                className="paragraph-small transition-all relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-grey-light hover:after:bg-grey-light hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:origin-left after:duration-500"
                />
            </li>
            )}
            
        </ul>
    )
}