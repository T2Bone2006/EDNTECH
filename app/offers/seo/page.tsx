

import React from 'react'
import Find from "./icons/find.svg"
import Goal from "./icons/goal.svg"
import Like from "./icons/like.svg"
import Monitor from "./icons/monitor.svg"
import Optimise from "./icons/optimise.svg"
import Next from "./icons/next.svg" 
import styles from "./seo.module.scss"

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
        <h1>Boost Your Online Visibility with Our Expert SEO Services</h1>
        <p> 
        In today&apos;s digital marketplace, visibility is key. Our expert Search Engine Optimisation services are designed to supercharge your online visibility, securing top search engine rankings for your website. We fine-tune your digital presence, optimizing your website&apos;s structure, content, and metadata to align with search engine algorithms. This drives a surge in organic traffic, expanding your websit&apos;es reach and influence, and ultimately leading to increased conversions and business growth.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Find/>} label="Audit"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Goal/>} label="Set Targets"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Optimise/>} label="Optimise"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Like/>} label="Reputation"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Monitor/>} label="Monitor"/>
        </div>
    </div>
  )
}

export default page

// Title: Boost Your Online Visibility with Our Expert SEO Services

// Description: In today’s digital marketplace, visibility is key. Our expert Search Engine Optimisation services are designed to supercharge your online visibility, securing top search engine rankings for your website. We fine-tune your digital presence, optimizing your website’s structure, content, and metadata to align with search engine algorithms. This drives a surge in organic traffic, expanding your website’s reach and influence, and ultimately leading to increased conversions and business growth.

// Process:

// Website Audit: We start by conducting a comprehensive audit of your website to identify areas for improvement. (Icon Idea: A magnifying glass or a checklist icon)
// Keyword Research: We perform in-depth keyword research to understand what your target audience is searching for. (Icon Idea: A target or a search icon)
// On-Page SEO: We optimize your website’s content and metadata to align with identified keywords. (Icon Idea: A pencil or a gear icon)
// Off-Page SEO: We build high-quality backlinks and manage your online reputation to boost your website’s authority. (Icon Idea: A link or a thumbs-up icon)
// Monitoring & Reporting: We monitor your website’s performance and provide regular reports on key SEO metrics. (Icon Idea: A bar chart or a report icon)