/**
 * A work section with centered texts
 */

import { ProjectSectionInterface } from "@/libs/interfaces/ProjectInterface";
import clsx from "clsx";

interface WorkCenteredTextsSectionProps{
    section: ProjectSectionInterface;
}

export default function WorkCenteredTextsSection({section}: WorkCenteredTextsSectionProps){
    return (
        <section>
            <div className={clsx(
                "flex flex-col gap-5 md:max-w-112.5 md:mx-auto md:gap-14 xl:max-w-229 xl:pl-0 xl:mx-auto xl:gap-0 xl:gap-14",
                section.mirror ? "md:mr-0 md:pr-25" : "md:ml-0 md:pl-25"
            )}>
                {section.texts.map((text, index) => (
                    <div 
                    key={index}
                    className="xl:flex xl:min-h-79.5"
                    >
                        {Array.from({length: section.mirror ? section.texts.length - index - 1 : index}).map((_,index)=>
                        <div 
                        key={index}
                        className="xl:basis-0"
                        style={
                            {
                                flexGrow: 4/(section.texts.length - 1)
                            }
                        }
                        />
                        )}
                        <div
                        className="paragraph-p md:paragraph-large xl:paragraph-x-large xl:grow-6 xl:basis-0 xl:sticky xl:top-1/3 xl:h-fit"
                        dangerouslySetInnerHTML={{__html: text}}
                        />
                        {Array.from({length: section.mirror ? index : section.texts.length - index - 1}).map((_,index)=>
                        <div 
                        key={index}
                        className="xl:basis-0"
                        style={
                            {
                                flexGrow: 4/(section.texts.length - 1)
                            }
                        }
                        />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}