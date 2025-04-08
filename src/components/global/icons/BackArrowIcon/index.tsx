/**
 * A React component that renders a back arrow icon.
 */

import IconInterface from "../IconInterface";

export default function BackArrowIcon({className} : IconInterface){
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="15"
        fill="none"
        viewBox="0 0 25 15"
        className={className}
      >
        <path
          fill="currentColor"
          d="m7.107 0 .696.697-5.922 5.922h22.365v.975H1.881l5.922 5.922-.696.697L0 7.107z"
        ></path>
      </svg>
    )
}