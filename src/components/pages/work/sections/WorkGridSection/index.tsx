/**
 * A work section with a grid of images
 */

import { ProjectSectionInterface } from "@/libs/interfaces/ProjectInterface";
import clsx from "clsx";
import { Fragment } from "react";

interface WorkGridSectionProps{
    section: ProjectSectionInterface;
}

export default function WorkGridSection({section}: WorkGridSectionProps){
    return (
        <section className={clsx(
            "flex gap-5 md:gap-7 xl:gap-7.5",
            section.mirror ? "flex-col-reverse xl:flex-row-reverse" : "flex-col xl:flex-row"
        )}>
            <div className="flex flex-col gap-5 md:gap-7 xl:grow xl:basis-0 xl:gap-7.5">
                <div>
                    {section.images.length > 0 &&
                    <img
                    src={section.images[0].src}
                    className="w-full h-auto"
                    alt={section.images[0].alt}
                    />
                    }
                </div>
                <div className="xl:grow xl:basis-0">
                    <div className="paragraph-large flex flex-col gap-2.5 md:grid md:grid-cols-2 md:gap-7.5 xl:sticky xl:top-1/6">
                        {section.texts.map((text, index) => (
                            <Fragment key={index}>
                                {
                                    (section.title && index === 0) ?
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-grey-300 paragraph-small">
                                            {section.title}
                                        </h2>
                                        <div
                                        className="[&_li]:list-disc [&_li]:ml-4 [&_li]:my-2 [&_li]:pl-2 [&_p]:mb-2 [&_table]:w-full [&_table]:border-collapse [&_table]:border-2 [&_table]:border-grey-300 [&_table]:mb-2 [&_table]:border-r-2 [&_table]:border-grey-300 [&_td]:p-2 [&_td]:border-r-2 [&_td]:border-grey-300 [&_th]:p-2 [&_th]:border-r-2 [&_th]:border-grey-300 [&_th]:border-b-2 [&_th]:border-grey-300 [&_table]:my-4"
                                        dangerouslySetInnerHTML={{__html: text}}
                                        />
                                    </div>
                                    :
                                    <div
                                    dangerouslySetInnerHTML={{__html: text}}
                                    />
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="xl:grow xl:basis-0">
                <div className="flex flex-col gap-5 md:gap-7 xl:sticky xl:top-1/6 xl:gap-7.5">
                    {section.images.slice(1).map((image, index) => (
                        <img
                        key={index}
                        className="w-full h-auto"
                        src={image.src}
                        alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}