import styles from "./Offers.module.scss";
import OfferTop from "@/public/svgs/Vectoroffertop.svg";

const Offers = () => {
  return (
    <div className={styles.offerSection}>
        <OfferTop className={styles.offerTop}/>
        <div className={styles.offers}>
            <div className={styles.headingDiv}>
                <h1 className={styles.heading}>What we Offer</h1>
            </div>
        </div>
    </div>
  )
}

export default Offers