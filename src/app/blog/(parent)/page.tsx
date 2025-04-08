/**
 * Blog page component
 */

import BlogLayout from "@/components/pages/blog/BlogLayout";
import WPUtils from "@/libs/classes/WPUtils";
import hephagency_config from "@/libs/hephagency_config";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import translations from "@/libs/translations/translations";

interface BlogProps{
    searchParams? : Promise<
    {
        page: number
    }>
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
        banner="https://picsum.photos/1920/1080?random=1"
        title={translations.blog_title[hephagency_config.language]}
        currentPage={page}
        totalPages={totalPages}
        articles={articles}
        />
    )
}