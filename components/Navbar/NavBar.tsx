"use client"
import Link from "next/link";
import BurgerMenu from "@/public/icons/burgermenu.svg"

import { audiowide } from "@/app/font";
import styles from "./NavBar.module.scss"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
        document.body.style.overflow = isVisible ? 'auto' : 'hidden';
    }


    
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
        <motion.div className={styles.burgerMenu} onClick={toggleMenu}><BurgerMenu /></motion.div>
        <AnimatePresence>
            {isVisible && (
                (
                    <motion.div className={styles.mobileMenu}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                    >
                        <div className={styles.closeButton} onClick={toggleMenu}>X</div>
                        <div className={styles.menuList}>
                            <div className={styles.menuItem}>SMMA</div>
                            <div className={styles.menuItem}>Web Design</div>
                            <div className={styles.menuItem}>Item 3</div>
                        </div>
                    </motion.div>
                )
            )}
        </AnimatePresence>
    </motion.div>
  )
}

export default NavBar