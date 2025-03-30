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
}