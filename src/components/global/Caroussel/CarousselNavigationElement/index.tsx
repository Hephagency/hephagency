'use client'

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";

interface CarousselNavigationElementProps {
    active: boolean;
    animated: boolean;
    onClick: () => void;
    onAnimationComplete: () => void;
}

/**
 * A navigation element for the caroussel component in the Hephagency design system
 */

export default function CarousselNavigationElement({ active, animated, onClick, onAnimationComplete }: CarousselNavigationElementProps) {
    const buttonInnerElementRef = useRef<HTMLDivElement>(null);
    const currentTimeline = useRef<GSAPTimeline | null>(null);

    useGSAP(()=>{
        if(animated && !active && buttonInnerElementRef.current){
            currentTimeline.current = gsap.timeline({
                onComplete: onAnimationComplete
            });
            currentTimeline.current.to(
                buttonInnerElementRef.current,
                {
                    scaleX: 1,
                    duration: 5,
                }
            )
        } else if(currentTimeline.current){
            currentTimeline.current.progress(active ? 1 : 0);
            currentTimeline.current.kill();
            currentTimeline.current = null;
        }
    },[animated, buttonInnerElementRef]);

    return (
        <button
            onClick={onClick}
            className={clsx(
                "grow h-[4px] bg-grey-400 cursor-pointer",
            )}
        >
            <div
            className={clsx(
                "w-full h-full bg-grey-light origin-left",
                active ? "scale-x-full" : "scale-x-0",
            )}
            ref={buttonInnerElementRef}
            />
        </button>
    )
}
