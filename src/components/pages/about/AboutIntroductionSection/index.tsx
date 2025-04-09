/**
 * A React component that renders an introduction section for the About page.
 */

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import clsx from "clsx";
import Image from "next/image";
import { Fragment } from "react";

export function mapParagraphContent(content: string, baseHighlight: string[]) {
    const highlight = baseHighlight.map(word => word.toLocaleLowerCase());
    const words = content.split(" ");
    return words.map((word, index) => {
        // Split the word by punctuation into two parts: the word and the punctuation
        const [wordWithoutPunctuation, punctuation] = word.split(/([.,!?;:])/);
        // Check if the word without punctuation is in the highlight array
        const isHighlighted = highlight.includes(wordWithoutPunctuation.toLocaleLowerCase());
        return (
            <Fragment
                key={index}
            >
                <span
                    className={clsx(
                        isHighlighted && "underline"
                    )}
                >
                    {wordWithoutPunctuation}
                </span>
                <span
                >
                    {punctuation}{" "}
                </span>
            </Fragment>
        )
    });
}

export default function AboutIntroductionSection() {
    const paragraph = translations.about_intro_paragraph[hephagency_config.language];
    // The paragraph contains an highligh attribute which is an array of words to be highlighted in the paragraph content
    // We will map the paragraph content and check if the word is in the highlight array
    //Sometimes, the world could be before a punctuation, so we need to check if the word is in the highlight array without the punctuation
    

    return (
        <section className="flex flex-col bg-white text-grey-dark w-full h-dvh p-4 pt-16 md:p-6 md:pt-20 xl:p-7.5 xl:pt-28 gap-6">
            <div className="grow flex flex-col justify-center">
                <div className="flex flex-col justify-center gap-4 md:gap-15 xl:flex-row h-fit">
                    <div className="xl:grow">
                        <h1 className="h6 md:h3 md:max-w-110 xl:mx-auto">
                            {translations.about_title[hephagency_config.language]}
                        </h1>
                    </div>
                    <div className="xl:grow">
                        <p className="paragraph-p underline-offset-6 md:paragraph-x-large md:max-w-160 xl:mx-auto">
                            {mapParagraphContent(paragraph.content, paragraph.highlight)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full aspect-4/3 h-auto overflow-hidden object-cover md:aspect-4/2 md:max-h-100 xl:aspect-31/9 max-h-full xl:max-h-none">
                <Image
                    src="/images/gradients/6.png"
                    alt="Hephagency"
                    fill
                    className="static"
                    objectFit="cover"
                />
            </div>
        </section>
    )
}