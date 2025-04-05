/**
 * A React component that displays the blog page heading
 */

interface BlogHeadingProps {
    banner: string;
    title: string;
}

export default function BlogHeading({banner, title}: BlogHeadingProps) {
    return (
        <section className="h-dvh flex flex-col justify-center items-center px-4 md:px-6 xl:px-7.5 mb-7 xl:pt-16">
            <div className="flex flex-col sticky top-1/8 gap-6 md:gap-7 w-full xl:gap-4">
                <img
                    src={banner}
                    alt={title}
                    className="aspect-square w-full object-cover md:aspect-7/5 xl:aspect-3/1"
                />
                <h1 className="h4 xl:h2">
                    {title}
                </h1>
            </div>
        </section>
    )
}
