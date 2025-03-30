/**
 * About page component
 */

import AboutGridSection from "@/components/pages/about/AboutGridSection";
import AboutIntroductionSection from "@/components/pages/about/AboutIntroductionSection";
import AboutSkillsSection from "@/components/pages/about/AboutSkillsSection";
import AboutTeamSection from "@/components/pages/about/AboutTeamSection";
import AboutValuesSection from "@/components/pages/about/AboutValuesSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";

export default function About(){
    return (
        <>
        <AboutIntroductionSection/>
        <AboutGridSection/>
        <AboutValuesSection/>
        <AboutSkillsSection/>
        <AboutTeamSection/>
        <HomeProjectsSection/>
        </>
    )
}