import LoaderLink from "@/components/global/Loader/LoaderLink";

export interface MenuLinkProps{
    href: string;
    children: string;
    className?: string;
    hideLoader?: boolean;
    target?: string;
}

/**
 * A link in the Hephagency menu
 */

export default function MenuLink({href, children, className, hideLoader, target}: MenuLinkProps){
    return (
        <LoaderLink
        href={href}
        className={className}
        hideLoader={hideLoader}
        target={target}
        >
            {children}
        </LoaderLink>
    )
}