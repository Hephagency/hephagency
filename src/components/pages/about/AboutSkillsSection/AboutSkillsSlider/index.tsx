'use client'
/**
 * A React component that renders a slider for the skills section of the About page.
 */

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import AboutSkillsSliderCard, { AboutSkillsSliderCardProps } from "./AboutSkillsSliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Fragment } from "react";

export default function AboutSkillsSlider() {
    const skills = translations.about_skills[hephagency_config.language] as AboutSkillsSliderCardProps[];

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1.25}
            spaceBetween={30}
            loop
            autoplay={
                {
                    delay: 1500
                }
            }
            breakpoints={
                {
                    "768": {
                        slidesPerView: 2.33
                    },
                    "1280": {
                        slidesPerView: 4.5
                    }
                }
            }
        >
            {Array.from({ length: 2 }).map((_, index) => (
                <Fragment key={index}>
                    {skills.map((skill, skillIndex) =>
                        <SwiperSlide
                            key={index + "_" + skillIndex}
                        >
                            <AboutSkillsSliderCard
                                {...skill}
                            />
                        </SwiperSlide>
                    )}
                </Fragment>
            ))}
        </Swiper>
    )
}