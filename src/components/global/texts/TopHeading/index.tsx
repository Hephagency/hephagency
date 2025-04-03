/**
 * A React component that renders a top heading for some sections/
 */

import hephagency_config from "@/libs/hephagency_config";
import clsx from "clsx";
import { ReactNode } from "react";

interface TopHeadingProps {
    children: ReactNode;
    className?: string;
}

export default function TopHeading({ children, className }: TopHeadingProps) {
    return (
        <div className={clsx(
            "absolute left-4 md:left-6 xl:left-7.5 top-7 paragraph-x-small flex items-center gap-14 md:gap-40 xl:gap-32.5 pt-3.5 md:pt-5 w-3/4 border-t border-t-current whitespace-nowrap",
            className
        )}>
            <span className="uppercase">
                {hephagency_config.siteName}
            </span>
            <span>
                {children}
            </span>
            <span className="hidden md:block">
                {hephagency_config.coordinates.lat}, {hephagency_config.coordinates.long}
            </span>
        </div>
    )
}