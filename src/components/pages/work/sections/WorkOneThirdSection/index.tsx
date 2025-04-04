/**
 * A work section with a one third image and a text
 */

import { ProjectSectionInterface } from "@/libs/interfaces/ProjectInterface";
import WorkOneThirdSectionPart from "./WorkOneThirdSectionPart";
import { text } from "stream/consumers";
import clsx from "clsx";

interface WorkOneThirdSectionProps{
    section: ProjectSectionInterface;
}

export default function WorkOneThirdSection({section}: WorkOneThirdSectionProps){
    function getParts(){
        // Get the max length between the texts and the images
        const maxLength = Math.max(section.texts.length, section.images.length);
        const parts = [];
        for(let i = 0; i < maxLength; i++){
            parts.push({
                text: section.texts.length > i ? section.texts[i] : undefined,
                image: section.images.length > i ? section.images[i] : undefined
            })
        }
        return parts;
    }

    const parts = getParts();

    // Split the parts between odd and even indexes
    const oddParts = parts.filter((_, index) => index % 2 === 0);
    const evenParts = parts.filter((_, index) => index % 2 !== 0);

    return (
        <section className={clsx(
            "flex gap-10",
            section.mirror ? "flex-col-reverse xl:flex-row-reverse" : "flex-col xl:flex-row"
        )}>
            <div className="flex flex-col gap-10">
                {oddParts.map((part, index) => (
                    <div
                    className="md:flex md:flex-col xl:min-h-280"
                    key={index}
                    >
                        <WorkOneThirdSectionPart
                        title={(section.title && index === 0) ? section.title : undefined}
                        text={part.text}
                        image={part.image}
                        className={clsx(
                            index % 2 !== 0 && "self-end xl:self-start"
                        )}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-10">
                <div className="hidden xl:block xl:h-140"/>
                {evenParts.map((part, index) => (
                    <div
                    className="md:flex md:flex-col xl:min-h-280"
                    key={index}
                    >
                        <WorkOneThirdSectionPart
                        text={part.text}
                        image={part.image}
                        className={clsx(
                            ((oddParts.length % 2 === 0 && index % 2 === 0) || (oddParts.length % 2 !== 0 && index % 2 !== 0)) && "self-end xl:self-start"
                        )}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}