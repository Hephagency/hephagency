export default {
    language: process.env.NEXT_PUBLIC_LANG as "en" | "fr",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    normalizedPhoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(" ",""),
    email: process.env.NEXT_PUBLIC_EMAIL,
}