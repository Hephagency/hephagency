/**
 * A Component to display the blog layout
 */

import hephagency_config from "@/libs/hephagency_config";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import translations from "@/libs/translations/translations";
import BlogCategories from "./BlogCategories";
import BlogPagination from "./BlogPagination";
import BlogArticles from "./BlogArticles";

interface BlogLayoutProps {
    banner: string;
    currentPage: number;
    totalPages: number;
    title: string;
    articles: ArticleInterface[];
    categories: CategoryInterface[];
    category?: CategoryInterface;
}

export default function BlogLayout({
    banner,
    title,
    currentPage,
    articles,
    categories,
    category,
    totalPages
}: BlogLayoutProps) {
    return (
        <>
        <section className="h-dvh flex flex-col justify-center items-center px-4 md:px-6 xl:px-7.5 mb-7 xl:pt-16">
            <div className="flex flex-col sticky top-1/8 gap-6 md:gap-7 w-full xl:gap-4">
                <img
                src={banner}
                alt={title}
                className="aspect-square w-full object-cover md:aspect-7/5 xl:aspect-3/1"
                />
                <h1 className="h4 xl:h2">
                    {title}
                </h1>
            </div>
        </section>
        <section className="px-4 md:px-6 xl:px-7.5 flex flex-col gap-6">
            <h2 className="paragraph-x-large xl:paragraph-xx-large">
                {translations.blog_last_articles[hephagency_config.language]}
            </h2>
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:mb-4 xl:mb-8">
                <BlogCategories categories={categories} />
                <BlogPagination 
                category={category}
                currentPage={currentPage}
                totalPages={totalPages}
                />
            </div>
            <BlogArticles articles={articles} />
        </section>
        </>
    )
}