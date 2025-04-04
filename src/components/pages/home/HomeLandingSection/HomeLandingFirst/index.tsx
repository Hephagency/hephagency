/**
 * A React component that renders the first section of the home page.
 */

import hephagency_config from "@/libs/hephagency_config";
import clsx from "clsx";

export default function HomeLandingFirst(){
    return (
        <div className={clsx(
            "w-dvw h-dvh bg-red-500",
            hephagency_config.negativeRemovalClassName
        )}>

        </div>
    )
}