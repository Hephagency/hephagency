/**
 * This component is the an information block of the article heading section
 */

interface ArticleHeadingInformationProps{
    title: string;
    content: string;
}

export default function ArticleHeadingInformation({title, content}: ArticleHeadingInformationProps){
    return (
        <div className="flex flex-col">
            <span className="paragraph-large">
                {title}
            </span>
            <span className="paragraph-small text-grey-400">
                {content}
            </span>
        </div>
    )
}