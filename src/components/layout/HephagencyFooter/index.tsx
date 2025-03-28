import translations from "@/libs/translations/translations";
import FooterInfiniteScroll from "./FooterInfiniteScroll";
import hephagency_config from "@/libs/hephagency_config";
import HephagencyButtonLink from "@/components/global/buttons/HephagencyButtonLink";
import MenuLinks from "../menu/MenuLinks";
import FooterLinkSection from "./FooterLinkSection";
import { footerLinkClassName } from "./FooterLink";
import SocialLinks from "../menu/SocialLinks";
import HephagencyIcon from "@/components/global/icons/HephagencyIcon";
import FooterCopyrights from "./FooterCopyrights";

export default function HephagencyFooter() {
    return (
        <div className="bg-grey-dark text-grey-light w-full overflow-hidden">
            <FooterInfiniteScroll />
            <div className="px-4 md:px-6 xl:px-7.5">
                <section className="gap-7.5 flex flex-col">
                    <p className="paragraph-large text-grey-200 md:paragraph-xx-large">
                        {translations.footer_contact_description[hephagency_config.language]}
                    </p>
                    <HephagencyButtonLink
                        href="#"
                        className="w-fit"
                    >
                        {translations.footer_contact_cta[hephagency_config.language]}
                    </HephagencyButtonLink>
                </section>
                <footer className="pb-5 flex flex-col gap-7.5 md:gap-13.5">
                    <ul className="flex flex-col items-end gap-4">
                        <MenuLinks
                            parentElement="li"
                            linkClassName={footerLinkClassName}
                        />
                    </ul>
                    <div className="flex flex-col gap-7.5 mt-9.5 md:gap-13.5 xl:flex-row xl:gap-0">
                        <div className="flex flex-col gap-7.5 md:gap-13.5 xl:gap-5.5 xl:grow">
                            <FooterLinkSection
                                title={translations.footer_phone_number[hephagency_config.language]}
                                href={`tel:${hephagency_config.normalizedPhoneNumber}`}>
                                {hephagency_config.phoneNumber}
                            </FooterLinkSection>
                            <FooterLinkSection
                                title={translations.footer_email[hephagency_config.language]}
                                href={`mailto:${hephagency_config.email}`}
                            >
                                {hephagency_config.email}
                            </FooterLinkSection>
                        </div>
                        <div className="flex justify-between items-end xl:grow">
                            <ul className="grid grid-cols-2 gap-y-5.5 gap-x-7.5">
                                <SocialLinks
                                    parentElement="li"
                                    linkClassName={footerLinkClassName}
                                />
                            </ul>
                            <HephagencyIcon
                                className="w-8 h-auto"
                            />
                        </div>
                    </div>
                    <FooterCopyrights />
                </footer>
            </div>
        </div>
    )
}