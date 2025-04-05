/**
 * A Component to display a category page of the blog
 */

import BlogLayout from "@/components/pages/blog/BlogLayout";
import WPUtils from "@/libs/classes/WPUtils";
import hephagency_config from "@/libs/hephagency_config";
import ArticleInterface from "@/libs/interfaces/ArticleInterface";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import translations from "@/libs/translations/translations";
import { ResolvingMetadata } from "next";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogCategoryProps {
    params: Promise<{
        category: string
    }>;
    searchParams?: Promise<{
        page: number
    }>;
}

export async function generateStaticParams(){
    try {
        const categories = await WPUtils.getCategories();
        return categories.map((category : CategoryInterface) => ({
            category: category.slug
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata(
    {params} : BlogCategoryProps,
    parent: ResolvingMetadata
) : Promise<Metadata>{
    const {category} = await params;
    let find;
    try {
        find = await WPUtils.getCategoryBySlug(category);
    } catch(error){
        notFound();
    }
    return {
        title: find.label,
        description: find.description
    }    

}

export default async function BlogCategory({ params, searchParams }: BlogCategoryProps) {
    const { category } = await params;
    let find;
    let articles : ArticleInterface[] = [];
    let categories : CategoryInterface[] = [];
    let totalPages: number = 0;
    let page : number = 1;
    
    try {
        find = await WPUtils.getCategoryBySlug(category);
        if (!find) {
            notFound();
        }
        const search = await searchParams;
        const page = search?.page ? Number(search.page) : 1;
        const limit = 7;
        
        articles = await WPUtils.getArticles([find.id], limit, page, (total) => totalPages = total);
        categories = [
            {
                id: -1,
                label: translations.blog_all[hephagency_config.language],
                slug:"",
                thumbnail: "https://picsum.photos/1920/1080?random=1",
                description: ""
            },
            ...(await WPUtils.getCategories()).filter(cat=>cat.slug !== category)
        ];
    } catch (error) {
        notFound();
    }

    return (
        <BlogLayout
            categories={categories}
            banner={find.thumbnail}
            title={find.label}
            currentPage={page}
            totalPages={totalPages}
            articles={articles}
            category={find}
        />
    )
}