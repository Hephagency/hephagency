import ArticleInterface from "../interfaces/ArticleInterface";
import sampleCategories from "./sampleCategories";

/**
 * This function returns between 1 and 2 random categories from the sampleCategories array.
 */

function getRandomCategories() {
    const randomCount = Math.floor(Math.random() * 2) + 1; // Random number between 1 and 2
    const shuffledCategories = sampleCategories.sort(() => 0.5 - Math.random()); // Shuffle the categories
    return shuffledCategories.slice(0, randomCount); // Return the first n categories
}

const sampleArticles: ArticleInterface[] = [
    {
        id: 1,
        created_at: "2023-01-01T10:00:00Z",
        updated_at: "2023-01-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=1",
        title: "Article One",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        slug: "article-one",
        categories: getRandomCategories(),
        author: "John Doe",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article One.",
                image: "https://picsum.photos/800/400?random=1"
            },
            {
                content: "This is the second section of Article One.",
                image: "https://picsum.photos/800/400?random=2"
            }
        ]
    },
    {
        id: 2,
        created_at: "2023-02-01T11:00:00Z",
        updated_at: "2023-02-03T13:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=2",
        title: "Article Two",
        excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        slug: "article-two",
        categories: getRandomCategories(),
        author: "Jane Smith",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Two.",
                image: "https://picsum.photos/800/400?random=3"
            },
            {
                content: "This is the second section of Article Two.",
                image: "https://picsum.photos/800/400?random=4"
            }
        ]
    },
    {
        id: 3,
        created_at: "2023-03-01T09:00:00Z",
        updated_at: "2023-03-04T14:00:00Z",
        author: "Alice Johnson",
        thumbnail: "https://picsum.photos/1280/720?random=3",
        title: "Article Three",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        slug: "article-three",
        language: "fr",
        categories: getRandomCategories(),
        sections: [
            {
                content: "This is the first section of Article Three.",
                image: "https://picsum.photos/800/400?random=5"
            },
            {
                content: "This is the second section of Article Three.",
                image: "https://picsum.photos/800/400?random=6"
            }
        ]
    }
];

export default sampleArticles;