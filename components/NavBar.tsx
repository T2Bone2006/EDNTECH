import React from 'react'
import Burger from "@/public/icons/burgermenu.svg"
import { motion } from "framer-motion";

type Props = {}

const NavBar = (props: Props) => {
  return (
    
    <div className="w-full bg-transparent h-12  pt-3 flex flex-row justify-between"
      >
      <div className="fixed top-0 rounded-full w-full h-[40px] -translate-y-[20px] bg-brand-dark-blue blur-[50px]" ></div>
        <h1 className="logo font-audiowide text-white  text-[24px] pl-3 z-[2]">EDN TECH</h1>
        <h1 className='text-white text-base z-[2] pr-3 flex items-center justify-center'><Burger/></h1>

    </div>
  )
}

export default NavBar