
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Built by Tony Stark himself with adamantium indestructible weights and equipment."
     },
     {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100s of diverse classes",
        description: "Learn to fly, climb walls, or harness that electricity you cannot quite control yet"
     },
     {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro trainers",
        description: "Learn from Goku and Vegeta. Sometimes even All Might!"
     }
];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}




type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>


        {/* HEADER */}
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}            
        transition={{duration: 0.5}}
        variants=
        {{
            hidden:{opacity: 0, x:-50},
            visible:{opacity: 1, x:0}
        }}
                >
            <HText>MORE THAN A GYM.</HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        variants={container}
        >
            {benefits.map((benefit: BenefitType) =>(
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
            {/* GRAPHIC */}
            <img 
            className="mx-auto" 
            src={BenefitsPageGraphic} 
            alt="benefits-page-graphic" 
            />

            {/* DESCIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}            
                        transition={{duration: 0.5}}
                        variants=
                        {{
                            hidden:{opacity: 0, x:50},
                            visible:{opacity: 1, x:0}
                        }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMEBERS GETTING {" "} 
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>

                </div>

                {/* DESCRIPT */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}            
                transition={{delay: 0.2, duration: 0.5}}
                variants=
                {{
                    hidden:{opacity: 0, x: 50},
                    visible:{opacity: 1, x:0}
                }}>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="mb-5">Egestas congue quisque egestas diam in arcu. Proin fermentum leo vel orci porta non pulvinar neque. Ultricies mi eget mauris pharetra et. Sagittis vitae et leo duis ut diam quam nulla. Varius sit amet mattis vulputate enim. Scelerisque in dictum non consectetur a. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor consequat id porta nibh venenatis cras sed felis. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now

                        </ActionButton>

                    </div>

                </div>
            </div>
        </div>

        
    </motion.div>   
   </section>
  )
}

export default Benefits;