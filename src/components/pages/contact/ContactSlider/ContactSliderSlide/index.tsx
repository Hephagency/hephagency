/**
 * A React component that renders a slide for the contact slider.
 */

import HephagencyButton from "@/components/global/buttons/HephagencyButton";
import BackArrowIcon from "@/components/global/icons/BackArrowIcon";
import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import { ReactNode } from "react";

export interface ContactSliderSlideProps {
    title: string;
    children: ReactNode;
    secondChildren?: ReactNode;
    containerClassName?: string;
    parentClassName?: string;
    onBack?: () => void;
    onNext?: () => void;
    isValid?: ()=> boolean;
}

export default function ContactSliderSlide({title, children, secondChildren, onBack, onNext, parentClassName}: ContactSliderSlideProps) {
    return (
        <div className="px-4 md:px-6 xl:px-7.5 flex flex-col gap-22 md:gap-29 h-full xl:max-w-296 xl:mx-auto xl:flex-row xl:items-stretch xl:justify-between">
            <div className="flex flex-col gap-4.5 md:gap-12 xl:gap-8 min-h-100 md:min-h-120 xl:justify-end">
                {onBack && 
                <button 
                onClick={onBack}
                className="bg-grey-dark w-fit text-grey-light p-1.5 border border-white border-solid transition-all hover:invert cursor-pointer appearance-none"
                >
                     <BackArrowIcon className="w-6 h-auto "/>   
                </button>
                }
                <h2 className="h4 md:h2 xl:max-w-175">
                    {title}
                </h2>
                <div className={parentClassName}> 
                    {children}
                </div>
            </div>
            <div className="flex flex-col items-end justify-end">
                {secondChildren}
                {onNext && 
                <HephagencyButton
                className="flex-row-reverse"
                onClick={onNext}
                icon={<BackArrowIcon className="-scale-x-100"/>}
                >
                    {translations.contact_next[hephagency_config.language]}
                </HephagencyButton>
                }
            </div>
            
        </div>
    )
}