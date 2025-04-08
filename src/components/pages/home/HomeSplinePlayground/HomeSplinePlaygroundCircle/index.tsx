'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

interface Home3DPlaygroundCircleProps {
    className?: string;
}

/**
 * A component which implements a rotate animated svg circle in the 3D home playground
 */

export default function HomeSplinePlaygroundCircle({ className }: Home3DPlaygroundCircleProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const svgPathRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        if (svgRef.current && svgPathRef.current) {
            const timeline = gsap.timeline({
                repeat: -1,
            });
            timeline.to(svgRef.current, {
                rotation: 360,
                ease: "none",
                duration: 10,
            });

            function handleMouseEnter() {
                timeline.pause();
            }

            function handleMouseLeave() {
                timeline.resume();
            }

            svgPathRef.current.addEventListener("mouseenter", handleMouseEnter);
            svgPathRef.current.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                svgPathRef.current?.removeEventListener("mouseenter", handleMouseEnter);
                svgPathRef.current?.removeEventListener("mouseleave", handleMouseLeave);
            }
        }
    }, [svgRef, svgPathRef]);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1380"
            height="1380"
            fill="none"
            viewBox="0 0 1380 1380"
            ref={svgRef}
            className={className}
        >
            <path
                ref={svgPathRef}
                fill="#0B0A0A"
                fillRule="evenodd"
                d="M689.605 1379.21c380.855 0 689.605-308.75 689.605-689.605C1379.21 308.747 1070.46 0 689.605 0 308.747 0 0 308.747 0 689.605c0 380.855 308.747 689.605 689.605 689.605m0-85.06c333.875 0 604.545-270.67 604.545-604.545 0-333.879-270.67-604.542-604.545-604.542-333.879 0-604.542 270.663-604.542 604.542 0 333.875 270.663 604.545 604.542 604.545"
                clipRule="evenodd"
            ></path>
            <path
                fill="#fff"
                d="m37.408 462.287 48.388-5.645 32.54 40.128-11.303 32.644-32.54-40.129-48.388 5.645zM1345.03 906.011l-48.3 6.413-33.17-39.605L1274.34 840l33.17 39.605 48.3-6.413z"
            ></path>
        </svg>
    )
}