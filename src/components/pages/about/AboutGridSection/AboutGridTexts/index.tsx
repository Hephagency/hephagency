/**
 * A React component that renders texts for the About page grid section.
 */

interface AboutGridTextsProps {
    texts: string[];
}

export default function AboutGridTexts({ texts }: AboutGridTextsProps) { 
    return (
        <div className="flex flex-col md:flex-row md:gap-7.5">
            {texts.map((text, index) => (
               <p
               key={index}
               className="paragraph-p pt-5 md:pt-6.5 pb-7.5 md:pb-0 border-t border-t-grey-light md:grow md:basis-0"
               >
                {text}
               </p>
            ))}
        </div>
    )
}