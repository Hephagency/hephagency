'use client'

import translations from "@/libs/translations/translations";
import LoaderIconAnimation from "./LoaderIconAnimation";
import hephagency_config from "@/libs/hephagency_config";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

/**
 * A React component that renders a loader.
 */

interface LoaderStep{
    image?: string,
    title: string,
    isDark?: boolean
}

export default function Loader(){
    const imagesBasePath = "/images/loader";
    const steps : LoaderStep[] = [
        {
            image: `${imagesBasePath}/1.png`,
            title: translations.loader_web_development[hephagency_config.language],
            isDark: true
        },
        {
            image: `${imagesBasePath}/2.png`,
            title: translations.loader_branding[hephagency_config.language]
        },
        {
            image: `${imagesBasePath}/3.png`,
            title: translations.loader_digital_first[hephagency_config.language]
        },
        {
            title: hephagency_config.siteName || ""
        }
    ];
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const currentStep = steps[currentStepIndex];
    const cycleTime = hephagency_config.loaderDuration;
    
    const [previousPathname, setPreviousPathname] = useState<string | null>(null);
    const pathname = usePathname();

    function hideLoader(){
        const loader = document.getElementById("hephagency-loader");
        if(loader){
            loader.style.scale = "0";
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentStepIndex((prev)=>(prev+1)%steps.length);
        },(cycleTime * 1000) / steps.length);
        return ()=>clearInterval(interval);
    },[steps]);

    useEffect(()=>{
        if(!previousPathname){
            const timeout = setTimeout(hideLoader,cycleTime * 1000);
            setPreviousPathname(pathname);
            return ()=>clearTimeout(timeout);
        } else if(previousPathname !== pathname){
            hideLoader();
            setPreviousPathname(pathname);
        }
    },[pathname]);

    return (
        <div 
        className="fixed z-90 top-0 left-0 w-full h-full bg-grey-dark text-grey-light flex items-center justify-center origin-top-left transition-all duration-500"
        id="hephagency-loader"
        >
            <div className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12">
                <LoaderIconAnimation duration={cycleTime}/>
                <span className={clsx(
                    "h6 md:h5",
                    currentStep.isDark ? "text-grey-dark" : "text-grey-light"
                )}>
                    {currentStep.title}
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square -z-10 md:aspect-63/45 md:w-157.5 xl:w-210">
                    {steps.map((step,index)=>
                    <Fragment key={index}>
                        {step.image && 
                        <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={clsx(
                            "p-4 md:p-6 xl:p-7.5",
                            index === currentStepIndex ? "opacity-100" : "opacity-0"
                        )}
                        />
                        }
                    </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}