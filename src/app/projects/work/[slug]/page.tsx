/**
 * A React component that renders a page for a project work.
 */

import sampleProjects from "@/libs/static/sampleProjects";
import { notFound } from "next/navigation";
import WorkHeadingSection from "@/components/pages/work/WorkHeadingSection";
interface ProjectWorkPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectWorkPage({ params }: ProjectWorkPageProps) {
    const { slug } = await params;
    const project = sampleProjects.find(project => project.slug === slug);

    if(!project){
        notFound();
    }

    return (
        <div className="px-4 md:px-6 xl:px-7.5">
            <WorkHeadingSection project={project} />
        </div>
    )
    
    
}