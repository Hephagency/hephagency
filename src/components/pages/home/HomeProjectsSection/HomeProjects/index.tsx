/**
 * This component displays the slider for the projects section on the home page.
 */

import hephagency_config from "@/libs/hephagency_config";
import sampleProjects from "@/libs/static/sampleProjects";
import HomeProjectsSliders from "./HomeProjectsSliders";
import WPUtils from "@/libs/classes/WPUtils";

export default async function HomeProjects(){
    const projects = await WPUtils.getProjects();

    return (
       <HomeProjectsSliders projects={projects} />
    )
}