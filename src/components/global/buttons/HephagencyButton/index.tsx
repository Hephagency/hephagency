import { ReactNode } from "react";
import HephagencyButtonLayout, { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import clsx from "clsx";

interface HephagencyButtonProps extends HephagencyButtonLayoutProps{
    onClick?: () => void;
    buttonClassName?: string;
}

/**
 * The main button component in the Hephagency design system
 */

export default function HephagencyButton({icon, children, className, onClick, buttonClassName}: HephagencyButtonProps){
    return (
        <button onClick={onClick} className={clsx(
            buttonClassName,
            "cursor-pointer"
        )}>
            <HephagencyButtonLayout icon={icon} className={className}>
                {children}
            </HephagencyButtonLayout>
        </button>
    )
}