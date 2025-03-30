/**
 * About page component
 */

import AboutGridSection from "@/components/pages/about/AboutGridSection";
import AboutIntroductionSection from "@/components/pages/about/AboutIntroductionSection";
import AboutSkillsSection from "@/components/pages/about/AboutSkillsSection";
import AboutValuesSection from "@/components/pages/about/AboutValuesSection";

export default function About(){
    return (
        <>
        <AboutIntroductionSection/>
        <AboutGridSection/>
        <AboutValuesSection/>
        <AboutSkillsSection/>
        </>
    )
}