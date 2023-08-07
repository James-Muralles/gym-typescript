import { ClassType, SelectedPage } from "@/shared/types"
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes:Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "A class taught by the Rock.",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "A class taught by the Rock.",
        image: image2
    },
    {
        name: "Ab Core Classes",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "A class taught by the Rock.",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "A class taught by the Rock.",
        image: image5
    },
    {
        name: "Training Classes",
        description: "A class taught by the Rock.",
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full py-40 bg-primary-100">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden:{opacity: 0, x:-50},
                visible:{opacity: 1, x:0}
            }}>

                <div className="md:w-3/5">
                    <HText>Our Classes</HText>
                    <p className="py-5">gestas congue quisque egestas diam in arcu. Proin fermentum leo vel orci porta non pulvinar neque. Ultricies mi eget mauris pharetra et. Sagittis vitae et leo duis ut diam quam nulla. Varius sit amet mattis vulputate enim. Scelerisque in dictum non consectetur a. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor consequat id porta nibh venenatis cras sed felis. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) =>(
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

export default OurClasses;