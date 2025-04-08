/**
 * A React component that renders a field for the slider in the contact page.
 */

import clsx from "clsx";
import { HTMLAttributes, InputHTMLAttributes } from "react";

interface ContactSliderFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onValueChange: (value: string) => void;
    className?: string;
}

export default function ContactSliderField({ label, onValueChange, className, ...props}: ContactSliderFieldProps) {
    return (
        <div className={clsx(
            "paragraph-p w-full flex overflow-hidden gap-2 md:paragraph-large",
            className
        )}>
            {label && 
            <label className="whitespace-nowrap py-0.5 border-b border-b-current">{label} :</label>
            }
            <input
                className="border-b border-b-current grow basis-0 outline-none py-0.5"
                {...props}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
}