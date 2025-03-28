'use client'

import hephagency_config from "@/libs/hephagency_config";
import translations from "@/libs/translations/translations";
import { useEffect, useState } from "react";

/**
 * A Component to display the current time in Paris depending of the env language
 */

export default function ParisTimer(){
    //The current time in 12 or 24 hours format depending of the env language
    function getCurrentTime(){
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: hephagency_config.language === "en" ? true : false,
        };
        return date.toLocaleTimeString('fr-FR', options);
    }

    const [time, setTime] = useState(getCurrentTime());

    // Update the time every minute
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 60000);
        return () => clearInterval(interval);
    },[]);

    return (
        <>
        {`${translations.paris[hephagency_config.language]} ${time}`}
        </>
    )

    
}