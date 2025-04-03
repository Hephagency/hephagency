/**
 * This page is the article page for the blog part of the website
 */

import sampleArticles from "@/libs/static/sampleArticles";
import { notFound } from "next/navigation";
import ArticleHeadingSection from "@/components/pages/article/ArticleHeadingSection";
import ArticleSection from "@/components/pages/article/ArticleSection";
import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
interface ArticleProps{
    params: Promise<{slug: string}>
}

export default async function Article({params}: ArticleProps){
    const slug = (await params).slug;
    console.log(slug)
    const article = sampleArticles.find((article) => article.slug === slug);
    if(!article){
        notFound();
    }

    return (
        <>
        <div className="flex flex-col gap-7 xl:gap-38 py-30 md:py-37">
            <ArticleHeadingSection article={article} />
            <div className="flex flex-col gap-17.5 px-4 md:px-6 xl:px-7.5 md:gap-33 xl:gap-38">
                {article.sections.map((section,index)=>
                <ArticleSection
                key={index}
                section={section}
                />
            )}
            </div>
        </div>
        <HomeBlogSection/>
        </>
    )
    
    
}