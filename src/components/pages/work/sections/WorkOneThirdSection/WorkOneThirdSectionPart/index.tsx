/**
 * A part of the WorkOneThirdSection component
 */

import clsx from "clsx";

export interface WorkOneThirdSectionPartProps{
    title?: string;
    text?: string;
    image? : {
        src: string;
        alt: string;
    }
    className?: string;
}

export default function WorkOneThirdSectionPart({title, text, image, className}: WorkOneThirdSectionPartProps){
    return (
        <div
        className={clsx(
            "flex flex-col gap-7 md:max-w-128 md:gap-7.5 xl:max-w-140 xl:sticky xl:top-1/6",
            className
        )}
        >
            {image &&
            <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto"
            />
            }
            <div>
                {title && (
                    <h2>
                        {title}
                    </h2>
                )}
                {text && (
                    <div
                    className="paragraph-p md:paragraph-large xl:max-w-75"
                    dangerouslySetInnerHTML={{__html: text}}
                    />
                )}
            </div>
        </div>
    )
}