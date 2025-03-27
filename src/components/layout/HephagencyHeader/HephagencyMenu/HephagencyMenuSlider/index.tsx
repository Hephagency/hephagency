/**
 * The component that handle the slider in the Hephagency menu
 */

import Caroussel from "@/components/global/Caroussel";
import sampleProjects from "@/libs/static/sampleProjects";
import { ReactNode } from "react";

export default function HephagencyMenuSlider(){
    const projects = sampleProjects.slice(0, 3);
    const items : ReactNode[] = projects.map((project, index)=>
        <div key={index} className="w-full h-full">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover"/>
        </div>
    );

    return (
        <Caroussel
        items={items}
        className="w-full aspect-4/3"
        />
    )
}