

import React from 'react'
import Bulb from "./icons/lightbulb.svg"
import AI from "./icons/ai.svg"
import Checklist from "./icons/checklist.svg"
import Goal from "./icons/goal.svg"
import Strategy from "./icons/strategy.svg"
import Write from "./icons/write.svg"
import Next from "./icons/next.svg" 
import styles from "./copywriting.module.scss"

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
        <h1>Empower Your Brand with Our AI-Enhanced Copywriting Services</h1>
        <p> 
        In the crowded digital landscape, standing out is crucial. Our AI-enhanced copywriting services are designed to give your brand a distinctive voice that resonates with your audience. Our seasoned team of writers crafts compelling narratives, tailored to your brand&apos;s unique identity and values. Leveraging advanced AI technology, we ensure your content is optimized for maximum impact, empowering your brand and driving engagement.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Goal/>} label="Goal" desc="I initiate the process by establishing clear, measurable goals that align with your business objectives and audience needs."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Strategy/>} label="Strategy" desc="I devise a comprehensive content strategy, customized to your brand and audience, to convey your message effectively."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Write/>} label="Write" desc="I create captivating narratives, tailored to your brand's unique identity and values."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<AI/>} label="AI Powered" desc="Utilizing advanced AI technology, I optimize your content for maximum impact and engagement."/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Checklist/>} label="Complete" desc="Upon completion, I deliver top-notch, AI-enhanced content that strengthens your brand and resonates with your audience."/>
        </div>
    </div>
  )
}

export default page


// Title: Empower Your Brand with Our AI-Enhanced Copywriting Services

// Description: In the crowded digital landscape, standing out is crucial. Our AI-enhanced copywriting services are designed to give your brand a distinctive voice that resonates with your audience. Our seasoned team of writers crafts compelling narratives, tailored to your brand’s unique identity and values. Leveraging advanced AI technology, we ensure your content is optimized for maximum impact, empowering your brand and driving engagement.

// Process:

// Understanding Your Brand: We start by getting to know your brand, your goals, and your target audience. (Icon Idea: A lightbulb or a target icon)
// Content Strategy: We develop a comprehensive content strategy, including identifying key themes and messages. (Icon Idea: A chess piece or a roadmap icon)
// Copywriting: Our seasoned writers craft compelling narratives that resonate with your audience. (Icon Idea: A pencil or a typewriter icon)
// AI Enhancement: We leverage advanced AI technology to optimize your content for maximum impact. (Icon Idea: A gear or a robot icon)
// Review & Refinement: We review and refine the content to ensure it aligns with your brand and goals. (Icon Idea: A magnifying glass or a checklist icon)