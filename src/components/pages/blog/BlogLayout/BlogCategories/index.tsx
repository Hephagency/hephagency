import HephagencySmallButtonLink from "@/components/global/buttons/HephagencySmallButtonLink";
import CategoryInterface from "../../../../../libs/interfaces/CategoryInterface";
import clsx from "clsx";
/**
 * A Component to display the blog categories
 */


interface BlogCategoriesProps {
    categories: CategoryInterface[];
    className?: string;
    isProjects?: boolean;
    hideLoader?: boolean;
}

export default function BlogCategories({ categories, className, isProjects = false, hideLoader = false }: BlogCategoriesProps) {
    return (
        <ul className={clsx(
            "flex gap-5 flex-wrap",
            className
        )}>
            {categories.map((category) => (
                <li key={category.id}>
                    <HephagencySmallButtonLink
                    scroll={false}
                    href={isProjects ? `/projects/${category.slug}` : `/blog/${category.slug}`}
                    hideLoader={hideLoader}
                    >
                        {category.label}
                    </HephagencySmallButtonLink>
                </li>
            ))}
        </ul>
    )
}