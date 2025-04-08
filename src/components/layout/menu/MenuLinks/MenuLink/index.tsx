import LoaderLink from "@/components/global/Loader/LoaderLink";

export interface MenuLinkProps{
    href: string;
    children: string;
    className?: string;
    hideLoader?: boolean;
}

/**
 * A link in the Hephagency menu
 */

export default function MenuLink({href, children, className, hideLoader}: MenuLinkProps){
    return (
        <LoaderLink
        href={href}
        className={className}
        hideLoader={hideLoader}
        >
            {children}
        </LoaderLink>
    )
}