/**
 * This page is the article page for the blog part of the website
 */

import { notFound } from "next/navigation";
import ArticleHeadingSection from "@/components/pages/article/ArticleHeadingSection";
import ArticleSection from "@/components/pages/article/ArticleSection";
import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
import WPUtils from "@/libs/classes/WPUtils";
import { Metadata, ResolvingMetadata } from "next";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
interface ArticleProps{
    params: Promise<{slug: string}>
}

export async function generateStaticParams(){
    try {
        const articles = await WPUtils.getArticles();
        return articles.map((article : ArticleInterface) => ({
            slug: article.slug
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata(
    {params} : ArticleProps,
    parent: ResolvingMetadata
) : Promise<Metadata>{
    const {slug} = await params;
    let find;
    try {
        find = await WPUtils.getArticleBySlug(slug);
    } catch(error){
        notFound();
    }
    return {
        title: find.metadata.title,
        description: find.metadata.description
    }
}

export default async function Article({params}: ArticleProps){
    const slug = (await params).slug;
    let article;
    try {
        article = await WPUtils.getArticleBySlug(slug);
        if(!article) {
            notFound();
        }
    } catch(error) {
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
        <HomeBlogSection categories={article.categories}/>
        </>
    )
    
    
}