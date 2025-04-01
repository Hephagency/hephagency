/**
 * A component to display the projects categories
 */

import HephagencySmallButtonLink from "@/components/global/buttons/HephagencySmallButtonLink";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";

interface ProjectsCategoriesProps {
    categories: CategoryInterface[];
}

export default function ProjectsCategories({ categories }: ProjectsCategoriesProps) {
    return (
        <ul className="flex gap-x-5 flex-wrap gap-y-2.5 xl:grid xl:grid-cols-3 xl:w-fit">
            {categories.map((category) => (
                <li key={category.id}>
                    <HephagencySmallButtonLink
                    scroll={false}
                    href={`/projects/${category.slug}`}
                    >
                        {category.label}
                    </HephagencySmallButtonLink>
                </li>
            ))}
        </ul>
    )
}