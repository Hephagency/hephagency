import clsx from "clsx";
import { ReactNode } from "react";

export interface HephagencyButtonLayoutProps{
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
}

/**
 * A layout for buttons in the Hephagency design system
 */

export default function HephagencyButtonLayout({icon, children, className}: HephagencyButtonLayoutProps){
    return (
        <div className={clsx(
            "flex items-center justify-center px-8 py-3 paragraph-large gap-2.5 border border-current uppercase",
            className
        )}>
            {icon}
            {children}
        </div>
    )
}