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

export default function HephagencyButton({icon, children, className, onClick, buttonClassName, isActive}: HephagencyButtonProps){
    return (
        <button onClick={(e)=>{
            e.preventDefault();
            if(onClick){
                onClick();
            }
        }} className={clsx(
            buttonClassName,
            "cursor-pointer",
            !isActive && "active:invert active:[&_.button-layout-background]:opacity-100 transition-all duration-300"
        )}>
            <HephagencyButtonLayout icon={icon} className={className} isActive={isActive}>
                {children}
            </HephagencyButtonLayout>
        </button>
    )
}