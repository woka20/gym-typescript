import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: React.ReactNode;
  setSelectedPage : (value: string) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className='rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage("contactus")}
      href={`#${"conatctus"}`}>
      {children}
    </AnchorLink>
  )
}
export default ActionButton