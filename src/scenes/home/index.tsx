
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import useMediaQuery from '../../hooks/useMediaQuery'
import ActionButton from '../navbar/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'



type Props = {
  setSelectedPage: (value: string) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen= useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home"
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      
      {/* {Image and Main header} */}
      <motion.div className='md:flex mx-auto q-5/6 items-center justify-center w-5/6 md:h-5/6'
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
      {/* { Main header } */}
      <div className='z-10 mt-32'>
        {/* { heading } */}
          <div className='md:-mt-20'>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
              <p>
              "Good Gym In  The heart city of Cigondewah".<br/>
              "Good Gym In  The heart city of Cigondewah".<br/>
              "Good Gym In  The heart city of Cigondewah"<br/>
            </p>
          </div>
          <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                  onClick={() => setSelectedPage("contactus")}
                  href={`#${"contactus"}`}>
                  <p>Learn More</p>
                </AnchorLink>
          </div>
          </div>
          <div className="basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic}/>
          </div>
        </motion.div>
          {isAboveMediumScreen && (
              <div className=" bg-primary-100 py-10">
              <div className="mx-auto w-5/6">
                <div className='flex items-center gap-8'>
                  <img alt="sponsor-rb" src={SponsorRedBull} />
                  <img alt="sponsor-fb" src={SponsorForbes} />
                  <img alt="sponsor-ft" src={SponsorFortune}/>
                </div>
              </div>
          </div>)}
    {/* </div> */}

     {/* </div>      */}
    </section>
  )
}
export default Home;