import styles from "./contact.module.scss"

const page = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.text}>
        Welcome to the first step of your journey towards success! I'm thrilled that you're considering my services. Whether you're interested in the Essential, Deluxe, or Premium package, I'm here to provide the support and guidance you need.
      </p>
      
      <p className={styles.text}>
        I understand that every business has unique needs and goals. That's why I offer a range of packages to suit different requirements. From the Essential package for those just starting out, to the Deluxe and Premium packages for more established businesses seeking to level up their online presence, there's something for everyone.
      </p>
      
      <h2 className={styles.subTitle}>Email Structure</h2>
      <p className={styles.text}>
        When reaching out, please include the following details in your email:
        <ul>
            <li>Your Name</li>
            <li>Your Business Name</li>
            <li>Your Contact Number</li>
            <li>The package you're interested in (Essential, Deluxe, or Premium)</li>
            <li>If you're interested in the SMMA package, which is highly recommended as an investment for more customers through targeted ads.</li>
        </ul>
      </p>
      
      <h2 className={styles.subTitle}>SMMA Package</h2>
      <p className={styles.text}>
        I highly recommend the SMMA package. Although it comes at an extra cost, consider it as an investment. The returns come in the form of increased customer engagement and clients through targeted ads. It's not just about spending money, but making money in the long run.
      </p>
      
      <h2 className={styles.subTitle}>Ready to Take the Next Step?</h2>
      <p className={styles.text}>
        If you're ready to take the next step, don't hesitate to reach out. Please email me at <span className={styles.title}>edntech@mail.com</span> or call me at <span className={styles.title}>07577 111 848</span>. I can't wait to start this journey with you and help your business reach new heights.
      </p>
    </div>
  )
}

export default page
