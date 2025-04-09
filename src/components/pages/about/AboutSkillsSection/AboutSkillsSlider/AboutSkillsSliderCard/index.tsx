/**
 * A React component that renders a card for the skills slider in the About page.
 */

export interface AboutSkillsSliderCardProps {
    image: string;
    title: string;
}

export default function AboutSkillsSliderCard({ image, title }: AboutSkillsSliderCardProps) {
    return (
        <div
        className="w-full aspect-4/6 xl:aspect-32/47 flex flex-col items-end justify-end px-3.5 py-2"
        style={
            {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }
        }
        >
            <h3 className="h5 text-grey-light">
                {title}
            </h3>
        </div>
    )
} 