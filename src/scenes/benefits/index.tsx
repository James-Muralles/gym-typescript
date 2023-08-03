
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { secureHeapUsed } from "crypto";
import { motion } from "framer-motion";


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

        <div>
            <HText>MORE THAN A GYM.</HText>
            <p>
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </div>

    </motion.div>
   </section>
  )
}

export default Benefits;