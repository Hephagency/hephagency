'use client'

import hephagency_config from "@/libs/hephagency_config";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";

/**
 * A Next Router Link that is used to trigger the loader
 */

interface LoaderLinkProps extends LinkProps{
    children: ReactNode
    className?: string;
    hideLoader?: boolean;
}

export default function LoaderLink({hideLoader,...props} : LoaderLinkProps){
    const pathname = usePathname();
    const router = useRouter();
    const linkRef = useRef<HTMLAnchorElement>(null);

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();
        //The props href could contain query params, so we need to check if the pathname is the same without them
        const href = props.href as string;
        const pathnameWithoutQueryParams = href.split("?")[0];
        if(pathname === pathnameWithoutQueryParams || hideLoader){
            //Trigger a click event on the link that can not handle this function
           if(linkRef.current){
            linkRef.current.click();
           }
           return;
        }
        const loader = document.getElementById("hephagency-loader");
        if(loader){
            loader.style.scale = "1";
        }
        setTimeout(()=>{
            router.push(props.href as string);
        },hephagency_config.transitionDuration * 1000);
    }

    return (
        <Link
        ref={linkRef}
        className={props.className}
        onClick={!hideLoader ? handleClick : undefined}
        {...props}
        >
            {props.children}
        </Link>
    )
}
