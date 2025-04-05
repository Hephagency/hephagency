/**
 * A React component that displays a loading state for the blog page
 */

import BlogHeading from "@/components/pages/blog/BlogLayout/BlogHeading";
import CircleLoader from "@/components/global/CircleLoader";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";

export default function Loading(){
    return (
        <div>
            <BlogHeading
            banner="https://picsum.photos/1920/1080?random=1"
            title={translations.loading[hephagency_config.language]}
            />
            <div className="flex justify-start max-w-dvw overflow-hidden">
                <CircleLoader />
            </div>
        </div>
    )
}
