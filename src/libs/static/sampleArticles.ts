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
        metadata: {
            title: "Article One - A Comprehensive Guide",
            description: "An in-depth look at the first article in our series"
        },
        sections: [
            {
                title: "Introduction",
                content: {
                    text: "This is the first section of Article One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/600?random=1",
                    alt: "Image for Article One section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Main Content",
                content: {
                    text: "This is the second section of Article One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/900/500?random=2",
                    alt: "Image for Article One section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Image Only Section",
                content: {
                    text: "",
                    grow: 0,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1200/800?random=3",
                    alt: "Image only section for Article One",
                    grow: 2
                },
                flexDirection: "row"
            },
            {
                title: "Text Only Section",
                content: {
                    text: "This section has only text content without an image. It demonstrates how the layout handles text-only sections.",
                    grow: 2,
                    fontSize: 20
                },
                image: {
                    src: "",
                    alt: "",
                    grow: 0
                },
                flexDirection: "row"
            },
            {
                title: "Balanced Section",
                content: {
                    text: "This section has balanced grow values for both text and image.",
                    grow: 1.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1000/700?random=5",
                    alt: "Balanced section image for Article One",
                    grow: 1.5
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Two - Exploring New Horizons",
            description: "A journey through the second article in our series"
        },
        sections: [
            {
                title: "Overview",
                content: {
                    text: "This is the first section of Article Two.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/700/800?random=3",
                    alt: "Image for Article Two section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Two.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1000/400?random=4",
                    alt: "Image for Article Two section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Text-Heavy Section",
                content: {
                    text: "This section has more text content with a higher grow value for text. It demonstrates how the layout handles sections with more emphasis on text content. The text can be quite lengthy to show how the layout adapts to longer content.",
                    grow: 2.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/600?random=7",
                    alt: "Text-heavy section image for Article Two",
                    grow: 0.5
                },
                flexDirection: "row"
            },
            {
                title: "Image-Heavy Section",
                content: {
                    text: "This section has more emphasis on the image.",
                    grow: 0.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1400/900?random=8",
                    alt: "Image-heavy section for Article Two",
                    grow: 2.5
                },
                flexDirection: "row-reverse"
            },
            {
                title: "No Image Section",
                content: {
                    text: "This section has no image, demonstrating how the layout handles text-only content with a higher grow value.",
                    grow: 3,
                    fontSize: 20
                },
                image: {
                    src: "",
                    alt: "",
                    grow: 0
                },
                flexDirection: "row"
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
        categories: getRandomCategories(),
        metadata: {
            title: "Article Three - Deep Dive Analysis",
            description: "An analytical perspective on our third article"
        },
        sections: [
            {
                title: "Background",
                content: {
                    text: "This is the first section of Article Three.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/600/900?random=5",
                    alt: "Image for Article Three section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Analysis",
                content: {
                    text: "This is the second section of Article Three.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1100/500?random=6",
                    alt: "Image for Article Three section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Full-Width Image",
                content: {
                    text: "",
                    grow: 0,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1600/900?random=9",
                    alt: "Full-width image for Article Three",
                    grow: 3
                },
                flexDirection: "row"
            },
            {
                title: "Text-Only Analysis",
                content: {
                    text: "This section contains only text content with a higher grow value. It demonstrates how the layout handles text-only sections with emphasis on the content. The text can be quite lengthy to show how the layout adapts to longer content.",
                    grow: 3,
                    fontSize: 20
                },
                image: {
                    src: "",
                    alt: "",
                    grow: 0
                },
                flexDirection: "row"
            },
            {
                title: "Balanced Conclusion",
                content: {
                    text: "This is the conclusion section with balanced grow values.",
                    grow: 1.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1000/700?random=11",
                    alt: "Conclusion image for Article Three",
                    grow: 1.5
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Four - Comprehensive Review",
            description: "A detailed review of our fourth article"
        },
        sections: [
            {
                title: "Key Points",
                content: {
                    text: "This is the first section of Article Four.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/750/750?random=7",
                    alt: "Image for Article Four section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Four.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1200/400?random=8",
                    alt: "Image for Article Four section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Image Gallery",
                content: {
                    text: "",
                    grow: 0,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1800/1200?random=13",
                    alt: "Gallery image for Article Four",
                    grow: 3
                },
                flexDirection: "row"
            },
            {
                title: "Detailed Analysis",
                content: {
                    text: "This section contains a detailed analysis with more emphasis on the text content. It demonstrates how the layout handles sections with more text and less emphasis on images.",
                    grow: 2.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/600?random=14",
                    alt: "Analysis image for Article Four",
                    grow: 0.5
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Conclusion",
                content: {
                    text: "This is the conclusion section with no image.",
                    grow: 3,
                    fontSize: 20
                },
                image: {
                    src: "",
                    alt: "",
                    grow: 0
                },
                flexDirection: "row"
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
        metadata: {
            title: "Article Five - Advanced Topics",
            description: "Exploring advanced concepts in our fifth article"
        },
        sections: [
            {
                title: "Executive Summary",
                content: {
                    text: "This is the first section of Article Five.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/850/650?random=9",
                    alt: "Image for Article Five section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Conclusion",
                content: {
                    text: "This is the second section of Article Five.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/950/550?random=10",
                    alt: "Image for Article Five section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            },
            {
                title: "Visual Data",
                content: {
                    text: "",
                    grow: 0,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2000/1000?random=15",
                    alt: "Data visualization for Article Five",
                    grow: 3
                },
                flexDirection: "row"
            },
            {
                title: "Text-Only Section",
                content: {
                    text: "This section contains only text content. It demonstrates how the layout handles text-only sections with a higher grow value for the text content.",
                    grow: 3,
                    fontSize: 20
                },
                image: {
                    src: "",
                    alt: "",
                    grow: 0
                },
                flexDirection: "row"
            },
            {
                title: "Balanced Section",
                content: {
                    text: "This section has balanced grow values for both text and image.",
                    grow: 1.5,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1000/700?random=17",
                    alt: "Balanced section image for Article Five",
                    grow: 1.5,
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Six - Special Edition",
            description: "A special edition of our sixth article"
        },
        sections: [
            {
                title: "Introduction",
                content: {
                    text: "This is the first section of Article Six.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/650/850?random=11",
                    alt: "Image for Article Six section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Six.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1300/450?random=12",
                    alt: "Image for Article Six section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Seven - Expert Analysis",
            description: "An expert analysis in our seventh article"
        },
        sections: [
            {
                title: "Overview",
                content: {
                    text: "This is the first section of Article Seven.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/700/700?random=13",
                    alt: "Image for Article Seven section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Future Implications",
                content: {
                    text: "This is the second section of Article Seven.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1400/500?random=14",
                    alt: "Image for Article Seven section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Twenty-One - Special Feature",
            description: "A special feature in our twenty-first article"
        },
        sections: [
            {
                title: "Background Information",
                content: {
                    text: "This is the first section of Article Twenty-One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/800?random=41",
                    alt: "Image for Article Twenty-One section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Twenty-One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1500/450?random=42",
                    alt: "Image for Article Twenty-One section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Nine - In-Depth Review",
            description: "An in-depth review of our ninth article"
        },
        sections: [
            {
                title: "Key Findings",
                content: {
                    text: "This is the first section of Article Nine.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/750/850?random=43",
                    alt: "Image for Article Nine section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Recommendations",
                content: {
                    text: "This is the second section of Article Nine.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1600/500?random=44",
                    alt: "Image for Article Nine section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Ten - Comprehensive Guide",
            description: "A comprehensive guide in our tenth article"
        },
        sections: [
            {
                title: "Introduction",
                content: {
                    text: "This is the first section of Article Ten.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/600/900?random=45",
                    alt: "Image for Article Ten section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Ten.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1700/450?random=46",
                    alt: "Image for Article Ten section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Eleven - Expert Analysis",
            description: "An expert analysis in our eleventh article"
        },
        sections: [
            {
                title: "Executive Summary",
                content: {
                    text: "This is the first section of Article Eleven.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/850/750?random=47",
                    alt: "Image for Article Eleven section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Conclusion",
                content: {
                    text: "This is the second section of Article Eleven.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1800/500?random=48",
                    alt: "Image for Article Eleven section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Twelve - Special Edition",
            description: "A special edition of our twelfth article"
        },
        sections: [
            {
                title: "Overview",
                content: {
                    text: "This is the first section of Article Twelve.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/700/900?random=49",
                    alt: "Image for Article Twelve section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Twelve.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/1900/450?random=50",
                    alt: "Image for Article Twelve section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Thirteen - In-Depth Analysis",
            description: "An in-depth analysis of our thirteenth article"
        },
        sections: [
            {
                title: "Background",
                content: {
                    text: "This is the first section of Article Thirteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/700?random=51",
                    alt: "Image for Article Thirteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Analysis",
                content: {
                    text: "This is the second section of Article Thirteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2000/450?random=52",
                    alt: "Image for Article Thirteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Fourteen - Expert Review",
            description: "An expert review of our fourteenth article"
        },
        sections: [
            {
                title: "Key Points",
                content: {
                    text: "This is the first section of Article Fourteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/750/800?random=53",
                    alt: "Image for Article Fourteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Fourteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2100/450?random=54",
                    alt: "Image for Article Fourteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Fifteen - Comprehensive Analysis",
            description: "A comprehensive analysis of our fifteenth article"
        },
        sections: [
            {
                title: "Introduction",
                content: {
                    text: "This is the first section of Article Fifteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/900/650?random=55",
                    alt: "Image for Article Fifteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Main Content",
                content: {
                    text: "This is the second section of Article Fifteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2200/450?random=56",
                    alt: "Image for Article Fifteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Sixteen - Special Feature",
            description: "A special feature in our sixteenth article"
        },
        sections: [
            {
                title: "Overview",
                content: {
                    text: "This is the first section of Article Sixteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/650/850?random=57",
                    alt: "Image for Article Sixteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Sixteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2300/450?random=58",
                    alt: "Image for Article Sixteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Seventeen - Expert Review",
            description: "An expert review of our seventeenth article"
        },
        sections: [
            {
                title: "Background",
                content: {
                    text: "This is the first section of Article Seventeen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/850/750?random=59",
                    alt: "Image for Article Seventeen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Analysis",
                content: {
                    text: "This is the second section of Article Seventeen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2400/450?random=60",
                    alt: "Image for Article Seventeen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Eighteen - Comprehensive Guide",
            description: "A comprehensive guide in our eighteenth article"
        },
        sections: [
            {
                title: "Key Points",
                content: {
                    text: "This is the first section of Article Eighteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/700/900?random=61",
                    alt: "Image for Article Eighteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Eighteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2500/450?random=62",
                    alt: "Image for Article Eighteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Nineteen - Expert Analysis",
            description: "An expert analysis in our nineteenth article"
        },
        sections: [
            {
                title: "Executive Summary",
                content: {
                    text: "This is the first section of Article Nineteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/800/800?random=63",
                    alt: "Image for Article Nineteen section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Conclusion",
                content: {
                    text: "This is the second section of Article Nineteen.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2600/450?random=64",
                    alt: "Image for Article Nineteen section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Twenty - Special Edition",
            description: "A special edition of our twentieth article"
        },
        sections: [
            {
                title: "Introduction",
                content: {
                    text: "This is the first section of Article Twenty.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/750/850?random=65",
                    alt: "Image for Article Twenty section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                content: {
                    text: "This is the second section of Article Twenty.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2700/450?random=66",
                    alt: "Image for Article Twenty section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
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
        metadata: {
            title: "Article Twenty-One - In-Depth Review",
            description: "An in-depth review of our twenty-first article"
        },
        sections: [
            {
                title: "Overview",
                content: {
                    text: "This is the first section of Article Twenty-One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/900/700?random=67",
                    alt: "Image for Article Twenty-One section 1",
                    grow: 1
                },
                flexDirection: "row"
            },
            {
                title: "Future Implications",
                content: {
                    text: "This is the second section of Article Twenty-One.",
                    grow: 1,
                    fontSize: 20
                },
                image: {
                    src: "https://picsum.photos/2800/450?random=68",
                    alt: "Image for Article Twenty-One section 2",
                    grow: 1
                },
                flexDirection: "row-reverse"
            }
        ]
    }
];

export default sampleArticles;