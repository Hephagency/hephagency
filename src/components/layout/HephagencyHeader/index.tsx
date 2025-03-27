import HephagencyMenu from "./HephagencyMenu";

/**
 * The main header of the Hephagency layout
 */
export default function HephagencyHeader(){
    return (
        <header className="px-4 py-5 w-full text-grey-dark">
            <HephagencyMenu/>
        </header>
    )
}