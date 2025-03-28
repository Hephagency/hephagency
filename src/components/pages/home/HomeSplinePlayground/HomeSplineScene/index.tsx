import HephagencySplineLogo from "@/components/global/spline/HephagencySplineLogo";

export default function HomeSplineScene() {
    return (
        <div className="w-100 h-70 xl:w-150 xl:h-110 overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex justify-center items-center">
            <HephagencySplineLogo className="w-full h-auto" />
        </div>
    )
}