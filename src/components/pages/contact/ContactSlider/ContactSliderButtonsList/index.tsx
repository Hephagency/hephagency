/**
 * A React component that renders a list of buttons for the contact slider.
 */

import HephagencyButton from "@/components/global/buttons/HephagencyButton";

interface ContactSliderButton{
    label: string;
    onClick: () => void;
    isActive: boolean;
}

interface ContactSliderButtonsListProps{
    buttons: ContactSliderButton[];
}

export default function ContactSliderButtonsList({buttons}: ContactSliderButtonsListProps) {
    return (
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {buttons.map((button, index) => (
                <li key={index}>
                    <HephagencyButton
                    buttonClassName="w-full"
                    className="w-full"
                    onClick={button.onClick}
                    isActive={button.isActive}
                    >
                         {button.label}
                    </HephagencyButton>
                </li>
            ))}
        </ul>
    );
}