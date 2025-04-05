'use client'
import { useGSAP } from "@gsap/react";
/**
 * A React component that displays a circle loader
 */

import HephagencySplineLogo from "../spline/HephagencySplineLogo";
import { useRef } from "react";
import gsap from "gsap";
export default function CircleLoader() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true
            });
        }
    }, [containerRef])
    return (
        <div ref={containerRef} className="w-full max-w-96 max-h-66 overflow-hidden flex flex-col justify-center items-center invert">
            <div className="w-full aspect-square">
                <HephagencySplineLogo client />
            </div>
        </div>
    )
}
