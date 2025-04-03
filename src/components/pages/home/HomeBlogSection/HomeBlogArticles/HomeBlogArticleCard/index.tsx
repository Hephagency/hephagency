/**
 * This component is a card that displays an article's thumbnail, title, excerpt, and categories.
 */

import hephagency_config from "@/libs/hephagency_config";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import clsx from "clsx";
import Link from "next/link";

interface HomeBlogArticleCardProps {
    article: ArticleInterface;
    className?: string;
}

export default function HomeBlogArticleCard({ article, className }: HomeBlogArticleCardProps) {
    const picturedSections = article.sections.filter((section) => section.image.src !== undefined);
    const randomImage = picturedSections.length > 0 ? picturedSections[Math.floor(Math.random() * picturedSections.length)].image.src : null;

    // Get the article date depending on the env language
    function getArticleDate(){
        const language = hephagency_config.language;
        const date = new Date(article.created_at);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return date.toLocaleDateString(language === "en" ? "en-US" : "fr-FR", options);
    }

    return (
        <Link 
        href={`/blog/article/${article.slug}`}
        className={clsx(
            "group flex flex-col gap-2 xl:gap-5",
            className
        )}
        >
            <div className="w-full aspect-square relative">
                <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover"
                />
                {randomImage && 
                <img
                    src={randomImage}
                    alt={article.title}
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                />
                }
            </div>
            <div>
                <h3 className="h5">
                    {article.title}
                </h3>
                <div className="xl:flex xl:items-center xl:justify-between">
                    <span className="paragraph-p xl:paragraph-small">
                        {article.author}
                    </span>
                    <div className="paragraph-small flex items-center gap-10.5 xl:gap-5">
                        <span>
                            {article.categories.map(({label})=>label).join(", ")}
                        </span>
                        <span>
                            {getArticleDate()}
                        </span>
                    </div>
                </div>
                <p className="paragraph-large mt-2 xl:mt-2.5">
                    {article.excerpt} 
                </p>
            </div>
        </Link>
    )
}