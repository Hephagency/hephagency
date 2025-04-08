'use client'
/**
 * This component is used to display the values of the Hephagency in a specific format.
 */

import translations from "@/libs/translations/translations";
import LanguageType from "@/libs/types/LanguageType";
import { useEffect, useState } from "react";
import AboutValuesList from "./AboutValuesList";
import hephagency_config from "@/libs/hephagency_config";
import HephagencySplineLogo from "@/components/global/spline/HephagencySplineLogo";
import InlineImageText from "@/components/global/texts/InlineImageText";
import clsx from "clsx";

interface Value {
    title: {
        [key in LanguageType]: string;
    },
    illustration: string;
    text_image: string;
    first_word: {
        [key in LanguageType]: string;
    };
    text: {
        [key in LanguageType]: string;
    }
}

export default function AboutValuesDisplay() {
    const values = translations.about_values as Value[];
    const [currentValueIndex, setCurrentValueIndex] = useState(0);
    const currentValue = values[currentValueIndex];

    async function preloadImages() {
        const images: string[] = [];
        values.forEach((value) => {
            images.push(value.illustration);
            images.push(value.text_image);
        });
        await Promise.all(images.map((image) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = image;
                img.onload = resolve;
            });
        }));
    }

    useEffect(() => {
        preloadImages();
    }, []);

    return (
        <div className="flex flex-col gap-10 md:gap-20 xl:flex-row xl:gap-8">
            <div className="flex flex-col-reverse gap-7 md:flex-row md:justify-between md:gap-28.5 xl:grow-5 xl:basis-0 xl:flex-col xl:gap-20">
                <div className="md:grow md:basis-0">
                    <AboutValuesList
                        className="md:sticky md:top-1/8"
                        options={values.map((value, index) => ({
                            label: value.title[hephagency_config.language],
                            onClick: () => setCurrentValueIndex(index),
                            isActive: index === currentValueIndex,
                            className: clsx(
                                "border-b",
                                (index !== currentValueIndex && index > 0) ? "border-b-current" : "border-b-transparent",
                            )
                        }))}
                    />
                </div>
                <div
                    className="w-full md:grow md:basis-0"
                    style={
                        {
                            backgroundImage: `url(${currentValue.illustration})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }
                    }
                >
                    <div className="w-full aspect-square overflow-hidden flex flex-col justify-center items-center relative">
                        <div className="w-[130%] h-[90%] overflow-hidden flex justify-center items-center -translate-y-1/16">
                            <HephagencySplineLogo
                                className="w-full h-auto"
                                client
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:grow-7 xl:basis-0">
                <InlineImageText
                    className="xl:sticky xl:top-1/6 xl:h-fit"
                    firstWord={currentValue.first_word[hephagency_config.language]}
                    text={currentValue.text[hephagency_config.language]}
                    image={currentValue.text_image}
                />
            </div>
        </div>
    )
}