import HomeAboutSection from "@/components/pages/home/HomeAboutSection";
import HomeBlogSection from "@/components/pages/home/HomeBlogSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
import HomeSplinePlayground from "@/components/pages/home/HomeSplinePlayground";

export default function Home(){
  return (
    <>
    <HomeSplinePlayground/>
    <HomeAboutSection/>
    <HomeProjectsSection/>
    <HomeBlogSection/>
    </>
  )
}