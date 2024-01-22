import styles from './OfferItem.module.scss'
import Arrow from "@/public/icons/arrow.svg"

interface OffersInterface {
    icon: React.ReactElement;
    title: string;
    desc: string;
}

const OfferItem = ({icon, title, desc}:OffersInterface) => {
    return(
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
    )
}

export default OfferItem