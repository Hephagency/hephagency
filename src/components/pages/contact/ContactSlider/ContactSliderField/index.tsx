/**
 * A React component that renders a field for the slider in the contact page.
 */

import clsx from "clsx";
import { HTMLAttributes, InputHTMLAttributes } from "react";

interface ContactSliderFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onValueChange: (value: string) => void;
    className?: string;
    errorMessage?: string | null;
}

export default function ContactSliderField({ label, onValueChange, className, errorMessage, ...props }: ContactSliderFieldProps) {
    return (
        <div className="flex flex-col gap-2">
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
            {errorMessage &&
                <p className="text-red-500 paragraph-small">
                    {errorMessage}
                </p>
            }
        </div>
    );
}