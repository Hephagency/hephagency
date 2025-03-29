import clsx from "clsx";
import { ReactNode } from "react";

interface EntitledParagraphProps {
    title: string;
    className?: string;
    children: ReactNode;
}

export default function EntitledParagraph({ title, className, children }: EntitledParagraphProps) {
    return (
        <div className={clsx(
            "flex flex-col gap-2",
            className
        )}>
            <h3 className="paragraph-small">
                {title}
            </h3>
            <p className="paragraph-large">
                {children}
            </p>
        </div>
    );
}