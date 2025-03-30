'use client'

import { ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import 'swiper/css';
import clsx from "clsx";
import CarousselNavigationElement from "./CarousselNavigationElement";
import { useMediaQuery } from "react-responsive";

interface CarousselProps {
    items: ReactNode[];
    className?: string;
    onSlideChange?: (index: number) => void;
}

/**
 * A caroussel component in the Hephagency design system
 */

export default function Caroussel({ items, className, onSlideChange }: CarousselProps) {
    const swiperRef = useRef<SwiperRef | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isHydrated, setIsHydrated] = useState(false);

    // Hydrate the component after the first render
    useEffect(()=>{
        setIsHydrated(true);
    },[]);

    function slideTo(index: number) {
        if (swiperRef.current) {
            if (index < 0 || index >= items.length) {
                swiperRef.current.swiper.slideToLoop(0);
            } else {
                swiperRef.current.swiper.slideToLoop(index);
            }
        }
    }

    useEffect(()=>{
        if(onSlideChange){
            onSlideChange(currentIndex);
        }
    },[currentIndex]);

    return (
        <div className={clsx(
            className,
            "relative"
        )}>
            <Swiper
                className=" h-full"
                ref={swiperRef}
                loop={true}
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex);
                }}
            >
                {items.map((item, index) =>
                    <SwiperSlide 
                    key={index}
                    >
                        {item}
                    </SwiperSlide>
                )}
            </Swiper>
            {
                (isHydrated) &&
                <div
                    className="w-full flex absolute bottom-2.5 left-0 gap-1 z-50 px-2.5"
                    key={currentIndex}
                >
                    {Array.from({ length: items.length }).map((_, index) =>
                        <CarousselNavigationElement
                            key={index}
                            active={index < currentIndex}
                            animated={index === currentIndex}
                            onClick={() => slideTo(index)}
                            onAnimationComplete={() => { slideTo(index + 1) }}
                        />
                    )}
                </div>
            }
        </div>
    )
}