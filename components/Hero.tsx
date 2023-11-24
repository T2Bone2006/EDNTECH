'use client'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div className="">
        <motion.div className="fixed -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-brand-light-blue from-25% to-brand-pink to-85% mt-10 blur-sm"
        initial={{x: -100, rotate: -90}}
        animate={{x: 0, rotate: 0}}
        transition={{duration: 1}}
        ></motion.div>
        <motion.div className="">
            <motion.h1 className="text-5xl text-white font-medium">Your Ticket to <span className="bg-gradient-to-r from-brand-light-blue to-brand-purple text-transparent bg-clip-text text-5xl font-medium">Business Growth</span></motion.h1>
        </motion.div>
        <motion.div className="fixed bottom-0 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-brand-light-blue from-25% to-brand-blue to-85% mt-10 blur-sm"
            initial={{x: 100, rotate: 90}}
            animate={{x: 0, rotate: 0}}
            transition={{duration: 1}}
        >
        </motion.div>

    </motion.div>
  )
}

export default Hero