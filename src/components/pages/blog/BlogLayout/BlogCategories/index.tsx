import HephagencySmallButtonLink from "@/components/global/buttons/HephagencySmallButtonLink";
import CategoryInterface from "../../../../../libs/interfaces/CategoryInterface";
import clsx from "clsx";
/**
 * A Component to display the blog categories
 */


interface BlogCategoriesProps {
    categories: CategoryInterface[];
    className?: string;
}

export default function BlogCategories({ categories, className }: BlogCategoriesProps) {
    return (
        <ul className={clsx(
            "flex gap-5 flex-wrap",
            className
        )}>
            {categories.map((category) => (
                <li key={category.id}>
                    <HephagencySmallButtonLink
                    scroll={false}
                    href={`/blog/${category.slug}`}
                    >
                        {category.label}
                    </HephagencySmallButtonLink>
                </li>
            ))}
        </ul>
    )
}