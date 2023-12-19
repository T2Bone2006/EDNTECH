"use client"
import Link from "next/link";
import BurgerMenu from "@/public/icons/burgermenu.svg"

import { audiowide } from "@/app/font";
import styles from "./NavBar.module.scss"
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.div className={styles.navBar}
    >
        <div className={styles.shadow}></div>
        <motion.h1 className={`${styles.logo} ${audiowide.className}`}>EDNTECH</motion.h1>
        <motion.div className={styles.links}>
            <Link className={styles.links} href={"/"}>Web Design</Link>
            <Link className={styles.links} href={"/"}>SMMA</Link>
            <Link className={styles.links} href={"/"}>Testimonials</Link>
            <Link className={`${styles.links} ${styles.getStarted}`} href={"/"}>Get started</Link>
        </motion.div>
        <motion.div className={styles.burgerMenu}></motion.div>
    </motion.div>
  )
}

export default NavBar