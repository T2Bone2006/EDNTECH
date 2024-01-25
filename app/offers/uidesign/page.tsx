
import React from 'react'
import Deliver from "./icons/deliver.svg"
import Design from "./icons/design.svg"
import Feedback from "./icons/feedback.svg"
import Itterate from "./icons/itterate.svg"
import Bulb from "./icons/lightbulb.svg"
import Wireframe from "./icons/wireframe.svg"
import Next from "./icons/next.svg" 
import styles from "./uidesign.module.scss"

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
        <h1>Elevate Your User Experience with Our Innovative UI Design Services</h1>
        <p> 
        User Interface design is more than just aesthetics; it&apos;s about creating a seamless and enjoyable user experience. Our innovative UI design services are aimed at transforming your user experience. We create intuitive and engaging interfaces that are not only visually stunning but also user-friendly. Our designs are focused on driving user satisfaction and loyalty, ensuring that every interaction your users have with your product is a positive one.
        </p>
        <h1>The Process</h1>
        <div className={styles.grid}> 
            <GridItem svg={<Bulb/>} label="Inspiration"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Wireframe/>} label="Wireframe"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Design/>} label="Design"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Feedback/>} label="Feedback"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Itterate/>} label="Itterate"/>
            <GridItem svg={<Next/>}next={true}/>
            <GridItem svg={<Deliver/>} label="Deliver"/>
        </div>
    </div>
  )
}

export default page
