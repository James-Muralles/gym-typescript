
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Built by Tony Stark himself."
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


type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section
   id="benefits"
   className="mx auto, min-h-full w-5/6 py-20">

    <motion.div
    className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>


        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN A GYM.</HText>
            <p className="my- 5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </div>

        {/* Benefits */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit: BenefitType) =>(
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </div>
    </motion.div>   
   </section>
  )
}

export default Benefits;