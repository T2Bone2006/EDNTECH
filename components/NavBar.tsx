'use client'

import React from 'react'
import Burger from "@/public/icons/burgermenu.svg"
import { motion } from 'framer-motion';

type Props = {}

const NavBar = (props: Props) => {
  return (
    
    <motion.div className="w-full bg-transparent h-12  pt-3 flex flex-row justify-between fixed top-0"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}
      >
      <div className="fixed top-0 rounded-full w-full h-[40px] -translate-y-[20px] bg-brand-dark-blue blur-[50px]" ></div>
        <motion.h1 className="logo font-audiowide text-white  text-[24px] pl-3 z-[2]"
          initial={{y: -100}}
          animate={{ y : 0 }}
          transition={{duration: 0.5}}
        >
          EDN TECH
        </motion.h1>
        <motion.button className='text-white text-base z-[2] pr-3 flex items-center justify-center md:hidden'
          initial={{y: -100}}
          animate={{ y : 0 }}
          transition={{duration: 0.5}}
        ><Burger/></motion.button>

    </motion.div>
  )
}

export default NavBar