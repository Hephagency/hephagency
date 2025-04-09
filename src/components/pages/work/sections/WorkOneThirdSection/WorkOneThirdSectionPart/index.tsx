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
            <div className="flex flex-col gap-1">
                {title && (
                    <h2 className="text-grey-300 paragraph-small">
                        {title}
                    </h2>
                )}
                {text && (
                    <div
                    className="paragraph-p md:paragraph-large xl:max-w-75 [&_li]:list-disc [&_li]:ml-4 [&_li]:my-2 [&_li]:pl-2 [&_p]:mb-2 [&_table]:w-full [&_table]:border-collapse [&_table]:border-2 [&_table]:border-grey-300 [&_table]:mb-2 [&_table]:border-r-2 [&_table]:border-grey-300 [&_td]:p-2 [&_td]:border-r-2 [&_td]:border-grey-300 [&_th]:p-2 [&_th]:border-r-2 [&_th]:border-grey-300 [&_th]:border-b-2 [&_th]:border-grey-300 [&_table]:my-4"
                    dangerouslySetInnerHTML={{__html: text}}
                    />
                )}
            </div>
        </div>
    )
}