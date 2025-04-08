/**
 * A React component that renders a grid part for the About page.
 */

import clsx from "clsx";
import { ReactNode } from "react";

interface AboutGridPartProps {
    title?: string;
    children: ReactNode
}

export default function AboutGridPart({ title, children }: AboutGridPartProps) {
    return (
        <div className="flex flex-col gap-7.5 xl:flex-row">
            <div className={clsx(
                !title ? "hidden md:block" : "block",
                "xl:flex-grow-1 xl:basis-0"
            )}>
                {title && 
                <h3 className="paragraph-large max-w-80">
                    {title}
                </h3>
                }
            </div>
            <div className="xl:flex-grow-2 xl:basis-0">
                {children}
            </div>
        </div>
    )
}