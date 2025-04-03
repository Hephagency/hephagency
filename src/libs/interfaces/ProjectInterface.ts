import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

export default interface ProjectInterface{
    id: number;
    created_at: string;
    updated_at: string;
    thumbnail: string;
    title: string;
    excerpt: string;
    categories: CategoryInterface[];
    language: LanguageType;
    slug: string;
    heading_image: string;
    description: string;
    url?: string;
    customer?: string;
}