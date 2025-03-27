'use client'

import { ReactNode, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import 'swiper/css';
import clsx from "clsx";

interface CarousselProps {
    items: ReactNode[];
    className?: string;
}

/**
 * A caroussel component in the Hephagency design system
 */

export default function Caroussel({ items, className }: CarousselProps) {
    const swiperRef = useRef<SwiperRef | null>(null);

    function slideTo(index: number) {
        if(swiperRef.current){
            swiperRef.current.swiper.slideTo(index);
        }
    }

    return (
        <div className={clsx(
            className,
            "relative"
        )}>
            <Swiper
            className="w-full h-full"
            ref={swiperRef}
            autoplay
            >
                {items.map((item, index) =>
                    <SwiperSlide key={index}>
                        {item}
                    </SwiperSlide>
                )}
            </Swiper>
            <div className="w-full flex absolute bottom-1 left-0 gap-1 z-50">
                {Array.from({length: items.length}).map((_,index)=>
                <button
                onClick={()=>slideTo(index)}
                key={index}
                className="grow h-[4px] bg-grey-light"
                />
            )}
            </div>
        </div>
    )
}