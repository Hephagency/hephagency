'use client'

import translations from "@/libs/translations/translations";
import ContactSliderSlide, { ContactSliderSlideProps } from "./ContactSliderSlide"
import hephagency_config from "@/libs/hephagency_config";
import { useEffect, useRef, useState } from "react";
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
import ContactSliderProgress from "./ContactSliderProgress";
import WPUtils from "@/libs/classes/WPUtils";
import CircleLoader from "@/components/global/CircleLoader";

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
    const [errors,setErrors] = useState<{
        firstName: string | null;
        lastName: string | null;
        email: string | null;
        phoneNumber: string | null;
        [key: string]: string | null;
    }>({
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formRef = useRef<HTMLFormElement>(null);

    function nextSlide(e?: MouseEvent) {
        if(e){
            e.preventDefault();
        }
        if (swiperRef.current && formRef.current) {
            if(swiperRef.current.swiper.activeIndex === slides.length - 2){
                formRef.current.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
            }else{
                swiperRef.current.swiper.slideNext();
            }
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

    function isEmailValid(){
        return email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isPhoneNumberValid(){
        return phoneNumber.length > 0 && /^[\d\s+]+$/.test(phoneNumber);
    }

    function checkErrors(checkFirstName: boolean, checkLastName: boolean, checkEmail: boolean, checkPhoneNumber: boolean){
        const newErrors = {
            ...errors
        }
        if(checkFirstName && firstName.length === 0){
            newErrors.firstName = translations.contact_first_name_required[hephagency_config.language];
        } else if(checkFirstName){
            newErrors.firstName = null;
        }
        if(checkLastName && lastName.length === 0){
            newErrors.lastName = translations.contact_last_name_required[hephagency_config.language];
        } else if(checkLastName){
            newErrors.lastName = null;
        }
        if(checkEmail && email.length === 0){
            newErrors.email = translations.contact_email_required[hephagency_config.language];
        } else if(checkEmail){
            newErrors.email = null;
        }
        if(checkPhoneNumber && phoneNumber.length === 0){
            newErrors.phoneNumber = translations.contact_phone_required[hephagency_config.language];
        } else if(checkPhoneNumber){
            newErrors.phoneNumber = null;
        }
        if(checkEmail && !isEmailValid()){
            newErrors.email = translations.contact_email_invalid[hephagency_config.language];
        } else if(checkEmail){
            newErrors.email = null;
        }
        if(checkPhoneNumber && !isPhoneNumberValid()){
            newErrors.phoneNumber = translations.contact_phone_invalid[hephagency_config.language];
        } else if(checkPhoneNumber){
            newErrors.phoneNumber = null;
        }
        setErrors(newErrors);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);
        try{
            await WPUtils.sendContactForm({
                first_name: firstName,
                last_name: lastName,
                email: email,
                tel: phoneNumber,
                subject: subject,
                message: message,
                discover: discovery
            });
            if(swiperRef.current){
                swiperRef.current.swiper.slideNext();
            }
        } catch(err){
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides: ContactSliderSlideProps[] = [
        {
            title: translations.contact_intro_title[hephagency_config.language],
            children:
                <div className="flex flex-col gap-7 md:gap-10">
                    <p className="paragraph-p md:paragraph-large md:max-w-139">
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
                        onBlur={() => checkErrors(false, true, false, false)}
                        type="text"
                        label={translations.contact_last_name[hephagency_config.language]}
                        placeholder={translations.contact_last_name_placeholder[hephagency_config.language]}
                        value={lastName}
                        onValueChange={(value) => setLastName(value)}
                        name="first_name"
                        required={true}
                        errorMessage={errors.lastName}
                    />
                    <ContactSliderField
                        onBlur={() => checkErrors(true, false, false, false)}
                        type="text"
                        label={translations.contact_first_name[hephagency_config.language]}
                        placeholder={translations.contact_first_name_placeholder[hephagency_config.language]}
                        value={firstName}
                        onValueChange={(value) => setFirstName(value)}
                        name="last_name"
                        required={true}
                        errorMessage={errors.firstName}
                    />
                    <ContactSliderField
                        onBlur={() => checkErrors(false, false, true, false)}
                        className="md:col-span-2"
                        type="email"
                        label={translations.contact_email[hephagency_config.language]}
                        placeholder={translations.contact_email_placeholder[hephagency_config.language]}
                        value={email}
                        onValueChange={(value) => setEmail(value)}
                        name="email"
                        required={true}
                        errorMessage={errors.email}
                    />
                    <ContactSliderField
                        onBlur={() => checkErrors(false, false, false, true)}
                        className="md:col-span-2"
                        type="tel"
                        label={translations.contact_phone[hephagency_config.language]}
                        placeholder={translations.contact_phone_placeholder[hephagency_config.language]}
                        value={phoneNumber}
                        onValueChange={(value) => setPhoneNumber(value)}
                        name="phone_number"
                        required={true}
                        errorMessage={errors.phoneNumber}
                    />
                </div>,
            containerClassName: "bg-white",
            isValid: ()=>{
                return (
                    firstName.length > 0 &&
                    lastName.length > 0 &&
                    email.length > 0 &&
                    phoneNumber.length > 0 &&
                    isEmailValid() &&
                    isPhoneNumberValid()
                )
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
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="h-fit w-full absolute top-1/2 left-0 -translate-y-1/2 pt-8 md:pt-14.5 xl:pt-10 relative">
                <Swiper
                ref={swiperRef}
                onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                allowTouchMove={false}
                className={clsx(
                    isLoading ? "opacity-0" : "opacity-100"
                )}
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
                <div className="px-4 md:px-6 xl:px-7.5 xl:max-w-296 xl:mx-auto">
                    <ContactSliderProgress
                        currentSlide={currentSlideIndex}
                        totalSlides={slides.length}
                        className={clsx(
                            (currentSlideIndex > 0  && currentSlideIndex < slides.length - 1) ? "opacity-100" : "opacity-0"
                        )}
                    />
                </div>
                {isLoading && 
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30 overflow-hidden">
                    <CircleLoader isNotInverted/>
                </div>
                }
            </form>
        </section>
    )
}