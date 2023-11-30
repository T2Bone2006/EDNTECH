'use client'
import { motion } from "framer-motion"

const Hero = () => {
  return (
        
        
        <motion.div className="h-screen flex justify-center items-center relative">
            <motion.div className="absolute top-[48px] -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-brand-light-blue from-25% to-brand-pink to-85% mt-10 blur-md"
                initial={{x: -100, rotate: -90}}
                animate={{x: 0, rotate: 0}}
                transition={{duration: 1}}
            > 
            </motion.div>
            <motion.div className="text-center flex justify-center">
                <motion.h1 className="text-6xl text-white font-medium z-10 w-3/4" >Your Ticket<br/> to <br/><span className="bg-gradient-to-r from-brand-light-blue to-brand-purple text-transparent bg-clip-text font-medium">Business Growth</span></motion.h1>
            </motion.div>
            <motion.div className="absolute bottom-0 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-brand-light-blue from-25% to-brand-blue to-85% mt-10 blur-md"
                initial={{x: 100, rotate: 90}}
                animate={{x: 0, rotate: 0}}
                transition={{duration: 1}}
            >
            </motion.div>
        </motion.div>
  )
}

export default Hero