/**
 * A Component to display a button with an arrow
 */

import clsx from "clsx";
import ArrowButtonLayout, { ArrowButtonLayoutProps } from "../ArrowButtonLayout";

interface ArrowButtonProps extends ArrowButtonLayoutProps{
    onClick: () => void;
    buttonClassName?: string;
}

export default function ArrowButton({side, className, onClick, buttonClassName}: ArrowButtonProps){
    return (
        <button onClick={(e)=>{
            e.preventDefault();
            if(onClick){
                onClick();
            }
        }} className={clsx(
            buttonClassName,
            "active:invert transition-all duration-300"
        )}>
            <ArrowButtonLayout side={side} className={className} />
        </button>
    )
}