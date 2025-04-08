import ProjectInterface from "../interfaces/ProjectInterface";
import sampleCategories from "./sampleCategories";

/**
 * This function returns between 1 and 2 random categories from the sampleCategories array.
 */

function getRandomCategories() {
    const randomCount = Math.floor(Math.random() * 2) + 1; // Random number between 1 and 2
    const shuffledCategories = sampleCategories.sort(() => 0.5 - Math.random()); // Shuffle the categories
    return shuffledCategories.slice(0, randomCount); // Return the first n categories
}

const sampleProjects : ProjectInterface[] = [
    {
        id: 1,
        created_at: "2023-01-01T10:00:00Z",
        updated_at: "2023-01-02T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=1",
        title: "Project One",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        slug: "project-one",
        heading_image: "https://picsum.photos/1920/1080?random=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://example.com/project-one",
        customer: "Acme Corporation",
        sections: [
            {
                type: "large-image",
                title: "Project Overview",
                images: [{
                    src: "https://picsum.photos/1920/1080?random=11",
                    alt: "Project showcase image"
                }],
                texts: ["A stunning showcase of our work with Acme Corporation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]
            },
            {
                type: "centered-texts",
                mirror: true,
                texts: [
                    "Our innovative solutions have transformed the way Acme Corporation handles their core business processes, leading to a 45% increase in operational efficiency and significant cost savings across multiple departments.",
                    "By implementing cutting-edge technology solutions, including AI-powered analytics and cloud-based infrastructure, we've enabled real-time decision making and seamless scalability for future growth.",
                    "The exceptional results achieved through this project include a 200% ROI within the first year, improved customer satisfaction scores, and recognition as an industry leader in digital transformation."
                ],
                title: "Key Achievements",
                images: []
            },
            {
                type: "grid",
                title: "Key Features",
                images: [
                    {
                        src: "https://picsum.photos/800/600?random=12",
                        alt: "Feature 1 image"
                    },
                    {
                        src: "https://picsum.photos/600/1200?random=13",
                        alt: "Feature 2 image"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=14",
                        alt: "Feature 3 image"
                    }
                ],
                mirror: true,
                texts: ["Our innovative feature set includes advanced data visualization capabilities, providing real-time insights and analytics", "The integrated workflow management system streamlines processes and enhances team collaboration", "State-of-the-art security protocols ensure data protection and compliance with industry standards"]
            },
            {
                type: "one-third",
                images: [{
                    src: "https://picsum.photos/800/600?random=15",
                    alt: "Project phases image"
                },
                {
                    src: "https://picsum.photos/800/600?random=16", 
                    alt: "Development process image"
                },
                {
                    src: "https://picsum.photos/800/600?random=17",
                    alt: "Launch phase image"
                },
                {
                    src: "https://picsum.photos/800/600?random=18",
                    alt: "Quality assurance image" 
                },
                {
                    src: "https://picsum.photos/800/600?random=19",
                    alt: "Client feedback image"
                }],
                mirror: true,
                texts: [
                    "Our comprehensive planning phase involves thorough requirements gathering, stakeholder interviews, and detailed project scoping to ensure alignment with business objectives.",
                    "During development, our expert team leverages cutting-edge technologies and agile methodologies to build robust, scalable solutions that exceed expectations.", 
                    "The launch phase encompasses rigorous testing, seamless deployment, and dedicated post-launch support to ensure optimal performance and user satisfaction.",
                    "Our rigorous quality assurance process includes automated testing, performance optimization, and security audits to deliver a flawless end product.",
                    "We maintain open communication channels with clients throughout the project lifecycle, incorporating feedback and making iterative improvements to exceed expectations."
                ]
            }
        ]
    },
    {
        id: 2,
        created_at: "2023-02-01T11:00:00Z",
        updated_at: "2023-02-03T13:00:00Z",
        thumbnail: "https://picsum.photos/1280/900?random=2",
        title: "Project Two",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        slug: "project-two",
        heading_image: "https://picsum.photos/1920/1080?random=2",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        customer: "Acme Corporation",
        sections: [
            {
                type: "one-third",
                images: [{
                    src: "https://picsum.photos/800/600?random=21",
                    alt: "Strategic planning image"
                }],
                texts: ["Strategic Planning", "Implementation", "Results"],
                mirror: true
            },
            {
                type: "centered-texts",
                texts: ["Client Success Story", "Transformative Impact", "Industry Recognition"],
                title: "Project Highlights",
                images: []
            }
        ]
    },
    {
        id: 3,
        created_at: "2023-03-01T09:00:00Z",
        updated_at: "2023-03-04T14:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=3",
        title: "Project Three",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        slug: "project-three",
        heading_image: "https://picsum.photos/1920/1080?random=3",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "https://example.com/project-three",
        sections: [
            {
                type: "grid",
                images: [
                    {
                        src: "https://picsum.photos/800/600?random=31",
                        alt: "Phase 1 image"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=32",
                        alt: "Phase 2 image"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=33",
                        alt: "Phase 3 image"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=34",
                        alt: "Final result image"
                    }
                ],
                texts: ["Phase 1", "Phase 2", "Phase 3", "Final Result"],
                mirror: true
            },
            {
                type: "large-image",
                images: [{
                    src: "https://picsum.photos/1920/1080?random=35",
                    alt: "Final product showcase"
                }],
                texts: ["The final product in action"]
            }
        ]
    },
    {
        id: 4,
        created_at: "2023-04-01T08:00:00Z",
        updated_at: "2023-04-02T10:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=4",
        title: "Project Four",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        slug: "project-four",
        heading_image: "https://picsum.photos/1920/1080?random=4",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        customer: "TechStart Inc.",
        sections: [
            {
                type: "centered-texts",
                texts: ["Innovation", "Technology", "Growth"],
                title: "Core Values",
                images: []
            },
            {
                type: "one-third",
                images: [{
                    src: "https://picsum.photos/800/600?random=41",
                    alt: "Project development image"
                }],
                texts: ["Planning", "Development", "Launch"],
                mirror: true
            }
        ]
    },
    {
        id: 5,
        created_at: "2023-05-01T07:00:00Z",
        updated_at: "2023-05-03T11:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=5",
        title: "Project Five",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        slug: "project-five",
        heading_image: "https://picsum.photos/1920/1080?random=5",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
        url: "https://example.com/project-five",
        sections: [
            {
                type: "large-image",
                images: [{
                    src: "https://picsum.photos/1920/1080?random=51",
                    alt: "Project overview image"
                }],
                texts: ["Project Overview"]
            },
            {
                type: "grid",
                images: [
                    {
                        src: "https://picsum.photos/800/600?random=52",
                        alt: "Before implementation"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=53",
                        alt: "After implementation"
                    }
                ],
                texts: ["Before", "After"],
                mirror: true
            }
        ]
    },
    {
        id: 6,
        created_at: "2023-06-01T06:00:00Z",
        updated_at: "2023-06-04T12:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=6",
        title: "Project Six",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
        slug: "project-six",
        heading_image: "https://picsum.photos/1920/1080?random=6",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        customer: "Global Solutions Ltd.",
        sections: [
            {
                type: "centered-texts",
                texts: ["Global Reach", "Local Impact", "Sustainable Solutions"],
                title: "Project Scope",
                images: []
            },
            {
                type: "one-third",
                images: [{
                    src: "https://picsum.photos/800/600?random=61",
                    alt: "Strategy execution image"
                }],
                texts: ["Strategy", "Execution", "Results"],
                mirror: true
            }
        ]
    },
    {
        id: 7,
        created_at: "2023-07-01T05:00:00Z",
        updated_at: "2023-07-02T09:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=7",
        title: "Project Seven",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        slug: "project-seven",
        heading_image: "https://picsum.photos/1920/1080?random=7",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        url: "https://example.com/project-seven",
        sections: [
            {
                type: "grid",
                images: [
                    {
                        src: "https://picsum.photos/800/600?random=71",
                        alt: "Design phase"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=72",
                        alt: "Development phase"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=73",
                        alt: "Deployment phase"
                    }
                ],
                texts: ["Design", "Development", "Deployment"],
                mirror: true
            },
            {
                type: "large-image",
                images: [{
                    src: "https://picsum.photos/1920/1080?random=74",
                    alt: "Final implementation showcase"
                }],
                texts: ["Final Implementation"]
            }
        ]
    },
    {
        id: 8,
        created_at: "2023-08-01T04:00:00Z",
        updated_at: "2023-08-03T08:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=8",
        title: "Project Eight",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        slug: "project-eight",
        heading_image: "https://picsum.photos/1920/1080?random=8",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        customer: "Innovation Partners",
        sections: [
            {
                type: "centered-texts",
                texts: ["Innovation", "Partnership", "Success"],
                title: "Project Highlights",
                images: []
            },
            {
                type: "one-third",
                images: [{
                    src: "https://picsum.photos/800/600?random=81",
                    alt: "Project planning image"
                }],
                texts: ["Planning", "Development", "Results"],
                mirror: true
            }
        ]
    },
    {
        id: 9,
        created_at: "2023-09-01T03:00:00Z",
        updated_at: "2023-09-04T07:00:00Z",
        thumbnail: "https://picsum.photos/1280/720?random=9",
        title: "Project Nine",
        language: "fr",
        categories: getRandomCategories(),
        excerpt: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        slug: "project-nine",
        heading_image: "https://picsum.photos/1920/1080?random=9",
        description: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        url: "https://example.com/project-nine",
        sections: [
            {
                type: "large-image",
                images: [{
                    src: "https://picsum.photos/1920/1080?random=91",
                    alt: "Project overview image"
                }],
                texts: ["Project Overview"]
            },
            {
                type: "grid",
                images: [
                    {
                        src: "https://picsum.photos/800/600?random=92",
                        alt: "Phase 1 implementation"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=93",
                        alt: "Phase 2 implementation"
                    },
                    {
                        src: "https://picsum.photos/800/600?random=94",
                        alt: "Phase 3 implementation"
                    }
                ],
                texts: ["Phase 1", "Phase 2", "Phase 3"],
                mirror: true
            }
        ]
    }
];

export default sampleProjects;