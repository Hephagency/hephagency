import IconInterface from "../IconInterface";

export default function BurgerIcon({className}: IconInterface){
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="12"
        fill="none"
        viewBox="0 0 15 12"
        className={className}
      >
        <path fill="#0B0A0A" d="M0 .5h15v1H0zM0 5.5h15v1H0zM0 10.5h15v1H0z"></path>
      </svg>
    )
}