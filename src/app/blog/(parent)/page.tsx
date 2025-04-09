/**
 * Blog page component
 */

import BlogLayout from "@/components/pages/blog/BlogLayout";
import WPUtils from "@/libs/classes/WPUtils";
import hephagency_config from "@/libs/hephagency_config";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import translations from "@/libs/translations/translations";
import { Metadata } from "next";
interface BlogProps{
    searchParams? : Promise<
    {
        page: number
    }>
}

export const metadata: Metadata = {
  title: translations.blog_meta_title[hephagency_config.language],
  description: translations.blog_meta_description[hephagency_config.language],
}

export default async function Blog({searchParams}: BlogProps) {
    const params = await searchParams;
    const page = params?.page ? Number(params.page) : 1;
    const limit = 7;
    let totalPages: number = 0;
    let articles : ArticleInterface[] = [];
    let categories : CategoryInterface[] = [];
    try {
        articles = await WPUtils.getArticles(undefined, limit, page, (total) => totalPages = total);
        categories = await WPUtils.getCategories();
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
    
    try {
        articles = await WPUtils.getArticles(undefined, limit, page, (total) => totalPages = total);
        categories = await WPUtils.getCategories();
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
    return (
        <BlogLayout
        categories={categories}
        banner="/images/gradients/1.png"
        title={translations.blog_title[hephagency_config.language]}
        currentPage={page}
        totalPages={totalPages}
        articles={articles}
        />
    )
}