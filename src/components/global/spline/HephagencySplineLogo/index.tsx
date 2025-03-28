import SplineNext from "@splinetool/react-spline/next";
import { CSSProperties } from "react";

interface HephagencySplineLogoProps {
    style?: CSSProperties;
    className?: string;
}

export default function HephagencySplineLogo({ style, className }: HephagencySplineLogoProps) {
    return (
        <div className="w-full aspect-square">
            <SplineNext 
            scene="https://prod.spline.design/O1o3CqiPnq4u3z03/scene.splinecode"
            />
        </div>
    )
}