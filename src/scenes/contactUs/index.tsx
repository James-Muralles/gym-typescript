import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ConcactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => voide
}

const ContactUs = ({setSelectedPage}: Props) => {


    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors } 
    } = useForm();

    const onSubmit = async (e:any) =>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }


  return (
    <section id="contactus" className="mx-auto w-3/5 pt-24 pb-32">
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{                    
                hidden:{opacity: 0, x:-50},
                visible:{opacity: 1, x:0}
                }}
                >
                    <HText>
                        <span className="text-primary--500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                    Egestas congue quisque egestas diam in arcu. Proin fermentum leo vel orci porta non pulvinar neque. Ultricies mi eget mauris pharetra et. Sagittis vitae et leo duis ut diam quam nulla. Varius sit amet mattis vulputate enim. Scelerisque in dictum non consectetur a. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor consequat id porta nibh venenatis cras sed felis. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.
                    </p>

            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{                    
                    hidden:{opacity: 0, y:50},
                    visible:{opacity: 1, y:0}
                        }}
                >
                    <form action="https://formsubmit.co/997af9cee26843f353a9e660d8df317a"
                    target="_blank"
                    onSubmit={onSubmit}
                    method="POST">

                        <input 
                        type="text" 
                        className={inputStyles}
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength:100,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}

                            </p>
                        )}
                        <input 
                        type="text" 
                        className={inputStyles}
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}

                            </p>
                        )}
                        <textarea  
                        rows={4}
                        cols={50}
                        className={inputStyles}
                        placeholder="MESSAGE"
                        {...register("message", {
                            required: true,
                            maxLength:2000,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters."}

                            </p>
                        )}
                        <button type="submit"
                        className="mt-5 bg-secondary-500 rounded-lg px-20 py-3 transition duration-500 hover:text-white ">
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{                    
                    hidden:{opacity: 0, y:50},
                    visible:{opacity: 1, y:0}
                        }}>
                            <div className="md:before:content-evolvetext w-full absolute before:-bottom-20 beofre:-right-10 before:z-[-1]">
                                <img className="w-full" src={ConcactUsPageGraphic} alt="contact-us-page-graphic" />
                            </div>

                </motion.div>
            </div>


            </motion.div> 
    </section>
  )
}

export default ContactUs