import CategoryInterface from "../interfaces/CategoryInterface";

const sampleCategories : CategoryInterface[] = [
    {
        id: 1,
        label: "Web Development",
        slug: "web-development",
        thumbnail: "https://picsum.photos/1280/720?random=1",
        description: "Web development is the process of building websites and web applications. It includes front-end development, back-end development, and database management."
    },
    {
        id: 2,
        label: "UX/UI",
        slug: "ux-ui",
        thumbnail: "https://picsum.photos/1280/720?random=2",
        description: "UX/UI design focuses on creating intuitive and user-friendly interfaces for websites and applications."
    },
    {
        id: 3,
        label: "SEO",
        slug: "seo",
        thumbnail: "https://picsum.photos/1280/720?random=3",
        description: "SEO is the practice of optimizing websites and content to improve search engine rankings and visibility."
    },
    {
        id: 4,
        label: "Photography",
        slug: "photography",
        thumbnail: "https://picsum.photos/1280/720?random=4",
        description: "Photography is the art of capturing images through light and camera technology."
    }
]

export default sampleCategories;