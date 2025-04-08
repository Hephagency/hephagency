import IconInterface from "../IconInterface";

export default function HephagencyIcon({ className }: IconInterface) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="currentColor"
                d="M24 15.76H0V24h24zM24 8.528l-12 5.98-12-5.98V0l12 5.98L24 0z"
            ></path>
        </svg>
    )
}