/**
 * A Component to display the layout of a button with an arrow
 */

import clsx from "clsx";
import BackArrowIcon from "../../icons/BackArrowIcon";

export interface ArrowButtonLayoutProps {
    side: "left" | "right";
    className?: string;
}

export default function ArrowButtonLayout({ side, className }: ArrowButtonLayoutProps = {
    side: "left",
}) {
    return (
        <div
            className="relative bg-current w-fit p-1.5 border-solid transition-all hover:invert cursor-pointer appearance-none duration-300"
        >
            <div className="absolute pointer-events-none w-full h-full border-current border top-0 left-0 invert"/>
            <BackArrowIcon className={clsx(
                "w-6 h-auto invert",
                side === "right" && "-scale-x-100"
            )} />
        </div>
    )
}