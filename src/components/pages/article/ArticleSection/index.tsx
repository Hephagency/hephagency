/**
 * A component to display an article section
 */

import { ArticleSectionInterface } from "@/libs/interfaces/ArticleInterface";
import clsx from "clsx";

interface ArticleSectionProps {
    section: ArticleSectionInterface;
}

export default function ArticleSection({ section }: ArticleSectionProps) {
    return (
        <section className={clsx(
            "flex",
            (section.image.grow > 0 && section.content.grow > 0) && "gap-6 xl:gap-7",
            section.flexDirection === "row" && "flex-col md:flex-row",
            section.flexDirection === "row-reverse" && "flex-col-reverse md:flex-row-reverse",
            section.flexDirection === "col" && "flex-col",
            section.flexDirection === "col-reverse" && "flex-col-reverse"
        )}>
            <div
                style={
                    {
                        flexGrow: section.image.grow
                    }
                }
                className={clsx(
                    "basis-0",
                    section.image.grow === 0 && "hidden"
                )}
            >
                {section.image.src && 
                <img 
                src={section.image.src} 
                alt={section.image.alt} 
                className="w-full h-auto sticky top-1/6" 
                style={
                    {
                        maxWidth: section.image.maxWidth
                    }
                }
                />}
            </div>
            <div
                style={
                    {
                        flexGrow: section.content.grow
                    }
                }
                className={clsx(
                    "basis-0",
                    section.content.grow === 0 && "hidden"
                )}
            >
                <div className="flex flex-col gap-2 sticky top-1/6 xl:gap-3">
                    {section.title && <h2 className="paragraph-small text-grey-300">{section.title}</h2>}
                    {section.content.text && 
                    <div 
                    className="paragraph-p xl:paragraph-large [&_li]:list-disc [&_li]:ml-4 [&_li]:my-2 [&_li]:pl-2 [&_p]:mb-2 [&_table]:w-full [&_table]:border-collapse [&_table]:border-2 [&_table]:border-grey-300 [&_table]:mb-2 [&_table]:border-r-2 [&_table]:border-grey-300 [&_td]:p-2 [&_td]:border-r-2 [&_td]:border-grey-300 [&_th]:p-2 [&_th]:border-r-2 [&_th]:border-grey-300 [&_th]:border-b-2 [&_th]:border-grey-300 [&_table]:my-4" 
                    style={
                        {
                            fontSize: section.content.fontSize,
                            maxWidth: section.content.maxWidth
                        }
                    }
                    dangerouslySetInnerHTML={{
                        __html: section.content.text
                    }}
                    />}
                </div>
            </div>
        </section>
    )
}