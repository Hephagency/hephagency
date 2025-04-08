/**
 * A Component to display the blog pagination
 */

import ArrowButtonLink from "@/components/global/buttons/ArrowButtonLink";
import CategoryInterface from "@/libs/interfaces/CategoryInterface";
import clsx from "clsx";

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    category?: CategoryInterface;
}

export default function BlogPagination({
    currentPage,
    totalPages,
    category
    
}: BlogPaginationProps) {
   function prevPageUrl(){
    const params = new URLSearchParams();
    const page = Math.max(currentPage - 1, 1);
    params.set("page", page.toString());
    const baseUrl = category ? `/blog/${category.slug}` : "/blog";
    return `${baseUrl}?${params.toString()}`;
   }

    function nextPageUrl(){
     const params = new URLSearchParams();
     const page = Math.min(currentPage + 1, totalPages);
     params.set("page", page.toString());
     const baseUrl = category ? `/blog/${category.slug}` : "/blog";
     return `${baseUrl}?${params.toString()}`;
    }

    return (
        <div className="flex justify-end gap-2.5">
            <ArrowButtonLink
            href={prevPageUrl()}
            side="left"
            scroll={false}
            linkClassName={clsx(
                currentPage === 1 && "opacity-50 pointer-events-none"
            )}
            />
            <ArrowButtonLink
            href={nextPageUrl()}
            side="right"
            scroll={false}
            linkClassName={clsx(
                currentPage === totalPages && "opacity-50 pointer-events-none"
            )}
            />
        </div>
    )
}