import HephagencySmallButtonLink from "@/components/global/buttons/HephagencySmallButtonLink";
import CategoryInterface from "../../../../../libs/interfaces/CategoryInterface";
/**
 * A Component to display the blog categories
 */


interface BlogCategoriesProps {
    categories: CategoryInterface[];
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
    return (
        <ul className="flex gap-5 flex-wrap">
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