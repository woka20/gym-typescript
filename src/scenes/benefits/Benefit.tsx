import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'

type Props = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value:string)=>void
}

const childVariant={
  
}
const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-50 px-5 py-16' variants={childVariant}>
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100'> 
        {icon}
        </div>
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                  onClick={() => setSelectedPage("contactus")}
                  href={`#${"contactus"}`}>
                  <p>Learn More</p>
      </AnchorLink>
    </motion.div>

  )
}

export default Benefit