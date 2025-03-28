import FooterLink, { FooterLinkProps } from "../FooterLink";

interface FooterLinkSectionProps extends FooterLinkProps{
    title: string;
}

export default function FooterLinkSection({title, children, href}: FooterLinkSectionProps){
    return (
        <div>
            <h3 className="paragraph-p">
                {title}
            </h3>
            <FooterLink href={href}>
                {children}
            </FooterLink>
        </div>
    )
}

