import Spline from "@splinetool/react-spline";
import SplineNext from "@splinetool/react-spline/next";
import { CSSProperties } from "react";

interface HephagencySplineLogoProps {
    style?: CSSProperties;
    className?: string;
    client?: boolean;
}

export default function HephagencySplineLogo({ style, className, client }: HephagencySplineLogoProps) {
    return (
        <div className="w-full aspect-square">
            {client 
            ?
            <Spline
            scene="https://prod.spline.design/O1o3CqiPnq4u3z03/scene.splinecode"
            />
            :
            <SplineNext 
            scene="https://prod.spline.design/O1o3CqiPnq4u3z03/scene.splinecode"
            />
        }
        </div>
    )
}