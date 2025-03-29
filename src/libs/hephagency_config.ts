import LanguageType from "./types/LanguageType";

export default {
    language: process.env.NEXT_PUBLIC_LANG as LanguageType,
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    normalizedPhoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(" ",""),
    email: process.env.NEXT_PUBLIC_EMAIL,
}