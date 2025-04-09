/**
 * Contact page component
 */

import ContactSlider from "@/components/pages/contact/ContactSlider";
import translations from "@/libs/translations/translations";
import hephagency_config from "@/libs/hephagency_config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: translations.contact_meta_title[hephagency_config.language],
  description: translations.contact_meta_description[hephagency_config.language],
}

export default function Contact(){
    return (
        <>
        <ContactSlider/> 
        </>
    )
}