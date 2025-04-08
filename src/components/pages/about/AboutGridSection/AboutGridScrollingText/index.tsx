'use client'

/**
 * A React component that renders a text which is animated on scroll.
 */

import HephagencyIcon from "@/components/global/icons/HephagencyIcon";
import InlineImageText from "@/components/global/texts/InlineImageText";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useRef } from "react";

export default function AboutGridScrollingText() {
    const hiddenCharClassName = "hidden-char";
    const scrollHeight = 2250;
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const currentTimeline = useRef<GSAPTimeline | null>(null);

    useGSAP(() => {
        if (mainContainerRef.current && innerContainerRef.current) {
            const timeline = gsap.timeline({
                paused: true,
            });
            const hiddenChars = mainContainerRef.current.querySelectorAll(`.${hiddenCharClassName}`);
            timeline.to(hiddenChars, {
                opacity: 1,
                stagger: 0.1,
            })
            timeline.to(innerContainerRef.current, {
                top: "100%",
                translateY: "-100%",
                duration: 5
            },"-=1");
            currentTimeline.current = timeline;
        }
    }, [mainContainerRef, innerContainerRef]);

    function handleLenisScroll() {
        if (currentTimeline.current && mainContainerRef.current) {
            const boundingRect = mainContainerRef.current.getBoundingClientRect();
            if (-boundingRect.top > 0) {
                const limit = scrollHeight * 0.75;
                const proportion = -boundingRect.top / limit;
                const progress = Math.min(proportion, 1);
                currentTimeline.current.progress(progress);
            }
        }
    }

    useLenis(handleLenisScroll);

    function splitText(text: string) {
        return text.split(" ").map((word, index) => {
            return (
                <span
                    key={index}
                    className={clsx(
                        hiddenCharClassName,
                        "opacity-50"
                    )}
                >
                    {word}{" "}
                </span>
            )
        });
    }

    return (
        <div
            style={
                {
                    minHeight: scrollHeight
                }
            }
            ref={mainContainerRef}
        >
            <div className="sticky h-dvh top-0">
                <div 
                className="absolute top-1/2 left-0 w-full -translate-y-1/2"
                ref={innerContainerRef}
                >
                    <InlineImageText
                    text={translations.about_grid_heading_text[hephagency_config.language]}
                    firstWord={translations.about_grid_first_word[hephagency_config.language]}
                    image="/images/gradients/tiny/1.png"
                    elementClassName={clsx(
                        hiddenCharClassName,
                        "opacity-50"
                    )}
                    />
                </div>
            </div>
        </div>
    )
}