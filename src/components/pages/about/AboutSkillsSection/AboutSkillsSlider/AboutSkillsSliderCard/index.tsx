/**
 * A React component that renders a card for the skills slider in the About page.
 */

export interface AboutSkillsSliderCardProps {
    image: string;
}

export default function AboutSkillsSliderCard({ image }: AboutSkillsSliderCardProps) {
    return (
        <div
        className="w-full aspect-4/6 xl:aspect-32/47"
        style={
            {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }
        }
        >

        </div>
    )
} 