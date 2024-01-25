import Link from "next/link";
import styles from './OfferItem.module.scss'
import Arrow from "@/public/icons/arrow.svg"

interface OffersInterface {
    icon: React.ReactElement;
    title: string;
    desc: string;
    link: string;
}

const OfferItem = ({icon, title, desc, link}:OffersInterface) => {
    return(
        <Link className={styles.link} href={link}>
            <div className={styles.offerItem}>
                <div className={styles.offerInfo}>
                    <div className={styles.offerTitle}>
                        <div className={styles.offerIcon}>{icon}</div>
                        <div className={styles.offerHeader}>{title}</div>
                    </div>
                    <div className={styles.offerDesc}>
                        {desc}
                    </div>
                </div>
                <button className={styles.offerButton}><span className={styles.buttonText}>Learn More</span><Arrow /></button>
            </div>
        </Link>
    )
}

export default OfferItem