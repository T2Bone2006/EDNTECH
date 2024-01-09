"use client";
import styles from "./Offers.module.scss";
import OfferTop from "@/public/svgs/Vectoroffertop.svg";
import OfferBottom from "@/public/svgs/Vectorofferbottom.svg";
import OffersData from "./offers.json";

import Price from "@/public/icons/price.svg"
import SEO from "@/public/icons/seo.svg"
import SMMA from "@/public/icons/smma.svg"
import UI from "@/public/icons/ui.svg"
import WebDev from "@/public/icons/webdev.svg"
import CopyWrite from "@/public/icons/write.svg"
import Arrow from "@/public/icons/arrow.svg"


interface OffersInterface {
    icon: React.ReactElement;
    title: string;
    desc: string;
}

const iconMapping : { [key: string]: React.ReactElement } = {
    Price: <Price />,
    SEO: <SEO />,
    SMMA: <SMMA />,
    UI: <UI />,
    WebDev: <WebDev />,
    CopyWrite: <CopyWrite />,
    Arrow: <Arrow />
};

const OfferItem = ({icon, title, desc}:OffersInterface) => {
    return(
        <div className={styles.offerItem}>
            <div className={styles.offerIcon}>
                {icon}
            </div>
            <div className={styles.offerText}>
                <div className={styles.offerTitle}>
                    {title}
                </div>
                <div className={styles.offerDesc}>
                    {desc}
                </div>
            </div>
            <button className={styles.offerButton}><span className={styles.buttonText}>Learn More</span><Arrow /></button>
        </div>
    )
}

const Offers = () => {
  return (
    <div className={styles.offerSection}>
        <OfferTop className={styles.offerTop}/>
        <div className={styles.offers}>
            <h1 className={styles.heading}>What we Offer</h1>
            <div className={styles.offerMenu}>
            {OffersData.map((offer) => (
                    <OfferItem icon={iconMapping[offer.icon]} title={offer.title} desc={offer.desc} />
                ))}
            </div>
        </div>
        <OfferBottom className={styles.offerBottom}/>
    </div>
  )
}

export default Offers