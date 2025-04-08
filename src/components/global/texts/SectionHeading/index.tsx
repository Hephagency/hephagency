/**
 * A React component that renders a section heading with a title;
 */

import { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="h4 border-b border-b-current md:text-end xl:h3">
            {children}
        </h2>
    )
}