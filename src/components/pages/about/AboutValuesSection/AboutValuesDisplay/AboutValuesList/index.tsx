/**
 * This component is used to display a list of values to select one of them.
 */

import clsx from "clsx";

interface AboutValuesListOption{
    label: string;
    onClick: () => void;
    isActive?: boolean;
    className?: string;
}

interface AboutValuesListProps {
    options: AboutValuesListOption[];
    className?: string;
}

export default function AboutValuesList({ options, className }: AboutValuesListProps) {
    return (
        <ul className={
            clsx(
                "flex flex-col w-full",
                className
            )
        }>
            {options.map((option, index) => (
                <li
                key={index}
                className="paragraph-large w-full md:paragraph-x-large"
                >
                    <button 
                    onClick={option.onClick}
                    className={clsx(
                        "p-2 md:p-3 w-full text-left relative transition-all duration-500 cursor-pointer",
                        "after:content-[''] after:absolute after:w-full after:h-full after-pointer-events-none after:top-0 after:left-0 after:z-10 after:backdrop-invert after:origin-left after:transition-all after:duration-500",
                        !option.isActive && "after:scale-x-0 hover:after:scale-x-100",
                        option.className
                    )}
                    >
                        {option.label}
                    </button>
                </li>
            ))}
        </ul>
    )
}