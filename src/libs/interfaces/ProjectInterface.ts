import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

export interface ProjectSectionInterface{
    texts: string[];
    images: {
        src: string;
        alt: string;    
    }[];
    title?: string;
    type: "large-image" | "grid" | "one-third" | "centered-texts";
    mirror?: boolean;
}

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
    sections: ProjectSectionInterface[];
}