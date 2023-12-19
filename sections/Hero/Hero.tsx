import React from 'react'
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
        <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
                Powering Your Online Presence, Accelerate Your <span className={styles.glowText}>Business Growth.</span>
            </h1>
            <h1 className={styles.heroTitleSmall}>
                Your Ticket To <span className={styles.glowText}>Business Growth.</span>
            </h1>
            <p className={styles.heroDesc}>
                Crafting compelling websites and driving online success with SEO optimization and strategic social media management - your all-in-one solution for a standout digital presence.
            </p>
        </div>
        <div className={styles.pinkCircle}></div>
        <div className={styles.blueCircle}></div>
    </div>
  )
}

export default Hero