import HomeAboutSection from "@/components/pages/home/HomeAboutSection";
import HomeProjectsSection from "@/components/pages/home/HomeProjectsSection";
import HomeSplinePlayground from "@/components/pages/home/HomeSplinePlayground";

export default function Home(){
  return (
    <>
    <HomeSplinePlayground/>
    <HomeAboutSection/>
    <HomeProjectsSection/>
    </>
  )
}