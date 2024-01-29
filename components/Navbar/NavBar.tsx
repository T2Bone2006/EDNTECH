"use client"
import Link from "next/link";
import BurgerMenu from "@/public/icons/burgermenu.svg"

import { audiowide } from "@/app/font";
import styles from "./NavBar.module.scss"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Close from "@/public/icons/XCircle.svg"

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
        <motion.h1 className={`${styles.logo} ${audiowide.className}`}><Link className={styles.link} href="/">EDNTECH</Link></motion.h1>
        <motion.div className={styles.links}>
            <Link className={styles.links} href={"/offers/webdevelopment"}>Web Design</Link>
            <Link className={styles.links} href={"/offers/smma"}>SMMA</Link>
            <Link className={styles.links} href={"/"}>Testimonials</Link>
            <Link className={`${styles.links} ${styles.getStarted}`} href={"/contact"}>Get started</Link>
        </motion.div>
        <motion.div className={styles.burgerMenu} onClick={toggleMenu}><BurgerMenu /></motion.div>
        <AnimatePresence>
            {isVisible && (
                (
                    <motion.div className={styles.mobileMenu}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.2}}
                    >
                        <div className={styles.closeButton}><Close className={styles.close}  onClick={toggleMenu}/></div>
                        <div className={styles.menuList}>
                            <Link href="/" className={styles.menuItem}>Home</Link>
                            <Link href="/offers/smma" className={styles.menuItem}>SMMA</Link>
                            <Link href="/offers/webdevelopment" className={styles.menuItem}>Web Design</Link>
                            <Link href="/contact" className={styles.menuItem}>Get Started</Link>
                        </div>
                    </motion.div>
                )
            )}
        </AnimatePresence>
    </motion.div>
  )
}

export default NavBar