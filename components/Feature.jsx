import styles from "../styles/Feature.module.css";
import Image from "next/image";
import { useState } from "react";

const Feature = () => {
    const [index, setIndex] = useState(0);
    const images= [
        "/Images/featureOne.jpg",
        "/Images/featureTwo.jpg",
        "/Images/featureThree.jpg",
        "/Images/featureFour.jpg",
        "/Images/featureFive.jpg",
    ];

    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0? index-1 : 4);
        };
        if(direction === "r"){
            setIndex(index !== 4? index+1 : 0);
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/Images/arrowl.png" alt="arrow-left" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i)=>(
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="feature-pictures" layout="fill" objectFit="contain"/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
                <Image src="/Images/arrowr.png" alt="arrow-right" layout="fill" objectFit="contain"/>
            </div>
        </div>
    )
}

export default Feature
