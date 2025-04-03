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
                {section.image.src && <img src={section.image.src} alt={section.image.alt} className="w-full h-auto sticky top-1/6" />}
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
                    {section.title && <h2 className="paragraph-small">{section.title}</h2>}
                    {section.content.text && <div className="paragraph-p xl:paragraph-large"
                        dangerouslySetInnerHTML={{
                            __html: section.content.text
                        }}
                    />}
                </div>
            </div>
        </section>
    )
}