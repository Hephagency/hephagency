import Link from "next/link";
import  { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import HephagencySmallButtonLayout from "../HephagencySmallButtonLayout";

interface HephagencySmallButtonLinkProps extends HephagencyButtonLayoutProps {
    href: string;
    linkClassName?: string;
    scroll?: boolean;
}

export default function HephagencySmallButtonLink({ scroll, icon, children, className, href, linkClassName }: HephagencySmallButtonLinkProps) {
    return (
        <Link
        href={href}
        className={linkClassName}
        scroll={scroll}
        >
            <HephagencySmallButtonLayout icon={icon} className={className}>
                {children}
            </HephagencySmallButtonLayout>
        </Link>
    )
}