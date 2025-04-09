import HomeAboutSection from "@/components/pages/home/HomeAboutSection";
import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
import HomeLandingSection from "@/components/pages/home/HomeLandingSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: translations.home_meta_title[hephagency_config.language],
  description: translations.home_meta_description[hephagency_config.language],
}

export default function Home(){
  return (
    <>
    <HomeLandingSection/>
    <HomeAboutSection/>
    <HomeProjectsSection/>
    <HomeBlogSection/>
    </>
  )
}