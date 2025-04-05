import LanguageType from "../types/LanguageType";
import CategoryInterface from "./CategoryInterface";

export type ProjectSectionType = "large-image" | "grid" | "one-third" | "centered-texts";

export interface ProjectSectionInterface{
    texts: string[];
    images: {
        src: string;
        alt: string;    
    }[];
    title?: string;
    type: ProjectSectionType;
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
    slug: string;
    heading_image: string;
    description: string;
    url?: string;
    customer?: string;
    sections: ProjectSectionInterface[];
    metadata: {
        title: string;
        description: string;
    }
}