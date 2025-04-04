import Link from "next/link";
import { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import HephagencySmallButtonLayout from "../HephagencySmallButtonLayout";
import LoaderLink from "../../Loader/LoaderLink";

interface HephagencySmallButtonLinkProps extends HephagencyButtonLayoutProps {
    href: string;
    linkClassName?: string;
    scroll?: boolean;
    hideLoader?: boolean;
}

export default function HephagencySmallButtonLink({ scroll, icon, children, className, href, linkClassName, hideLoader }: HephagencySmallButtonLinkProps) {
    return (
        <LoaderLink
            href={href}
            className={linkClassName}
            scroll={scroll}
            hideLoader={hideLoader}
        >
            <HephagencySmallButtonLayout icon={icon} className={className}>
                {children}
            </HephagencySmallButtonLayout>
        </LoaderLink>
    )
}