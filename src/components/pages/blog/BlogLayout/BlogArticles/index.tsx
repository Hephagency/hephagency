/**
 * A Component to display the blog articles
 */

import LoaderLink from "@/components/global/Loader/LoaderLink";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import clsx from "clsx";

interface BlogArticlesProps {
    articles: ArticleInterface[];
}

export default function BlogArticles({ articles }: BlogArticlesProps) {
    // Format an article timestamp into a XX/XX/XXXX format
    function formatDate(date: string) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <ul className="flex flex-col md:gap-6">
            {articles.map((article, index) => (
                <li 
                key={article.id}
                className={clsx(
                    index !== articles.length - 1 && "border-b border-current md:border-b-0",
                )}>
                    <LoaderLink
                        href={`/blog/article/${article.slug}`}
                        className="paragraph-p flex w-full justify-between gap-4 py-3 md:gap-12.5 md:py-0"
                    >
                        <span className="flex gap-4 grow basis-0 justify-between items-center md:grow-6 xl:grow-8">
                            <span>
                                {article.title}
                            </span>
                            <span className="hidden md:inline-block md:grow md:basis-0 md:h-px md:bg-current"/>
                            <span>
                                {formatDate(article.created_at)}
                            </span>
                        </span>
                        <span className="text-end hidden md:inline-block md:grow-2 md:basis-0 xl:grow-4 xl:text-center">
                            {article.categories.map(({ label }) => label).join(", ")}
                        </span>
                    </LoaderLink>
                </li>
            ))}
        </ul>
    )
}