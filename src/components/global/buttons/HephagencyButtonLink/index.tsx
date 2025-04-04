import Link from "next/link";
import HephagencyButtonLayout, { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import LoaderLink from "../../Loader/LoaderLink";

interface HephagencyButtonLinkProps extends HephagencyButtonLayoutProps {
    href: string;
    linkClassName?: string;
    hideLoader?: boolean;
}

export default function HephagencyButtonLink({ icon, children, className, href, linkClassName, hideLoader }: HephagencyButtonLinkProps) {
    return (
        <LoaderLink
        href={href}
        className={linkClassName}
        hideLoader={hideLoader}
        >
            <HephagencyButtonLayout icon={icon} className={className}>
                {children}
            </HephagencyButtonLayout>
        </LoaderLink>
    )
}