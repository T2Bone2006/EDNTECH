

import React from 'react'
import Deal from "./icons/deal.svg"
import Deliver from "./icons/deliver.svg"
import Improve from "./icons/improve.svg"
import Bulb from "./icons/lightbulb.svg"
import Monitor from "./icons/monitor.svg"
import Next from "./icons/next.svg" 
import styles from "./affordability.module.scss"

interface GridItemProps {
    svg: React.ReactNode;
    label?: string;
    next?: boolean;
    desc?: string;
}



const GridItem = ({ svg, label, next, desc }: GridItemProps) => {
    return(
        <div className={`${styles.gridItem} ${next ? styles.next : ''}`}>
            <div className={styles.gridItemIcon}>
                <div className={styles.svg}>
                    {svg}
                </div>
                <div className={styles.label}>
                    {label}
                </div>
            </div>
            <div className={styles.gridItemDesc}>
                {desc}
            </div>
        </div>
    )
}

const page = () => {
  return (
    <div className={styles.container}>
        <h1>Experience High-Value Digital Solutions with Subscription based Services</h1>
        <p> 
        In the crowded digital landscape, standing out is crucial. Our AI-enhanced copywriting services are designed to give your brand a distinctive voice that resonates with your audience. Our seasoned team of writers crafts compelling narratives, tailored to your brand&apos;s unique identity and values. Leveraging advanced AI technology, we ensure your content is optimized for maximum impact, empowering your brand and driving engagement.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Bulb/>} label="Understand" desc="I start by understanding your brand, your goals, and your target audience to create a strategic plan."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Deal/>} label="Payment" desc="Upon agreement of terms, I ensure a smooth and secure payment process."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Deliver/>} label="Service Delivery" desc="I deliver the agreed-upon services, ensuring they meet your expectations and adhere to the highest standards."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Monitor/>} label="Grow" desc="I monitor the performance and make necessary adjustments to ensure growth and achieve your business goals."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Improve/>} label="We Improve" desc="I continuously seek ways to improve and optimize the strategies and designs to ensure optimal results."/>
        </div>
    </div>
  )
}

export default page

// Title: Experience High-Value Digital Solutions That Respect Your Budget

// Description: Our digital solutions are designed to deliver exceptional value at an affordable price. We offer a comprehensive package of high-quality services, all included in one set price. This means you get access to all our premium services without having to worry about individual costs.

// What sets us apart is our payment structure. Instead of requiring a large upfront payment, we spread the cost over several months. This allows you to manage your budget effectively while still benefiting from our premium services.

// In addition to our core services, we highly recommend our Social Media Marketing (SMM) services. This isn’t just an add-on, but a crucial component of a comprehensive digital strategy. SMM can significantly enhance your online presence, driving more traffic to your site and potentially increasing sales. It’s an investment in the growth and success of your business. By integrating SMM into your strategy, you’re ensuring that your brand not only reaches but also resonates with your target audience, fostering brand loyalty and driving business growth.
// Title: Experience High-Value Digital Solutions with Our Pay Monthly Service

// Description: Affordability is at the heart of our digital solutions. We understand that budget is a key consideration for every business, and we’ve designed our services to deliver exceptional value at an affordable price. Our comprehensive package of high-quality services is offered as a pay monthly service. This includes not just the core services, but also ongoing maintenance, updates, and any extra labour that might be required.

// This unique payment structure allows you to manage your budget effectively while still benefiting from our premium services. Our services are not just affordable, they’re an investment in your business’s future. Every service we offer, from web development to copywriting, is aimed at driving your business growth and delivering a strong return on your investment.

// Remember, with our services, affordability doesn’t mean compromise on quality. You get access to premium services that respect your budget and contribute to your business’s success.
// Process:

// Understanding Your Needs: We start by understanding your specific needs. (Icon Idea: A lightbulb icon)
// Agreement on Terms: We agree on the terms of our service, ensuring it aligns with your budget. (Icon Idea: A handshake icon)
// Delivery of Services: We deliver the agreed-upon services, maintaining our commitment to quality and affordability. (Icon Idea: A gear icon)
// Performance Tracking: We track the performance of our services to ensure they’re delivering the expected value. (Icon Idea: A bar chart icon)
// Continuous Improvement: We continuously strive to improve our services, delivering more value for your investment. (Icon Idea: A cycle icon)