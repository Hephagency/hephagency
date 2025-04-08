import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

export type ArticleSectionFlexDirection = "row" | "col" | "row-reverse" | "col-reverse";
export interface ArticleSectionInterface {
    title?: string;
    content: {
        text?: string;
        grow: number;
        fontSize: number;
        maxWidth?: number;
    };
    image : {
        src: string;
        alt: string;
        grow: number;
        maxWidth?: number;
    };
    flexDirection: ArticleSectionFlexDirection;
}

export default interface ArticleInterface{
    id: number;
    created_at: string;
    updated_at: string;
    thumbnail: string;
    title: string;
    excerpt: string;
    slug: string;
    author: string;
    categories: CategoryInterface[];
    sections: ArticleSectionInterface[];
    metadata: {
        title: string;
        description: string;
    }
}