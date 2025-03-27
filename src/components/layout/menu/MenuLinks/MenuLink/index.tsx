import clsx from "clsx";
import Link from "next/link";

export interface MenuLinkProps{
    href: string;
    children: string;
    className?: string;
}

/**
 * A link in the Hephagency menu
 */

export default function MenuLink({href, children, className}: MenuLinkProps){
    return (
        <Link 
        href={href}
        className={clsx(
            "",
            className
        )}
        >
            {children}
        </Link>
    )
}