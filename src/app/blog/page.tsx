/**
 * Blog page component
 */

import BlogLayout from "@/components/pages/blog/BlogLayout";
import hephagency_config from "@/libs/hephagency_config";
import sampleArticles from "@/libs/static/sampleArticles";
import sampleCategories from "@/libs/static/sampleCategories";
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
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(sampleArticles.length / limit);
    const articles = sampleArticles.slice(skip, skip + limit);
    const categories = sampleCategories;
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