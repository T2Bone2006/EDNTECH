import React from 'react'
import Bulb from "./icons/lightbulb.svg"
import Design from "./icons/design.svg"
import Code from "./icons/code.svg"
import Launch from "./icons/launch.svg"
import Bug from "./icons/bug.svg"
import Update from "./icons/update.svg"
import Next from "./icons/next.svg" 
import styles from "./webdevelopment.module.scss"

interface GridItemProps {
    svg: React.ReactNode;
    label?: string;
    next?: boolean;
}

const items = [
    { svg: <Next/>, next: true },
    { svg: <Bulb/>, label: 'Design' },
    { svg: <Design/>, label: 'Building' },
    { svg: <Code/>, label: 'Building' },
    { svg: <Launch/>, label: 'Building' },
    { svg: <Bug/>, label: 'Building' },
    { svg: <Update/>, label: 'Building' },
    // Add more items here...
];


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
        <h1>Transform Your Online Presence with Our Premier Web Development Services</h1>
        <p> 
            In the digital age, your website is often the first point of contact potential customers have with your business.
            Our top-tier web development services are designed to elevate your digital footprint,creating a lasting impression on your visitors.
            We specialize in crafting visually stunning and functionally seamless websites that not only meet but exceed your expectations.
            With our services, you can look forward to a website that is user-friendly, responsive, and tailored to your unique needs.
            Experience the difference of a professionally developed website and make your mark in the digital world.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Bulb/>} label="Understand"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Design/>} label="Design"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Code/>} label="Build"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Bug/>} label="Bug Fixing"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Launch/>} label="Launch"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Update/>} label="Maintenance"/>
        </div>
    </div>
  )
}

export default page


// Title: Transform Your Online Presence with Our Premier Web Development Services

// Description: In the digital age, your website is often the first point of contact potential customers have with your business. Our top-tier web development services are designed to elevate your digital footprint, creating a lasting impression on your visitors. We specialize in crafting visually stunning and functionally seamless websites that not only meet but exceed your expectations. With our services, you can look forward to a website that is user-friendly, responsive, and tailored to your unique needs. Experience the difference of a professionally developed website and make your mark in the digital world.