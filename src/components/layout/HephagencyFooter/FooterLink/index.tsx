const footerLinkClassName = "paragraph-large underline underline-offset-6 text-grey-light";
export {footerLinkClassName};

export interface FooterLinkProps{
    children: React.ReactNode;
    className?: string;
    href: string;
}

/**
 * The main footer link component in the Hephagency design system
 */

export default function FooterLink({children, href}: FooterLinkProps){
    return (
        <a className={footerLinkClassName} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}