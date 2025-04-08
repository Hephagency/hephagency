import Link from "next/link";
import HephagencyButtonLayout, { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import LoaderLink from "../../Loader/LoaderLink";
import clsx from "clsx";

interface HephagencyButtonLinkProps extends HephagencyButtonLayoutProps {
    href: string;
    linkClassName?: string;
    hideLoader?: boolean;
    target?: string;
}

export default function HephagencyButtonLink({ icon, children, className, href, linkClassName, hideLoader, target }: HephagencyButtonLinkProps) {
    return (
        <LoaderLink
        href={href}
        className={clsx(
            linkClassName,
            "active:invert active:[&_.button-layout-background]:opacity-100 transition-all duration-300"
        )}
        hideLoader={hideLoader}
        target={target}
        >
            <HephagencyButtonLayout icon={icon} className={className}>
                {children}
            </HephagencyButtonLayout>
        </LoaderLink>
    )
}