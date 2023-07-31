import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage:  (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    // Need this const so that the href is the ID in lower case
    // this will tale the page and lower case it while removing the spaces
    // the "as" will tell this to  treat this lower case page as a SelectedPage Enum so there are no errors
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
   
  return (
    <AnchorLink 
    className={
        `${selectedPage === lowerCasePage ? "text-primary-500":""}
        transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage) }
    
    >
        {page}
    </AnchorLink>
  )
}

export default Link