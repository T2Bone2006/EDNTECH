import React from 'react'
import styles from "./Pricing.module.scss"
import pricingData from "./pricingData.json"

interface PricingItemProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PricingItem: React.FC<PricingItemProps> = ({ title, price, description, features }) => {
  return (
    <div id="pricingSection" className={styles.pricingItem}>
        <div className={styles.pricingUpper}>
            <h1 className={styles.pricingItemTitle}>{title}</h1>
            <h2 className={styles.pricingItemPrice}>{price}<span className={styles.priceDescriptor}> per month</span></h2>
            <p className={styles.pricingItemDescription}>{description}</p>
        </div>
      <ul className={styles.pricingItemFeatures}>
        {features.map((feature, index) => 
          <li key={index} className={styles.pricingItemFeature}>{feature}</li>
        )}
      </ul>
    </div>
  )
}

const Pricing = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Pricing & Plans</h1>
      <div className={styles.circleParent}>
        <div className={styles.backgroundCircle}></div>
      </div>
      <div className={styles.pricingMenu}>
        {pricingData.map((item, index) => 
            <PricingItem key={index} {...item} />
          )}
      </div>
      <button className={styles.button}>Get Started</button>
    </section>
  )
}

export default Pricing