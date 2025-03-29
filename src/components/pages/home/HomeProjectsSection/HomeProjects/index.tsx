/**
 * This component displays the slider for the projects section on the home page.
 */

import hephagency_config from "@/libs/hephagency_config";
import sampleProjects from "@/libs/static/sampleProjects";
import HomeProjectsSliders from "./HomeProjectsSliders";

export default function HomeProjects(){
    const projects = sampleProjects.filter(({language})=>language===hephagency_config.language);

    console.log(projects);

    return (
       <HomeProjectsSliders projects={projects} />
    )
}