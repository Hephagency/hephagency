import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

export interface ArticleSectionInterface {
    title?: string;
    content: {
        text?: string;
        grow: number;
    };
    image : {
        src: string;
        alt: string;
        grow: number;
    };
    flexDirection: "row" | "col" | "row-reverse" | "col-reverse";
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
    language: LanguageType;
    categories: CategoryInterface[];
    sections: ArticleSectionInterface[];
}