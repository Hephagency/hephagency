import LanguageType from "./types/LanguageType";

export default {
    language: process.env.NEXT_PUBLIC_LANG as LanguageType,
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    normalizedPhoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(" ",""),
    email: process.env.NEXT_PUBLIC_EMAIL,
    coordinates: {
        long: process.env.NEXT_PUBLIC_LONGITUDE,
        lat: process.env.NEXT_PUBLIC_LATITUDE,
    },
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    transitionDuration: 0.5,
    loaderDuration: 2,
    negativeRemovalClassName: "negative-none",
    apiUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/wp/v2",
    contactFormId: process.env.NEXT_PUBLIC_CONTACT_FORM_ID,
    contactFormUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/contact-form-7/v1/contact-forms/" + process.env.NEXT_PUBLIC_CONTACT_FORM_ID + "/feedback",
}