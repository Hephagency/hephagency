import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

interface ArticleSectionInterface {
    content?: string;
    image?: string;
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