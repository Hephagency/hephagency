/**
 * A Component to display the match cut video of the home about section
 */

export default function HomeAboutMatchCut() {
    return (
        <div className="md:grow md:basis-0 xl:grow-1">
            <video
                src="/videos/matchcut.mp4"
                autoPlay
                muted
                loop
                className="w-full aspect-5/7 md:aspect-auto md:h-131 xl:h-160 object-cover md:sticky md:top-1/6"
                playsInline={true}
            >
                Your browser does not support the video tag.
            </video>
            <div className="md:h-131 xl:h-160"/>
        </div>
    );
}