import styles from "./Offers.module.scss";
import OfferTop from "@/public/svgs/Vectoroffertop.svg";
import OfferBottom from "@/public/svgs/Vectorofferbottom.svg";

import Price from "@/public/icons/price.svg"
import SEO from "@/public/icons/seo.svg"
import SMMA from "@/public/icons/smma.svg"
import UI from "@/public/icons/ui.svg"
import WebDev from "@/public/icons/webdev.svg"
import CopyWrite from "@/public/icons/write.svg"


interface OffersInterface {
    icon: React.ReactElement;
    title: string;
    desc: string;
}

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
                <OfferItem icon={<WebDev/>} title="Web Development" desc="Enhance your online presence with our responsive web development services. We specialize in creating visually stunning and seamlessly functional websites that leave a lasting impression."/>
                <OfferItem icon={<SMMA/>} title="Social Media Marketing" desc="Maximize your brand's impact with our targeted social media marketing, including strategic paid ad campaigns. We elevate your online presence to captivate and engage the right audience effectively."/>
                <OfferItem icon={<SEO/>} title="SEO" desc="Boost your online visibility with our expert SEO services. We optimize your digital presence to ensure top rankings, driving organic traffic and increasing your website's reach and impact."/>
                <OfferItem icon={<CopyWrite/>} title="Copywriting" desc="Elevate your brand with our AI-powered copywriting services. Our expert team crafts compelling content, giving your brand a unique voice in the digital landscape."/>
                <OfferItem icon={<UI/>} title="UI Design" desc="Revolutionize user experiences with our cutting-edge UI design. Our expert team combines creativity and functionality to ensure visually stunning and intuitive interfaces that leave a lasting impact."/>
                <OfferItem icon={<Price/>} title="Affordabilty" desc="Prioritize your budget without compromising quality. Our services are designed with affordability in mind, offering exceptional value for businesses seeking high-quality solutions without breaking the bank."/>
            </div>
        </div>
        <OfferBottom className={styles.offerBottom}/>
    </div>
  )
}

export default Offers