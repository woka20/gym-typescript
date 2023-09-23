import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import {motion} from 'framer-motion'
import { BenefitTypes } from '../navbar/shared/types'
import Benefit from './Benefit'
import { once } from 'events'
import HText from '../navbar/shared/HText'
import ActionButton from '../navbar/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSelectedPage: (value:string)=>void
}

const benefits : Array<BenefitTypes> = [
  { icon: <HomeModernIcon className='h-6 w-6' />, title: "benefit 1", description: "Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visual mockups." },
  { icon: <UserGroupIcon className='h-6 w-6' />, title: "benefit 1", description: "Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visual mockups." },
  {icon:<AcademicCapIcon className='h-6 w-6'/>,title: "benefit 1", description:"Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visual mockups."}
]

const container = {
  hidden: {},
  visible: {
    transition:{staggerChildren: 0.2}
  }
}
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage("home")}>
        <motion.div className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>MORE THAN JUST A GYM.</h1>
          <p className='my-5 text-sm'>
            Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </motion.div>
        {/* { BENEFITS } */}
        <motion.div className='mt-5 flex items-center justify-between gap-6' initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }} variants={container}>
          {benefits.map((benefit: BenefitTypes)=>(
            <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
             
          ))}

        </motion.div>
        <motion.div   initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          <img  alt="benefits-page-text" src={BenefitsPageGraphic}  />
          <div>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <div className='relative'>
                  <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>MILLIONS OF PEOPLE HAPPY FIT.</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='my-5'>Nous utilisons des services de prestataires tiers qui enregistrent ou récupèrent des informations dans le terminal d'un visiteur du site. Nous traitons ensuite ces informations. Tout cela nous aide à concevoir notre site web de manière optimale et à l'améliorer en permanence. Pour le stockage, la consultation et le traitement, nous avons besoin de votre consentement. Vous pouvez révoquer votre consentement à tout moment en cliquant sur le lien dans le pied de page. Vous trouverez de plus amples informations dans.</p>
          </div>
          <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
        </motion.div>
      
      </motion.div>

    </section>
  )
}
export default Benefits