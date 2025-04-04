import { ProjectSectionInterface } from "@/libs/interfaces/ProjectInterface";
import clsx from "clsx";
import { Fragment } from "react";

/**
 * A work section with a large image and a text
 */

interface WorkLargeImageSectionProps{
    section: ProjectSectionInterface;
}

export default function WorkLargeImageSection({section}: WorkLargeImageSectionProps){
    return (
        <section className={clsx(
            "flex gap-5 md:gap-7 xl:gap-7.5",
            section.mirror ? "flex-col-reverse xl:flex-row-reverse" : "flex-col xl:flex-row"
        )}>
            <div className="xl:grow-6 xl:basis-0">
                <div className="flex flex-col gap-2.5">
                    {section.images.map((image,index)=>
                    <img
                    className="w-full h-auto"
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    />
                    )}
                </div>
            </div>
            <div className="xl:grow xl:basis-0 paragraph-p">
                <div className="flex flex-col gap-2.5 md:grid md:grid-cols-2 xl:flex xl:gap-5 xl:sticky xl:top-1/6 md:gap-7.5">
                    {section.texts.map((text,index)=>
                    <Fragment key={index}>
                        {
                            (section.title && index === 0) ?
                            <div className="flex flex-col gap-1">
                                <h2 className="text-grey-300 paragraph-small">
                                    {section.title}
                                </h2>
                                <div
                                dangerouslySetInnerHTML={{__html: text}}
                                />
                            </div>
                            :
                            <div
                            dangerouslySetInnerHTML={{__html: text}}
                            />
                        }
                    </Fragment>
                    )}
                </div>
            </div>
        </section>
    )
}