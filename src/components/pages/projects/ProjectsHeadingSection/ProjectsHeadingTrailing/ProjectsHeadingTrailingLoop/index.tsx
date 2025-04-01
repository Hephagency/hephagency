'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);
/**
 * A Component to display the projects heading trailing loop.
 * The trailing loop make the images move in a horizontal 8 shape such as the infinity symbol.
 */

interface ProjectsHeadingTrailingLoopProps {
    items: string[];
}

export default function ProjectsHeadingTrailingLoop({ items }: ProjectsHeadingTrailingLoopProps) {
    const imagesContainer = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            animateImages();
        });
        if (imagesContainer.current) {
            resizeObserver.observe(imagesContainer.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const animateImages = () => {
        if (imagesContainer.current && svgRef.current) {
            const images = imagesContainer.current.querySelectorAll("img");
            const path = svgRef.current.querySelector("path");
            if (!path) return;

            images.forEach((image, index) => {
                gsap.set(image, { xPercent: -50, yPercent: -50 }); // centrer l'image

                const timeline = gsap.timeline({
                    repeat: -1,
                    delay: index * 0.05,
                });

                timeline.to(image, {
                    duration: 8,
                    ease: "none",
                    motionPath: {
                        path: path,
                        align: path,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: false,
                    },
                });
            });
        }
    };

    useGSAP(() => {
        animateImages();
    }, []);
    return (
        <div className="grow-2 basis w-full">
            <div ref={imagesContainer} className="relative w-full h-full overflow-x-clip">
                <svg xmlns="http://www.w3.org/2000/svg" ref={svgRef} className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2" viewBox="0 0 490 246" fill="none">
                    <path d="M367.5 0.5C434.971 0.5 490 55.529 490 123C490 190.539 435.039 245.5 367.5 245.5C316.23 245.5 285.062 217.227 261 182.5C268.178 170.947 274.053 159.641 280 148.703C301.465 184.182 325.527 210.5 367.5 210.5C415.762 210.5 455 171.262 455 123C455 74.465 416.035 35.5 367.5 35.5C339.199 35.5 321.221 45.617 304.609 62.844C287.998 80.07 273.984 104.953 259.766 131.203C245.547 157.453 231.123 185.07 210 207.219C188.877 229.367 159.756 245.5 122.5 245.5C55.0293 245.5 0 190.471 0 123C0 55.461 54.9609 0.5 122.5 0.5C173.496 0.5 204.869 28.025 229 62C221.822 73.348 215.4 84.24 209.453 95.109C188.125 60.656 164.336 35.5 122.5 35.5C74.2383 35.5 35 74.738 35 123C35 171.535 73.9648 210.5 122.5 210.5C150.322 210.5 167.822 200.383 184.297 183.156C200.771 165.93 214.854 141.047 229.141 114.797C243.428 88.547 258.125 60.93 279.453 38.781C300.781 16.633 329.902 0.5 367.5 0.5Z" />
                </svg>
                {items.map((item, index) =>
                    <img
                        src={item}
                        aria-hidden="true"
                        key={index}
                        className="absolute top-full left-0 -translate-y-full w-25 md:w-46 aspect-square object-cover"
                    />
                )}
            </div>
        </div>
    )
}