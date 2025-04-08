/**
 * A component to display the blog articles of the home page
 */

import HomeBlogArticleCard from "./HomeBlogArticleCard";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";

interface HomeBlogArticlesProps{
    articles: ArticleInterface[];
}

export default function HomeBlogArticles({articles} : HomeBlogArticlesProps){
    return (
        <div className="grid grid-cols-1 gap-y-14.5 md:grid-cols-2 gap-x-6 xl:grid-cols-3 xl:gap-x-7.5">
            {articles.map((article, index) => (
                <HomeBlogArticleCard key={index} article={article} />
            ))}
        </div>
    )
}