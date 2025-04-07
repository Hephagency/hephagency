import clsx from "clsx";
import { ReactNode } from "react";

export interface HephagencyButtonLayoutProps{
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
    isActive?: boolean;
}

/**
 * A layout for buttons in the Hephagency design system
 */

export default function HephagencyButtonLayout({icon, children, className, isActive}: HephagencyButtonLayoutProps){
    return (
        <div className={clsx(
            "flex items-center justify-center px-8 py-3 paragraph-large gap-2.5 border border-current uppercase relative z-10 group transition-all duration-300",
            className,
            isActive ? "invert" : "hover:invert"
        )}>
            {icon}
            {children}
            <div className={clsx(
                "absolute top-0 left-0 button-layout-background pointer-events-none bg-current w-full h-full -z-10 transition-all invert duration-300",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}/>
        </div>
    )
}