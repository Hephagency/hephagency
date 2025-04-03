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
        customer: "Acme Corporation"
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
        customer: "Acme Corporation"
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
        url: "https://example.com/project-three"
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
        customer: "TechStart Inc."
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
        url: "https://example.com/project-five"
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
        customer: "Global Solutions Ltd."
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
        url: "https://example.com/project-seven"
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
        customer: "Innovation Partners"
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
        url: "https://example.com/project-nine"
    }
];

export default sampleProjects;