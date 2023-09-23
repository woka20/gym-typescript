import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import {motion} from 'framer-motion'
import HText from '../navbar/shared/HText';
import Class from './Class';
import { ClassType } from '../navbar/shared/types';

type Props = {
  setSelectedPage: (value: string) => void
  
}
const classes = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Image1,
  },
  {
    name: "Yoga Classes",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    image: Image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image6,
  },
]
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full  bg-primary-100 py-40'>
      <motion.div className="mx-auto w-5/6" onViewportEnter={() => setSelectedPage("ourclasses")}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          
          <div>
            <HText>OUR CLASSES.</HText>
            <p>Nous utilisons des services de prestataires tiers qui enregistrent ou récupèrent des informations dans le terminal d'un visiteur du site. Nous traitons ensuite ces informations. Tout cela nous aide à concevoir notre site web de manière optimale et à l'améliorer en permanence. Pour le stockage, la consultation et le traitement, nous avons besoin de votre consentement. Vous pouvez révoquer votre consentement à tout moment en cliquant sur le lien dans le pied de page. Vous trouverez de plus amples informations dans.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>

      </motion.div>

    </section>
  )
}

export default OurClasses