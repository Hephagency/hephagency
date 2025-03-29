/**
 * The component that handle the slider in the Hephagency menu
 */

import Caroussel from "@/components/global/Caroussel";
import hephagency_config from "@/libs/hephagency_config";
import sampleProjects from "@/libs/static/sampleProjects";
import { ReactNode } from "react";

export default function HephagencyMenuSlider(){
    const projects = sampleProjects.filter(({language})=>language === hephagency_config.language).slice(0,3);
    const items : ReactNode[] = projects.map((project, index)=>
        <div key={index} className="w-full h-full px-2.5 py-5">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover absolute top-0 left-0"/>
            <div className="bg-gradient-to-b from-grey-dark to-transparent absolute w-full h-full top-0 left-0 z-10" />
            <h3 className="paragraph-x-large text-grey-light relative z-20">
                {project.title}
            </h3>
        </div>
    );

    return (
        <Caroussel
        items={items}
        className="w-full aspect-9/8 md:aspect-3/2 xl:aspect-31/9"
        />
    )
}