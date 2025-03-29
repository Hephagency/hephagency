/**
 * A component to display the blog articles of the home page
 */

import sampleArticles from "@/libs/static/sampleArticles"
import HomeBlogArticleCard from "./HomeBlogArticleCard";
import { headers } from "next/headers";
import hephagency_config from "@/libs/hephagency_config";

export default function HomeBlogArticles(){
    const articles = sampleArticles.filter(({language})=>language===hephagency_config.language).slice(0,3);
    return (
        <div className="grid grid-cols-1 gap-y-14.5 md:grid-cols-2 gap-x-6 xl:grid-cols-3 xl:gap-x-7.5">
            {articles.map((article, index) => (
                <HomeBlogArticleCard key={index} article={article} />
            ))}
        </div>
    )
}