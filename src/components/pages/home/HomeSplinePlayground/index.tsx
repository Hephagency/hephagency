/**
 * Displays the 3D Home Playground section of the home page.
 */

import HephagencySplineLogo from "@/components/global/spline/HephagencySplineLogo";
import HomeSplinePlaygroundCircle from "./HomeSplinePlaygroundCircle";
import HomeSplineScene from "./HomeSplineScene";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";

export default function HomeSplinePlayground(){
    return (
        <section className="overflow-hidden w-full h-dvh flex flex-col justify-center items-center bg-white">
            <div className="relative max-w-full flex justify-center items-center max-h-full">
                <HomeSplinePlaygroundCircle className="min-w-150 xl:min-w-345 h-auto"/>
                <HomeSplineScene/>
                <h2 className="h5 md:h4 absolute bottom-0 left-0 xl:left-24 xl:bottom-24 w-full px-4 md:px-7.5 z-30 invert mix-blend-difference max-w-131 md:max-w-140">
                    {translations.home_spline_title[hephagency_config.language]}
                </h2>
            </div>
        </section>
    )
}