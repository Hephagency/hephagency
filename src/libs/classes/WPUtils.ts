import hephagency_config from "../hephagency_config";
import ArticleInterface, { ArticleSectionFlexDirection, ArticleSectionInterface } from "../interfaces/ArticleInterface";
import CategoryInterface from "../interfaces/CategoryInterface";
import PageInterface from "../interfaces/PageInterface";
import ProjectInterface, { ProjectSectionInterface, ProjectSectionType } from "../interfaces/ProjectInterface";

interface WPMediaInterface{
    id: number;
    source_url: string;
    alt_text: string;
}

interface ACFProjectSectionInterface{
    type: ProjectSectionType;
    mirror: boolean;
    title: string;
    texts: {
        content: string;
    }[];
    images: number[];
}

interface ACFArticleSectionInterface{
    title?: string;
    content: {
        text?: string;
        grow: number;
        font_size: number;
        max_width?: number;
    };
    image : {
        picture: number;
        grow: number;
        max_width?: number;
    };
    flex_direction: ArticleSectionFlexDirection;
}

export default class WPUtils {
    //The base url of the api
    static baseUrl = hephagency_config.apiUrl;
    static contactFormId = hephagency_config.contactFormId;
    static contactFormUrl = hephagency_config.contactFormUrl;
    static projectsPostType = "project";
    static articlesPostType = "posts";
    static pagesPostType = "pages";

    static getCategories(){
        return new Promise<CategoryInterface[]>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/categories`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 3600
                    }
                });
                const data = await response.json();
                const res : CategoryInterface[] = [];
                for(const wpCategory of data){
                    res.push({
                        id: wpCategory.id,
                        label: wpCategory.name,
                        slug: wpCategory.slug,
                        thumbnail: (await this.getMedia(wpCategory.acf.thumbnail))?.source_url,
                        description: wpCategory.description
                    })
                }
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }

    static getMedia(mediaId : number){
        return new Promise<WPMediaInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/media/${mediaId}`,{
                    cache: "force-cache",
                    next : {
                        revalidate: 86400
                    }
                });
                const data = await response.json();
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    }

    static getProjects(allowedCategories? : number[], limit? : number){
        return new Promise<ProjectInterface[]>(async (resolve, reject) => {
            try {
                const categories = allowedCategories ?? (await this.getCategories()).map((category)=>category.id);
                const response = await fetch(`${this.baseUrl}/${this.projectsPostType}?categories=${categories.join(",")}${limit ? `&per_page=${limit}` : ""}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 300
                    }
                });
                const data = await response.json();
                const res : ProjectInterface[] = [];
                for(const wpProject of data){
                    res.push({
                        id: wpProject.id,
                        title: this.removeHTMLTags(wpProject.title.rendered),
                        slug: wpProject.slug,
                        thumbnail: (await this.getMedia(wpProject.featured_media))?.source_url,
                        created_at: wpProject.date,
                        updated_at: wpProject.modified,
                        categories: await Promise.all(wpProject.categories.map(async (categoryId : number) => await this.getCategoryById(categoryId))),
                        excerpt: this.removeHTMLTags(wpProject.excerpt.rendered),
                        description: wpProject.content.rendered,
                        url: wpProject.acf.url,
                        customer: wpProject.acf.customer,
                        sections: [],
                        heading_image: (await this.getMedia(wpProject.acf.heading_image))?.source_url,
                        metadata: {
                            title: wpProject.yoast_head_json.title,
                            description: wpProject.yoast_head_json.description
                        }
                    })
                }
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }

    static convertACFProjectSectionToProjectSection(acfProjectSection : ACFProjectSectionInterface){
        return new Promise<ProjectSectionInterface>(async (resolve, reject) => {
            try {
                resolve({
                    texts: Array.isArray(acfProjectSection.texts) ? acfProjectSection.texts.map(({content})=>content) : [],
                    images: Array.isArray(acfProjectSection.images) ? await Promise.all(acfProjectSection.images.map(async (imageId : number) => ({src: (await this.getMedia(imageId))?.source_url, alt: (await this.getMedia(imageId))?.alt_text}))) : [],
                    type: acfProjectSection.type,
                    mirror: acfProjectSection.mirror,
                    title: acfProjectSection.title,
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    static removeHTMLTags(html : string){
        return html.replace(/<[^>]*>?/g, "");
    }

    static getCategoryBySlug(slug : string){
        return new Promise<CategoryInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/categories?slug=${slug}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 3600
                    }
                });
                const data = await response.json();
                if(data.length > 0){
                    const wpCategory = data[0];
                    resolve({
                        id: wpCategory.id,
                        label: wpCategory.name,
                        slug: wpCategory.slug,
                        thumbnail: (await this.getMedia(wpCategory.acf.thumbnail))?.source_url,
                        description: wpCategory.description
                    })
                }else{
                    reject(new Error("Category not found"));
                }
            } catch(error){
                reject(error);
            }
        })
    }

    static getCategoryById(id : number){
        return new Promise<CategoryInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/categories/${id}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 3600
                    }
                });
                const data = await response.json();
                resolve({
                    id: data.id,
                    label: data.name,
                    slug: data.slug,
                    thumbnail: (await this.getMedia(data.acf.thumbnail))?.source_url,
                    description: data.description
                })
            } catch(error){
                reject(error);
            }
        })
    }

    static getProjectBySlug(slug : string){
        return new Promise<ProjectInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${this.projectsPostType}?slug=${slug}`, {
                    cache: "no-store"
                });
                const data = await response.json();
                if(data.length > 0){
                    const wpProject = data[0];
                    resolve({
                        id: wpProject.id,
                        title: this.removeHTMLTags(wpProject.title.rendered),
                        slug: wpProject.slug,
                        thumbnail: (await this.getMedia(wpProject.featured_media))?.source_url,
                        created_at: wpProject.date,
                        updated_at: wpProject.modified,
                        categories: await Promise.all(wpProject.categories.map(async (categoryId : number) => await this.getCategoryById(categoryId))),
                        excerpt: this.removeHTMLTags(wpProject.excerpt.rendered),
                        description: wpProject.content.rendered,
                        url: wpProject.acf.url,
                        customer: wpProject.acf.customer,
                        sections: await Promise.all(wpProject.acf.sections.map(async (section : ACFProjectSectionInterface) => await this.convertACFProjectSectionToProjectSection(section))),
                        heading_image: (await this.getMedia(wpProject.acf.heading_image))?.source_url,
                        metadata: {
                            title: wpProject.yoast_head_json.title,
                            description: wpProject.yoast_head_json.description
                        }
                    });
                }else{
                    reject(new Error("Project not found"));
                }
            } catch(error){
                reject(error);
            }
        })
    }

    static getArticles(allowedCategories? : number[], limit? : number, page?: number, setTotal?: (total: number) => void){
        return new Promise<ArticleInterface[]>(async (resolve, reject) => {
            try {
                const categories = allowedCategories ?? (await this.getCategories()).map((category)=>category.id);
                const response = await fetch(`${this.baseUrl}/${this.articlesPostType}?categories=${categories.join(",")}${limit ? `&per_page=${limit}` : ""}${page ? `&page=${page}` : ""}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 60
                    }
                });
                //The total number of pages is in the response headers
                const totalPages = response.headers.get("X-WP-TotalPages");
                if(setTotal){
                    setTotal(Number(totalPages));
                }
                const data = await response.json();
                const res : ArticleInterface[] = [];
                for(const wpArticle of data){
                    const findSectionWithImage = wpArticle.acf.sections.find((section : ACFArticleSectionInterface) => section.image.picture && typeof section.image.picture === "number");
                    res.push({
                        id: wpArticle.id,
                        title: this.removeHTMLTags(wpArticle.title.rendered),
                        slug: wpArticle.slug,
                        thumbnail: (await this.getMedia(wpArticle.featured_media))?.source_url,
                        created_at: wpArticle.date,
                        updated_at: wpArticle.modified,
                        excerpt: this.removeHTMLTags(wpArticle.excerpt.rendered),
                        author: await this.getUser(wpArticle.author),
                        categories: await Promise.all(wpArticle.categories.map(async (categoryId : number) => await this.getCategoryById(categoryId))),
                        sections: findSectionWithImage ? [await this.convertACFArticleSectionToArticleSection(findSectionWithImage)] : [],
                        metadata: {
                            title: wpArticle.yoast_head_json.title,
                            description: wpArticle.yoast_head_json.description
                        }
                    })
                }
                resolve(res);
            } catch(error){
                reject(error);
            }
        })
    }

    static getArticleBySlug(slug : string){
        return new Promise<ArticleInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${this.articlesPostType}?slug=${slug}`, {
                    cache: "no-store"
                });
                const data = await response.json();
                if(data.length > 0){
                    const wpArticle = data[0];
                    resolve({
                        id: wpArticle.id,
                        title: this.removeHTMLTags(wpArticle.title.rendered),
                        slug: wpArticle.slug,
                        thumbnail: (await this.getMedia(wpArticle.featured_media))?.source_url,
                        created_at: wpArticle.date,
                        updated_at: wpArticle.modified,
                        excerpt: this.removeHTMLTags(wpArticle.excerpt.rendered),
                        author: await this.getUser(wpArticle.author),
                        categories: await Promise.all(wpArticle.categories.map(async (categoryId : number) => await this.getCategoryById(categoryId))),
                        sections: await Promise.all(wpArticle.acf.sections.map(async (section : ACFArticleSectionInterface) => await this.convertACFArticleSectionToArticleSection(section))),
                        metadata: {
                            title: wpArticle.yoast_head_json.title,
                            description: wpArticle.yoast_head_json.description
                        }
                    });
                }else{
                    reject(new Error("Article not found"));
                }
            } catch(error){
                reject(error);
            }
        })
    }

    static getUser(userId : number){
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/users/${userId}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 86400
                    }
                });
                const data = await response.json();
                resolve(data.name);
            } catch(error){
                reject(error);
            }
        })
    }

    static convertACFArticleSectionToArticleSection(acfArticleSection : ACFArticleSectionInterface){
        return new Promise<ArticleSectionInterface>(async (resolve, reject) => {
            try {
                const image = await this.getMedia(acfArticleSection.image.picture);
                resolve({
                    title: acfArticleSection.title,
                    content: {
                        text: acfArticleSection.content.text,
                        grow: acfArticleSection.content.grow,
                        fontSize: acfArticleSection.content.font_size,
                        maxWidth: acfArticleSection.content.max_width
                    },
                    image: {
                        src: image.source_url,
                        alt: image.alt_text,
                        grow: acfArticleSection.image.grow,
                        maxWidth: acfArticleSection.image.max_width
                    },
                    flexDirection: acfArticleSection.flex_direction
                })
            } catch(error){
                reject(error);
            }
        })
    }

    static getPageBySlug(slug : string){
        return new Promise<PageInterface>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${this.pagesPostType}?slug=${slug}`, {
                    cache: "no-store"
                });
                const data = await response.json();
                if(data.length > 0){
                    const wpPage = data[0];
                    resolve({
                        title: this.removeHTMLTags(wpPage.title.rendered),
                        slug: wpPage.slug,
                        content: wpPage.content.rendered,
                        metadata: {
                            title: wpPage.yoast_head_json.title,
                            description: wpPage.yoast_head_json.description
                        }
                    })
                }else{
                    reject(new Error("Page not found"));
                }
            } catch(error){
                reject(error);
            }
        })
    }

    static getPages(){
        return new Promise<PageInterface[]>(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${this.pagesPostType}`, {
                    cache: "force-cache",
                    next : {
                        revalidate: 3600
                    }
                });
                const data = await response.json();
                resolve(data.map((wpPage : any) => ({
                    title: this.removeHTMLTags(wpPage.title.rendered),
                    slug: wpPage.slug,
                    content: wpPage.content.rendered,
                    metadata: {
                        title: wpPage.yoast_head_json.title,
                        description: wpPage.yoast_head_json.description
                    }
                })));
            } catch(error){
                reject(error);
            }
        })
    }

    static sendContactForm(data : {
        first_name: string;
        last_name: string;
        email: string;
        tel: string;
        subject: string;
        message: string;
        discover: string;
    }){
        return new Promise<void>(async (resolve, reject) => {
            //Convert the json to a form data
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append("_wpcf7_unit_tag", `wpcf7-f${this.contactFormId}-o1`);
            try {
                const response = await fetch(this.contactFormUrl, {
                    method: "POST",
                    body: formData
                });
                const res = await response.json();
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }
}