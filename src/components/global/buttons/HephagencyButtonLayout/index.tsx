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
            "flex items-center justify-center px-8 py-3 paragraph-large gap-2.5 border border-current uppercase relative z-10 group hover:invert transition-all",
            className
        )}>
            {icon}
            {children}
            <div className="absolute top-0 left-0 pointer-events-none bg-current w-full h-full -z-10 transition-all opacity-0 group-hover:opacity-100 invert"/>
        </div>
    )
}