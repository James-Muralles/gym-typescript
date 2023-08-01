import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from './types';

// tsrafce for template
type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white "
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}>
     {/* You can use the above line to be more specific or this
     href="#contactus" */}
        {children}
    </AnchorLink>
  )
}

export default ActionButton