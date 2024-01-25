

import React from 'react'
import Analyse from "./icons/analyse.svg"
import Deal from "./icons/deal.svg"
import Design from "./icons/design.svg"
import Goal from "./icons/goal.svg"
import Monitor from "./icons/monitor.svg"
import Strategy from "./icons/strategy.svg"
import Next from "./icons/next.svg" 
import styles from "./smma.module.scss"

interface GridItemProps {
    svg: React.ReactNode;
    label?: string;
    next?: boolean;
}



const GridItem = ({ svg, label, next }: GridItemProps) => {
    return(
        <div className={`${styles.gridItem} ${next ? styles.next : ''}`}>
            <div className={styles.svg}>
                {svg}
            </div>
            <div className={styles.label}>
                {label}
            </div>
        </div>
    )
}

const page = () => {
  return (
    <div className={styles.container}>
        <h1>Boost Your Brand&apos;s Impact with Our Strategic Social Media Marketing</h1>
        <p> 
        In the digital landscape, social media is a powerful platform to amplify your brand&apos;s resonance and reach. Our precision-targeted social media marketing strategies are designed to do just that. We meticulously plan paid ad campaigns, curate engaging content, and optimize your social media profiles to enhance your online persona. Our goal is to captivate and engage your target audience effectively, fostering brand loyalty and driving business growth.
        <br/><br/>
        Our payment structure is simple and transparent. You pay us for our service, which is equal to the amount you plan to spend on ads. This investment is not an expense but an investment in your brand&apos;s growth. As we implement our precision-targeted social media marketing strategies, including meticulously planned paid ad campaigns, you can expect to see a return on this investment as it generates leads and drives business growth. The more your brand resonates with the audience, the higher the chances of converting them into loyal customers.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Goal/>} label="Set Goal"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Deal/>} label="Deal"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Strategy/>} label="Strategy"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Design/>} label="Content"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Analyse/>} label="Analysis"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Monitor/>} label="Growth"/>
        </div>
    </div>
  )
}

export default page

// Understanding Your Brand: We start by getting to know your brand, your goals, and your target audience. (Icon Idea: A lightbulb or a target icon)
// Payment Agreement: We agree on the payment for our service, which equals your ad spend. (Icon Idea: A handshake or a dollar sign icon)
// Strategy Development: We develop a comprehensive social media marketing strategy, including content planning, scheduling, and paid ad campaigns. (Icon Idea: A chess piece or a roadmap icon)
// Content Creation: We create engaging and relevant content that resonates with your audience. (Icon Idea: A pencil or a paintbrush icon)
// Monitoring & Optimization: We monitor the performance of our strategies, making necessary adjustments for optimal results. (Icon Idea: A magnifying glass or a gear icon)
// Reporting & ROI: We provide regular reports on key performance indicators and the return on your investment to keep you informed of our progress. (Icon Idea: A bar chart or a report icon)
