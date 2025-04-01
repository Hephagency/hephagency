/**
 * A Component to display a button with an arrow that links to a page
 */

import Link from "next/link";
import ArrowButtonLayout, { ArrowButtonLayoutProps } from "../ArrowButtonLayout";

interface ArrowButtonLinkProps extends ArrowButtonLayoutProps{
    href: string;
    linkClassName?: string;
    scroll?: boolean;
}

export default function ArrowButtonLink({side, className, href, linkClassName, scroll}: ArrowButtonLinkProps){
    return (
        <Link
            href={href}
            className={linkClassName}
            scroll={scroll}
        >
           <ArrowButtonLayout side={side} className={className} />
        </Link>
    )
}