/**
 * This component is used to display an image with text inline.
 */

import clsx from "clsx";
import HephagencyIcon from "../../icons/HephagencyIcon";

interface InlineImageTextProps {
    image: string; // URL of the image
    firstWord: string; // The first word to be displayed
    text: string; // The text to be displayed
    elementClassName?: string; // Optional class name for the element
    className?: string; // Optional class name for the image
}

export default function InlineImageText({ image, firstWord, text, className, elementClassName }: InlineImageTextProps) {
     function splitText(text: string) {
            return text.split(" ").map((word, index) => {
                return (
                    <span
                        key={index}
                        className={clsx(
                            elementClassName
                        )}
                    >
                        {word}{" "}
                    </span>
                )
            });
        }
    return (
        <div
            className={clsx(
                "w-full flex flex-col-reverse items-end gap-10 relative",
                className
            )}
        >
            <HephagencyIcon
                className="w-6 h-auto md:absolute md:top-0 md:left-0 md:translate-y-1/4"
            />
            <div className="paragraph-x-large uppercase font-league-spartan md:h5">
                <span className="inline-block md:ml-52.5">
                    {splitText(firstWord)}
                </span>
                &nbsp;
                <img
                    className={clsx(
                        "inline-block align-baseline",
                        elementClassName
                    )}
                    src={image}
                    aria-hidden="true"
                />
                &nbsp;
                {splitText(text)}
            </div>
        </div>
    )
}