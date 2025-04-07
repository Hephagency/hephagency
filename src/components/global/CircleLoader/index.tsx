'use client'
import { useGSAP } from "@gsap/react";
/**
 * A React component that displays a circle loader
 */

import HephagencySplineLogo from "../spline/HephagencySplineLogo";
import { useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

interface CircleLoaderProps{
    isNotInverted?: boolean;
}

export default function CircleLoader({isNotInverted = false}: CircleLoaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 0.95,
                duration: 0.5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true
            });
        }
    }, [containerRef])
    return (
        <div ref={containerRef} 
        className={clsx(
            "w-full max-w-96 max-h-64 overflow-hidden flex flex-col justify-center items-center scale-85",
            !isNotInverted && "invert"
        )}>
            <div className="w-full aspect-square">
                <HephagencySplineLogo client />
            </div>
        </div>
    )
}
