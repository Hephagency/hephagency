/**
 * This component is the heading section of the article page
 */

import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import ArticleHeadingInformation from "./ArticleHeadingInformation";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import BlogCategories from "../../blog/BlogLayout/BlogCategories";
import TopHeading from "@/components/global/texts/TopHeading";

interface ArticleHeadingSectionProps {
    article: ArticleInterface;
}

export default function ArticleHeadingSection({ article }: ArticleHeadingSectionProps) {
    return (
        <section className="relative min-h-dvh pt-20 md:pt-32.5 px-4 md:px-6 xl:px-7.5">
            <BlogCategories 
            className="absolute top-0 right-4 md:right-6 xl:right-7.5"
            categories={article.categories} />
            <div className="sticky top-1/6 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-col gap-2 xl:grow xl:basis-0">
                    <h1 className="h5">
                        {article.title}
                    </h1>
                    <div className="flex gap-9">
                        <ArticleHeadingInformation
                            title={translations.article_author[hephagency_config.language]}
                            content={article.author}
                        />
                        <ArticleHeadingInformation
                            title={translations.article_published_date[hephagency_config.language]}
                            content={(new Date(article.created_at)).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        />
                    </div>
                </div>
                <div className="w-full xl:grow xl:basis-0">
                    <img
                        className="w-full aspect-36/37 object-cover md:aspect-67/40"
                        src={article.thumbnail}
                        alt={article.title}
                    />
                </div>
            </div>
        </section>
    )
}