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
    },
    {
        id: 4,
        created_at: "2023-04-01T08:00:00Z",
        updated_at: "2023-04-02T10:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=4",
        title: "Article Four",
        excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        slug: "article-four",
        categories: getRandomCategories(),
        author: "Michael Brown",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Four.",
                image: "https://picsum.photos/800/400?random=7"
            },
            {
                content: "This is the second section of Article Four.",
                image: "https://picsum.photos/800/400?random=8"
            }
        ]
    },
    {
        id: 5,
        created_at: "2023-05-01T07:00:00Z",
        updated_at: "2023-05-03T09:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=5",
        title: "Article Five",
        excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        slug: "article-five",
        categories: getRandomCategories(),
        author: "Emily Davis",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Five.",
                image: "https://picsum.photos/800/400?random=9"
            },
            {
                content: "This is the second section of Article Five.",
                image: "https://picsum.photos/800/400?random=10"
            }
        ]
    },
    {
        id: 6,
        created_at: "2023-06-01T06:00:00Z",
        updated_at: "2023-06-02T08:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=6",
        title: "Article Six",
        excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        slug: "article-six",
        categories: getRandomCategories(),
        author: "Chris Evans",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Six.",
                image: "https://picsum.photos/800/400?random=11"
            },
            {
                content: "This is the second section of Article Six.",
                image: "https://picsum.photos/800/400?random=12"
            }
        ]
    },
    {
        id: 7,
        created_at: "2023-07-01T05:00:00Z",
        updated_at: "2023-07-03T07:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=7",
        title: "Article Seven",
        excerpt: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        slug: "article-seven",
        categories: getRandomCategories(),
        author: "Laura Wilson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Seven.",
                image: "https://picsum.photos/800/400?random=13"
            },
            {
                content: "This is the second section of Article Seven.",
                image: "https://picsum.photos/800/400?random=14"
            }
        ]
    },
    {
        id: 8,
        created_at: "2023-09-21T10:00:00Z",
        updated_at: "2023-09-22T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=21",
        title: "Article Twenty-One",
        excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
        slug: "article-twenty-one",
        categories: getRandomCategories(),
        author: "Sophia Wilson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Twenty-One.",
                image: "https://picsum.photos/800/400?random=41"
            },
            {
                content: "This is the second section of Article Twenty-One.",
                image: "https://picsum.photos/800/400?random=42"
            }
        ]
    },
    {
        id: 9,
        created_at: "2023-08-01T10:00:00Z",
        updated_at: "2023-08-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=22",
        title: "Article Nine",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        slug: "article-nine",
        categories: getRandomCategories(),
        author: "John Doe",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Nine.",
                image: "https://picsum.photos/800/400?random=43"
            },
            {
                content: "This is the second section of Article Nine.",
                image: "https://picsum.photos/800/400?random=44"
            }
        ]
    },
    {
        id: 10,
        created_at: "2023-08-11T10:00:00Z",
        updated_at: "2023-08-12T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=23",
        title: "Article Ten",
        excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        slug: "article-ten",
        categories: getRandomCategories(),
        author: "Jane Smith",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Ten.",
                image: "https://picsum.photos/800/400?random=45"
            },
            {
                content: "This is the second section of Article Ten.",
                image: "https://picsum.photos/800/400?random=46"
            }
        ]
    },
    {
        id: 11,
        created_at: "2023-08-21T10:00:00Z",
        updated_at: "2023-08-22T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=24",
        title: "Article Eleven",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        slug: "article-eleven",
        categories: getRandomCategories(),
        author: "Alice Johnson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Eleven.",
                image: "https://picsum.photos/800/400?random=47"
            },
            {
                content: "This is the second section of Article Eleven.",
                image: "https://picsum.photos/800/400?random=48"
            }
        ]
    },
    {
        id: 12,
        created_at: "2023-09-01T10:00:00Z",
        updated_at: "2023-09-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=25",
        title: "Article Twelve",
        excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        slug: "article-twelve",
        categories: getRandomCategories(),
        author: "Michael Brown",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Twelve.",
                image: "https://picsum.photos/800/400?random=49"
            },
            {
                content: "This is the second section of Article Twelve.",
                image: "https://picsum.photos/800/400?random=50"
            }
        ]
    },
    {
        id: 13,
        created_at: "2023-09-11T10:00:00Z",
        updated_at: "2023-09-12T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=26",
        title: "Article Thirteen",
        excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        slug: "article-thirteen",
        categories: getRandomCategories(),
        author: "Emily Davis",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Thirteen.",
                image: "https://picsum.photos/800/400?random=51"
            },
            {
                content: "This is the second section of Article Thirteen.",
                image: "https://picsum.photos/800/400?random=52"
            }
        ]
    },
    {
        id: 14,
        created_at: "2023-09-21T10:00:00Z",
        updated_at: "2023-09-22T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=27",
        title: "Article Fourteen",
        excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        slug: "article-fourteen",
        categories: getRandomCategories(),
        author: "Chris Evans",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Fourteen.",
                image: "https://picsum.photos/800/400?random=53"
            },
            {
                content: "This is the second section of Article Fourteen.",
                image: "https://picsum.photos/800/400?random=54"
            }
        ]
    },
    {
        id: 15,
        created_at: "2023-10-01T10:00:00Z",
        updated_at: "2023-10-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=28",
        title: "Article Fifteen",
        excerpt: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        slug: "article-fifteen",
        categories: getRandomCategories(),
        author: "Laura Wilson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Fifteen.",
                image: "https://picsum.photos/800/400?random=55"
            },
            {
                content: "This is the second section of Article Fifteen.",
                image: "https://picsum.photos/800/400?random=56"
            }
        ]
    },
    {
        id: 16,
        created_at: "2023-10-11T10:00:00Z",
        updated_at: "2023-10-12T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=29",
        title: "Article Sixteen",
        excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
        slug: "article-sixteen",
        categories: getRandomCategories(),
        author: "Sophia Wilson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Sixteen.",
                image: "https://picsum.photos/800/400?random=57"
            },
            {
                content: "This is the second section of Article Sixteen.",
                image: "https://picsum.photos/800/400?random=58"
            }
        ]
    },
    {
        id: 17,
        created_at: "2023-10-21T10:00:00Z",
        updated_at: "2023-10-22T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=30",
        title: "Article Seventeen",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        slug: "article-seventeen",
        categories: getRandomCategories(),
        author: "John Doe",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Seventeen.",
                image: "https://picsum.photos/800/400?random=59"
            },
            {
                content: "This is the second section of Article Seventeen.",
                image: "https://picsum.photos/800/400?random=60"
            }
        ]
    },
    {
        id: 18,
        created_at: "2023-11-01T10:00:00Z",
        updated_at: "2023-11-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=31",
        title: "Article Eighteen",
        excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        slug: "article-eighteen",
        categories: getRandomCategories(),
        author: "Jane Smith",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Eighteen.",
                image: "https://picsum.photos/800/400?random=61"
            },
            {
                content: "This is the second section of Article Eighteen.",
                image: "https://picsum.photos/800/400?random=62"
            }
        ]
    },
    {
        id: 19,
        created_at: "2023-11-11T10:00:00Z",
        updated_at: "2023-11-12T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=32",
        title: "Article Nineteen",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        slug: "article-nineteen",
        categories: getRandomCategories(),
        author: "Alice Johnson",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Nineteen.",
                image: "https://picsum.photos/800/400?random=63"
            },
            {
                content: "This is the second section of Article Nineteen.",
                image: "https://picsum.photos/800/400?random=64"
            }
        ]
    },
    {
        id: 20,
        created_at: "2023-11-21T10:00:00Z",
        updated_at: "2023-11-22T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=33",
        title: "Article Twenty",
        excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        slug: "article-twenty",
        categories: getRandomCategories(),
        author: "Michael Brown",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Twenty.",
                image: "https://picsum.photos/800/400?random=65"
            },
            {
                content: "This is the second section of Article Twenty.",
                image: "https://picsum.photos/800/400?random=66"
            }
        ]
    },
    {
        id: 21,
        created_at: "2023-12-01T10:00:00Z",
        updated_at: "2023-12-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=34",
        title: "Article Twenty-One",
        excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        slug: "article-twenty-one",
        categories: getRandomCategories(),
        author: "Emily Davis",
        language: "fr",
        sections: [
            {
                content: "This is the first section of Article Twenty-One.",
                image: "https://picsum.photos/800/400?random=67"
            },
            {
                content: "This is the second section of Article Twenty-One.",
                image: "https://picsum.photos/800/400?random=68"
            }
        ]
    }
];

export default sampleArticles;