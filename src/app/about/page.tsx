/**
 * About page component
 */

import AboutGridSection from "@/components/pages/about/AboutGridSection";
import AboutIntroductionSection from "@/components/pages/about/AboutIntroductionSection";
import AboutSkillsSection from "@/components/pages/about/AboutSkillsSection";
import AboutTeamSection from "@/components/pages/about/AboutTeamSection";
import AboutValuesSection from "@/components/pages/about/AboutValuesSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: translations.about_meta_title[hephagency_config.language],
  description: translations.about_meta_description[hephagency_config.language],
}

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