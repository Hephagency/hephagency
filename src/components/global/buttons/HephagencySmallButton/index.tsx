import { ReactNode } from "react";
import { HephagencyButtonLayoutProps } from "../HephagencyButtonLayout";
import clsx from "clsx";
import HephagencySmallButtonLayout from "../HephagencySmallButtonLayout";

interface HephagencySmallButtonProps extends HephagencyButtonLayoutProps{
    onClick?: () => void;
    buttonClassName?: string;
}

/**
 * The main small button component in the Hephagency design system
 */

export default function HephagencySmallButton({icon, children, className, onClick, buttonClassName, isActive}: HephagencySmallButtonProps){
    return (
        <button onClick={(e)=>{
            e.preventDefault();
            if(onClick){
                onClick();
            }
        }} className={clsx(
            buttonClassName,
            "cursor-pointer"
        )}>
            <HephagencySmallButtonLayout icon={icon} className={className} isActive={isActive}>
                {children}
            </HephagencySmallButtonLayout>
        </button>
    )
}