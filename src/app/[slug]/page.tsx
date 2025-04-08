/**
 * A React component that displays a page from the WordPress database
 */

import WPUtils from "@/libs/classes/WPUtils";
import PageInterface from "@/libs/interfaces/PageInterface";
import { notFound } from "next/navigation";
import "./style.css";

interface PageProps{
    params: Promise<{slug: string}>
}

export async function generateStaticParams(){
    let pages: PageInterface[] = [];
    try{
        pages = await WPUtils.getPages();
    }catch(error){
       notFound();
    }
    return pages.map((page) => ({
        slug: page.slug
    }));
}

export async function generateMetadata({params} : PageProps){
    const slug = (await params).slug;
    let page: PageInterface | null = null;
    try{
        page = await WPUtils.getPageBySlug(slug);
        if(!page){
            notFound();
        }
    }catch(error){
        notFound();
    }
    return {
        title: page.metadata.title,
        description: page.metadata.description
    }
}

export default async function Page({params} : PageProps){
    const slug = (await params).slug;
    let page: PageInterface | null = null;
    try{
        page = await WPUtils.getPageBySlug(slug);
        if(!page){
            notFound();
        }
    }catch(error){
        notFound();
    }

    return (
        <div className="px-4 md:px-6 xl:px-7.5 pt-28 md:pt-36 xl:pt-60 xl:flex xl:gap-24">
            <div className="xl:grow xl:basis-0">
                <h1 className="h5 md:h3 xl:h1 xl:sticky xl:top-1/6">{page.title}</h1>
            </div>
            <div className="xl:grow xl:basis-0">
                <div className="wp-content" dangerouslySetInnerHTML={{__html: page.content}} />
            </div>
        </div>
    )
}