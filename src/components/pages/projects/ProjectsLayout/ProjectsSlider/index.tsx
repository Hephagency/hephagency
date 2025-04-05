'use client'
/**
 * A Component to display a slider with projects
 */

import ProjectInterface from "@/libs/interfaces/ProjectInterface";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import ProjectsSliderCard from "./ProjectsSliderCard";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/global/buttons/ArrowButton";
import { EffectCreative } from "swiper/modules";
import clsx from "clsx";
import { Swiper as SwiperType } from "swiper";

interface ProjectsSliderProps {
    projects: ProjectInterface[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
    const swiperRef = useRef<SwiperRef>(null);
    const [isInit, setIsInit] = useState(false);

    function slidePrev() {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    }

    function slideNext() {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current) {
            setIsInit(true);
        }
    }, [swiperRef.current]);


    return (
        <div
            className="xl:max-w-7/12 xl:grow xl:basis-0 xl:relative"
        >
            <Swiper
                slidesPerView={1.25}
                ref={swiperRef}
                effect="creative"
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.activeIndex);
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                breakpoints={{
                    "768": {
                        slidesPerView: 1.8
                    },
                    "1280": {
                        slidesPerView: 2
                    }
                }}
            >
                {projects.map((project, index) =>
                    <SwiperSlide
                        className={clsx(
                            "px-4 md:px-6 md:px-7.5",
                        )}
                        key={index}>
                        <ProjectsSliderCard
                            project={project}
                            className={clsx(
                                (currentIndex === index || currentIndex + 1 === index) ? "!opacity-100" : "!opacity-0"
                            )}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
            <div className="flex justify-end mt-6 px-4 md:px-6 xl:px-7.5 gap-2.5 xl:absolute xl:top-full xl:right-0">
                <ArrowButton
                    onClick={slidePrev}
                    side="left"
                    buttonClassName={clsx(
                        currentIndex === 0 && "opacity-50 pointer-events-none"
                    )}
                />
                <ArrowButton
                    onClick={slideNext}
                    side="right"
                    buttonClassName={clsx(
                        (currentIndex === projects.length - 1 || !isInit || (swiperRef.current && (swiperRef.current.swiper.isEnd || swiperRef.current.swiper.isLocked))) && "opacity-50 pointer-events-none"
                    )}
                />
            </div>
        </div>
    )
}