'use client'
import { useEffect, useState } from "react";
import data from "./data.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
/**
 * A lottie animation for the particles
 */
export default function HephagencyParticles(){
    return <Lottie animationData={data} />
}