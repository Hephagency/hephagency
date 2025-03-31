/**
 * A React component that renders a textarea for the contact slider.
 */

import { TextareaHTMLAttributes } from "react";

interface ContactSliderTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    onValueChange: (value: string) => void;
}

export default function ContactSliderTextarea({ onValueChange, ...props }: ContactSliderTextareaProps) {
    return (
        <textarea
            className="w-full paragraph-p border border-current outline-none py-4 px-5 min-h-80.5 resize-none md:paragraph-large xl:min-w-175 xl:min-h-57.5"
            {...props}
            onChange={(e) => onValueChange(e.target.value)}
        />
    );
}