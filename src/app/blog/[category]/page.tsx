/**
 * A Component to display a category page of the blog
 */

import BlogLayout from "@/components/pages/blog/BlogLayout";
import hephagency_config from "@/libs/hephagency_config";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import sampleArticles from "@/libs/static/sampleArticles";
import sampleCategories from "@/libs/static/sampleCategories";
import translations from "@/libs/translations/translations";
import { notFound } from "next/navigation";

interface BlogCategoryProps {
    params: Promise<{
        category: string
    }>;
    searchParams?: Promise<{
        page: number
    }>;
}

export default async function BlogCategory({ params, searchParams }: BlogCategoryProps) {
    const { category } = await params;
    const find = sampleCategories.find(cat => cat.slug === category);
    if (!find) {
        notFound();
    }
    const search = await searchParams;
    const page = search?.page ? Number(search.page) : 1;
    const title = find.label;
    const limit = 7;
    const skip = (page - 1) * limit;
    const articles = sampleArticles.filter(article=>article.categories.some(cat=>cat.slug === category));
    const totalPages = Math.ceil(articles.length / limit);
    const paginatedArticles = articles.slice(skip, skip + limit);
    const categories : CategoryInterface[] = [
        {
            id: -1,
            label: translations.blog_all[hephagency_config.language],
            slug:"",
            thumbnail: "https://picsum.photos/1920/1080?random=1",
        },
        ...sampleCategories.filter(cat=>cat.slug !== category)
    ]

    return (
        <BlogLayout
            categories={categories}
            banner={find.thumbnail}
            title={title}
            currentPage={page}
            totalPages={totalPages}
            articles={paginatedArticles}
            category={find}
        />
    )
}