import HomeAboutSection from "@/components/pages/home/HomeAboutSection";
import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
import HomeLandingSection from "@/components/pages/home/HomeLandingSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
import HomeSplinePlayground from "@/components/pages/home/HomeSplinePlayground";

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