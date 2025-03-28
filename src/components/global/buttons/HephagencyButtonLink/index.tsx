import Link from "next/link";
import HephagencyButtonLayout, { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";

interface HephagencyButtonLinkProps extends HephagencyButtonLayoutProps {
    href: string;
    linkClassName?: string;
}

export default function HephagencyButtonLink({ icon, children, className, href, linkClassName }: HephagencyButtonLinkProps) {
    return (
        <Link
        href={href}
        className={linkClassName}
        >
            <HephagencyButtonLayout icon={icon} className={className}>
                {children}
            </HephagencyButtonLayout>
        </Link>
    )
}