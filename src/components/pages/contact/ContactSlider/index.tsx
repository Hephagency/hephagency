'use client'

import translations from "@/libs/translations/translations";
import ContactSliderSlide, { ContactSliderSlideProps } from "./ContactSliderSlide"
import hephagency_config from "@/libs/hephagency_config";
import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import HephagencyButton from "@/components/global/buttons/HephagencyButton";
import BackArrowIcon from "@/components/global/icons/BackArrowIcon";
import ContactLinks from "@/components/layout/menu/ContactLinks";
import SocialLinks from "@/components/layout/menu/SocialLinks";
import HephagencyIcon from "@/components/global/icons/HephagencyIcon";
import ContactSliderButtonsList from "./ContactSliderButtonsList";
import ContactSliderField from "./ContactSliderField";
import ContactSliderTextarea from "./ContactSliderTextarea";
import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";

import 'swiper/css';
import clsx from "clsx";
import { footerLinkClassName } from "@/components/layout/HephagencyFooter/FooterLink";

/**
 * A React component that renders a slider for the contact page.
 */

export default function ContactSlider() {
    const swiperRef = useRef<SwiperRef>(null);
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [discovery, setDiscovery] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    function nextSlide(e?: MouseEvent) {
        if(e){
            e.preventDefault();
        }
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    }

    function prevSlide(e?: MouseEvent) {
       if(e){
        e.preventDefault();
       }
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    }

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides: ContactSliderSlideProps[] = [
        {
            title: translations.contact_intro_title[hephagency_config.language],
            children:
                <div className="flex flex-col gap-7 md:gap-10">
                    <p className="paragraph-large md:max-w-139">
                        {translations.contact_intro_text[hephagency_config.language]}
                    </p>
                    <HephagencyButton
                        buttonClassName="w-fit"
                        onClick={nextSlide}
                        icon={<BackArrowIcon className="-scale-x-100"/>}
                        className="flex-row-reverse"
                    >
                        {translations.contact_intro_cta[hephagency_config.language]}
                    </HephagencyButton>
                </div>,
            secondChildren:
                <div className="xl:flex xl:flex-col xl:items-end xl:gap-15.5">
                    <div className="flex flex-col gap-5 items-end md:gap-23">
                        <ul className="flex flex-col gap-5 items-end">
                            <ContactLinks
                                parentElement="li"
                                linkClassName={clsx(
                                    footerLinkClassName,
                                    "!text-current"
                                )}
                            />
                        </ul>
                        <ul className="grid grid-cols-2 w-fit gap-y-5 gap-x-9.5">
                            <SocialLinks
                                parentElement="li"
                                linkClassName={clsx(
                                    footerLinkClassName,
                                    "block w-fit ml-auto mr-0",
                                    "!text-current"
                                )}
                            />
                        </ul>
                    </div>
                    <HephagencyIcon className="w-7.5 h-auto hidden xl:block"/>
                </div>,
            containerClassName: clsx(
                "bg-red-500",
                hephagency_config.negativeRemovalClassName
            )
        },
        {
            title: translations.contact_subject_title[hephagency_config.language],
            children:
                <div className="flex flex-col gap-6 md:gap-12">
                    <ContactSliderButtonsList
                        buttons={translations.contact_subjects[hephagency_config.language].map((subjectButton) => ({
                            label: subjectButton,
                            onClick: () => {
                                setSubject(subjectButton);
                            },
                            isActive: subjectButton === subject
                        }))}
                    />
                    <ContactSliderField
                        placeholder={translations.contact_other_answer_placeholder[hephagency_config.language]}
                        value={translations.contact_subjects[hephagency_config.language].includes(subject) ? "" : subject}
                        onValueChange={(value) => setSubject(value)}
                        name="subject"
                    />
                </div>,
            containerClassName: "bg-white",
            isValid: ()=> subject.length > 0
        },
        {
            title: translations.contact_discover_title[hephagency_config.language],
            children:
                <div className="flex flex-col gap-6 md:gap-12">
                    <ContactSliderButtonsList
                        buttons={translations.contact_discover_propositions[hephagency_config.language].map((discoveryButton) => ({
                            label: discoveryButton,
                            onClick: () => {
                                setDiscovery(discoveryButton);
                            },
                            isActive: discoveryButton === discovery
                        }))}
                    />
                    <ContactSliderField
                        type="text"
                        placeholder={translations.contact_other_answer_placeholder[hephagency_config.language]}
                        value={translations.contact_discover_propositions[hephagency_config.language].includes(discovery) ? "" : discovery}
                        onValueChange={(value) => setDiscovery(value)}
                        name="discovery"
                    />
                </div>,
            containerClassName: "bg-white",
            isValid: ()=> discovery.length > 0
        },
        {
            title: translations.contact_informations_title[hephagency_config.language],
            children:
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:gap-7.5 xl:min-w-175">
                    <ContactSliderField
                        type="text"
                        label={translations.contact_last_name[hephagency_config.language]}
                        placeholder={translations.contact_last_name_placeholder[hephagency_config.language]}
                        value={lastName}
                        onValueChange={(value) => setLastName(value)}
                        name="first_name"
                    />
                    <ContactSliderField
                        type="text"
                        label={translations.contact_first_name[hephagency_config.language]}
                        placeholder={translations.contact_first_name_placeholder[hephagency_config.language]}
                        value={firstName}
                        onValueChange={(value) => setFirstName(value)}
                        name="last_name"
                    />
                    <ContactSliderField
                        className="md:col-span-2"
                        type="email"
                        label={translations.contact_email[hephagency_config.language]}
                        placeholder={translations.contact_email_placeholder[hephagency_config.language]}
                        value={email}
                        onValueChange={(value) => setEmail(value)}
                        name="email"
                    />
                    <ContactSliderField
                        className="md:col-span-2"
                        type="tel"
                        label={translations.contact_phone[hephagency_config.language]}
                        placeholder={translations.contact_phone_placeholder[hephagency_config.language]}
                        value={phoneNumber}
                        onValueChange={(value) => setPhoneNumber(value)}
                        name="phone_number"
                    />
                </div>,
            containerClassName: "bg-white",
            isValid: () => {
                const inputsNotEmpty = [firstName, lastName, email, phoneNumber].every(input => input.length > 0);
                const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                const phoneValid = /^\+?[0-9]{10,15}$/.test(phoneNumber);
                return inputsNotEmpty && emailValid && phoneValid;  
            }
        },
        {
            title: translations.contact_message_title[hephagency_config.language],
            children:
                <ContactSliderTextarea
                    value={message}
                    onValueChange={(value) => setMessage(value)}
                    placeholder={translations.contact_message_placeholder[hephagency_config.language]}
                />,
            containerClassName: "bg-white",
            isValid: () => message.length > 0
        },
        {
            title: translations.contact_submitted_title[hephagency_config.language],
            children:
                <p className="paragraph-large">
                    {translations.contact_submitted_text[hephagency_config.language]}
                </p>,
            secondChildren:
                <HephagencyButtonLink
                    icon={<BackArrowIcon className="-scale-x-100" />}
                    href="/"
                    className="flex-row-reverse"
                >
                    {translations.home[hephagency_config.language]}
                </HephagencyButtonLink>,
            containerClassName: "bg-white",
            parentClassName: "xl:grow xl:basis-0"
        }
    ];
    return (
        <section
        className={clsx(
            "w-full h-dvh transition-all duration-500 text-grey-dark",
            slides[currentSlideIndex].containerClassName,
        )}
        >
            <form className="h-fit w-full absolute top-1/2 left-0 -translate-y-1/2 pt-8 md:pt-14.5 xl:pt-10">
                <Swiper
                ref={swiperRef}
                onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                allowTouchMove={false}
                >
                    {slides.map((slide, index) =>
                        <SwiperSlide 
                        key={index}
                        className="h-auto"
                        >
                            <ContactSliderSlide
                                {...slide}
                                onBack={(index === slides.length - 1 || index === 0) ? undefined : prevSlide}
                                onNext={((index === slides.length - 1 || index === 0) || (slide.isValid && !slide.isValid())) ? undefined : nextSlide}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </form>
        </section>
    )
}