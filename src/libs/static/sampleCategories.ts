import CategoryInterface from "../interfaces/CategoryInterface";

const sampleCategories : CategoryInterface[] = [
    {
        id: 1,
        label: "Web Development",
        slug: "web-development",
        thumbnail: "https://picsum.photos/1280/720?random=1"
    },
    {
        id: 2,
        label: "UX/UI",
        slug: "ux-ui",
        thumbnail: "https://picsum.photos/1280/720?random=2"
    },
    {
        id: 3,
        label: "SEO",
        slug: "seo",
        thumbnail: "https://picsum.photos/1280/720?random=3"
    },
    {
        id: 4,
        label: "Photography",
        slug: "photography",
        thumbnail: "https://picsum.photos/1280/720?random=4"
    }
]

export default sampleCategories;